import { Plus, UserPlus, Building2, FileText, Calendar, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const actions = [
  { icon: UserPlus, label: "Novo Lead", path: "/leads", color: "text-primary", bg: "bg-primary/10 hover:bg-primary/15" },
  { icon: Building2, label: "Novo Imóvel", path: "/imoveis", color: "text-accent", bg: "bg-accent/10 hover:bg-accent/15" },
  { icon: Calendar, label: "Agendar Visita", path: "/agenda", color: "text-success", bg: "bg-success/10 hover:bg-success/15" },
  { icon: FileText, label: "Novo Contrato", path: "/documentos", color: "text-chart-4", bg: "bg-chart-4/10 hover:bg-chart-4/15" },
  { icon: Phone, label: "Contato Rápido", path: "/leads", color: "text-chart-5", bg: "bg-chart-5/10 hover:bg-chart-5/15" },
];

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="glass-card rounded-xl p-4 sm:p-5 animate-fade-up">
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={() => navigate(action.path)}
            className={cn(
              "flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl transition-all duration-200 flex-shrink-0",
              "border border-border hover:border-primary/20",
              action.bg
            )}
          >
            <action.icon className={cn("w-4 h-4", action.color)} />
            <span className="text-xs font-medium text-foreground whitespace-nowrap">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
