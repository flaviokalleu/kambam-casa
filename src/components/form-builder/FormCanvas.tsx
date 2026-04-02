import { FormField, FormSection, FIELD_TYPE_CONFIG, FieldType } from "@/lib/form-builder-types";
import { Button } from "@/components/ui/button";
import { GripVertical, Trash2, Plus, ChevronUp, ChevronDown } from "lucide-react";
import {
  Type, AlignLeft, Hash, Mail, Phone, Calendar, CreditCard, DollarSign, MapPin,
  ChevronDown as ChevDown, ListChecks, CheckSquare, Upload, Image, LayoutList,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Type, AlignLeft, Hash, Mail, Phone, Calendar, CreditCard, DollarSign, MapPin,
  ChevronDown: ChevDown, ListChecks, CheckSquare, Upload, Image, LayoutList,
};

interface FormCanvasProps {
  sections: FormSection[];
  selectedFieldId: string | null;
  selectedSectionId: string | null;
  onSelectField: (id: string) => void;
  onSelectSection: (id: string) => void;
  onRemoveField: (id: string) => void;
  onMoveField: (sectionId: string, from: number, to: number) => void;
  onRemoveSection: (id: string) => void;
  onAddSection: () => void;
}

function FieldCard({
  field,
  isSelected,
  onSelect,
  onRemove,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: {
  field: FormField;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const config = FIELD_TYPE_CONFIG[field.type];
  const IconComp = ICON_MAP[config.icon];

  return (
    <div
      onClick={onSelect}
      className={cn(
        "group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg border cursor-pointer transition-all duration-200",
        isSelected
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-border hover:border-primary/30 bg-card"
      )}
    >
      <div className="flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => { e.stopPropagation(); onMoveUp?.(); }}
          disabled={isFirst}
          className="text-muted-foreground hover:text-foreground disabled:opacity-20"
        >
          <ChevronUp className="w-3 h-3" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onMoveDown?.(); }}
          disabled={isLast}
          className="text-muted-foreground hover:text-foreground disabled:opacity-20"
        >
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
        {IconComp && <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm font-medium text-foreground truncate">{field.label}</p>
        <p className="text-[10px] sm:text-xs text-muted-foreground">
          {config.label}
          {field.required && <span className="text-destructive ml-1">*</span>}
        </p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onRemove(); }}
        className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all p-1"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

export function FormCanvas({
  sections,
  selectedFieldId,
  selectedSectionId,
  onSelectField,
  onSelectSection,
  onRemoveField,
  onMoveField,
  onRemoveSection,
  onAddSection,
}: FormCanvasProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      {sections.map((section) => (
        <div
          key={section.id}
          className={cn(
            "rounded-xl border p-3 sm:p-4 transition-all duration-200",
            selectedSectionId === section.id
              ? "border-primary/40 bg-primary/[0.02]"
              : "border-border"
          )}
        >
          <div
            className="flex items-center justify-between mb-3 cursor-pointer group"
            onClick={() => onSelectSection(section.id)}
          >
            <div className="flex items-center gap-2">
              <GripVertical className="w-4 h-4 text-muted-foreground/40" />
              <h3 className="text-xs sm:text-sm font-semibold text-foreground">{section.title}</h3>
              <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-md">
                {section.fields.length} {section.fields.length === 1 ? "campo" : "campos"}
              </span>
            </div>
            {sections.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); onRemoveSection(section.id); }}
                className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all p-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="space-y-2">
            {section.fields.map((field, idx) => (
              <FieldCard
                key={field.id}
                field={field}
                isSelected={selectedFieldId === field.id}
                onSelect={() => onSelectField(field.id)}
                onRemove={() => onRemoveField(field.id)}
                onMoveUp={() => onMoveField(section.id, idx, idx - 1)}
                onMoveDown={() => onMoveField(section.id, idx, idx + 1)}
                isFirst={idx === 0}
                isLast={idx === section.fields.length - 1}
              />
            ))}
            {section.fields.length === 0 && (
              <div className="border-2 border-dashed border-border rounded-lg p-6 sm:p-8 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Adicione campos usando o painel lateral
                </p>
              </div>
            )}
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        onClick={onAddSection}
        className="w-full border-dashed text-xs sm:text-sm"
      >
        <Plus className="w-4 h-4 mr-1" />
        Adicionar Seção
      </Button>
    </div>
  );
}
