import { AppLayout } from "@/components/layout/AppLayout";
import { Badge } from "@/components/ui/badge";

const columns = [
  { title: "Novos Leads", color: "hsl(220,70%,45%)", cards: [
    { name: "Ana Silva", property: "Apt 302", time: "2min" },
    { name: "Pedro Santos", property: "Casa 5", time: "1h" },
  ]},
  { title: "Contato", color: "hsl(200,70%,50%)", cards: [
    { name: "Carlos Mendes", property: "Sala 801", time: "3h" },
  ]},
  { title: "Qualificação", color: "hsl(38,92%,50%)", cards: [
    { name: "Juliana Costa", property: "Cobertura", time: "1d" },
    { name: "Marcos Lima", property: "Apt 1201", time: "2d" },
  ]},
  { title: "Visita", color: "hsl(180,60%,45%)", cards: [
    { name: "Roberto Alves", property: "Casa 12", time: "3d" },
  ]},
  { title: "Proposta", color: "hsl(152,60%,42%)", cards: [
    { name: "Mariana Souza", property: "Apt 501", time: "5d" },
  ]},
  { title: "Documentação", color: "hsl(130,55%,45%)", cards: [] },
  { title: "Vendido", color: "hsl(152,70%,38%)", cards: [
    { name: "Fernanda Lima", property: "Apt 302", time: "7d" },
  ]},
];

const Funil = () => (
  <AppLayout title="Funil de Vendas" subtitle="Acompanhe o progresso dos negócios">
    <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 -mx-3 px-3 sm:-mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none">
      {columns.map((col) => (
        <div key={col.title} className="min-w-[220px] sm:min-w-[260px] w-[220px] sm:w-[260px] flex-shrink-0 snap-start">
          <div className="flex items-center gap-2 mb-3 px-1">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: col.color }} />
            <h3 className="text-xs sm:text-sm font-semibold text-foreground truncate">{col.title}</h3>
            <Badge variant="secondary" className="ml-auto text-[10px] h-5 min-w-[20px] justify-center">{col.cards.length}</Badge>
          </div>
          <div className="space-y-2">
            {col.cards.map((card, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-3 cursor-grab hover:border-primary/30 hover:shadow-sm transition-all duration-200 active:shadow-md active:scale-[0.98]">
                <p className="text-xs sm:text-sm font-medium text-foreground">{card.name}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{card.property} · {card.time}</p>
              </div>
            ))}
            {col.cards.length === 0 && (
              <div className="border-2 border-dashed border-border rounded-lg p-4 sm:p-6 text-center text-[10px] sm:text-xs text-muted-foreground">
                Arraste cards aqui
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </AppLayout>
);

export default Funil;
