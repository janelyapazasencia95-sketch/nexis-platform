import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <main className="pt-24 px-10 pb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}