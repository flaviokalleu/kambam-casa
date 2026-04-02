import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { HeroBanner } from "@/components/streaming/HeroBanner";
import { ContentRow } from "@/components/streaming/ContentRow";
import { Top10Row } from "@/components/streaming/Top10Row";
import { MovieModal } from "@/components/streaming/MovieModal";
import { Movie, trendingMovies, newReleases, movies, series, actionMovies, dramaMovies, scifiMovies, allMovies } from "@/data/movies";

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="pl-64 transition-all duration-300">
        <HeroBanner onSelectMovie={setSelectedMovie} />

        <div className="px-8 -mt-32 relative z-10">
          <ContentRow title="🔥 Em Alta" movies={trendingMovies} onSelectMovie={setSelectedMovie} size="large" />
          <Top10Row title="Top 10 no Brasil Hoje" movies={allMovies} onSelectMovie={setSelectedMovie} />
          <ContentRow title="Lançamentos" movies={newReleases} onSelectMovie={setSelectedMovie} />
          <ContentRow title="Filmes" movies={movies} onSelectMovie={setSelectedMovie} />
          <ContentRow title="Séries" movies={series} onSelectMovie={setSelectedMovie} />
          <ContentRow title="Ação & Aventura" movies={actionMovies} onSelectMovie={setSelectedMovie} />
          <ContentRow title="Drama" movies={dramaMovies} onSelectMovie={setSelectedMovie} />
          <ContentRow title="Ficção Científica" movies={scifiMovies} onSelectMovie={setSelectedMovie} />
        </div>
      </main>

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

export default Index;
