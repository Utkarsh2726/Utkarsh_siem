
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Layout = () => {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        <div className="relative flex flex-col h-screen">
          <div className="flex-1 overflow-y-auto">
            <SidebarTrigger className="absolute top-4 left-4 z-50 md:hidden" />
            <div className="container mx-auto p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
