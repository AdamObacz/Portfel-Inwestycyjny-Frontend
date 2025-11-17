import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import StartSection from "@/components/sections/StartSection";
import TransactionSection from "@/components/sections/TransactionSection";
// import PortfolioSection from "@/components/sections/PortfolioSection";
 import DashboardSection from "@/components/sections/DashboardSection";
// import AnalyticsSection from "@/components/sections/AnalyticsSection";
// import ReportsSection from "@/components/sections/ReportsSection";
// import UsersSection from "@/components/sections/UsersSection";
// import SettingsSection from "@/components/sections/SettingsSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("start");

  const renderSection = () => {
    switch (activeSection) {
      case "start":
        return <StartSection />;
      case "transactions":
        return <TransactionSection />;
      // case "portfolio":
      //   return <PortfolioSection />;
      case "dashboard":
        return <DashboardSection />;
      // case "analytics":
      //   return <AnalyticsSection />;
      // case "reports":
      //   return <ReportsSection />;
      // case "users":
      //   return <UsersSection />;
      // case "settings":
      //   return <SettingsSection />;
      default:
        return <StartSection />;
    }
  };

  return (
    <DashboardLayout 
      activeSection={activeSection} 
      onSectionChange={setActiveSection}
    >
      {renderSection()}
    </DashboardLayout>
  );
}