import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  ClipboardList,
  Bell,
  FileText,
  Calendar,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Investidores", path: "/investidores" },
  { icon: Building2, label: "Imóveis", path: "/imoveis" },
  { icon: ClipboardList, label: "Kanban", path: "/kanban" },
  { icon: Bell, label: "Lembretes", path: "/lembretes" },
  { icon: FileText, label: "Laudos", path: "/laudos" },
  { icon: Calendar, label: "Vencimentos", path: "/vencimentos" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-50",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-sidebar-border px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow-primary">
            <TrendingUp className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="font-semibold text-lg text-foreground">
              InvestImob
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    "hover:bg-sidebar-accent group",
                    isActive
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5 flex-shrink-0 transition-colors",
                      isActive ? "text-primary" : "group-hover:text-primary"
                    )}
                  />
                  {!collapsed && (
                    <span className="font-medium text-sm">{item.label}</span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse Button */}
      <div className="p-4 border-t border-sidebar-border">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-sidebar-accent hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Recolher</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
