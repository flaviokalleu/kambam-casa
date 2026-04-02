import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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
  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-foreground">Vendas Mensais</h3>
          <p className="text-sm text-muted-foreground">Vendas vs Meta</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,91%)" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,45%)", fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,45%)", fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(220,13%,91%)", borderRadius: 12, fontSize: 13 }}
          />
          <Bar dataKey="vendas" fill="hsl(220,70%,45%)" radius={[6, 6, 0, 0]} barSize={24} name="Vendas" />
          <Bar dataKey="meta" fill="hsl(220,70%,45%,0.2)" radius={[6, 6, 0, 0]} barSize={24} name="Meta" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
