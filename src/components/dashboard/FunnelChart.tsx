const funnelData = [
  { stage: "Novos Leads", count: 120, color: "hsl(220,70%,45%)" },
  { stage: "Em Contato", count: 85, color: "hsl(220,70%,52%)" },
  { stage: "Qualificados", count: 62, color: "hsl(200,70%,50%)" },
  { stage: "Visita", count: 40, color: "hsl(180,60%,45%)" },
  { stage: "Proposta", count: 28, color: "hsl(152,60%,42%)" },
  { stage: "Documentação", count: 18, color: "hsl(130,55%,45%)" },
  { stage: "Vendidos", count: 12, color: "hsl(152,70%,38%)" },
];

export function FunnelChart() {
  const max = funnelData[0].count;

  return (
    <div className="bg-card rounded-xl border border-border p-4 sm:p-6 animate-fade-up hover:shadow-md transition-shadow duration-300">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base font-semibold text-foreground">Funil de Conversão</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">Progresso dos leads no funil</p>
      </div>
      <div className="space-y-2 sm:space-y-3">
        {funnelData.map((item) => {
          const pct = Math.round((item.count / max) * 100);
          return (
            <div key={item.stage} className="flex items-center gap-2 sm:gap-3 group">
              <span className="text-[10px] sm:text-xs text-muted-foreground w-20 sm:w-28 text-right flex-shrink-0 truncate">{item.stage}</span>
              <div className="flex-1 h-7 sm:h-8 bg-muted rounded-lg overflow-hidden">
                <div
                  className="h-full rounded-lg flex items-center px-2 sm:px-3 transition-all duration-500 group-hover:brightness-110"
                  style={{ width: `${pct}%`, backgroundColor: item.color }}
                >
                  <span className="text-[10px] sm:text-xs font-semibold text-primary-foreground">{item.count}</span>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs text-muted-foreground w-8 sm:w-10">{pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
