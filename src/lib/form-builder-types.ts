// Form Builder Types

export type FieldType =
  | "text"
  | "number"
  | "email"
  | "phone"
  | "cpf_cnpj"
  | "date"
  | "dropdown"
  | "multi_choice"
  | "checkbox"
  | "file_upload"
  | "image_upload"
  | "currency"
  | "address"
  | "textarea"
  | "section";

export interface FieldOption {
  id: string;
  label: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  description?: string;
  required: boolean;
  defaultValue?: string;
  options?: FieldOption[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
  };
}

export interface FormSection {
  id: string;
  title: string;
  fields: FormField[];
}

export interface FormTemplate {
  id: string;
  name: string;
  description?: string;
  sections: FormSection[];
  createdAt: string;
  updatedAt: string;
  uses: number;
  isPublic: boolean;
}

export const FIELD_TYPE_CONFIG: Record<FieldType, { label: string; icon: string; category: string }> = {
  text: { label: "Texto", icon: "Type", category: "Básico" },
  textarea: { label: "Texto Longo", icon: "AlignLeft", category: "Básico" },
  number: { label: "Número", icon: "Hash", category: "Básico" },
  email: { label: "E-mail", icon: "Mail", category: "Básico" },
  phone: { label: "Telefone", icon: "Phone", category: "Básico" },
  date: { label: "Data", icon: "Calendar", category: "Básico" },
  cpf_cnpj: { label: "CPF / CNPJ", icon: "CreditCard", category: "Documentos" },
  currency: { label: "Moeda (R$)", icon: "DollarSign", category: "Documentos" },
  address: { label: "Endereço", icon: "MapPin", category: "Documentos" },
  dropdown: { label: "Dropdown", icon: "ChevronDown", category: "Escolha" },
  multi_choice: { label: "Múltipla Escolha", icon: "ListChecks", category: "Escolha" },
  checkbox: { label: "Checkbox", icon: "CheckSquare", category: "Escolha" },
  file_upload: { label: "Upload Arquivo", icon: "Upload", category: "Upload" },
  image_upload: { label: "Upload Imagem", icon: "Image", category: "Upload" },
  section: { label: "Seção", icon: "LayoutList", category: "Layout" },
};

export function createField(type: FieldType): FormField {
  const config = FIELD_TYPE_CONFIG[type];
  const id = crypto.randomUUID?.() || Math.random().toString(36).slice(2);
  const field: FormField = {
    id,
    type,
    label: config.label,
    placeholder: "",
    required: false,
  };
  if (type === "dropdown" || type === "multi_choice") {
    field.options = [
      { id: "opt1", label: "Opção 1" },
      { id: "opt2", label: "Opção 2" },
    ];
  }
  return field;
}

export function createSection(title = "Nova Seção"): FormSection {
  return {
    id: crypto.randomUUID?.() || Math.random().toString(36).slice(2),
    title,
    fields: [],
  };
}

export const DEFAULT_TEMPLATES: FormTemplate[] = [
  {
    id: "tpl-1",
    name: "Cadastro Completo Cliente",
    description: "Formulário completo para cadastro de novos clientes",
    sections: [
      {
        id: "sec-1",
        title: "Dados Pessoais",
        fields: [
          { id: "f1", type: "text", label: "Nome Completo", required: true, placeholder: "Digite o nome completo" },
          { id: "f2", type: "cpf_cnpj", label: "CPF", required: true, placeholder: "000.000.000-00" },
          { id: "f3", type: "email", label: "E-mail", required: true, placeholder: "email@exemplo.com" },
          { id: "f4", type: "phone", label: "Telefone", required: true, placeholder: "(00) 00000-0000" },
          { id: "f5", type: "date", label: "Data de Nascimento", required: false },
        ],
      },
      {
        id: "sec-2",
        title: "Dados Financeiros",
        fields: [
          { id: "f6", type: "currency", label: "Renda Mensal", required: false, placeholder: "R$ 0,00" },
          { id: "f7", type: "dropdown", label: "Profissão", required: false, options: [
            { id: "o1", label: "Assalariado" }, { id: "o2", label: "Autônomo" }, { id: "o3", label: "Empresário" }, { id: "o4", label: "Aposentado" },
          ]},
        ],
      },
      {
        id: "sec-3",
        title: "Documentos",
        fields: [
          { id: "f8", type: "image_upload", label: "Foto do Documento", required: false },
          { id: "f9", type: "file_upload", label: "Comprovante de Renda", required: false },
        ],
      },
    ],
    createdAt: "2026-03-15",
    updatedAt: "2026-04-01",
    uses: 48,
    isPublic: false,
  },
  {
    id: "tpl-2",
    name: "Cadastro Rápido Lead",
    description: "Formulário simplificado para captura rápida de leads",
    sections: [
      {
        id: "sec-4",
        title: "Informações do Lead",
        fields: [
          { id: "f10", type: "text", label: "Nome", required: true, placeholder: "Seu nome" },
          { id: "f11", type: "phone", label: "WhatsApp", required: true, placeholder: "(00) 00000-0000" },
          { id: "f12", type: "email", label: "E-mail", required: false, placeholder: "email@exemplo.com" },
          { id: "f13", type: "dropdown", label: "Interesse", required: true, options: [
            { id: "o5", label: "Compra" }, { id: "o6", label: "Aluguel" }, { id: "o7", label: "Investimento" },
          ]},
          { id: "f14", type: "textarea", label: "Observações", required: false, placeholder: "Alguma observação?" },
        ],
      },
    ],
    createdAt: "2026-03-20",
    updatedAt: "2026-04-02",
    uses: 120,
    isPublic: true,
  },
  {
    id: "tpl-3",
    name: "Ficha de Visita",
    description: "Formulário para registro de visitas a imóveis",
    sections: [
      {
        id: "sec-5",
        title: "Dados da Visita",
        fields: [
          { id: "f15", type: "text", label: "Nome do Cliente", required: true },
          { id: "f16", type: "text", label: "Imóvel Visitado", required: true },
          { id: "f17", type: "date", label: "Data da Visita", required: true },
          { id: "f18", type: "dropdown", label: "Avaliação", required: true, options: [
            { id: "o8", label: "Excelente" }, { id: "o9", label: "Bom" }, { id: "o10", label: "Regular" }, { id: "o11", label: "Ruim" },
          ]},
          { id: "f19", type: "textarea", label: "Feedback do Cliente", required: false },
        ],
      },
    ],
    createdAt: "2026-03-18",
    updatedAt: "2026-03-30",
    uses: 65,
    isPublic: false,
  },
  {
    id: "tpl-4",
    name: "Pré-Aprovação Financiamento",
    description: "Formulário para análise de pré-aprovação de financiamento",
    sections: [
      {
        id: "sec-6",
        title: "Dados do Solicitante",
        fields: [
          { id: "f20", type: "text", label: "Nome Completo", required: true },
          { id: "f21", type: "cpf_cnpj", label: "CPF", required: true },
          { id: "f22", type: "currency", label: "Renda Bruta", required: true },
          { id: "f23", type: "currency", label: "Valor do Imóvel", required: true },
          { id: "f24", type: "currency", label: "Valor de Entrada", required: true },
          { id: "f25", type: "number", label: "Prazo (meses)", required: true },
        ],
      },
      {
        id: "sec-7",
        title: "Documentos",
        fields: [
          { id: "f26", type: "file_upload", label: "Holerite / IR", required: true },
          { id: "f27", type: "file_upload", label: "Comprovante de Residência", required: false },
        ],
      },
    ],
    createdAt: "2026-03-10",
    updatedAt: "2026-03-28",
    uses: 32,
    isPublic: false,
  },
  {
    id: "tpl-5",
    name: "Envio de Documentos",
    description: "Formulário para envio de documentos pelo cliente",
    sections: [
      {
        id: "sec-8",
        title: "Documentos Necessários",
        fields: [
          { id: "f28", type: "text", label: "Nome do Cliente", required: true },
          { id: "f29", type: "cpf_cnpj", label: "CPF", required: true },
          { id: "f30", type: "image_upload", label: "RG (Frente e Verso)", required: true },
          { id: "f31", type: "file_upload", label: "Comprovante de Renda", required: true },
          { id: "f32", type: "file_upload", label: "Comprovante de Residência", required: true },
          { id: "f33", type: "file_upload", label: "Outros Documentos", required: false },
        ],
      },
    ],
    createdAt: "2026-03-12",
    updatedAt: "2026-03-25",
    uses: 28,
    isPublic: true,
  },
];
