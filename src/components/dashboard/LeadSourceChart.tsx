import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

const data = [
  { name: "Site", value: 35, color: "hsl(220,80%,55%)" },
  { name: "WhatsApp", value: 25, color: "hsl(152,60%,45%)" },
  { name: "Indicação", value: 20, color: "hsl(25,95%,53%)" },
  { name: "Portal", value: 12, color: "hsl(280,60%,55%)" },
  { name: "Outros", value: 8, color: "hsl(340,75%,55%)" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.[0]) return null;
  const item = payload[0];
  return (
    <div className="glass-card rounded-xl px-4 py-3 shadow-lg border border-border">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.payload.color }} />
        <span className="text-xs font-semibold text-foreground">{item.name}</span>
      </div>
      <p className="text-lg font-bold text-foreground mt-1">{item.value}%</p>
    </div>
  );
};

export function LeadSourceChart() {
  const isMobile = useIsMobile();

  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 animate-fade-up glass-card-hover transition-all duration-300">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base font-semibold text-foreground">Origem dos Leads</h3>
        <p className="text-xs text-muted-foreground">Distribuição por canal</p>
      </div>
      <ResponsiveContainer width="100%" height={isMobile ? 200 : 220}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={isMobile ? 45 : 55} outerRadius={isMobile ? 70 : 85} paddingAngle={3} dataKey="value" strokeWidth={0}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-2 mt-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-3 text-xs group">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-125" style={{ backgroundColor: item.color }} />
            <span className="text-muted-foreground flex-1">{item.name}</span>
            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
            </div>
            <span className="font-semibold text-foreground w-8 text-right">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
