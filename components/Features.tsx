const features = [
  {
    icon: "🚀",
    title: "Carga ultrarrápida",
    description: "Optimizado para máxima velocidad con Next.js y TailwindCSS.",
  },
  {
    icon: "🎨",
    title: "Diseño moderno",
    description: "Interfaz limpia, profesional y fácil de personalizar.",
  },
  {
    icon: "⚡",
    title: "SEO optimizado",
    description: "Mejor posicionamiento en Google con buenas prácticas de SEO.",
  },
  {
    icon: "📱",
    title: "100% responsivo",
    description: "Adaptado para móviles, tablets y computadoras sin esfuerzo.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Características</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
