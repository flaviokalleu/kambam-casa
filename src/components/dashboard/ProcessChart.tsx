import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jul", processos: 12, concluidos: 8 },
  { month: "Ago", processos: 19, concluidos: 14 },
  { month: "Set", processos: 15, concluidos: 11 },
  { month: "Out", processos: 22, concluidos: 18 },
  { month: "Nov", processos: 28, concluidos: 21 },
  { month: "Dez", processos: 24, concluidos: 19 },
];

export function ProcessChart() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Processos</h3>
        <p className="text-sm text-muted-foreground">Últimos 6 meses</p>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorProcessos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(24, 95%, 53%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(24, 95%, 53%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorConcluidos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
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
            <Area
              type="monotone"
              dataKey="processos"
              stroke="hsl(24, 95%, 53%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorProcessos)"
              name="Em andamento"
            />
            <Area
              type="monotone"
              dataKey="concluidos"
              stroke="hsl(217, 91%, 60%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorConcluidos)"
              name="Concluídos"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Em andamento</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <span className="text-sm text-muted-foreground">Concluídos</span>
        </div>
      </div>
    </div>
  );
}
