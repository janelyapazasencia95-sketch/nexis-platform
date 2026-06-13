import { useEffect, useState } from "react";
import api from "../../services/api";

export default function DashboardPage() {
  const [estadoApi, setEstadoApi] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/estado/")
      .then((response) => {
        setEstadoApi(response.data);
        setError("");
      })
      .catch(() => {
        setError("No se pudo conectar con la API de NEXIS.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#253A82]">Panel de control</h1>
        <p className="text-gray-600">
          Resumen general de compras, proveedores, inventario y trazabilidad.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#C0E0FF]/50 rounded-2xl p-6 border border-[#C0E0FF]">
          <p className="text-sm text-gray-600">Sistema</p>
          <h2 className="text-2xl font-bold text-[#253A82]">
            {loading ? "Cargando..." : estadoApi?.sistema || "Sin datos"}
          </h2>
        </div>

        <div className="bg-[#E3FC87]/60 rounded-2xl p-6 border border-[#E3FC87]">
          <p className="text-sm text-gray-600">Estado</p>
          <h2 className="text-2xl font-bold text-[#253A82]">
            {loading ? "Cargando..." : estadoApi?.estado || "Sin datos"}
          </h2>
        </div>

        <div className="bg-[#AB9DFF]/30 rounded-2xl p-6 border border-[#AB9DFF]">
          <p className="text-sm text-gray-600">Versión</p>
          <h2 className="text-2xl font-bold text-[#253A82]">
            {loading ? "Cargando..." : estadoApi?.version || "Sin datos"}
          </h2>
        </div>
      </section>

      {error && (
        <div className="bg-[#FFB2F7]/40 border border-[#FFB2F7] text-[#253A82] rounded-xl p-4">
          {error}
        </div>
      )}

      {!loading && !error && estadoApi && (
        <div className="bg-[#253A82] text-white rounded-xl p-4">
          Conexión correcta entre React y Django REST Framework.
        </div>
      )}

      <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-[#C0E0FF] shadow-sm">
          <p className="text-gray-500">Proveedores</p>
          <h3 className="text-2xl font-bold text-[#253A82]">0</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#C0E0FF] shadow-sm">
          <p className="text-gray-500">Compras</p>
          <h3 className="text-2xl font-bold text-[#253A82]">0</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#C0E0FF] shadow-sm">
          <p className="text-gray-500">Lotes</p>
          <h3 className="text-2xl font-bold text-[#253A82]">0</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#C0E0FF] shadow-sm">
          <p className="text-gray-500">Pagos pendientes</p>
          <h3 className="text-2xl font-bold text-[#253A82]">S/ 0.00</h3>
        </div>
      </section>
    </div>
  );
}