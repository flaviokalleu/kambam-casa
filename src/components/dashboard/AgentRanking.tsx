import { Trophy, TrendingUp, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const agents = [
  { name: "Ana Silva", vendas: 12, conversao: 78, receita: "R$ 2.4M", avatar: "AS", rank: 1 },
  { name: "Carlos Souza", vendas: 9, conversao: 65, receita: "R$ 1.8M", avatar: "CS", rank: 2 },
  { name: "Marina Costa", vendas: 8, conversao: 72, receita: "R$ 1.6M", avatar: "MC", rank: 3 },
  { name: "Pedro Lima", vendas: 6, conversao: 58, receita: "R$ 1.1M", avatar: "PL", rank: 4 },
];

const rankColors = [
  "from-accent to-warning",
  "from-muted-foreground to-muted-foreground",
  "from-chart-3 to-chart-3",
  "from-muted-foreground/50 to-muted-foreground/50",
];

export function AgentRanking() {
  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 animate-fade-up glass-card-hover transition-all duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Ranking de Corretores</h3>
          <p className="text-xs text-muted-foreground">Performance mensal</p>
        </div>
        <Trophy className="w-5 h-5 text-accent" />
      </div>
      <div className="space-y-3">
        {agents.map((agent) => (
          <div key={agent.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/50 transition-colors group">
            <div className="relative flex-shrink-0">
              <div className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold",
                agent.rank === 1 ? "bg-accent/20 text-accent" : "bg-primary/15 text-primary"
              )}>
                {agent.avatar}
              </div>
              {agent.rank <= 3 && (
                <div className={cn(
                  "absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-gradient-to-br text-background",
                  rankColors[agent.rank - 1]
                )}>
                  {agent.rank}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-foreground truncate">{agent.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-muted-foreground">{agent.vendas} vendas</span>
                <span className="text-[10px] text-success flex items-center gap-0.5">
                  <TrendingUp className="w-2.5 h-2.5" />{agent.conversao}%
                </span>
              </div>
            </div>
            <p className="text-xs font-bold text-foreground">{agent.receita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
