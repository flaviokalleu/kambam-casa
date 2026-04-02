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
    <div className="bg-card rounded-xl border border-border p-5 flex items-start gap-4 animate-fade-up">
      <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0", iconColor || "bg-primary/10")}>
        <Icon className={cn("w-5 h-5", iconColor ? "text-card-foreground" : "text-primary")} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-foreground mt-0.5">{value}</p>
        {change && (
          <p className={cn(
            "text-xs mt-1 font-medium",
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
