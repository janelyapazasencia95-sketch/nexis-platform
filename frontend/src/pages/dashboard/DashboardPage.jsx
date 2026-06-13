import { useEffect, useState } from "react";
import api from "../../services/api";

export default function DashboardPage() {
  const [estadoApi, setEstadoApi] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/estado/")
      .then((response) => {
        setEstadoApi(response.data);
      })
      .catch(() => {
        setError("No se pudo conectar con la API de NEXIS.");
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#f9f9f9] p-10">
      <section className="max-w-5xl mx-auto">
        <div className="bg-white border border-[#C0E0FF] rounded-2xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-[#253A82] mb-2">
            NEXIS Platform
          </h1>

          <p className="text-gray-600 mb-8">
            Plataforma web para la gestión de fibra de vicuña.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#C0E0FF]/40 rounded-xl p-5">
              <p className="text-sm text-gray-600">Sistema</p>
              <h2 className="text-xl font-bold text-[#253A82]">
                {estadoApi?.sistema || "Cargando..."}
              </h2>
            </div>

            <div className="bg-[#E3FC87]/50 rounded-xl p-5">
              <p className="text-sm text-gray-600">Estado</p>
              <h2 className="text-xl font-bold text-[#253A82]">
                {estadoApi?.estado || "Cargando..."}
              </h2>
            </div>

            <div className="bg-[#AB9DFF]/30 rounded-xl p-5">
              <p className="text-sm text-gray-600">Versión</p>
              <h2 className="text-xl font-bold text-[#253A82]">
                {estadoApi?.version || "Cargando..."}
              </h2>
            </div>
          </div>

          {error && (
            <div className="bg-[#FFB2F7]/40 border border-[#FFB2F7] text-[#253A82] rounded-xl p-4">
              {error}
            </div>
          )}

          {!error && estadoApi && (
            <div className="bg-[#253A82] text-white rounded-xl p-4">
              Conexión correcta entre React y Django REST Framework.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}