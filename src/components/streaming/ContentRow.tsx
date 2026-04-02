import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Movie } from "@/data/movies";
import { ContentCard } from "./ContentCard";

interface ContentRowProps {
  title: string;
  movies: Movie[];
  onSelectMovie?: (movie: Movie) => void;
  size?: "normal" | "large";
}

export function ContentRow({ title, movies, onSelectMovie, size = "normal" }: ContentRowProps) {
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
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-r from-background/80 to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-8 h-8 text-foreground" />
        </button>

        {/* Content */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto content-row px-2 py-4"
        >
          {movies.map((movie) => (
            <ContentCard key={movie.id} movie={movie} onSelect={onSelectMovie} size={size} />
          ))}
        </div>

        {/* Right arrow */}
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
