import { cn } from "@/lib/utils";

interface GaugeProps {
  label: string;
  value: number;
  max: number;
  color: string;
  suffix?: string;
}

function RadialGauge({ label, value, max, color, suffix = "%" }: GaugeProps) {
  const pct = Math.round((value / max) * 100);
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" fill="none" stroke="hsl(225,15%,16%)" strokeWidth="5" />
          <circle
            cx="40" cy="40" r="36" fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
            style={{ filter: `drop-shadow(0 0 6px ${color}40)` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm sm:text-base font-bold text-foreground">{value}{suffix}</span>
        </div>
      </div>
      <span className="text-[10px] sm:text-xs text-muted-foreground text-center font-medium">{label}</span>
    </div>
  );
}

export function PerformanceGauges() {
  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 animate-fade-up glass-card-hover transition-all duration-300">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm sm:text-base font-semibold text-foreground">Performance da Equipe</h3>
        <p className="text-xs text-muted-foreground">Indicadores chave</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <RadialGauge label="Conv. Leads" value={68} max={100} color="hsl(220,80%,55%)" />
        <RadialGauge label="Satisfação" value={92} max={100} color="hsl(152,60%,45%)" />
        <RadialGauge label="Tempo Resp." value={4.2} max={10} color="hsl(25,95%,53%)" suffix="min" />
        <RadialGauge label="Meta Vendas" value={85} max={100} color="hsl(280,60%,55%)" />
      </div>
    </div>
  );
}
