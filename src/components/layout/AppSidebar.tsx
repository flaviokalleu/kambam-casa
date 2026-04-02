import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  Kanban,
  Calendar,
  FileText,
  DollarSign,
  Settings,
  UserCircle,
  MessageSquare,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainMenu = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Leads", path: "/leads" },
  { icon: UserCircle, label: "Clientes", path: "/clientes" },
  { icon: Building2, label: "Imóveis", path: "/imoveis" },
  { icon: Kanban, label: "Funil de Vendas", path: "/funil" },
];

const managementMenu = [
  { icon: Calendar, label: "Agenda", path: "/agenda" },
  { icon: FileText, label: "Documentos", path: "/documentos" },
  { icon: DollarSign, label: "Financeiro", path: "/financeiro" },
  { icon: ClipboardList, label: "Formulários", path: "/formularios" },
  { icon: MessageSquare, label: "Automações", path: "/automacoes" },
  { icon: BarChart3, label: "Relatórios", path: "/relatorios" },
];

const bottomMenu = [
  { icon: Settings, label: "Configurações", path: "/configuracoes" },
];

function MenuSection({ items, label, collapsed }: { items: typeof mainMenu; label: string; collapsed: boolean }) {
  const location = useLocation();

  return (
    <SidebarGroup>
      {!collapsed && <SidebarGroupLabel className="text-sidebar-foreground/50 uppercase text-[10px] tracking-widest font-semibold px-4">{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm",
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-sm"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <div className="h-16 flex items-center px-4 gap-3 border-b border-sidebar-border">
        <div className="w-9 h-9 rounded-xl bg-sidebar-primary flex items-center justify-center flex-shrink-0">
          <Building2 className="w-5 h-5 text-sidebar-primary-foreground" />
        </div>
        {!collapsed && (
          <span className="font-bold text-lg text-sidebar-foreground tracking-tight">
            Imob<span className="text-sidebar-primary">Flow</span>
          </span>
        )}
      </div>

      <SidebarContent className="px-2 py-4 flex flex-col gap-1">
        <MenuSection items={mainMenu} label="Principal" collapsed={collapsed} />
        <MenuSection items={managementMenu} label="Gestão" collapsed={collapsed} />
        <div className="mt-auto">
          <MenuSection items={bottomMenu} label="Sistema" collapsed={collapsed} />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
