import { FormSection, FormField, FIELD_TYPE_CONFIG } from "@/lib/form-builder-types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Image } from "lucide-react";

interface FormPreviewProps {
  sections: FormSection[];
  formName: string;
}

function FieldPreview({ field }: { field: FormField }) {
  const label = (
    <Label className="text-xs sm:text-sm font-medium text-foreground">
      {field.label}
      {field.required && <span className="text-destructive ml-0.5">*</span>}
    </Label>
  );

  const desc = field.description ? (
    <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{field.description}</p>
  ) : null;

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
          {label}{desc}
          <Input
            type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"}
            placeholder={field.placeholder}
            defaultValue={field.defaultValue}
            className="mt-1.5"
            disabled
          />
        </div>
      );
    case "textarea":
      return (
        <div>
          {label}{desc}
          <Textarea placeholder={field.placeholder} className="mt-1.5 min-h-[80px]" disabled />
        </div>
      );
    case "dropdown":
      return (
        <div>
          {label}{desc}
          <Select disabled>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder={field.placeholder || "Selecione..."} />
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
          {label}{desc}
          <div className="space-y-2 mt-2">
            {(field.options || []).map((opt) => (
              <label key={opt.id} className="flex items-center gap-2 text-xs sm:text-sm text-foreground cursor-pointer">
                <input type="radio" name={field.id} disabled className="accent-primary" />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      );
    case "checkbox":
      return (
        <div className="flex items-start gap-2 pt-1">
          <Checkbox id={field.id} disabled />
          <div>
            {label}{desc}
          </div>
        </div>
      );
    case "file_upload":
      return (
        <div>
          {label}{desc}
          <div className="mt-1.5 border-2 border-dashed border-border rounded-lg p-4 sm:p-6 text-center">
            <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
            <p className="text-xs text-muted-foreground">Clique ou arraste para fazer upload</p>
          </div>
        </div>
      );
    case "image_upload":
      return (
        <div>
          {label}{desc}
          <div className="mt-1.5 border-2 border-dashed border-border rounded-lg p-4 sm:p-6 text-center">
            <Image className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
            <p className="text-xs text-muted-foreground">Clique ou arraste para fazer upload de imagem</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function FormPreview({ sections, formName }: FormPreviewProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-card rounded-xl border border-border p-4 sm:p-8">
        <h2 className="text-base sm:text-xl font-bold text-foreground mb-6">{formName}</h2>
        <div className="space-y-6 sm:space-y-8">
          {sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground border-b border-border pb-2 mb-4">
                {section.title}
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {section.fields.map((field) => (
                  <FieldPreview key={field.id} field={field} />
                ))}
                {section.fields.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-4">Nenhum campo nesta seção</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-6 sm:mt-8" disabled>Enviar</Button>
      </div>
    </div>
  );
}
