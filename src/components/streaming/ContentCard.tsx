import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown, Star } from "lucide-react";
import { Movie, getColorForId } from "@/data/movies";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  movie: Movie;
  onSelect?: (movie: Movie) => void;
  size?: "normal" | "large";
}

export function ContentCard({ movie, onSelect, size = "normal" }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const colorGradient = getColorForId(movie.id);

  return (
    <div
      className={cn(
        "relative flex-shrink-0 rounded-md overflow-hidden cursor-pointer transition-all duration-300 group",
        size === "large" ? "w-[300px] h-[170px]" : "w-[230px] h-[130px]",
        isHovered && "scale-110 z-30 shadow-2xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(movie)}
    >
      {/* Poster placeholder */}
      <div className={cn("absolute inset-0 bg-gradient-to-br flex items-center justify-center", colorGradient)}>
        <span className="text-foreground/80 font-semibold text-sm text-center px-3 leading-tight">{movie.title}</span>
      </div>

      {/* Hover overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-foreground font-semibold text-sm mb-2 line-clamp-1">{movie.title}</p>
          
          {/* Action buttons */}
          <div className="flex items-center gap-2 mb-2">
            <button className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors">
              <Play className="w-3.5 h-3.5 text-background fill-current" />
            </button>
            <button className="w-7 h-7 rounded-full border border-muted-foreground/60 flex items-center justify-center hover:border-foreground transition-colors">
              <Plus className="w-3.5 h-3.5 text-foreground" />
            </button>
            <button className="w-7 h-7 rounded-full border border-muted-foreground/60 flex items-center justify-center hover:border-foreground transition-colors">
              <ThumbsUp className="w-3.5 h-3.5 text-foreground" />
            </button>
            <button className="w-7 h-7 rounded-full border border-muted-foreground/60 flex items-center justify-center hover:border-foreground transition-colors ml-auto">
              <ChevronDown className="w-3.5 h-3.5 text-foreground" />
            </button>
          </div>

          {/* Meta info */}
          <div className="flex items-center gap-2 text-xs">
            {movie.match && <span className="text-success font-semibold">{movie.match}% Match</span>}
            <span className="border border-muted-foreground/40 px-1 text-muted-foreground">{movie.maturity}</span>
            <span className="text-muted-foreground">{movie.type === "series" ? `${movie.seasons} Temp.` : movie.duration}</span>
          </div>

          <div className="flex items-center gap-1 mt-1">
            {movie.genre.slice(0, 3).map((g, i) => (
              <span key={g} className="text-xs text-muted-foreground">
                {i > 0 && <span className="mr-1">•</span>}
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Badges */}
      {movie.newRelease && (
        <div className="absolute top-2 left-2 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded">
          NOVO
        </div>
      )}
    </div>
  );
}
