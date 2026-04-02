import { useState, useCallback } from "react";
import { FormTemplate, FormSection, FormField, createField, createSection, FieldType } from "@/lib/form-builder-types";

export function useFormBuilder(initialTemplate?: FormTemplate) {
  const [template, setTemplate] = useState<FormTemplate>(
    initialTemplate || {
      id: crypto.randomUUID?.() || Math.random().toString(36).slice(2),
      name: "Novo Formulário",
      description: "",
      sections: [createSection("Seção Principal")],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      uses: 0,
      isPublic: false,
    }
  );

  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);

  const selectedField = template.sections
    .flatMap((s) => s.fields)
    .find((f) => f.id === selectedFieldId) || null;

  const selectedSection = template.sections.find((s) => s.id === selectedSectionId) || null;

  const addField = useCallback((sectionId: string, type: FieldType) => {
    setTemplate((prev) => ({
      ...prev,
      updatedAt: new Date().toISOString(),
      sections: prev.sections.map((s) =>
        s.id === sectionId ? { ...s, fields: [...s.fields, createField(type)] } : s
      ),
    }));
  }, []);

  const updateField = useCallback((fieldId: string, updates: Partial<FormField>) => {
    setTemplate((prev) => ({
      ...prev,
      updatedAt: new Date().toISOString(),
      sections: prev.sections.map((s) => ({
        ...s,
        fields: s.fields.map((f) => (f.id === fieldId ? { ...f, ...updates } : f)),
      })),
    }));
  }, []);

  const removeField = useCallback((fieldId: string) => {
    setTemplate((prev) => ({
      ...prev,
      updatedAt: new Date().toISOString(),
      sections: prev.sections.map((s) => ({
        ...s,
        fields: s.fields.filter((f) => f.id !== fieldId),
      })),
    }));
    setSelectedFieldId((prev) => (prev === fieldId ? null : prev));
  }, []);

  const moveField = useCallback((sectionId: string, fromIndex: number, toIndex: number) => {
    setTemplate((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => {
        if (s.id !== sectionId) return s;
        const fields = [...s.fields];
        const [moved] = fields.splice(fromIndex, 1);
        fields.splice(toIndex, 0, moved);
        return { ...s, fields };
      }),
    }));
  }, []);

  const addSection = useCallback((title?: string) => {
    setTemplate((prev) => ({
      ...prev,
      updatedAt: new Date().toISOString(),
      sections: [...prev.sections, createSection(title)],
    }));
  }, []);

  const updateSection = useCallback((sectionId: string, title: string) => {
    setTemplate((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => (s.id === sectionId ? { ...s, title } : s)),
    }));
  }, []);

  const removeSection = useCallback((sectionId: string) => {
    setTemplate((prev) => ({
      ...prev,
      sections: prev.sections.filter((s) => s.id !== sectionId),
    }));
  }, []);

  const updateTemplateMeta = useCallback((updates: Partial<Pick<FormTemplate, "name" | "description" | "isPublic">>) => {
    setTemplate((prev) => ({ ...prev, ...updates, updatedAt: new Date().toISOString() }));
  }, []);

  return {
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
  };
}
