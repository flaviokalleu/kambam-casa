import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
const data = [{
  name: "Apartamentos",
  value: 18,
  color: "hsl(24, 95%, 53%)"
}, {
  name: "Casas",
  value: 12,
  color: "hsl(217, 91%, 60%)"
}, {
  name: "Comercial",
  value: 8,
  color: "hsl(142, 76%, 36%)"
}, {
  name: "Terrenos",
  value: 5,
  color: "hsl(38, 92%, 50%)"
}];
export function PropertyTypeChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return <div className="bg-card rounded-xl border border-border p-6 animate-fade-up" style={{
    animationDelay: "0.35s"
  }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Tipos de Imóveis</h3>
        <p className="text-sm text-muted-foreground">Distribuição por categoria</p>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative w-44 h-44">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={4} dataKey="value" strokeWidth={0}>
                {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{
              backgroundColor: "hsl(222, 47%, 10%)",
              border: "1px solid hsl(222, 30%, 18%)",
              borderRadius: "8px",
              boxShadow: "0 4px 24px -4px rgba(0,0,0,0.4)"
            }} labelStyle={{
              color: "hsl(210, 40%, 98%)"
            }} itemStyle={{
              color: "hsl(210, 40%, 98%)"
            }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">{total}</span>
            <span className="text-xs text-muted-foreground">Total</span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {data.map(item => <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: item.color
            }} />
                <span className="text-sm text-muted-foreground text-right">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">{item.value}</span>
                <span className="text-xs text-muted-foreground">
                  ({Math.round(item.value / total * 100)}%)
                </span>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}