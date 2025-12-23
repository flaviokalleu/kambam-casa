import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", investidores: 28 },
  { month: "Fev", investidores: 32 },
  { month: "Mar", investidores: 35 },
  { month: "Abr", investidores: 38 },
  { month: "Mai", investidores: 40 },
  { month: "Jun", investidores: 42 },
  { month: "Jul", investidores: 43 },
  { month: "Ago", investidores: 44 },
  { month: "Set", investidores: 45 },
  { month: "Out", investidores: 46 },
  { month: "Nov", investidores: 47 },
  { month: "Dez", investidores: 50 },
];

export function InvestorGrowthChart() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Crescimento de Investidores</h3>
          <p className="text-sm text-muted-foreground">Evolução anual</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">+78%</span>
          <p className="text-xs text-muted-foreground">vs ano anterior</p>
        </div>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
                <stop offset="100%" stopColor="hsl(24, 95%, 53%)" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }}
              interval={1}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }}
              domain={[20, 55]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222, 47%, 10%)",
                border: "1px solid hsl(222, 30%, 18%)",
                borderRadius: "8px",
                boxShadow: "0 4px 24px -4px rgba(0,0,0,0.4)",
              }}
              labelStyle={{ color: "hsl(210, 40%, 98%)" }}
              itemStyle={{ color: "hsl(210, 40%, 98%)" }}
            />
            <Line
              type="monotone"
              dataKey="investidores"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={{ fill: "hsl(24, 95%, 53%)", strokeWidth: 0, r: 4 }}
              activeDot={{ fill: "hsl(24, 95%, 53%)", strokeWidth: 0, r: 6 }}
              name="Investidores"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
