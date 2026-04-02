import { cn } from "@/lib/utils";

const funnelData = [
  { stage: "Novos Leads", count: 120, color: "hsl(220,80%,55%)", icon: "🎯" },
  { stage: "Em Contato", count: 85, color: "hsl(220,70%,60%)", icon: "📞" },
  { stage: "Qualificados", count: 62, color: "hsl(200,70%,50%)", icon: "✅" },
  { stage: "Visita", count: 40, color: "hsl(180,60%,45%)", icon: "🏠" },
  { stage: "Proposta", count: 28, color: "hsl(152,60%,50%)", icon: "📋" },
  { stage: "Documentação", count: 18, color: "hsl(130,55%,45%)", icon: "📄" },
  { stage: "Vendidos", count: 12, color: "hsl(152,70%,38%)", icon: "🏆" },
];

export function FunnelChart() {
  const max = funnelData[0].count;

  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 animate-fade-up glass-card-hover transition-all duration-300">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base font-semibold text-foreground">Funil de Conversão</h3>
        <p className="text-xs text-muted-foreground">Taxa: {Math.round((funnelData[6].count / funnelData[0].count) * 100)}% de conversão total</p>
      </div>
      <div className="space-y-2">
        {funnelData.map((item, idx) => {
          const pct = Math.round((item.count / max) * 100);
          const convRate = idx > 0 ? Math.round((item.count / funnelData[idx - 1].count) * 100) : 100;
          return (
            <div key={item.stage} className="group">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-sm w-5 flex-shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] sm:text-xs text-muted-foreground truncate">{item.stage}</span>
                    <div className="flex items-center gap-2">
                      {idx > 0 && (
                        <span className={cn("text-[9px] px-1.5 py-0.5 rounded-md font-medium",
                          convRate >= 70 ? "bg-success/10 text-success" : convRate >= 50 ? "bg-warning/10 text-warning" : "bg-destructive/10 text-destructive"
                        )}>{convRate}%</span>
                      )}
                      <span className="text-xs font-bold text-foreground">{item.count}</span>
                    </div>
                  </div>
                  <div className="h-6 bg-muted/50 rounded-lg overflow-hidden">
                    <div
                      className="h-full rounded-lg transition-all duration-700 ease-out group-hover:brightness-125 flex items-center justify-end pr-2"
                      style={{ width: `${pct}%`, backgroundColor: item.color, opacity: 0.85 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
