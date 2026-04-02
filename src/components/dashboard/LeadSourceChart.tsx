import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <div className="bg-card rounded-xl border border-border p-4 sm:p-6 animate-fade-up hover:shadow-md transition-shadow duration-300">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base font-semibold text-foreground">Origem dos Leads</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">Distribuição por canal</p>
      </div>
      <ResponsiveContainer width="100%" height={isMobile ? 200 : 220}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={isMobile ? 45 : 55} outerRadius={isMobile ? 70 : 85} paddingAngle={4} dataKey="value" strokeWidth={0}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(220,13%,91%)", borderRadius: 12, fontSize: 13 }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
        {data.map((item, i) => (
          <div key={item.name} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS[i] }} />
            <span className="truncate">{item.name}</span>
            <span className="font-semibold text-foreground ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
