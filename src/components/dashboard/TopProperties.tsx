import { Eye, Heart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const properties = [
  { name: "Apt. 3Q Copacabana", views: 342, favorites: 28, price: "R$ 1.2M", trend: "+15%", img: "🏢" },
  { name: "Casa Barra da Tijuca", views: 298, favorites: 45, price: "R$ 2.8M", trend: "+22%", img: "🏡" },
  { name: "Cobertura Leblon", views: 256, favorites: 38, price: "R$ 4.5M", trend: "+8%", img: "🌇" },
  { name: "Studio Centro", views: 198, favorites: 12, price: "R$ 380K", trend: "+32%", img: "🏙️" },
  { name: "Terreno Recreio", views: 167, favorites: 9, price: "R$ 650K", trend: "+5%", img: "🌴" },
];

export function TopProperties() {
  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 animate-fade-up glass-card-hover transition-all duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Imóveis em Destaque</h3>
          <p className="text-xs text-muted-foreground">Mais visualizados esta semana</p>
        </div>
      </div>
      <div className="space-y-3">
        {properties.map((p, idx) => (
          <div key={p.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/50 transition-colors group cursor-pointer">
            <span className="text-lg sm:text-xl w-8 text-center">{p.img}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-xs sm:text-sm font-medium text-foreground truncate">{p.name}</p>
                {idx === 0 && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-accent/15 text-accent font-semibold">TOP</span>
                )}
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Eye className="w-3 h-3" />{p.views}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Heart className="w-3 h-3" />{p.favorites}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-success">
                  <TrendingUp className="w-3 h-3" />{p.trend}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-bold text-foreground">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
