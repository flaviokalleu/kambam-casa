import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

const data = [
  { month: "Jan", vendas: 12, meta: 15, faturamento: 320 },
  { month: "Fev", vendas: 18, meta: 15, faturamento: 480 },
  { month: "Mar", vendas: 14, meta: 16, faturamento: 390 },
  { month: "Abr", vendas: 22, meta: 18, faturamento: 620 },
  { month: "Mai", vendas: 19, meta: 18, faturamento: 540 },
  { month: "Jun", vendas: 25, meta: 20, faturamento: 720 },
  { month: "Jul", vendas: 28, meta: 22, faturamento: 840 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card rounded-xl px-4 py-3 shadow-lg border border-border">
      <p className="text-xs font-semibold text-foreground mb-1.5">{label}</p>
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-semibold text-foreground">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export function SalesChart() {
  const isMobile = useIsMobile();

  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 animate-fade-up glass-card-hover transition-all duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Performance de Vendas</h3>
          <p className="text-xs text-muted-foreground">Vendas vs Meta mensal</p>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-success/10 border border-success/20">
          <span className="text-[10px] font-semibold text-success">+22% vs mês anterior</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={isMobile ? 220 : 300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="vendas-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(220,80%,55%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(220,80%,55%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="meta-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(25,95%,53%)" stopOpacity={0.15} />
              <stop offset="95%" stopColor="hsl(25,95%,53%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(225,15%,16%)" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,55%)", fontSize: isMobile ? 10 : 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,55%)", fontSize: isMobile ? 10 : 12 }} width={isMobile ? 30 : 40} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, paddingTop: 8, color: "hsl(220,10%,55%)" }} />
          <Area type="monotone" dataKey="vendas" stroke="hsl(220,80%,55%)" strokeWidth={2.5} fill="url(#vendas-gradient)" name="Vendas" dot={{ fill: "hsl(220,80%,55%)", r: 3, strokeWidth: 0 }} activeDot={{ r: 5, fill: "hsl(220,80%,55%)", stroke: "hsl(220,80%,55%)", strokeWidth: 2, strokeOpacity: 0.3 }} />
          <Area type="monotone" dataKey="meta" stroke="hsl(25,95%,53%)" strokeWidth={2} strokeDasharray="6 3" fill="url(#meta-gradient)" name="Meta" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
