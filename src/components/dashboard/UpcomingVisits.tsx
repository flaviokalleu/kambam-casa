import { Calendar, Clock, MapPin } from "lucide-react";

const visits = [
  { client: "Ana Silva", property: "Apt 302 - Ed. Aurora", date: "Hoje", time: "14:00", address: "Rua das Flores, 120" },
  { client: "Carlos Mendes", property: "Casa 5 - Cond. Verde", date: "Hoje", time: "16:30", address: "Av. Brasil, 450" },
  { client: "Juliana Costa", property: "Sala 801 - Centro", date: "Amanhã", time: "10:00", address: "Rua do Comércio, 88" },
  { client: "Roberto Alves", property: "Apt 1201 - Ed. Sol", date: "Amanhã", time: "15:00", address: "Av. Atlântica, 200" },
];

export function UpcomingVisits() {
  return (
    <div className="bg-card rounded-xl border border-border p-4 sm:p-6 animate-fade-up hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Próximas Visitas</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">Agenda de hoje e amanhã</p>
        </div>
        <button className="text-xs sm:text-sm text-primary font-medium hover:underline">Ver agenda</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {visits.map((v, i) => (
          <div key={i} className="p-3 sm:p-4 rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200 group">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs sm:text-sm font-medium text-foreground truncate">{v.client}</p>
              <span className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1 flex-shrink-0 ml-2">
                <Calendar className="w-3 h-3" />{v.date}
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 truncate">{v.property}</p>
            <div className="flex items-center gap-3 text-[10px] sm:text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{v.time}</span>
              <span className="flex items-center gap-1 truncate"><MapPin className="w-3 h-3 flex-shrink-0" />{v.address}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
