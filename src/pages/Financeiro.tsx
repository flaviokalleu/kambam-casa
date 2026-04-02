import { AppLayout } from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DollarSign, TrendingUp, TrendingDown, Percent } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

const data = [
  { month: "Jan", receitas: 120000, despesas: 45000 },
  { month: "Fev", receitas: 180000, despesas: 52000 },
  { month: "Mar", receitas: 95000, despesas: 48000 },
  { month: "Abr", receitas: 220000, despesas: 55000 },
  { month: "Mai", receitas: 310000, despesas: 62000 },
  { month: "Jun", receitas: 280000, despesas: 58000 },
];

const Financeiro = () => {
  const isMobile = useIsMobile();

  return (
    <AppLayout title="Financeiro" subtitle="Controle financeiro da imobiliária">
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <MetricCard icon={DollarSign} title="Faturamento Mensal" value="R$ 280K" change="+22%" changeType="positive" />
          <MetricCard icon={TrendingUp} title="Receitas" value="R$ 310K" change="+15%" changeType="positive" />
          <MetricCard icon={TrendingDown} title="Despesas" value="R$ 62K" change="+8%" changeType="negative" />
          <MetricCard icon={Percent} title="Comissões" value="R$ 48K" change="6 corretores" changeType="neutral" />
        </div>
        <div className="bg-card rounded-xl border border-border p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">Receitas vs Despesas</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Últimos 6 meses</p>
          <ResponsiveContainer width="100%" height={isMobile ? 220 : 300}>
            <BarChart data={data} barGap={isMobile ? 2 : 4}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,91%)" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,45%)", fontSize: isMobile ? 10 : 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,45%)", fontSize: isMobile ? 10 : 12 }} tickFormatter={(v) => `${v/1000}K`} width={isMobile ? 35 : 45} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(220,13%,91%)", borderRadius: 12, fontSize: 13 }} formatter={(v: number) => `R$ ${(v/1000).toFixed(0)}K`} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
              <Bar dataKey="receitas" fill="hsl(220,70%,45%)" radius={[6,6,0,0]} barSize={isMobile ? 14 : 20} name="Receitas" />
              <Bar dataKey="despesas" fill="hsl(0,84%,60%)" radius={[6,6,0,0]} barSize={isMobile ? 14 : 20} name="Despesas" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AppLayout>
  );
};

export default Financeiro;
