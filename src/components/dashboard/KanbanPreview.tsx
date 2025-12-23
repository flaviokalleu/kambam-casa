import { FileText, Signature, FileCheck, Receipt, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  client: string;
  type: "itbi" | "assinatura" | "avaliacao" | "nota";
  priority: "low" | "medium" | "high";
}

const columns = [
  {
    id: "todo",
    title: "A Fazer",
    color: "border-muted-foreground",
    tasks: [
      { id: "1", title: "ITBI - Apt 304", client: "Carlos Mendes", type: "itbi" as const, priority: "high" as const },
      { id: "2", title: "Avaliação", client: "Ana Costa", type: "avaliacao" as const, priority: "medium" as const },
    ],
  },
  {
    id: "progress",
    title: "Em Andamento",
    color: "border-secondary",
    tasks: [
      { id: "3", title: "Assinatura Contrato", client: "Roberto Almeida", type: "assinatura" as const, priority: "high" as const },
      { id: "4", title: "Emissão Nota", client: "Fernanda Lima", type: "nota" as const, priority: "low" as const },
    ],
  },
  {
    id: "done",
    title: "Concluído",
    color: "border-success",
    tasks: [
      { id: "5", title: "ITBI - Casa 12", client: "João Silva", type: "itbi" as const, priority: "medium" as const },
    ],
  },
];

const typeIcons = {
  itbi: FileText,
  assinatura: Signature,
  avaliacao: FileCheck,
  nota: Receipt,
};

const priorityColors = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-warning/10 text-warning",
  high: "bg-destructive/10 text-destructive",
};

export function KanbanPreview() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Tarefas</h3>
          <p className="text-sm text-muted-foreground">Kanban de processos</p>
        </div>
        <button className="p-2 rounded-lg hover:bg-muted transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {columns.map((column) => (
          <div key={column.id} className="space-y-3">
            <div className={cn("flex items-center gap-2 pb-2 border-b-2", column.color)}>
              <span className="font-medium text-sm text-foreground">{column.title}</span>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {column.tasks.length}
              </span>
            </div>

            <div className="space-y-2">
              {column.tasks.map((task) => {
                const Icon = typeIcons[task.type];
                return (
                  <div
                    key={task.id}
                    className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <Icon className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm font-medium text-foreground flex-1">
                        {task.title}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{task.client}</span>
                      <span
                        className={cn(
                          "text-xs px-2 py-0.5 rounded-full font-medium",
                          priorityColors[task.priority]
                        )}
                      >
                        {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Média" : "Baixa"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
