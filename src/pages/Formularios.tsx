import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, ClipboardList, Copy, ExternalLink, Edit, Eye, Globe, Lock } from "lucide-react";
import { DEFAULT_TEMPLATES } from "@/lib/form-builder-types";
import { useToast } from "@/hooks/use-toast";

const Formularios = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDuplicate = (name: string) => {
    toast({ title: "Formulário duplicado!", description: `"${name}" foi duplicado com sucesso.` });
  };

  return (
    <AppLayout title="Formulários" subtitle="Form Builder e templates personalizáveis">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-muted-foreground">
            {DEFAULT_TEMPLATES.length} formulários criados
          </p>
          <Button size="sm" onClick={() => navigate("/formularios/novo")}>
            <Plus className="w-4 h-4 mr-1" />Novo Formulário
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {DEFAULT_TEMPLATES.map((t) => (
            <div
              key={t.id}
              className="bg-card rounded-xl border border-border p-4 sm:p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
              onClick={() => navigate(`/formularios/${t.id}`)}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ClipboardList className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm truncate">{t.name}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
                    {t.sections.reduce((sum, s) => sum + s.fields.length, 0)} campos · {t.uses} usos
                  </p>
                </div>
                <Badge variant="outline" className={t.isPublic ? "bg-success/10 text-success border-success/20 text-[10px]" : "text-[10px]"}>
                  {t.isPublic ? <><Globe className="w-3 h-3 mr-1" />Público</> : <><Lock className="w-3 h-3 mr-1" />Privado</>}
                </Badge>
              </div>

              {t.description && (
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{t.description}</p>
              )}

              <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                <Button variant="outline" size="sm" className="flex-1 text-xs" onClick={() => navigate(`/formularios/${t.id}`)}>
                  <Edit className="w-3 h-3 mr-1" />Editar
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs" onClick={() => handleDuplicate(t.name)}>
                  <Copy className="w-3 h-3 mr-1" />Duplicar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Formularios;
