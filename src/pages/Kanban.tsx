import { useState } from "react";
import { FileText, Signature, FileCheck, Receipt, Plus, MoreHorizontal, GripVertical } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  client: string;
  type: "itbi" | "assinatura" | "avaliacao" | "nota";
  priority: "low" | "medium" | "high";
  dueDate?: string;
}

interface Column {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "A Fazer",
    color: "border-muted-foreground",
    tasks: [
      { id: "1", title: "ITBI - Apt 304", client: "Carlos Mendes", type: "itbi", priority: "high", dueDate: "25 Dez" },
      { id: "2", title: "Avaliação Imóvel", client: "Ana Costa", type: "avaliacao", priority: "medium", dueDate: "28 Dez" },
      { id: "3", title: "Nota Fiscal", client: "Paula Rocha", type: "nota", priority: "low" },
    ],
  },
  {
    id: "progress",
    title: "Em Andamento",
    color: "border-secondary",
    tasks: [
      { id: "4", title: "Assinatura Contrato", client: "Roberto Almeida", type: "assinatura", priority: "high", dueDate: "24 Dez" },
      { id: "5", title: "Emissão Nota", client: "Fernanda Lima", type: "nota", priority: "medium" },
      { id: "6", title: "ITBI - Loja 5", client: "Marcos Souza", type: "itbi", priority: "high", dueDate: "26 Dez" },
    ],
  },
  {
    id: "review",
    title: "Em Revisão",
    color: "border-warning",
    tasks: [
      { id: "7", title: "Avaliação Final", client: "Lucia Pereira", type: "avaliacao", priority: "medium", dueDate: "23 Dez" },
    ],
  },
  {
    id: "done",
    title: "Concluído",
    color: "border-success",
    tasks: [
      { id: "8", title: "ITBI - Casa 12", client: "João Silva", type: "itbi", priority: "medium" },
      { id: "9", title: "Contrato Assinado", client: "Maria Oliveira", type: "assinatura", priority: "low" },
    ],
  },
];

const typeIcons = {
  itbi: FileText,
  assinatura: Signature,
  avaliacao: FileCheck,
  nota: Receipt,
};

const typeLabels = {
  itbi: "ITBI",
  assinatura: "Assinatura",
  avaliacao: "Avaliação",
  nota: "Nota",
};

const priorityColors = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-warning/10 text-warning",
  high: "bg-destructive/10 text-destructive",
};

const Kanban = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="pl-64 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Kanban</h1>
              <p className="text-sm text-muted-foreground">
                Gerencie suas tarefas e processos
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" />
              Nova Tarefa
            </button>
          </div>
        </header>

        {/* Kanban Board */}
        <div className="p-8">
          <div className="flex gap-6 overflow-x-auto pb-4">
            {columns.map((column) => (
              <div
                key={column.id}
                className="flex-shrink-0 w-80 bg-card rounded-xl border border-border p-4"
              >
                {/* Column Header */}
                <div className={cn("flex items-center justify-between pb-4 border-b-2 mb-4", column.color)}>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{column.title}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {column.tasks.length}
                    </span>
                  </div>
                  <button className="p-1 rounded hover:bg-muted transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Tasks */}
                <div className="space-y-3">
                  {column.tasks.map((task) => {
                    const Icon = typeIcons[task.type];
                    return (
                      <div
                        key={task.id}
                        className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer group border border-transparent hover:border-border"
                      >
                        <div className="flex items-start gap-2 mb-3">
                          <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", priorityColors[task.priority])}>
                                {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Média" : "Baixa"}
                              </span>
                            </div>
                            <p className="font-medium text-foreground">{task.title}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                              <span className="text-xs text-secondary font-medium">
                                {task.client.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">{task.client}</span>
                          </div>
                          {task.dueDate && (
                            <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                          <Icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{typeLabels[task.type]}</span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Add Task Button */}
                  <button className="w-full p-3 rounded-lg border border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors text-muted-foreground hover:text-primary flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm">Adicionar tarefa</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Kanban;
