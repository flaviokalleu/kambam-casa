import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

const data = [
  { month: "Jan", vendas: 12, meta: 15 },
  { month: "Fev", vendas: 18, meta: 15 },
  { month: "Mar", vendas: 14, meta: 16 },
  { month: "Abr", vendas: 22, meta: 18 },
  { month: "Mai", vendas: 19, meta: 18 },
  { month: "Jun", vendas: 25, meta: 20 },
  { month: "Jul", vendas: 28, meta: 22 },
];

export function SalesChart() {
  const isMobile = useIsMobile();

  return (
    <div className="bg-card rounded-xl border border-border p-4 sm:p-6 animate-fade-up hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Vendas Mensais</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">Vendas vs Meta</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={isMobile ? 220 : 280}>
        <BarChart data={data} barGap={isMobile ? 2 : 4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,91%)" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,45%)", fontSize: isMobile ? 10 : 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,45%)", fontSize: isMobile ? 10 : 12 }} width={isMobile ? 30 : 40} />
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(220,13%,91%)", borderRadius: 12, fontSize: 13 }}
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
          <Bar dataKey="vendas" fill="hsl(220,70%,45%)" radius={[6, 6, 0, 0]} barSize={isMobile ? 16 : 24} name="Vendas" />
          <Bar dataKey="meta" fill="hsl(220,70%,45%,0.2)" radius={[6, 6, 0, 0]} barSize={isMobile ? 16 : 24} name="Meta" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
