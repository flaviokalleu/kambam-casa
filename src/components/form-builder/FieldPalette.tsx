import { FieldType, FIELD_TYPE_CONFIG } from "@/lib/form-builder-types";
import {
  Type, AlignLeft, Hash, Mail, Phone, Calendar, CreditCard, DollarSign, MapPin,
  ChevronDown, ListChecks, CheckSquare, Upload, Image, LayoutList,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Type, AlignLeft, Hash, Mail, Phone, Calendar, CreditCard, DollarSign, MapPin,
  ChevronDown, ListChecks, CheckSquare, Upload, Image, LayoutList,
};

const CATEGORIES = ["Básico", "Documentos", "Escolha", "Upload", "Layout"];

interface FieldPaletteProps {
  onAddField: (type: FieldType) => void;
}

export function FieldPalette({ onAddField }: FieldPaletteProps) {
  return (
    <div className="space-y-4">
      {CATEGORIES.map((cat) => {
        const fields = (Object.entries(FIELD_TYPE_CONFIG) as [FieldType, typeof FIELD_TYPE_CONFIG[FieldType]][])
          .filter(([, config]) => config.category === cat);
        if (fields.length === 0) return null;
        return (
          <div key={cat}>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2 px-1">{cat}</p>
            <div className="grid grid-cols-2 gap-1.5">
              {fields.map(([type, config]) => {
                const IconComp = ICON_MAP[config.icon];
                return (
                  <button
                    key={type}
                    onClick={() => onAddField(type)}
                    className={cn(
                      "flex items-center gap-2 px-2.5 py-2 rounded-lg border border-border text-xs font-medium",
                      "text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200",
                      "active:scale-95"
                    )}
                  >
                    {IconComp && <IconComp className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
                    <span className="truncate">{config.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
