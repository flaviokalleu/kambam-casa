import { FormField, FormSection } from "@/lib/form-builder-types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, X } from "lucide-react";

interface FieldConfigPanelProps {
  field: FormField | null;
  section: FormSection | null;
  onUpdateField: (id: string, updates: Partial<FormField>) => void;
  onUpdateSection: (id: string, title: string) => void;
  onClose: () => void;
}

export function FieldConfigPanel({ field, section, onUpdateField, onUpdateSection, onClose }: FieldConfigPanelProps) {
  if (!field && !section) {
    return (
      <div className="flex items-center justify-center h-full text-center p-6">
        <div>
          <p className="text-sm text-muted-foreground">Selecione um campo ou seção para configurar</p>
        </div>
      </div>
    );
  }

  if (section && !field) {
    return (
      <div className="space-y-4 p-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Configurar Seção</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
        </div>
        <div>
          <Label className="text-xs">Título da Seção</Label>
          <Input
            value={section.title}
            onChange={(e) => onUpdateSection(section.id, e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
    );
  }

  if (!field) return null;

  const hasOptions = field.type === "dropdown" || field.type === "multi_choice";

  return (
    <div className="space-y-4 p-1">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Configurar Campo</h3>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
      </div>

      <div>
        <Label className="text-xs">Nome do Campo</Label>
        <Input
          value={field.label}
          onChange={(e) => onUpdateField(field.id, { label: e.target.value })}
          className="mt-1"
        />
      </div>

      <div>
        <Label className="text-xs">Descrição</Label>
        <Textarea
          value={field.description || ""}
          onChange={(e) => onUpdateField(field.id, { description: e.target.value })}
          className="mt-1 min-h-[60px]"
          placeholder="Descrição auxiliar do campo"
        />
      </div>

      <div>
        <Label className="text-xs">Placeholder</Label>
        <Input
          value={field.placeholder || ""}
          onChange={(e) => onUpdateField(field.id, { placeholder: e.target.value })}
          className="mt-1"
          placeholder="Texto de exemplo"
        />
      </div>

      <div>
        <Label className="text-xs">Valor Padrão</Label>
        <Input
          value={field.defaultValue || ""}
          onChange={(e) => onUpdateField(field.id, { defaultValue: e.target.value })}
          className="mt-1"
        />
      </div>

      <div className="flex items-center justify-between py-2 px-1 rounded-lg bg-muted/50">
        <Label className="text-xs font-medium cursor-pointer">Obrigatório</Label>
        <Switch
          checked={field.required}
          onCheckedChange={(checked) => onUpdateField(field.id, { required: checked })}
        />
      </div>

      {hasOptions && (
        <div>
          <Label className="text-xs">Opções</Label>
          <div className="space-y-2 mt-2">
            {(field.options || []).map((opt, i) => (
              <div key={opt.id} className="flex items-center gap-2">
                <Input
                  value={opt.label}
                  onChange={(e) => {
                    const newOpts = [...(field.options || [])];
                    newOpts[i] = { ...opt, label: e.target.value };
                    onUpdateField(field.id, { options: newOpts });
                  }}
                  className="text-xs"
                  placeholder={`Opção ${i + 1}`}
                />
                <button
                  onClick={() => {
                    const newOpts = (field.options || []).filter((_, idx) => idx !== i);
                    onUpdateField(field.id, { options: newOpts });
                  }}
                  className="text-muted-foreground hover:text-destructive flex-shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const newOpts = [...(field.options || []), { id: `opt-${Date.now()}`, label: `Opção ${(field.options?.length || 0) + 1}` }];
                onUpdateField(field.id, { options: newOpts });
              }}
              className="w-full text-xs border-dashed"
            >
              <Plus className="w-3.5 h-3.5 mr-1" />Adicionar Opção
            </Button>
          </div>
        </div>
      )}

      {(field.type === "text" || field.type === "textarea") && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-xs">Mín. Caracteres</Label>
            <Input
              type="number"
              value={field.validation?.minLength || ""}
              onChange={(e) => onUpdateField(field.id, { validation: { ...field.validation, minLength: Number(e.target.value) || undefined } })}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-xs">Máx. Caracteres</Label>
            <Input
              type="number"
              value={field.validation?.maxLength || ""}
              onChange={(e) => onUpdateField(field.id, { validation: { ...field.validation, maxLength: Number(e.target.value) || undefined } })}
              className="mt-1"
            />
          </div>
        </div>
      )}

      {field.type === "number" && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-xs">Valor Mín.</Label>
            <Input
              type="number"
              value={field.validation?.min ?? ""}
              onChange={(e) => onUpdateField(field.id, { validation: { ...field.validation, min: Number(e.target.value) } })}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-xs">Valor Máx.</Label>
            <Input
              type="number"
              value={field.validation?.max ?? ""}
              onChange={(e) => onUpdateField(field.id, { validation: { ...field.validation, max: Number(e.target.value) } })}
              className="mt-1"
            />
          </div>
        </div>
      )}
    </div>
  );
}
