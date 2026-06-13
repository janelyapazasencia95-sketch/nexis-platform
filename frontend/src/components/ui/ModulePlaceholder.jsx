export default function ModulePlaceholder({ title, description }) {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#253A82]">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#C0E0FF] p-8 shadow-sm">
        <p className="text-gray-500">
          Esta vista será desarrollada siguiendo el diseño aprobado de NEXIS.
        </p>
      </div>
    </section>
  );
}