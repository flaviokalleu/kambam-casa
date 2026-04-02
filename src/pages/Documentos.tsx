import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { FileText, Upload, FolderOpen } from "lucide-react";

const folders = [
  { name: "Ana Silva", docs: 5, lastUpdate: "02/04/2026" },
  { name: "Carlos Mendes", docs: 3, lastUpdate: "01/04/2026" },
  { name: "Juliana Costa", docs: 7, lastUpdate: "31/03/2026" },
  { name: "Roberto Alves", docs: 2, lastUpdate: "30/03/2026" },
];

const Documentos = () => (
  <AppLayout title="Documentos" subtitle="Gestão documental por cliente">
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button size="sm"><Upload className="w-4 h-4 mr-1" />Upload</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {folders.map((f) => (
          <div key={f.name} className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-colors cursor-pointer text-center">
            <FolderOpen className="w-10 h-10 text-primary/60 mx-auto mb-3" />
            <p className="font-medium text-foreground text-sm">{f.name}</p>
            <p className="text-xs text-muted-foreground mt-1">{f.docs} documentos</p>
            <p className="text-xs text-muted-foreground">Atualizado: {f.lastUpdate}</p>
          </div>
        ))}
      </div>
    </div>
  </AppLayout>
);

export default Documentos;
