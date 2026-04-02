import { useState } from "react";
import { FormField, FormSection, FieldType, FIELD_TYPE_CONFIG, createField } from "@/lib/form-builder-types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Upload, Image, Plus, Trash2, Settings2, GripVertical, ChevronUp, ChevronDown } from "lucide-react";
import {
  Type, AlignLeft, Hash, Mail, Phone, Calendar, CreditCard, DollarSign, MapPin,
  ChevronDown as ChevDown, ListChecks, CheckSquare, LayoutList,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Type, AlignLeft, Hash, Mail, Phone, Calendar, CreditCard, DollarSign, MapPin,
  ChevronDown: ChevDown, ListChecks, CheckSquare, Upload, Image, LayoutList,
};

// Default lead form fields
const DEFAULT_LEAD_FIELDS: FormField[] = [
  { id: "lead-name", type: "text", label: "Nome Completo", placeholder: "Digite o nome", required: true },
  { id: "lead-email", type: "email", label: "E-mail", placeholder: "email@exemplo.com", required: false },
  { id: "lead-phone", type: "phone", label: "Telefone / WhatsApp", placeholder: "(00) 00000-0000", required: true },
  { id: "lead-origin", type: "dropdown", label: "Origem", required: true, options: [
    { id: "o1", label: "Site" }, { id: "o2", label: "WhatsApp" }, { id: "o3", label: "Indicação" }, { id: "o4", label: "Portal" }, { id: "o5", label: "Outros" },
  ]},
  { id: "lead-interest", type: "dropdown", label: "Interesse", required: false, options: [
    { id: "i1", label: "Apartamento" }, { id: "i2", label: "Casa" }, { id: "i3", label: "Sala Comercial" }, { id: "i4", label: "Cobertura" }, { id: "i5", label: "Terreno" },
  ]},
  { id: "lead-notes", type: "textarea", label: "Observações", placeholder: "Detalhes sobre o lead...", required: false },
];

const AVAILABLE_EXTRA_FIELDS: { type: FieldType; label: string }[] = [
  { type: "cpf_cnpj", label: "CPF / CNPJ" },
  { type: "currency", label: "Renda Mensal" },
  { type: "address", label: "Endereço" },
  { type: "date", label: "Data de Nascimento" },
  { type: "text", label: "Profissão" },
  { type: "number", label: "Nº de Dependentes" },
  { type: "dropdown", label: "Estado Civil" },
  { type: "file_upload", label: "Documento" },
  { type: "image_upload", label: "Foto" },
  { type: "text", label: "Campo Personalizado" },
];

function DynamicField({ field }: { field: FormField }) {
  const label = (
    <Label className="text-xs sm:text-sm font-medium text-foreground">
      {field.label}
      {field.required && <span className="text-destructive ml-0.5">*</span>}
    </Label>
  );

  switch (field.type) {
    case "text":
    case "email":
    case "phone":
    case "cpf_cnpj":
    case "number":
    case "currency":
    case "date":
    case "address":
      return (
        <div>
          {label}
          <Input
            type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"}
            placeholder={field.placeholder}
            className="mt-1.5"
          />
        </div>
      );
    case "textarea":
      return (
        <div>
          {label}
          <Textarea placeholder={field.placeholder} className="mt-1.5 min-h-[70px]" />
        </div>
      );
    case "dropdown":
      return (
        <div>
          {label}
          <Select>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent>
              {(field.options || []).map((opt) => (
                <SelectItem key={opt.id} value={opt.id}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    case "multi_choice":
      return (
        <div>
          {label}
          <div className="space-y-2 mt-2">
            {(field.options || []).map((opt) => (
              <label key={opt.id} className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
                <input type="radio" name={field.id} className="accent-primary" />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      );
    case "checkbox":
      return (
        <div className="flex items-center gap-2 pt-1">
          <Checkbox id={field.id} />
          {label}
        </div>
      );
    case "file_upload":
      return (
        <div>
          {label}
          <div className="mt-1.5 border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/30 transition-colors">
            <Upload className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
            <p className="text-[10px] sm:text-xs text-muted-foreground">Clique para fazer upload</p>
          </div>
        </div>
      );
    case "image_upload":
      return (
        <div>
          {label}
          <div className="mt-1.5 border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/30 transition-colors">
            <Image className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
            <p className="text-[10px] sm:text-xs text-muted-foreground">Clique para upload de imagem</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

interface NewLeadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewLeadDialog({ open, onOpenChange }: NewLeadDialogProps) {
  const [fields, setFields] = useState<FormField[]>([...DEFAULT_LEAD_FIELDS]);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const { toast } = useToast();

  const addExtraField = (type: FieldType, label: string) => {
    const field = createField(type);
    field.label = label;
    if (type === "dropdown" && label === "Estado Civil") {
      field.options = [
        { id: "ec1", label: "Solteiro(a)" }, { id: "ec2", label: "Casado(a)" },
        { id: "ec3", label: "Divorciado(a)" }, { id: "ec4", label: "Viúvo(a)" },
      ];
    }
    setFields((prev) => [...prev, field]);
  };

  const removeField = (id: string) => {
    setFields((prev) => prev.filter((f) => f.id !== id));
  };

  const moveField = (index: number, direction: -1 | 1) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= fields.length) return;
    setFields((prev) => {
      const arr = [...prev];
      [arr[index], arr[newIndex]] = [arr[newIndex], arr[index]];
      return arr;
    });
  };

  const toggleRequired = (id: string) => {
    setFields((prev) => prev.map((f) => f.id === id ? { ...f, required: !f.required } : f));
  };

  const updateLabel = (id: string, label: string) => {
    setFields((prev) => prev.map((f) => f.id === id ? { ...f, label } : f));
  };

  const handleSubmit = () => {
    toast({ title: "Lead cadastrado!", description: "O novo lead foi adicionado com sucesso." });
    onOpenChange(false);
    setIsCustomizing(false);
  };

  const handleReset = () => {
    setFields([...DEFAULT_LEAD_FIELDS]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base sm:text-lg">Novo Lead</DialogTitle>
            <Button
              variant={isCustomizing ? "default" : "outline"}
              size="sm"
              onClick={() => setIsCustomizing(!isCustomizing)}
              className="text-xs"
            >
              <Settings2 className="w-3.5 h-3.5 mr-1" />
              {isCustomizing ? "Concluir" : "Personalizar"}
            </Button>
          </div>
        </DialogHeader>

        {isCustomizing ? (
          /* Customization mode */
          <div className="space-y-4 mt-2">
            <p className="text-xs text-muted-foreground">
              Reordene, remova ou adicione campos ao formulário de cadastro de lead.
            </p>

            {/* Current fields */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Campos Atuais</p>
              {fields.map((field, idx) => {
                const config = FIELD_TYPE_CONFIG[field.type];
                const IconComp = ICON_MAP[config.icon];
                return (
                  <div key={field.id} className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-card group">
                    <div className="flex flex-col gap-0.5">
                      <button onClick={() => moveField(idx, -1)} disabled={idx === 0} className="text-muted-foreground hover:text-foreground disabled:opacity-20">
                        <ChevronUp className="w-3 h-3" />
                      </button>
                      <button onClick={() => moveField(idx, 1)} disabled={idx === fields.length - 1} className="text-muted-foreground hover:text-foreground disabled:opacity-20">
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {IconComp && <IconComp className="w-3.5 h-3.5 text-primary" />}
                    </div>
                    <Input
                      value={field.label}
                      onChange={(e) => updateLabel(field.id, e.target.value)}
                      className="flex-1 h-8 text-xs border-transparent hover:border-border focus:border-primary"
                    />
                    <button
                      onClick={() => toggleRequired(field.id)}
                      className={cn(
                        "text-[10px] px-2 py-0.5 rounded-full border transition-colors",
                        field.required
                          ? "bg-destructive/10 text-destructive border-destructive/20"
                          : "bg-muted text-muted-foreground border-border"
                      )}
                    >
                      {field.required ? "Obrigatório" : "Opcional"}
                    </button>
                    <button onClick={() => removeField(field.id)} className="text-muted-foreground hover:text-destructive p-1">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Add extra fields */}
            <div>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Adicionar Campo</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {AVAILABLE_EXTRA_FIELDS.map((ef, i) => {
                  const config = FIELD_TYPE_CONFIG[ef.type];
                  const IconComp = ICON_MAP[config.icon];
                  return (
                    <button
                      key={`${ef.type}-${i}`}
                      onClick={() => addExtraField(ef.type, ef.label)}
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-border text-xs font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all active:scale-95"
                    >
                      {IconComp && <IconComp className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
                      <span className="truncate">{ef.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <Button variant="outline" size="sm" onClick={handleReset} className="text-xs">
              Restaurar padrão
            </Button>
          </div>
        ) : (
          /* Form mode */
          <div className="space-y-4 mt-2">
            {fields.map((field) => (
              <DynamicField key={field.id} field={field} />
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button className="flex-1" onClick={handleSubmit}>
                Cadastrar Lead
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
