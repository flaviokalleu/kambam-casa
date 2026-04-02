import { AppLayout } from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { LeadSourceChart } from "@/components/dashboard/LeadSourceChart";
import { FunnelChart } from "@/components/dashboard/FunnelChart";
import { RecentLeads } from "@/components/dashboard/RecentLeads";
import { UpcomingVisits } from "@/components/dashboard/UpcomingVisits";
import { Users, Eye, FileText, TrendingUp, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <AppLayout title="Dashboard" subtitle="Visão geral da operação">
      <div className="space-y-4 sm:space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <MetricCard icon={Users} title="Leads do Dia" value="18" change="+12% vs ontem" changeType="positive" iconColor="bg-primary/10" />
          <MetricCard icon={Eye} title="Visitas Agendadas" value="7" change="3 para hoje" changeType="neutral" iconColor="bg-chart-2/10" />
          <MetricCard icon={FileText} title="Propostas Enviadas" value="12" change="+4 esta semana" changeType="positive" iconColor="bg-warning/10" />
          <MetricCard icon={TrendingUp} title="Vendas do Mês" value="28" change="+18% vs mês anterior" changeType="positive" iconColor="bg-success/10" />
          <MetricCard icon={DollarSign} title="Faturamento" value="R$ 840K" change="+22% vs mês anterior" changeType="positive" iconColor="bg-chart-4/10" />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <LeadSourceChart />
        </div>

        {/* Funnel + Recent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          <FunnelChart />
          <RecentLeads />
        </div>

        {/* Visits */}
        <UpcomingVisits />
      </div>
    </AppLayout>
  );
};

export default Index;
