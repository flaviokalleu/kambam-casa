import { AppLayout } from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DollarSign, TrendingUp, TrendingDown, Percent } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", receitas: 120000, despesas: 45000 },
  { month: "Fev", receitas: 180000, despesas: 52000 },
  { month: "Mar", receitas: 95000, despesas: 48000 },
  { month: "Abr", receitas: 220000, despesas: 55000 },
  { month: "Mai", receitas: 310000, despesas: 62000 },
  { month: "Jun", receitas: 280000, despesas: 58000 },
];

const Financeiro = () => (
  <AppLayout title="Financeiro" subtitle="Controle financeiro da imobiliária">
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard icon={DollarSign} title="Faturamento Mensal" value="R$ 280K" change="+22%" changeType="positive" />
        <MetricCard icon={TrendingUp} title="Receitas" value="R$ 310K" change="+15%" changeType="positive" />
        <MetricCard icon={TrendingDown} title="Despesas" value="R$ 62K" change="+8%" changeType="negative" />
        <MetricCard icon={Percent} title="Comissões" value="R$ 48K" change="6 corretores" changeType="neutral" />
      </div>
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-base font-semibold text-foreground mb-1">Receitas vs Despesas</h3>
        <p className="text-sm text-muted-foreground mb-6">Últimos 6 meses</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,91%)" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,45%)", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(220,10%,45%)", fontSize: 12 }} tickFormatter={(v) => `${v/1000}K`} />
            <Tooltip contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(220,13%,91%)", borderRadius: 12, fontSize: 13 }} formatter={(v: number) => `R$ ${(v/1000).toFixed(0)}K`} />
            <Bar dataKey="receitas" fill="hsl(220,70%,45%)" radius={[6,6,0,0]} barSize={20} name="Receitas" />
            <Bar dataKey="despesas" fill="hsl(0,84%,60%)" radius={[6,6,0,0]} barSize={20} name="Despesas" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </AppLayout>
);

export default Financeiro;
