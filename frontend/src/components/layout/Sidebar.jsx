import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  ShieldCheck,
  Package,
  Map,
  CreditCard,
  MessageSquareText,
  BarChart3,
  FileSearch,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { label: "Panel de control", path: "/panel-control", icon: LayoutDashboard },
  { label: "Proveedores", path: "/proveedores", icon: Users },
  { label: "Compras", path: "/compras", icon: ShoppingCart },
  { label: "Control de calidad", path: "/control-calidad", icon: ShieldCheck },
  { label: "Inventario", path: "/inventario", icon: Package },
  { label: "Mapa del Perú", path: "/mapa-peru", icon: Map },
  { label: "Pagos", path: "/pagos", icon: CreditCard },
  { label: "WhatsApp", path: "/whatsapp", icon: MessageSquareText },
  { label: "Reportes", path: "/reportes", icon: BarChart3 },
  { label: "Trazabilidad", path: "/lotes/VIC-2024-089/trazabilidad", icon: FileSearch },
  { label: "Usuarios", path: "/usuarios", icon: Users },
  { label: "Configuración", path: "/configuracion", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-[#C0E0FF]/50 shadow-sm flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#253A82] flex items-center justify-center text-white font-bold">
            N
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#253A82]">NEXIS</h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500">
              Gestión de fibra
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  isActive
                    ? "bg-[#88A2FF] text-white shadow-sm"
                    : "text-gray-600 hover:bg-[#C0E0FF]/30 hover:text-[#253A82]"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#C0E0FF]/40">
        <div className="flex items-center gap-3 bg-[#f3f3f4] p-3 rounded-xl">
          <div className="w-9 h-9 bg-[#253A82] text-white rounded-full flex items-center justify-center font-bold">
            J
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold">Janely</p>
            <p className="text-xs text-gray-500">Administradora</p>
          </div>
          <LogOut size={18} className="text-red-600" />
        </div>
      </div>
    </aside>
  );
}