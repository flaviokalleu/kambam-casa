import { Clock } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";

const AssistirDepois = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-64 transition-all duration-300">
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="px-8 py-4">
            <h1 className="text-2xl font-bold text-foreground">Assistir Depois</h1>
            <p className="text-sm text-muted-foreground">Sua lista de conteúdos para assistir</p>
          </div>
        </header>

        <div className="p-8 flex flex-col items-center justify-center min-h-[60vh]">
          <Clock className="w-20 h-20 text-muted-foreground/20 mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Lista vazia</h2>
          <p className="text-muted-foreground">Adicione conteúdos à sua lista para assistir depois</p>
        </div>
      </main>
    </div>
  );
};

export default AssistirDepois;
