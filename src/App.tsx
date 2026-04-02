import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leads from "./pages/Leads";
import Clientes from "./pages/Clientes";
import Imoveis from "./pages/Imoveis";
import Funil from "./pages/Funil";
import Agenda from "./pages/Agenda";
import Documentos from "./pages/Documentos";
import Financeiro from "./pages/Financeiro";
import Formularios from "./pages/Formularios";
import Automacoes from "./pages/Automacoes";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";
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
          <Route path="/leads" element={<Leads />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/funil" element={<Funil />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/formularios" element={<Formularios />} />
          <Route path="/automacoes" element={<Automacoes />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
