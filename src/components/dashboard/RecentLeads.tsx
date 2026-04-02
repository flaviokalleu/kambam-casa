import { Badge } from "@/components/ui/badge";

const leads = [
  { name: "Ana Silva", email: "ana@email.com", origin: "Site", status: "Novo", time: "2min" },
  { name: "Carlos Mendes", email: "carlos@email.com", origin: "WhatsApp", status: "Em Contato", time: "15min" },
  { name: "Juliana Costa", email: "juliana@email.com", origin: "Indicação", status: "Qualificado", time: "1h" },
  { name: "Roberto Alves", email: "roberto@email.com", origin: "Portal", status: "Visita", time: "3h" },
  { name: "Mariana Souza", email: "mariana@email.com", origin: "Site", status: "Novo", time: "5h" },
];

const statusColors: Record<string, string> = {
  "Novo": "bg-primary/10 text-primary border-primary/20",
  "Em Contato": "bg-warning/10 text-warning border-warning/20",
  "Qualificado": "bg-success/10 text-success border-success/20",
  "Visita": "bg-accent text-accent-foreground border-border",
};

export function RecentLeads() {
  return (
    <div className="bg-card rounded-xl border border-border p-4 sm:p-6 animate-fade-up hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Leads Recentes</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">Últimos leads capturados</p>
        </div>
        <button className="text-xs sm:text-sm text-primary font-medium hover:underline">Ver todos</button>
      </div>
      <div className="space-y-2 sm:space-y-3">
        {leads.map((lead) => (
          <div key={lead.email} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xs sm:text-sm font-semibold text-primary">{lead.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-foreground truncate">{lead.name}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">{lead.origin} · {lead.time} atrás</p>
            </div>
            <Badge variant="outline" className={`text-[10px] sm:text-xs ${statusColors[lead.status] || ""}`}>{lead.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
