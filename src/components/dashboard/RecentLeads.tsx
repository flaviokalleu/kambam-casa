import { Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const leads = [
  { name: "Roberto Martins", interest: "Apt. 3Q Copacabana", source: "Site", time: "5 min", status: "Novo", channel: "whatsapp" },
  { name: "Fernanda Oliveira", interest: "Casa Barra da Tijuca", source: "WhatsApp", time: "22 min", status: "Em contato", channel: "phone" },
  { name: "Lucas Almeida", interest: "Cobertura Leblon", source: "Indicação", time: "1h", status: "Qualificado", channel: "email" },
  { name: "Patricia Santos", interest: "Studio Centro", source: "Portal", time: "2h", status: "Novo", channel: "whatsapp" },
  { name: "Marcos Silva", interest: "Terreno Recreio", source: "Site", time: "3h", status: "Visita", channel: "phone" },
];

const statusConfig: Record<string, string> = {
  "Novo": "bg-primary/15 text-primary",
  "Em contato": "bg-warning/15 text-warning",
  "Qualificado": "bg-success/15 text-success",
  "Visita": "bg-accent/15 text-accent",
};

const channelIcons: Record<string, React.FC<{ className?: string }>> = {
  whatsapp: MessageCircle,
  phone: Phone,
  email: Mail,
};

export function RecentLeads() {
  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 animate-fade-up glass-card-hover transition-all duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Leads Recentes</h3>
          <p className="text-xs text-muted-foreground">Últimas entradas</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-semibold text-primary">5 novos</span>
        </div>
      </div>
      <div className="space-y-2">
        {leads.map((lead) => {
          const ChannelIcon = channelIcons[lead.channel];
          return (
            <div key={lead.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <span className="text-xs font-bold text-primary">{lead.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-xs sm:text-sm font-medium text-foreground truncate">{lead.name}</p>
                  {ChannelIcon && <ChannelIcon className="w-3 h-3 text-muted-foreground flex-shrink-0" />}
                </div>
                <p className="text-[10px] text-muted-foreground truncate">{lead.interest}</p>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className={cn("text-[9px] px-2 py-0.5 rounded-full font-medium", statusConfig[lead.status])}>
                  {lead.status}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Clock className="w-2.5 h-2.5" />{lead.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
