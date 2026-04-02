import { useState } from "react";
import { Search } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ContentCard } from "@/components/streaming/ContentCard";
import { MovieModal } from "@/components/streaming/MovieModal";
import { Movie, allMovies } from "@/data/movies";

const Buscar = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = searchTerm.length > 0
    ? allMovies.filter((m) => m.title.toLowerCase().includes(searchTerm.toLowerCase()) || m.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase())))
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64 transition-all duration-300">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="px-8 py-4">
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar filmes, séries, gêneros..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg"
              />
            </div>
          </div>
        </header>

        <div className="p-8">
          {searchTerm.length === 0 ? (
            <div className="text-center py-24">
              <Search className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">Digite algo para buscar</p>
            </div>
          ) : filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-24 text-lg">Nenhum resultado para "{searchTerm}"</p>
          ) : (
            <div className="grid grid-cols-5 gap-4">
              {filtered.map((movie) => (
                <ContentCard key={movie.id} movie={movie} onSelect={setSelectedMovie} size="large" />
              ))}
            </div>
          )}
        </div>
      </main>
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

export default Buscar;
