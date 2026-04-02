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
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up">
      <div className="mb-6">
        <h3 className="text-base font-semibold text-foreground">Funil de Conversão</h3>
        <p className="text-sm text-muted-foreground">Progresso dos leads no funil</p>
      </div>
      <div className="space-y-3">
        {funnelData.map((item) => {
          const pct = Math.round((item.count / max) * 100);
          return (
            <div key={item.stage} className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground w-28 text-right flex-shrink-0">{item.stage}</span>
              <div className="flex-1 h-8 bg-muted rounded-lg overflow-hidden">
                <div
                  className="h-full rounded-lg flex items-center px-3 transition-all duration-500"
                  style={{ width: `${pct}%`, backgroundColor: item.color }}
                >
                  <span className="text-xs font-semibold text-white">{item.count}</span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground w-10">{pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
