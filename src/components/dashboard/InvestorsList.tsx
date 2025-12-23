import { Building2, TrendingUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Investor {
  id: string;
  name: string;
  activeProperties: number;
  totalValue: string;
  joinedDate: string;
  isNew?: boolean;
}

const mockInvestors: Investor[] = [
  {
    id: "1",
    name: "Carlos Mendes",
    activeProperties: 4,
    totalValue: "R$ 2.8M",
    joinedDate: "12 Dez 2024",
    isNew: true,
  },
  {
    id: "2",
    name: "Ana Beatriz Costa",
    activeProperties: 2,
    totalValue: "R$ 1.2M",
    joinedDate: "08 Dez 2024",
    isNew: true,
  },
  {
    id: "3",
    name: "Roberto Almeida",
    activeProperties: 7,
    totalValue: "R$ 5.4M",
    joinedDate: "15 Nov 2024",
  },
  {
    id: "4",
    name: "Fernanda Lima",
    activeProperties: 3,
    totalValue: "R$ 1.9M",
    joinedDate: "02 Nov 2024",
  },
];

export function InvestorsList() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Investidores Ativos</h3>
          <p className="text-sm text-muted-foreground">Últimas atualizações</p>
        </div>
        <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
          Ver todos
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {mockInvestors.map((investor) => (
          <div
            key={investor.id}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-secondary font-semibold">
                  {investor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground">{investor.name}</p>
                  {investor.isNew && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Novo
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Desde {investor.joinedDate}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="flex items-center gap-1 text-foreground">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{investor.activeProperties}</span>
                </div>
                <p className="text-xs text-muted-foreground">Imóveis</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-foreground">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="font-medium">{investor.totalValue}</span>
                </div>
                <p className="text-xs text-muted-foreground">Valor total</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
