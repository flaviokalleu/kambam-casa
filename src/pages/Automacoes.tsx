import { AppLayout } from "@/components/layout/AppLayout";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Bell, Clock, Zap } from "lucide-react";

const automations = [
  { title: "Resposta automática WhatsApp", description: "Envia mensagem de boas-vindas para novos leads", status: "Ativo", icon: MessageSquare, triggers: 245 },
  { title: "Lembrete de follow-up", description: "Notifica corretor após 48h sem contato", status: "Ativo", icon: Clock, triggers: 89 },
  { title: "Notificação novo lead", description: "Alerta equipe quando novo lead é capturado", status: "Ativo", icon: Bell, triggers: 512 },
  { title: "Envio de proposta", description: "Envia proposta automaticamente após visita", status: "Pausado", icon: Zap, triggers: 34 },
];

const Automacoes = () => (
  <AppLayout title="Automações" subtitle="Automação de atendimento e processos">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {automations.map((a) => (
        <div key={a.title} className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-colors">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <a.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-foreground text-sm">{a.title}</p>
                <Badge variant="outline" className={a.status === "Ativo" ? "bg-success/10 text-success border-success/20" : "bg-muted text-muted-foreground"}>
                  {a.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{a.description}</p>
              <p className="text-xs text-muted-foreground mt-2">{a.triggers} execuções</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </AppLayout>
);

export default Automacoes;
