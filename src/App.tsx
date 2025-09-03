import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import EquipmentManagement from "./pages/EquipmentManagement";
import IssueHandling from "./pages/IssueHandling";
import ExperimentsManagement from "./pages/ExperimentsManagement";
import StudentMonitoring from "./pages/StudentMonitoring";
import ReportsAnalytics from "./pages/ReportsAnalytics";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider defaultOpen={true}>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/equipment" element={<EquipmentManagement />} />
                <Route path="/issues" element={<IssueHandling />} />
                <Route path="/experiments" element={<ExperimentsManagement />} />
                <Route path="/students" element={<StudentMonitoring />} />
                <Route path="/reports" element={<ReportsAnalytics />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </SidebarProvider>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
