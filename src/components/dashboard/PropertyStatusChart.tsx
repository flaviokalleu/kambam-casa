import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusItem {
  label: string;
  value: number;
  total: number;
  color: string;
  trend?: "up" | "down" | "stable";
  trendValue?: number;
}

const statusData: StatusItem[] = [
  { label: "Disponíveis", value: 18, total: 43, color: "bg-success", trend: "up", trendValue: 12 },
  { label: "Alugados", value: 15, total: 43, color: "bg-secondary", trend: "stable", trendValue: 0 },
  { label: "Reservados", value: 6, total: 43, color: "bg-warning", trend: "up", trendValue: 8 },
  { label: "Vendidos", value: 4, total: 43, color: "bg-muted-foreground", trend: "down", trendValue: 5 },
];

export function PropertyStatusChart() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up" style={{ animationDelay: "0.45s" }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Status dos Imóveis</h3>
        <p className="text-sm text-muted-foreground">Visão geral da carteira</p>
      </div>

      <div className="space-y-5">
        {statusData.map((item) => {
          const percentage = Math.round((item.value / item.total) * 100);
          const TrendIcon = item.trend === "up" ? TrendingUp : item.trend === "down" ? TrendingDown : Minus;
          const trendColor = item.trend === "up" ? "text-success" : item.trend === "down" ? "text-destructive" : "text-muted-foreground";

          return (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("w-2 h-2 rounded-full", item.color)} />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground">{item.value}</span>
                  {item.trendValue !== undefined && (
                    <div className={cn("flex items-center gap-1 text-xs", trendColor)}>
                      <TrendIcon className="w-3 h-3" />
                      <span>{item.trendValue}%</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={cn("h-full rounded-full transition-all duration-500", item.color)}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Total de imóveis</span>
          <span className="text-2xl font-bold text-foreground">43</span>
        </div>
      </div>
    </div>
  );
}
