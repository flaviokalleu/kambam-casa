import { AppLayout } from "@/components/layout/AppLayout";
import { BarChart3, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  { name: "Vendas do Mês", description: "Relatório completo de vendas com detalhamento por corretor", updated: "02/04/2026" },
  { name: "Comissões por Corretor", description: "Detalhamento de comissões e bonificações", updated: "01/04/2026" },
  { name: "Performance de Leads", description: "Taxa de conversão por origem e período", updated: "31/03/2026" },
  { name: "Faturamento Geral", description: "Receitas, despesas e margem operacional", updated: "30/03/2026" },
];

const Relatorios = () => (
  <AppLayout title="Relatórios" subtitle="Relatórios e análises">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {reports.map((r) => (
        <div key={r.name} className="bg-card rounded-xl border border-border p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground text-sm">{r.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{r.description}</p>
            <p className="text-xs text-muted-foreground mt-2">Atualizado: {r.updated}</p>
          </div>
          <Button variant="outline" size="sm"><Download className="w-4 h-4" /></Button>
        </div>
      ))}
    </div>
  </AppLayout>
);

export default Relatorios;
