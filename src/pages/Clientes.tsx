import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, UserCircle, Phone, Mail, Building2 } from "lucide-react";

const clientes = [
  { id: 1, name: "Fernanda Lima", cpf: "123.456.789-00", phone: "(11) 99999-1001", email: "fernanda@email.com", imoveis: 2 },
  { id: 2, name: "Marcos Oliveira", cpf: "987.654.321-00", phone: "(21) 99999-2002", email: "marcos@email.com", imoveis: 1 },
  { id: 3, name: "Patricia Santos", cpf: "456.789.123-00", phone: "(11) 99999-3003", email: "patricia@email.com", imoveis: 3 },
];

const Clientes = () => (
  <AppLayout title="Clientes" subtitle="Carteira de clientes">
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
        <div className="relative flex-1 max-w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar clientes..." className="pl-10" />
        </div>
        <Button size="sm" className="sm:w-auto"><Plus className="w-4 h-4 mr-1" />Novo Cliente</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
        {clientes.map((c) => (
          <div key={c.id} className="bg-card rounded-xl border border-border p-4 sm:p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UserCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.cpf}</p>
              </div>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 flex-shrink-0" />{c.phone}</p>
              <p className="flex items-center gap-2 truncate"><Mail className="w-3.5 h-3.5 flex-shrink-0" />{c.email}</p>
              <p className="flex items-center gap-2 text-primary font-medium"><Building2 className="w-3.5 h-3.5 flex-shrink-0" />{c.imoveis} imóveis vinculados</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Clientes;
