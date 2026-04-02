import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

const data = [
  { day: "Seg", receita: 42, comissao: 12 },
  { day: "Ter", receita: 58, comissao: 18 },
  { day: "Qua", receita: 35, comissao: 10 },
  { day: "Qui", receita: 72, comissao: 22 },
  { day: "Sex", receita: 88, comissao: 28 },
  { day: "Sáb", receita: 65, comissao: 20 },
  { day: "Dom", receita: 30, comissao: 8 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card rounded-xl px-4 py-3 shadow-lg border border-border">
      <p className="text-xs font-semibold text-foreground mb-1">{label}</p>
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-semibold text-foreground">R$ {entry.value}K</span>
        </div>
      ))}
    </div>
  );
};

export function RevenueAreaChart() {
  const isMobile = useIsMobile();

  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 animate-fade-up glass-card-hover transition-all duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Receita Semanal</h3>
          <p className="text-xs text-muted-foreground">Receita vs Comissões</p>
        </div>
        <p className="text-lg sm:text-xl font-bold gradient-text-accent">R$ 390K</p>
      </div>
      <ResponsiveContainer width="100%" height={isMobile ? 180 : 220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="rev-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(25,95%,53%)" stopOpacity={0.25} />
              <stop offset="95%" stopColor="hsl(25,95%,53%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="com-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(152,60%,45%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(152,60%,45%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,55%)", fontSize: isMobile ? 10 : 11 }} />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="receita" stroke="hsl(25,95%,53%)" strokeWidth={2.5} fill="url(#rev-gradient)" name="Receita" dot={false} />
          <Area type="monotone" dataKey="comissao" stroke="hsl(152,60%,45%)" strokeWidth={2} fill="url(#com-gradient)" name="Comissão" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
