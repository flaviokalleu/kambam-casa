import { AppLayout } from "@/components/layout/AppLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter } from "lucide-react";

const leads = [
  { id: 1, name: "Ana Silva", email: "ana@email.com", phone: "(11) 99999-0001", origin: "Site", status: "Novo", interest: "Apartamento 2Q", date: "02/04/2026" },
  { id: 2, name: "Carlos Mendes", email: "carlos@email.com", phone: "(11) 99999-0002", origin: "WhatsApp", status: "Em Contato", interest: "Casa 3Q", date: "01/04/2026" },
  { id: 3, name: "Juliana Costa", email: "juliana@email.com", phone: "(21) 99999-0003", origin: "Indicação", status: "Qualificado", interest: "Sala Comercial", date: "01/04/2026" },
  { id: 4, name: "Roberto Alves", email: "roberto@email.com", phone: "(11) 99999-0004", origin: "Portal", status: "Visita Agendada", interest: "Apartamento 3Q", date: "31/03/2026" },
  { id: 5, name: "Mariana Souza", email: "mariana@email.com", phone: "(11) 99999-0005", origin: "Site", status: "Proposta Enviada", interest: "Cobertura", date: "30/03/2026" },
];

const statusColors: Record<string, string> = {
  "Novo": "bg-primary/10 text-primary border-primary/20",
  "Em Contato": "bg-warning/10 text-warning border-warning/20",
  "Qualificado": "bg-success/10 text-success border-success/20",
  "Visita Agendada": "bg-chart-4/10 text-chart-4 border-chart-4/20",
  "Proposta Enviada": "bg-chart-1/10 text-chart-1 border-chart-1/20",
};

const Leads = () => (
  <AppLayout title="Leads" subtitle="Gestão de leads da imobiliária">
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
        <div className="relative flex-1 max-w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar leads..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none"><Filter className="w-4 h-4 mr-1" />Filtros</Button>
          <Button size="sm" className="flex-1 sm:flex-none"><Plus className="w-4 h-4 mr-1" />Novo Lead</Button>
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Nome</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Contato</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Origem</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Interesse</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Status</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Data</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors cursor-pointer">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">{lead.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">{lead.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{lead.phone}</td>
                <td className="px-4 py-3 text-muted-foreground">{lead.origin}</td>
                <td className="px-4 py-3 text-muted-foreground">{lead.interest}</td>
                <td className="px-4 py-3"><Badge variant="outline" className={statusColors[lead.status] || ""}>{lead.status}</Badge></td>
                <td className="px-4 py-3 text-muted-foreground">{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-card rounded-xl border border-border p-4 hover:border-primary/20 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">{lead.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{lead.name}</p>
                <p className="text-xs text-muted-foreground">{lead.email}</p>
              </div>
              <Badge variant="outline" className={`text-[10px] ${statusColors[lead.status] || ""}`}>{lead.status}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <span>📞 {lead.phone}</span>
              <span>📍 {lead.origin}</span>
              <span>🏠 {lead.interest}</span>
              <span>📅 {lead.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Leads;
