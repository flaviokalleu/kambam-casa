import { useState } from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Home,
  Droplets,
  Zap,
  Wifi,
  CreditCard,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

interface CalendarEvent {
  id: string;
  title: string;
  date: number;
  type: "aluguel" | "agua" | "luz" | "internet" | "parcela";
  amount: string;
}

const currentMonth = [
  { day: 1, weekday: "Dom" },
  { day: 2, weekday: "Seg" },
  { day: 3, weekday: "Ter" },
  { day: 4, weekday: "Qua" },
  { day: 5, weekday: "Qui" },
  { day: 6, weekday: "Sex" },
  { day: 7, weekday: "Sáb" },
  // Continue...
];

const mockEvents: CalendarEvent[] = [
  { id: "1", title: "Aluguel - Apt 304", date: 5, type: "aluguel", amount: "R$ 2.500" },
  { id: "2", title: "Conta de Luz", date: 10, type: "luz", amount: "R$ 850" },
  { id: "3", title: "Internet", date: 15, type: "internet", amount: "R$ 299" },
  { id: "4", title: "Conta de Água", date: 20, type: "agua", amount: "R$ 420" },
  { id: "5", title: "Parcela TDS", date: 25, type: "parcela", amount: "R$ 15.000" },
  { id: "6", title: "Aluguel - Casa 45", date: 5, type: "aluguel", amount: "R$ 3.200" },
  { id: "7", title: "Aluguel - Loja 02", date: 10, type: "aluguel", amount: "R$ 4.500" },
];

const typeIcons = {
  aluguel: Home,
  agua: Droplets,
  luz: Zap,
  internet: Wifi,
  parcela: CreditCard,
};

const typeColors = {
  aluguel: "bg-primary text-primary-foreground",
  agua: "bg-blue-500 text-white",
  luz: "bg-yellow-500 text-black",
  internet: "bg-purple-500 text-white",
  parcela: "bg-secondary text-secondary-foreground",
};

const Vencimentos = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // Generate calendar days
  const daysInMonth = 31;
  const firstDayOffset = 0; // December 2024 starts on Sunday
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const getEventsForDay = (day: number) => mockEvents.filter((e) => e.date === day);

  const selectedEvents = selectedDate ? getEventsForDay(selectedDate) : [];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="pl-64 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Vencimentos</h1>
              <p className="text-sm text-muted-foreground">
                Calendário de vencimentos e cobranças
              </p>
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="col-span-2 bg-card rounded-xl border border-border p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">
                  Dezembro 2024
                </h2>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {weekdays.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-medium text-muted-foreground py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day) => {
                  const dayEvents = getEventsForDay(day);
                  const isSelected = selectedDate === day;
                  const isToday = day === 23;

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={cn(
                        "aspect-square rounded-lg p-2 transition-all relative",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : isToday
                          ? "bg-secondary/20 text-foreground"
                          : "hover:bg-muted text-foreground"
                      )}
                    >
                      <span className="text-sm font-medium">{day}</span>
                      {dayEvents.length > 0 && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                          {dayEvents.slice(0, 3).map((event, idx) => (
                            <div
                              key={idx}
                              className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                isSelected ? "bg-primary-foreground" : typeColors[event.type].split(" ")[0]
                              )}
                            />
                          ))}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
                {Object.entries(typeIcons).map(([type, Icon]) => (
                  <div key={type} className="flex items-center gap-2">
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full",
                        typeColors[type as keyof typeof typeColors].split(" ")[0]
                      )}
                    />
                    <span className="text-xs text-muted-foreground capitalize">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Day Events */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {selectedDate ? `Dia ${selectedDate} de Dezembro` : "Selecione um dia"}
              </h3>

              {selectedDate && selectedEvents.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Nenhum vencimento neste dia</p>
                </div>
              )}

              <div className="space-y-3">
                {selectedEvents.map((event) => {
                  const Icon = typeIcons[event.type];
                  return (
                    <div
                      key={event.id}
                      className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center",
                            typeColors[event.type]
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-foreground flex-1">
                          {event.title}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground capitalize">
                          {event.type}
                        </span>
                        <span className="font-semibold text-primary">
                          {event.amount}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vencimentos;
