import { AppLayout } from "@/components/layout/AppLayout";

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
    <div className="flex gap-4 overflow-x-auto pb-4">
      {columns.map((col) => (
        <div key={col.title} className="min-w-[260px] w-[260px] flex-shrink-0">
          <div className="flex items-center gap-2 mb-3 px-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: col.color }} />
            <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
            <span className="text-xs text-muted-foreground ml-auto">{col.cards.length}</span>
          </div>
          <div className="space-y-2">
            {col.cards.map((card, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-3 cursor-grab hover:border-primary/30 transition-colors">
                <p className="text-sm font-medium text-foreground">{card.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{card.property} · {card.time}</p>
              </div>
            ))}
            {col.cards.length === 0 && (
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center text-xs text-muted-foreground">
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
