import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Plus, ClipboardList, Copy, ExternalLink } from "lucide-react";

const templates = [
  { name: "Cadastro Completo Cliente", fields: 12, uses: 48, updated: "01/04/2026" },
  { name: "Pré-Aprovação Financiamento", fields: 8, uses: 32, updated: "28/03/2026" },
  { name: "Cadastro Rápido Lead", fields: 5, uses: 120, updated: "02/04/2026" },
  { name: "Ficha de Visita", fields: 10, uses: 65, updated: "30/03/2026" },
  { name: "Envio de Documentos", fields: 6, uses: 28, updated: "25/03/2026" },
];

const Formularios = () => (
  <AppLayout title="Formulários" subtitle="Form Builder e templates personalizáveis">
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button size="sm"><Plus className="w-4 h-4 mr-1" />Novo Formulário</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((t) => (
          <div key={t.name} className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.fields} campos · {t.uses} usos</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Atualizado: {t.updated}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 text-xs"><Copy className="w-3 h-3 mr-1" />Duplicar</Button>
              <Button variant="outline" size="sm" className="flex-1 text-xs"><ExternalLink className="w-3 h-3 mr-1" />Link Público</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Formularios;
