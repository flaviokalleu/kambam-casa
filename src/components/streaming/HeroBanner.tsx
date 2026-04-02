import { useState, useEffect } from "react";
import { Play, Info, Volume2, VolumeX } from "lucide-react";
import { Movie, getColorForId, trendingMovies } from "@/data/movies";

interface HeroBannerProps {
  onSelectMovie?: (movie: Movie) => void;
}

export function HeroBanner({ onSelectMovie }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featured = trendingMovies.length > 0 ? trendingMovies : [];
  const movie = featured[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % featured.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [featured.length]);

  if (!movie) return null;

  const colorGradient = getColorForId(movie.id);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} transition-all duration-1000`} />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 hero-gradient" />

      {/* Content */}
      <div className="absolute bottom-[20%] left-0 px-16 max-w-2xl animate-fade-up">
        {movie.newRelease && (
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary px-3 py-1 rounded text-primary-foreground text-sm font-bold tracking-wider">
              N
            </span>
            <span className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
              Novo na StreamFlix
            </span>
          </div>
        )}

        <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">
          {movie.title}
        </h1>
        
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="text-success font-semibold">{movie.match}% Match</span>
          <span className="text-muted-foreground">{movie.year}</span>
          <span className="border border-muted-foreground/40 px-1.5 py-0.5 text-muted-foreground text-xs">{movie.maturity}</span>
          <span className="text-muted-foreground">{movie.duration}</span>
          <span className="flex items-center gap-1 text-warning">
            ★ {movie.rating}
          </span>
        </div>

        <p className="text-foreground/80 text-lg leading-relaxed mb-8 line-clamp-3">
          {movie.description}
        </p>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-8 py-3 bg-foreground text-background font-semibold rounded-md hover:bg-foreground/80 transition-colors text-lg">
            <Play className="w-6 h-6 fill-current" />
            Assistir
          </button>
          <button
            onClick={() => onSelectMovie?.(movie)}
            className="flex items-center gap-2 px-8 py-3 bg-muted-foreground/30 text-foreground font-semibold rounded-md hover:bg-muted-foreground/40 transition-colors text-lg backdrop-blur-sm"
          >
            <Info className="w-6 h-6" />
            Mais Informações
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-16 flex items-center gap-2">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-0.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-8 bg-foreground" : "w-4 bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
