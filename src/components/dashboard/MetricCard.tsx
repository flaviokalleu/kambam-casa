import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
}

export function MetricCard({ title, value, change, changeType = "neutral", icon: Icon, iconColor }: MetricCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-4 sm:p-5 flex items-start gap-3 sm:gap-4 animate-fade-up hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
      <div className={cn(
        "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
        iconColor || "bg-primary/10"
      )}>
        <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5", iconColor ? "text-card-foreground" : "text-primary")} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm text-muted-foreground truncate">{title}</p>
        <p className="text-xl sm:text-2xl font-bold text-foreground mt-0.5">{value}</p>
        {change && (
          <p className={cn(
            "text-[10px] sm:text-xs mt-1 font-medium",
            changeType === "positive" && "text-success",
            changeType === "negative" && "text-destructive",
            changeType === "neutral" && "text-muted-foreground"
          )}>
            {change}
          </p>
        )}
      </div>
    </div>
  );
}
