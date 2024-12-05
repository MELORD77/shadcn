import { AppSidebar } from "@/components/ui/app-sidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="absolute top-0 right-0 z-50 flex items-center justify-between  bg-background px-4 py-2">
        <ModeToggle />
      </div>
      <main className="p-4">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
