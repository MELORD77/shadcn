import { ModeToggle } from "@/components/ui/mode-toggle";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="h-screen w-screen">
      <div className="absolute top-0 right-0 z-50 flex items-center justify-between  bg-background px-4 py-2">
        <ModeToggle />
      </div>

      {/* <SidebarTrigger className="m-2 p-2 " /> */}
      <main className="p-4 w-full h-full ">
        <Outlet />
      </main>
    </div>
  );
}
