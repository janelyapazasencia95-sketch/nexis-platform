export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] flex items-center justify-center p-8">
      <section className="w-full max-w-md bg-white border border-[#C0E0FF] rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#253A82] mb-2">NEXIS</h1>
        <p className="text-gray-600 mb-6">Inicio de sesión</p>

        <div className="space-y-4">
          <input
            className="w-full border border-[#C0E0FF] rounded-xl p-3"
            placeholder="Usuario"
          />

          <input
            className="w-full border border-[#C0E0FF] rounded-xl p-3"
            placeholder="Contraseña"
            type="password"
          />

          <button className="w-full bg-[#253A82] text-white rounded-xl p-3 font-bold">
            Iniciar sesión
          </button>
        </div>
      </section>
    </main>
  );
}