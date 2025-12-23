import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Kanban from "./pages/Kanban";
import Lembretes from "./pages/Lembretes";
import Investidores from "./pages/Investidores";
import Imoveis from "./pages/Imoveis";
import Laudos from "./pages/Laudos";
import Vencimentos from "./pages/Vencimentos";
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
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/lembretes" element={<Lembretes />} />
          <Route path="/investidores" element={<Investidores />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/laudos" element={<Laudos />} />
          <Route path="/vencimentos" element={<Vencimentos />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/lembretes" element={<Lembretes />} />
          <Route path="/investidores" element={<Investidores />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
