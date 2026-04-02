import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
  accentGradient?: boolean;
}

export function MetricCard({ title, value, change, changeType = "neutral", icon: Icon, iconColor, accentGradient }: MetricCardProps) {
  const TrendIcon = changeType === "positive" ? TrendingUp : changeType === "negative" ? TrendingDown : Minus;

  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border border-border p-4 sm:p-5 animate-fade-up transition-all duration-300 group",
      "glass-card glass-card-hover"
    )}>
      {/* Subtle glow background */}
      <div className={cn(
        "absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        accentGradient ? "bg-accent/10" : "bg-primary/10"
      )} />

      <div className="relative flex items-start gap-3 sm:gap-4">
        <div className={cn(
          "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110",
          accentGradient
            ? "bg-accent/15 group-hover:bg-accent/20"
            : iconColor || "bg-primary/15 group-hover:bg-primary/20"
        )}>
          <Icon className={cn(
            "w-4 h-4 sm:w-5 sm:h-5",
            accentGradient ? "text-accent" : "text-primary"
          )} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] sm:text-xs text-muted-foreground truncate uppercase tracking-wider font-medium">{title}</p>
          <p className={cn(
            "text-xl sm:text-2xl font-bold mt-0.5",
            accentGradient ? "gradient-text-accent" : "text-foreground"
          )}>{value}</p>
          {change && (
            <div className={cn(
              "flex items-center gap-1 mt-1.5",
              changeType === "positive" && "text-success",
              changeType === "negative" && "text-destructive",
              changeType === "neutral" && "text-muted-foreground"
            )}>
              <TrendIcon className="w-3 h-3" />
              <span className="text-[10px] sm:text-xs font-medium">{change}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
