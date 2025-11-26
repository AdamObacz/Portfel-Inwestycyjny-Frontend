import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Home, LayoutDashboard, BarChart3, Users, Settings, Menu, X, TrendingUp, FileText, Wallet } from "lucide-react";
import { testApi } from "@/lib/api";
import { useTranslation } from "react-i18next";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "start", label: "Start", icon: Home },
  { id: "transactions", label: "Moje transakcje", icon: TrendingUp },
  { id: "portfolio", label: "Portfel", icon: Wallet },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "analytics", label: "Analiza", icon: BarChart3 },
  { id: "reports", label: "Raporty", icon: FileText },
  { id: "users", label: "Użytkownicy", icon: Users },
  { id: "settings", label: "Ustawienia", icon: Settings },
];

export default function DashboardLayout({ children, activeSection, onSectionChange }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    async function test() {
      const result = await testApi();
      if (result.isError) {
        alert(t(result.translationKey));
        return;
      }
    }

    test();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button className="p-2 rounded-md border border-border hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={cn("fixed top-0 left-0 h-full w-64 bg-card bg-[#161616] border-r border-border transition-transform duration-300 z-40", isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0")}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-foreground mb-8 ml-12">Dashboard</h1>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left", isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground")}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}

      {/* Main content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
