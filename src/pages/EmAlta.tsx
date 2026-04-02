import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ContentCard } from "@/components/streaming/ContentCard";
import { MovieModal } from "@/components/streaming/MovieModal";
import { Movie, trendingMovies } from "@/data/movies";

const EmAlta = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64 transition-all duration-300">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="px-8 py-4">
            <h1 className="text-2xl font-bold text-foreground">🔥 Em Alta</h1>
            <p className="text-sm text-muted-foreground">Os mais populares agora</p>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-5 gap-4">
            {trendingMovies.map((movie) => (
              <ContentCard key={movie.id} movie={movie} onSelect={setSelectedMovie} size="large" />
            ))}
          </div>
        </div>
      </main>
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

export default EmAlta;
