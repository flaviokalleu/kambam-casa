import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Bell, Search, Sparkles } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function AppLayout({ children, title, subtitle }: AppLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 sm:h-16 flex items-center gap-3 sm:gap-4 border-b border-border bg-card/50 backdrop-blur-xl px-3 sm:px-6 sticky top-0 z-30">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors" />
            {title && (
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-semibold text-foreground truncate">{title}</h1>
                  <Sparkles className="w-4 h-4 text-accent hidden sm:block" />
                </div>
                {subtitle && <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{subtitle}</p>}
              </div>
            )}
            <div className="flex items-center gap-1 sm:gap-2 ml-auto">
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
                <Search className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground transition-all relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
              </button>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center ml-1 cursor-pointer hover:scale-105 transition-transform">
                <span className="text-xs font-bold text-primary-foreground">JD</span>
              </div>
            </div>
          </header>
          <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
