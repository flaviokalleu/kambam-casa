import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { FieldPalette } from "@/components/form-builder/FieldPalette";
import { FormCanvas } from "@/components/form-builder/FormCanvas";
import { FieldConfigPanel } from "@/components/form-builder/FieldConfigPanel";
import { FormPreview } from "@/components/form-builder/FormPreview";
import { useFormBuilder } from "@/hooks/use-form-builder";
import { DEFAULT_TEMPLATES, FieldType } from "@/lib/form-builder-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowLeft, Eye, Save, Settings2, Palette, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const FormBuilderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const existingTemplate = id ? DEFAULT_TEMPLATES.find((t) => t.id === id) : undefined;

  const {
    template,
    selectedField,
    selectedSection,
    selectedFieldId,
    selectedSectionId,
    setSelectedFieldId,
    setSelectedSectionId,
    addField,
    updateField,
    removeField,
    moveField,
    addSection,
    updateSection,
    removeSection,
    updateTemplateMeta,
  } = useFormBuilder(existingTemplate);

  const [activeTab, setActiveTab] = useState<string>("editor");

  const activeSectionId = selectedSectionId || template.sections[0]?.id;

  const handleAddField = (type: FieldType) => {
    if (activeSectionId) {
      addField(activeSectionId, type);
    }
  };

  const handleSave = () => {
    toast({
      title: "Formulário salvo!",
      description: `"${template.name}" foi salvo com sucesso.`,
    });
  };

  const totalFields = template.sections.reduce((sum, s) => sum + s.fields.length, 0);

  return (
    <AppLayout title="Form Builder" subtitle={template.name}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/formularios")}>
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Voltar</span>
            </Button>
            <Input
              value={template.name}
              onChange={(e) => updateTemplateMeta({ name: e.target.value })}
              className="text-sm font-semibold border-transparent hover:border-border focus:border-primary bg-transparent max-w-xs"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 mr-2">
              <Globe className="w-3.5 h-3.5 text-muted-foreground" />
              <Label className="text-xs text-muted-foreground cursor-pointer">Público</Label>
              <Switch
                checked={template.isPublic}
                onCheckedChange={(v) => updateTemplateMeta({ isPublic: v })}
              />
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {template.sections.length} seções · {totalFields} campos
            </span>
            <Button size="sm" onClick={handleSave}>
              <Save className="w-4 h-4 mr-1" />
              Salvar
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="editor" className="flex-1 sm:flex-none text-xs sm:text-sm">
              <Settings2 className="w-3.5 h-3.5 mr-1" />Editor
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex-1 sm:flex-none text-xs sm:text-sm">
              <Eye className="w-3.5 h-3.5 mr-1" />Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="mt-4">
            {isMobile ? (
              /* Mobile: stacked layout with sheet for palette/config */
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Palette className="w-3.5 h-3.5 mr-1" />Adicionar Campos
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-[70vh] overflow-auto">
                      <div className="pt-4">
                        <h3 className="text-sm font-semibold text-foreground mb-4">Campos Disponíveis</h3>
                        <FieldPalette onAddField={handleAddField} />
                      </div>
                    </SheetContent>
                  </Sheet>
                  {(selectedField || selectedSection) && (
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1 text-xs">
                          <Settings2 className="w-3.5 h-3.5 mr-1" />Configurar
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="bottom" className="h-[70vh] overflow-auto">
                        <div className="pt-4">
                          <FieldConfigPanel
                            field={selectedField}
                            section={selectedSection}
                            onUpdateField={updateField}
                            onUpdateSection={updateSection}
                            onClose={() => { setSelectedFieldId(null); setSelectedSectionId(null); }}
                          />
                        </div>
                      </SheetContent>
                    </Sheet>
                  )}
                </div>
                <FormCanvas
                  sections={template.sections}
                  selectedFieldId={selectedFieldId}
                  selectedSectionId={selectedSectionId}
                  onSelectField={setSelectedFieldId}
                  onSelectSection={setSelectedSectionId}
                  onRemoveField={removeField}
                  onMoveField={moveField}
                  onRemoveSection={removeSection}
                  onAddSection={addSection}
                />
              </div>
            ) : (
              /* Desktop: 3-column layout */
              <div className="grid grid-cols-[240px_1fr_280px] gap-4 min-h-[60vh]">
                {/* Left: Field Palette */}
                <div className="bg-card rounded-xl border border-border p-4 overflow-y-auto max-h-[70vh]">
                  <h3 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Campos</h3>
                  <FieldPalette onAddField={handleAddField} />
                </div>

                {/* Center: Canvas */}
                <div className="overflow-y-auto max-h-[70vh] pr-1">
                  <FormCanvas
                    sections={template.sections}
                    selectedFieldId={selectedFieldId}
                    selectedSectionId={selectedSectionId}
                    onSelectField={setSelectedFieldId}
                    onSelectSection={setSelectedSectionId}
                    onRemoveField={removeField}
                    onMoveField={moveField}
                    onRemoveSection={removeSection}
                    onAddSection={addSection}
                  />
                </div>

                {/* Right: Config Panel */}
                <div className="bg-card rounded-xl border border-border p-4 overflow-y-auto max-h-[70vh]">
                  <FieldConfigPanel
                    field={selectedField}
                    section={selectedField ? null : selectedSection}
                    onUpdateField={updateField}
                    onUpdateSection={updateSection}
                    onClose={() => { setSelectedFieldId(null); setSelectedSectionId(null); }}
                  />
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="preview" className="mt-4">
            <FormPreview sections={template.sections} formName={template.name} />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default FormBuilderPage;
