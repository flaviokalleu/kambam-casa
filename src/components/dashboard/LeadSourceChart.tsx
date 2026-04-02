import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Site", value: 35 },
  { name: "WhatsApp", value: 25 },
  { name: "Indicação", value: 20 },
  { name: "Portal", value: 12 },
  { name: "Outros", value: 8 },
];

const COLORS = [
  "hsl(220,70%,45%)",
  "hsl(152,60%,42%)",
  "hsl(38,92%,50%)",
  "hsl(280,60%,55%)",
  "hsl(220,13%,75%)",
];

export function LeadSourceChart() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up">
      <div className="mb-6">
        <h3 className="text-base font-semibold text-foreground">Origem dos Leads</h3>
        <p className="text-sm text-muted-foreground">Distribuição por canal</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={4} dataKey="value" strokeWidth={0}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(220,13%,91%)", borderRadius: 12, fontSize: 13 }} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
