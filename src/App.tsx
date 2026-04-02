import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Filmes from "./pages/Filmes";
import Series from "./pages/Series";
import EmAlta from "./pages/EmAlta";
import Buscar from "./pages/Buscar";
import Favoritos from "./pages/Favoritos";
import AssistirDepois from "./pages/AssistirDepois";
import DownloadsPage from "./pages/DownloadsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/em-alta" element={<EmAlta />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/assistir-depois" element={<AssistirDepois />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
