import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Building2, BedDouble, Bath, Car, Maximize } from "lucide-react";

const imoveis = [
  { id: 1, title: "Apartamento 302 - Ed. Aurora", type: "Apartamento", price: "R$ 450.000", rooms: 2, baths: 1, parking: 1, area: "68m²", city: "São Paulo", status: "Disponível" },
  { id: 2, title: "Casa 5 - Condomínio Verde", type: "Casa", price: "R$ 850.000", rooms: 3, baths: 2, parking: 2, area: "180m²", city: "Campinas", status: "Reservado" },
  { id: 3, title: "Sala 801 - Centro Empresarial", type: "Comercial", price: "R$ 320.000", rooms: 0, baths: 1, parking: 1, area: "45m²", city: "Rio de Janeiro", status: "Disponível" },
  { id: 4, title: "Cobertura Duplex - Ed. Sol", type: "Cobertura", price: "R$ 1.200.000", rooms: 4, baths: 3, parking: 3, area: "250m²", city: "São Paulo", status: "Em Negociação" },
];

const statusColors: Record<string, string> = {
  "Disponível": "bg-success/10 text-success border-success/20",
  "Reservado": "bg-warning/10 text-warning border-warning/20",
  "Em Negociação": "bg-primary/10 text-primary border-primary/20",
  "Vendido": "bg-muted text-muted-foreground border-border",
};

const Imoveis = () => (
  <AppLayout title="Imóveis" subtitle="Catálogo de imóveis">
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar imóveis..." className="pl-10" />
        </div>
        <Button size="sm"><Plus className="w-4 h-4 mr-1" />Novo Imóvel</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {imoveis.map((im) => (
          <div key={im.id} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-colors cursor-pointer">
            <div className="h-40 bg-muted flex items-center justify-center">
              <Building2 className="w-10 h-10 text-muted-foreground/30" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-foreground">{im.title}</p>
                  <p className="text-xs text-muted-foreground">{im.city} · {im.type}</p>
                </div>
                <Badge variant="outline" className={statusColors[im.status] || ""}>{im.status}</Badge>
              </div>
              <p className="text-lg font-bold text-primary mb-3">{im.price}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {im.rooms > 0 && <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" />{im.rooms}Q</span>}
                <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />{im.baths}B</span>
                <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5" />{im.parking}V</span>
                <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" />{im.area}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Imoveis;
