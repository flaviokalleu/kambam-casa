import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Movie, getColorForId } from "@/data/movies";

interface Top10RowProps {
  title: string;
  movies: Movie[];
  onSelectMovie?: (movie: Movie) => void;
}

export function Top10Row({ title, movies, onSelectMovie }: Top10RowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -600 : 600;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="mb-10 group/row">
      <h2 className="text-xl font-bold text-foreground mb-4 px-2">{title}</h2>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-r from-background/80 to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-8 h-8 text-foreground" />
        </button>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto content-row px-2 py-4">
          {movies.slice(0, 10).map((movie, i) => {
            const colorGradient = getColorForId(movie.id);
            return (
              <div
                key={movie.id}
                className="relative flex-shrink-0 cursor-pointer group hover:scale-105 transition-transform duration-300"
                onClick={() => onSelectMovie?.(movie)}
              >
                <div className="flex items-end">
                  {/* Number */}
                  <span className="text-[120px] font-black leading-none text-transparent select-none" style={{
                    WebkitTextStroke: "3px hsl(var(--muted-foreground) / 0.3)",
                  }}>
                    {i + 1}
                  </span>
                  {/* Card */}
                  <div className={`w-[120px] h-[170px] rounded-md overflow-hidden -ml-6 bg-gradient-to-br ${colorGradient} flex items-center justify-center`}>
                    <span className="text-foreground/80 font-bold text-xs text-center px-2">{movie.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-l from-background/80 to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-8 h-8 text-foreground" />
        </button>
      </div>
    </div>
  );
}
