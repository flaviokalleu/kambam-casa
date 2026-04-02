import { X, Play, Plus, ThumbsUp, Share2, Star } from "lucide-react";
import { Movie, getColorForId } from "@/data/movies";
import { cn } from "@/lib/utils";

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export function MovieModal({ movie, onClose }: MovieModalProps) {
  if (!movie) return null;

  const colorGradient = getColorForId(movie.id);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8 pb-8 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-card rounded-xl overflow-hidden animate-scale-in shadow-2xl">
        {/* Hero */}
        <div className="relative h-[400px]">
          <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors z-10"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-4xl font-bold text-foreground mb-4">{movie.title}</h2>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-foreground text-background font-semibold rounded-md hover:bg-foreground/80 transition-colors">
                <Play className="w-5 h-5 fill-current" />
                Assistir
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-muted-foreground/60 flex items-center justify-center hover:border-foreground transition-colors">
                <Plus className="w-5 h-5 text-foreground" />
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-muted-foreground/60 flex items-center justify-center hover:border-foreground transition-colors">
                <ThumbsUp className="w-5 h-5 text-foreground" />
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-muted-foreground/60 flex items-center justify-center hover:border-foreground transition-colors">
                <Share2 className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4 text-sm">
                <span className="text-success font-bold">{movie.match}% Match</span>
                <span className="text-muted-foreground">{movie.year}</span>
                <span className="border border-muted-foreground/40 px-1.5 py-0.5 text-muted-foreground text-xs">{movie.maturity}</span>
                <span className="text-muted-foreground">{movie.duration}</span>
                <span className="flex items-center gap-1 text-warning">
                  <Star className="w-3.5 h-3.5 fill-current" /> {movie.rating}
                </span>
              </div>
              <p className="text-foreground/80 leading-relaxed">{movie.description}</p>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-muted-foreground">Gênero: </span>
                <span className="text-foreground">{movie.genre.join(", ")}</span>
              </div>
              {movie.type === "series" && (
                <>
                  <div>
                    <span className="text-muted-foreground">Temporadas: </span>
                    <span className="text-foreground">{movie.seasons}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Episódios: </span>
                    <span className="text-foreground">{movie.episodes}</span>
                  </div>
                </>
              )}
              <div>
                <span className="text-muted-foreground">Tipo: </span>
                <span className="text-foreground">{movie.type === "movie" ? "Filme" : "Série"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
