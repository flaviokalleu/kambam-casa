import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const data = [{
  month: "Jul",
  receita: 85000,
  despesas: 32000
}, {
  month: "Ago",
  receita: 92000,
  despesas: 28000
}, {
  month: "Set",
  receita: 78000,
  despesas: 35000
}, {
  month: "Out",
  receita: 110000,
  despesas: 42000
}, {
  month: "Nov",
  receita: 125000,
  despesas: 38000
}, {
  month: "Dez",
  receita: 145000,
  despesas: 45000
}];
export function RevenueChart() {
  return <div style={{
    animationDelay: "0.4s"
  }} className="rounded-xl border border-border p-6 animate-fade-up bg-muted">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Receitas vs Despesas</h3>
          <p className="text-sm text-muted-foreground">Fluxo financeiro mensal</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Receitas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-sm text-muted-foreground">Despesas</span>
          </div>
        </div>
      </div>

      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{
            fill: "hsl(215, 20%, 55%)",
            fontSize: 12
          }} />
            <YAxis axisLine={false} tickLine={false} tick={{
            fill: "hsl(215, 20%, 55%)",
            fontSize: 12
          }} tickFormatter={value => `${value / 1000}k`} />
            <Tooltip contentStyle={{
            backgroundColor: "hsl(222, 47%, 10%)",
            border: "1px solid hsl(222, 30%, 18%)",
            borderRadius: "8px",
            boxShadow: "0 4px 24px -4px rgba(0,0,0,0.4)"
          }} labelStyle={{
            color: "hsl(210, 40%, 98%)"
          }} formatter={(value: number) => [`R$ ${value.toLocaleString()}`, ""]} itemStyle={{
            color: "hsl(210, 40%, 98%)"
          }} />
            <Bar dataKey="receita" fill="hsl(24, 95%, 53%)" radius={[4, 4, 0, 0]} name="Receitas" />
            <Bar dataKey="despesas" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} name="Despesas" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>;
}