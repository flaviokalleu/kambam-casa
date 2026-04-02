import { useState } from "react";
import { Search } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ContentCard } from "@/components/streaming/ContentCard";
import { MovieModal } from "@/components/streaming/MovieModal";
import { Movie, series } from "@/data/movies";
import { cn } from "@/lib/utils";

const genres = ["Todos", "Drama", "Crime", "Ficção Científica", "Reality", "Documentário"];

const Series = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");

  const filtered = series.filter((m) => {
    const matchSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGenre = selectedGenre === "Todos" || m.genre.includes(selectedGenre);
    return matchSearch && matchGenre;
  });

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64 transition-all duration-300">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-bold text-foreground">Séries</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Buscar série..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-64 pl-10 pr-4 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            {genres.map((g) => (
              <button key={g} onClick={() => setSelectedGenre(g)} className={cn("px-4 py-2 rounded-full text-sm font-medium transition-colors", selectedGenre === g ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
                {g}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-4">
            {filtered.map((movie) => (
              <ContentCard key={movie.id} movie={movie} onSelect={setSelectedMovie} size="large" />
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-16">Nenhuma série encontrada</p>}
        </div>
      </main>
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

export default Series;
