import { MapPin, Clock, User, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const visits = [
  { client: "Roberto Martins", property: "Apt. 3Q Copacabana", time: "14:00", date: "Hoje", address: "Rua Barata Ribeiro, 200", agent: "Ana Silva", status: "confirmed" },
  { client: "Fernanda Oliveira", property: "Casa Barra", time: "16:30", date: "Hoje", address: "Av. das Américas, 4200", agent: "Carlos Souza", status: "confirmed" },
  { client: "Lucas Almeida", property: "Cobertura Leblon", time: "10:00", date: "Amanhã", address: "Av. Ataulfo de Paiva, 135", agent: "Marina Costa", status: "pending" },
  { client: "Patricia Santos", property: "Studio Centro", time: "15:00", date: "Amanhã", address: "Rua Uruguaiana, 39", agent: "Pedro Lima", status: "confirmed" },
];

export function UpcomingVisits() {
  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 animate-fade-up glass-card-hover transition-all duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Próximas Visitas</h3>
          <p className="text-xs text-muted-foreground">{visits.length} agendadas</p>
        </div>
        <Calendar className="w-5 h-5 text-primary" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visits.map((visit, idx) => (
          <div key={idx} className="p-3 rounded-xl border border-border hover:border-primary/20 transition-all duration-200 cursor-pointer group bg-secondary/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  visit.status === "confirmed" ? "bg-success" : "bg-warning animate-pulse"
                )} />
                <span className={cn(
                  "text-[10px] font-semibold uppercase tracking-wider",
                  visit.date === "Hoje" ? "text-accent" : "text-muted-foreground"
                )}>{visit.date}</span>
              </div>
              <span className="text-xs font-bold text-foreground flex items-center gap-1">
                <Clock className="w-3 h-3 text-muted-foreground" />{visit.time}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-foreground truncate">{visit.property}</p>
            <div className="flex items-center gap-1 mt-1 text-[10px] text-muted-foreground">
              <User className="w-3 h-3" />
              <span className="truncate">{visit.client}</span>
              <span className="mx-1">·</span>
              <span className="truncate">{visit.agent}</span>
            </div>
            <div className="flex items-center gap-1 mt-1 text-[10px] text-muted-foreground">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{visit.address}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
