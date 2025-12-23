import { Clock, DollarSign, User, ArrowRight } from "lucide-react";

interface ReservationItem {
  id: string;
  client: string;
  property: string;
  requestedAmount: string;
  waitingSince: string;
  status: "pending" | "processing" | "approved";
}

const mockReservations: ReservationItem[] = [
  {
    id: "1",
    client: "Marina Santos",
    property: "Apt 205 - Ed. Sunset",
    requestedAmount: "R$ 450.000",
    waitingSince: "5 dias",
    status: "pending",
  },
  {
    id: "2",
    client: "Pedro Oliveira",
    property: "Casa 18 - Cond. Verde",
    requestedAmount: "R$ 780.000",
    waitingSince: "12 dias",
    status: "processing",
  },
  {
    id: "3",
    client: "Luciana Ferreira",
    property: "Sala Comercial 42",
    requestedAmount: "R$ 320.000",
    waitingSince: "3 dias",
    status: "approved",
  },
];

const statusStyles = {
  pending: {
    bg: "bg-warning/10",
    text: "text-warning",
    label: "Aguardando",
  },
  processing: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    label: "Em análise",
  },
  approved: {
    bg: "bg-success/10",
    text: "text-success",
    label: "Aprovado",
  },
};

export function AwaitingReservation() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Aguardando Reserva</h3>
          <p className="text-sm text-muted-foreground">Clientes aguardando verba</p>
        </div>
        <span className="text-2xl font-bold text-primary">{mockReservations.length}</span>
      </div>

      <div className="space-y-4">
        {mockReservations.map((item) => {
          const status = statusStyles[item.status];
          return (
            <div
              key={item.id}
              className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.client}</p>
                    <p className="text-sm text-muted-foreground">{item.property}</p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${status.bg} ${status.text}`}
                >
                  {status.label}
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm">
                    <DollarSign className="w-4 h-4 text-success" />
                    <span className="text-foreground font-medium">{item.requestedAmount}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{item.waitingSince}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
