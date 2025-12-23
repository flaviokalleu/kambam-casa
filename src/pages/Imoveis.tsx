import { useState } from "react";
import {
  Search,
  Plus,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  MoreHorizontal,
  Grid3X3,
  List,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

interface Property {
  id: string;
  title: string;
  address: string;
  price: string;
  type: "apartment" | "house" | "commercial" | "land";
  status: "available" | "rented" | "sold" | "reserved";
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  investor: string;
  image?: string;
}

const mockProperties: Property[] = [
  {
    id: "1",
    title: "Apartamento 304 - Ed. Crystal",
    address: "Av. Paulista, 1000 - São Paulo",
    price: "R$ 850.000",
    type: "apartment",
    status: "available",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    investor: "Carlos Mendes",
  },
  {
    id: "2",
    title: "Casa 45 - Cond. Primavera",
    address: "Rua das Flores, 45 - Campinas",
    price: "R$ 1.200.000",
    type: "house",
    status: "rented",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    investor: "Ana Costa",
  },
  {
    id: "3",
    title: "Loja 02 - Centro Comercial",
    address: "Av. Brasil, 500 - Centro",
    price: "R$ 450.000",
    type: "commercial",
    status: "available",
    area: 80,
    investor: "Roberto Almeida",
  },
  {
    id: "4",
    title: "Terreno Lote 15",
    address: "Rua Nova, 15 - Bairro Alto",
    price: "R$ 320.000",
    type: "land",
    status: "reserved",
    area: 500,
    investor: "Fernanda Lima",
  },
  {
    id: "5",
    title: "Apartamento 1204 - Ed. Sunset",
    address: "Rua do Sol, 200 - Praia",
    price: "R$ 980.000",
    type: "apartment",
    status: "sold",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    investor: "Carlos Mendes",
  },
  {
    id: "6",
    title: "Sala Comercial 42",
    address: "Av. Empresarial, 1500",
    price: "R$ 280.000",
    type: "commercial",
    status: "available",
    area: 45,
    investor: "João Silva",
  },
];

const typeLabels = {
  apartment: "Apartamento",
  house: "Casa",
  commercial: "Comercial",
  land: "Terreno",
};

const statusStyles = {
  available: { bg: "bg-success/10", text: "text-success", label: "Disponível" },
  rented: { bg: "bg-secondary/10", text: "text-secondary", label: "Alugado" },
  sold: { bg: "bg-muted", text: "text-muted-foreground", label: "Vendido" },
  reserved: { bg: "bg-warning/10", text: "text-warning", label: "Reservado" },
};

const Imoveis = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = mockProperties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="pl-64 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Imóveis</h1>
              <p className="text-sm text-muted-foreground">
                Gerencie sua carteira de imóveis
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" />
              Novo Imóvel
            </button>
          </div>
        </header>

        <div className="p-8">
          {/* Search and View Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar imóvel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "grid"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "list"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          <div
            className={cn(
              viewMode === "grid"
                ? "grid grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            )}
          >
            {filteredProperties.map((property) => {
              const status = statusStyles[property.status];

              return (
                <div
                  key={property.id}
                  className={cn(
                    "bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all cursor-pointer group",
                    viewMode === "list" && "flex"
                  )}
                >
                  {/* Image Placeholder */}
                  <div
                    className={cn(
                      "bg-muted/50 relative",
                      viewMode === "grid" ? "h-48" : "w-48 h-32 flex-shrink-0"
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Square className="w-12 h-12 text-muted-foreground/30" />
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <span
                      className={cn(
                        "absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium",
                        status.bg,
                        status.text
                      )}
                    >
                      {status.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {property.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="w-3 h-3" />
                          {property.address}
                        </div>
                      </div>
                      <button className="p-1 rounded hover:bg-muted transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                      {property.bedrooms && (
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          {property.bedrooms}
                        </div>
                      )}
                      {property.bathrooms && (
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          {property.bathrooms}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {property.area}m²
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="text-sm text-muted-foreground">
                        {property.investor}
                      </div>
                      <span className="text-lg font-bold text-primary">
                        {property.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Imoveis;
