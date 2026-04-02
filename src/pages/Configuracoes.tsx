import { AppLayout } from "@/components/layout/AppLayout";
import { Settings, Users, Shield, Palette } from "lucide-react";

const sections = [
  { icon: Settings, title: "Geral", description: "Nome da empresa, logo, dados básicos" },
  { icon: Users, title: "Equipe", description: "Gerenciar corretores, gerentes e permissões" },
  { icon: Shield, title: "Segurança", description: "Autenticação, controle de acesso" },
  { icon: Palette, title: "Personalização", description: "Cores, tema, branding" },
];

const Configuracoes = () => (
  <AppLayout title="Configurações" subtitle="Configurações do sistema">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
      {sections.map((s) => (
        <div key={s.title} className="bg-card rounded-xl border border-border p-5 flex items-start gap-4 hover:border-primary/30 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <s.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">{s.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  </AppLayout>
);

export default Configuracoes;
