import { useState } from "react";
import {
  FileText,
  Plus,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Download,
  Eye,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

interface Laudo {
  id: string;
  title: string;
  property: string;
  type: "avaliacao" | "vistoria" | "tecnico" | "ambiental";
  issueDate: string;
  expiryDate: string;
  status: "valid" | "expiring" | "expired";
  responsible: string;
}

const mockLaudos: Laudo[] = [
  {
    id: "1",
    title: "Laudo de Avaliação",
    property: "Apt 304 - Ed. Crystal",
    type: "avaliacao",
    issueDate: "15 Jun 2024",
    expiryDate: "15 Jun 2025",
    status: "valid",
    responsible: "Eng. Paulo Silva",
  },
  {
    id: "2",
    title: "Vistoria Técnica",
    property: "Casa 45 - Cond. Primavera",
    type: "vistoria",
    issueDate: "01 Jan 2024",
    expiryDate: "01 Jan 2025",
    status: "expiring",
    responsible: "Arq. Maria Santos",
  },
  {
    id: "3",
    title: "Laudo Técnico Estrutural",
    property: "Loja 02 - Centro",
    type: "tecnico",
    issueDate: "10 Mar 2023",
    expiryDate: "10 Mar 2024",
    status: "expired",
    responsible: "Eng. Carlos Oliveira",
  },
  {
    id: "4",
    title: "Laudo Ambiental",
    property: "Terreno Lote 15",
    type: "ambiental",
    issueDate: "20 Set 2024",
    expiryDate: "20 Set 2025",
    status: "valid",
    responsible: "Bio. Ana Lima",
  },
  {
    id: "5",
    title: "Laudo de Avaliação",
    property: "Sala Comercial 42",
    type: "avaliacao",
    issueDate: "05 Dez 2024",
    expiryDate: "05 Dez 2025",
    status: "valid",
    responsible: "Eng. Roberto Costa",
  },
];

const typeLabels = {
  avaliacao: "Avaliação",
  vistoria: "Vistoria",
  tecnico: "Técnico",
  ambiental: "Ambiental",
};

const statusStyles = {
  valid: {
    bg: "bg-success/10",
    text: "text-success",
    icon: CheckCircle2,
    label: "Válido",
  },
  expiring: {
    bg: "bg-warning/10",
    text: "text-warning",
    icon: Clock,
    label: "Vence em breve",
  },
  expired: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    icon: AlertTriangle,
    label: "Vencido",
  },
};

const Laudos = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredLaudos =
    filter === "all"
      ? mockLaudos
      : mockLaudos.filter((l) => l.status === filter);

  const counts = {
    all: mockLaudos.length,
    valid: mockLaudos.filter((l) => l.status === "valid").length,
    expiring: mockLaudos.filter((l) => l.status === "expiring").length,
    expired: mockLaudos.filter((l) => l.status === "expired").length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="pl-64 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Laudos</h1>
              <p className="text-sm text-muted-foreground">
                Controle de vencimentos de laudos técnicos
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" />
              Novo Laudo
            </button>
          </div>
        </header>

        <div className="p-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { id: "all", label: "Total", count: counts.all, color: "bg-secondary/10 text-secondary" },
              { id: "valid", label: "Válidos", count: counts.valid, color: "bg-success/10 text-success" },
              { id: "expiring", label: "Vence em breve", count: counts.expiring, color: "bg-warning/10 text-warning" },
              { id: "expired", label: "Vencidos", count: counts.expired, color: "bg-destructive/10 text-destructive" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={cn(
                  "p-4 rounded-xl border transition-all",
                  filter === item.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/50"
                )}
              >
                <div className={cn("text-3xl font-bold mb-1", item.color.split(" ")[1])}>
                  {item.count}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </button>
            ))}
          </div>

          {/* Laudos Table */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                    Laudo
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                    Imóvel
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                    Tipo
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                    Emissão
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                    Vencimento
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredLaudos.map((laudo) => {
                  const status = statusStyles[laudo.status];
                  const StatusIcon = status.icon;

                  return (
                    <tr
                      key={laudo.id}
                      className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-secondary" />
                          </div>
                          <div>
                            <span className="font-medium text-foreground">
                              {laudo.title}
                            </span>
                            <p className="text-sm text-muted-foreground">
                              {laudo.responsible}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-foreground">
                        {laudo.property}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                          {typeLabels[laudo.type]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {laudo.issueDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-foreground font-medium">
                        {laudo.expiryDate}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium",
                            status.bg,
                            status.text
                          )}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                            <Eye className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                            <Download className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Laudos;
