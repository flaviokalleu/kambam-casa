import { useState } from "react";
import {
  Search,
  Plus,
  Building2,
  TrendingUp,
  Phone,
  Mail,
  MoreHorizontal,
  Filter,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

interface Investor {
  id: string;
  name: string;
  email: string;
  phone: string;
  activeProperties: number;
  totalValue: string;
  joinedDate: string;
  isNew?: boolean;
  status: "active" | "inactive";
}

const mockInvestors: Investor[] = [
  {
    id: "1",
    name: "Carlos Eduardo Mendes",
    email: "carlos.mendes@email.com",
    phone: "(11) 99999-1234",
    activeProperties: 4,
    totalValue: "R$ 2.8M",
    joinedDate: "12 Dez 2024",
    isNew: true,
    status: "active",
  },
  {
    id: "2",
    name: "Ana Beatriz Costa",
    email: "ana.costa@email.com",
    phone: "(11) 98888-5678",
    activeProperties: 2,
    totalValue: "R$ 1.2M",
    joinedDate: "08 Dez 2024",
    isNew: true,
    status: "active",
  },
  {
    id: "3",
    name: "Roberto Almeida Silva",
    email: "roberto.silva@email.com",
    phone: "(21) 97777-9012",
    activeProperties: 7,
    totalValue: "R$ 5.4M",
    joinedDate: "15 Nov 2024",
    status: "active",
  },
  {
    id: "4",
    name: "Fernanda Lima Santos",
    email: "fernanda.santos@email.com",
    phone: "(31) 96666-3456",
    activeProperties: 3,
    totalValue: "R$ 1.9M",
    joinedDate: "02 Nov 2024",
    status: "active",
  },
  {
    id: "5",
    name: "João Pedro Oliveira",
    email: "joao.oliveira@email.com",
    phone: "(41) 95555-7890",
    activeProperties: 0,
    totalValue: "R$ 0",
    joinedDate: "20 Out 2024",
    status: "inactive",
  },
];

const Investidores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "new">("all");

  const filteredInvestors = mockInvestors.filter((investor) => {
    const matchesSearch = investor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && investor.status === "active") ||
      (filter === "new" && investor.isNew);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="pl-64 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Investidores</h1>
              <p className="text-sm text-muted-foreground">
                Gerencie seus investidores e suas carteiras
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" />
              Novo Investidor
            </button>
          </div>
        </header>

        <div className="p-8">
          {/* Search and Filters */}
          <div className="flex items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar investidor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div className="flex items-center gap-2">
              {[
                { id: "all", label: "Todos" },
                { id: "active", label: "Ativos" },
                { id: "new", label: "Novos" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as typeof filter)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    filter === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Investors Table */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                    Investidor
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                    Contato
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-medium text-muted-foreground">
                    Imóveis
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">
                    Valor Total
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {filteredInvestors.map((investor) => (
                  <tr
                    key={investor.id}
                    className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <span className="text-secondary font-semibold text-sm">
                            {investor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">
                              {investor.name}
                            </span>
                            {investor.isNew && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                Novo
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            Desde {investor.joinedDate}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          {investor.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          {investor.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">
                          {investor.activeProperties}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <TrendingUp className="w-4 h-4 text-success" />
                        <span className="font-medium text-foreground">
                          {investor.totalValue}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium",
                          investor.status === "active"
                            ? "bg-success/10 text-success"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {investor.status === "active" ? "Ativo" : "Inativo"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investidores;
