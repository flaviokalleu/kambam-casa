import { useState } from "react";
import {
  Users,
  Building2,
  Clock,
  TrendingUp,
  UserPlus,
  Bell,
  Search,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { InvestorsList } from "@/components/dashboard/InvestorsList";
import { ProcessChart } from "@/components/dashboard/ProcessChart";
import { KanbanPreview } from "@/components/dashboard/KanbanPreview";
import { AwaitingReservation } from "@/components/dashboard/AwaitingReservation";
import { OngoingProcesses } from "@/components/dashboard/OngoingProcesses";
import { PropertyTypeChart } from "@/components/dashboard/PropertyTypeChart";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { PropertyStatusChart } from "@/components/dashboard/PropertyStatusChart";
import { InvestorGrowthChart } from "@/components/dashboard/InvestorGrowthChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <main className="pl-64 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Bem-vindo ao painel de gestão imobiliária
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
              </button>

              {/* User */}
              <div className="flex items-center gap-3 pl-4 border-l border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">JD</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">João Dias</p>
                  <p className="text-xs text-muted-foreground">Administrador</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Novos Investidores"
              value="12"
              subtitle="Últimos 30 dias"
              icon={UserPlus}
              trend={{ value: 18, isPositive: true }}
              variant="primary"
            />
            <MetricCard
              title="Investidores Ativos"
              value="47"
              subtitle="Com imóveis na carteira"
              icon={Users}
              trend={{ value: 8, isPositive: true }}
              variant="secondary"
            />
            <MetricCard
              title="Aguardando Reserva"
              value="8"
              subtitle="Clientes na fila"
              icon={Clock}
              variant="warning"
            />
            <MetricCard
              title="Processos Ativos"
              value="15"
              subtitle="Em trâmite"
              icon={Building2}
              trend={{ value: 5, isPositive: true }}
            />
          </div>

          {/* Revenue Overview */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="col-span-2">
              <RevenueChart />
            </div>
            <PropertyStatusChart />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <ProcessChart />
            <PropertyTypeChart />
            <InvestorGrowthChart />
          </div>

          {/* Investors and Kanban */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <InvestorsList />
            <AwaitingReservation />
          </div>

          {/* Kanban Preview */}
          <div className="mb-8">
            <KanbanPreview />
          </div>

          {/* Ongoing Processes */}
          <OngoingProcesses />
        </div>
      </main>

      {/* Gradient Glow Effect */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-30">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at top right, hsl(24, 95%, 53%, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
};

export default Index;
