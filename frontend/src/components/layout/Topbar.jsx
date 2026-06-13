import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white/80 backdrop-blur-md border-b border-[#C0E0FF]/40 flex items-center justify-between px-10 z-40">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Buscar en NEXIS..."
          className="w-full bg-[#f3f3f4] border-none rounded-full py-2 pl-11 pr-4 outline-none focus:ring-2 focus:ring-[#88A2FF]"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-[#C0E0FF]/30">
          <Bell size={20} />
        </button>

        <button className="p-2 rounded-full hover:bg-[#C0E0FF]/30">
          <UserCircle size={22} />
        </button>
      </div>
    </header>
  );
}