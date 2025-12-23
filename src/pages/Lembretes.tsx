import { useState } from "react";
import {
  Bell,
  Plus,
  Calendar,
  Home,
  Droplets,
  Zap,
  Wifi,
  CreditCard,
  Check,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

interface Reminder {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  type: "aluguel" | "agua" | "luz" | "internet" | "parcela";
  amount: string;
  status: "pending" | "due_soon" | "overdue" | "paid";
}

const mockReminders: Reminder[] = [
  {
    id: "1",
    title: "Aluguel - Apt 304",
    description: "Carlos Mendes",
    dueDate: "25 Dez 2024",
    type: "aluguel",
    amount: "R$ 2.500,00",
    status: "due_soon",
  },
  {
    id: "2",
    title: "Conta de Luz",
    description: "Ed. Sunset - Área Comum",
    dueDate: "28 Dez 2024",
    type: "luz",
    amount: "R$ 850,00",
    status: "pending",
  },
  {
    id: "3",
    title: "Internet Escritório",
    description: "Plano Empresarial",
    dueDate: "20 Dez 2024",
    type: "internet",
    amount: "R$ 299,00",
    status: "overdue",
  },
  {
    id: "4",
    title: "Parcela TDS",
    description: "Investidor: Ana Costa",
    dueDate: "30 Dez 2024",
    type: "parcela",
    amount: "R$ 15.000,00",
    status: "pending",
  },
  {
    id: "5",
    title: "Água - Cond. Verde",
    description: "Área comum",
    dueDate: "22 Dez 2024",
    type: "agua",
    amount: "R$ 420,00",
    status: "paid",
  },
];

const typeIcons = {
  aluguel: Home,
  agua: Droplets,
  luz: Zap,
  internet: Wifi,
  parcela: CreditCard,
};

const typeColors = {
  aluguel: "bg-primary/10 text-primary",
  agua: "bg-blue-500/10 text-blue-500",
  luz: "bg-yellow-500/10 text-yellow-500",
  internet: "bg-purple-500/10 text-purple-500",
  parcela: "bg-secondary/10 text-secondary",
};

const statusStyles = {
  pending: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    icon: Clock,
    label: "Pendente",
  },
  due_soon: {
    bg: "bg-warning/10",
    text: "text-warning",
    icon: AlertTriangle,
    label: "Vence em breve",
  },
  overdue: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    icon: AlertTriangle,
    label: "Vencido",
  },
  paid: {
    bg: "bg-success/10",
    text: "text-success",
    icon: Check,
    label: "Pago",
  },
};

const Lembretes = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredReminders =
    filter === "all"
      ? mockReminders
      : mockReminders.filter((r) => r.status === filter);

  const counts = {
    all: mockReminders.length,
    pending: mockReminders.filter((r) => r.status === "pending").length,
    due_soon: mockReminders.filter((r) => r.status === "due_soon").length,
    overdue: mockReminders.filter((r) => r.status === "overdue").length,
    paid: mockReminders.filter((r) => r.status === "paid").length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="pl-64 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Lembretes</h1>
              <p className="text-sm text-muted-foreground">
                Vencimentos e cobranças
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" />
              Novo Lembrete
            </button>
          </div>
        </header>

        <div className="p-8">
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mb-8">
            {[
              { id: "all", label: "Todos" },
              { id: "due_soon", label: "Vence em breve" },
              { id: "overdue", label: "Vencidos" },
              { id: "pending", label: "Pendentes" },
              { id: "paid", label: "Pagos" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  filter === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {tab.label}
                <span className="ml-2 text-xs opacity-70">
                  ({counts[tab.id as keyof typeof counts]})
                </span>
              </button>
            ))}
          </div>

          {/* Reminders Grid */}
          <div className="grid grid-cols-2 gap-6">
            {filteredReminders.map((reminder) => {
              const Icon = typeIcons[reminder.type];
              const status = statusStyles[reminder.status];
              const StatusIcon = status.icon;

              return (
                <div
                  key={reminder.id}
                  className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center",
                          typeColors[reminder.type]
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {reminder.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {reminder.description}
                        </p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium",
                        status.bg,
                        status.text
                      )}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {status.label}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{reminder.dueDate}</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">
                      {reminder.amount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lembretes;
