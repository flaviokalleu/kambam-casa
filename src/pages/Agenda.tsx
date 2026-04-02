import { AppLayout } from "@/components/layout/AppLayout";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  { date: "02/04", day: "Qua", items: [
    { time: "09:00", title: "Visita - Ana Silva", location: "Ed. Aurora, Apt 302", type: "visita" },
    { time: "11:00", title: "Reunião com financeira", location: "Escritório", type: "reuniao" },
    { time: "14:00", title: "Visita - Carlos Mendes", location: "Cond. Verde, Casa 5", type: "visita" },
  ]},
  { date: "03/04", day: "Qui", items: [
    { time: "10:00", title: "Assinatura de contrato", location: "Cartório Central", type: "contrato" },
    { time: "15:00", title: "Visita - Juliana Costa", location: "Centro Empresarial, Sala 801", type: "visita" },
  ]},
];

const typeColors: Record<string, string> = {
  visita: "bg-primary/10 border-l-primary",
  reuniao: "bg-warning/10 border-l-warning",
  contrato: "bg-success/10 border-l-success",
};

const Agenda = () => (
  <AppLayout title="Agenda" subtitle="Visitas e compromissos">
    <div className="space-y-6 max-w-3xl">
      {events.map((day) => (
        <div key={day.date}>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">{day.day}, {day.date}</h3>
          </div>
          <div className="space-y-2">
            {day.items.map((item, i) => (
              <div key={i} className={`p-4 rounded-lg border-l-4 ${typeColors[item.type]} bg-card border border-border`}>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{item.time} - {item.title}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground ml-5">
                  <MapPin className="w-3 h-3" />{item.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </AppLayout>
);

export default Agenda;
