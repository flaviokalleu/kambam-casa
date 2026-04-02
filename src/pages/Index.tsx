import { AppLayout } from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { LeadSourceChart } from "@/components/dashboard/LeadSourceChart";
import { FunnelChart } from "@/components/dashboard/FunnelChart";
import { RecentLeads } from "@/components/dashboard/RecentLeads";
import { UpcomingVisits } from "@/components/dashboard/UpcomingVisits";
import { RevenueAreaChart } from "@/components/dashboard/RevenueAreaChart";
import { PerformanceGauges } from "@/components/dashboard/PerformanceGauges";
import { TopProperties } from "@/components/dashboard/TopProperties";
import { AgentRanking } from "@/components/dashboard/AgentRanking";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Users, Eye, FileText, TrendingUp, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <AppLayout title="Dashboard" subtitle="Visão geral da operação">
      <div className="space-y-4 sm:space-y-6">
        {/* Quick Actions */}
        <QuickActions />

        {/* KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <MetricCard icon={Users} title="Leads do Dia" value="18" change="+12% vs ontem" changeType="positive" />
          <MetricCard icon={Eye} title="Visitas Agendadas" value="7" change="3 para hoje" changeType="neutral" />
          <MetricCard icon={FileText} title="Propostas" value="12" change="+4 esta semana" changeType="positive" />
          <MetricCard icon={TrendingUp} title="Vendas do Mês" value="28" change="+18% vs mês anterior" changeType="positive" />
          <MetricCard icon={DollarSign} title="Faturamento" value="R$ 840K" change="+22% vs mês anterior" changeType="positive" accentGradient />
        </div>

        {/* Performance Gauges */}
        <PerformanceGauges />

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <LeadSourceChart />
        </div>

        {/* Revenue + Funnel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          <RevenueAreaChart />
          <FunnelChart />
        </div>

        {/* Leads + Properties */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          <RecentLeads />
          <TopProperties />
        </div>

        {/* Agent Ranking + Visits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          <AgentRanking />
          <UpcomingVisits />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
