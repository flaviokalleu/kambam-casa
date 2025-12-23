import { Gavel, CreditCard, FileText, Building2, CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Process {
  id: string;
  property: string;
  client: string;
  stage: "arrematacao" | "pagamento" | "escritura" | "registro";
  progress: number;
}

const mockProcesses: Process[] = [
  {
    id: "1",
    property: "Apt 1204 - Ed. Crystal",
    client: "Carlos Mendes",
    stage: "escritura",
    progress: 75,
  },
  {
    id: "2",
    property: "Casa 45 - Cond. Primavera",
    client: "Ana Costa",
    stage: "pagamento",
    progress: 50,
  },
  {
    id: "3",
    property: "Loja 02 - Centro",
    client: "Roberto Almeida",
    stage: "arrematacao",
    progress: 25,
  },
];

const stages = [
  { id: "arrematacao", label: "Arrematação", icon: Gavel },
  { id: "pagamento", label: "Pagamento", icon: CreditCard },
  { id: "escritura", label: "Escritura", icon: FileText },
  { id: "registro", label: "Registro", icon: Building2 },
];

const stageIndex = {
  arrematacao: 0,
  pagamento: 1,
  escritura: 2,
  registro: 3,
};

export function OngoingProcesses() {
  return (
    <div className="bg-card rounded-xl border border-border p-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Processos em Andamento</h3>
          <p className="text-sm text-muted-foreground">Arrematações, pagamentos e escrituras</p>
        </div>
        <span className="text-2xl font-bold text-secondary">{mockProcesses.length}</span>
      </div>

      <div className="space-y-6">
        {mockProcesses.map((process) => {
          const currentStageIdx = stageIndex[process.stage];
          return (
            <div
              key={process.id}
              className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-medium text-foreground">{process.property}</p>
                  <p className="text-sm text-muted-foreground">{process.client}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{process.progress}%</p>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between">
                {stages.map((stage, idx) => {
                  const isCompleted = idx < currentStageIdx;
                  const isCurrent = idx === currentStageIdx;
                  const Icon = stage.icon;

                  return (
                    <div key={stage.id} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                            isCompleted
                              ? "bg-success text-success-foreground"
                              : isCurrent
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <Icon className="w-4 h-4" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-xs mt-1",
                            isCurrent ? "text-primary font-medium" : "text-muted-foreground"
                          )}
                        >
                          {stage.label}
                        </span>
                      </div>

                      {idx < stages.length - 1 && (
                        <div
                          className={cn(
                            "w-8 h-0.5 mx-1",
                            isCompleted ? "bg-success" : "bg-muted"
                          )}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
