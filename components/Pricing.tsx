const pricingPlans = [
  {
    name: "Básico",
    price: "$19/mes",
    features: ["1 Proyecto", "Soporte básico", "Acceso limitado"],
  },
  {
    name: "Pro",
    price: "$49/mes",
    features: ["5 Proyectos", "Soporte prioritario", "Acceso completo"],
    highlight: true,
  },
  {
    name: "Empresa",
    price: "$99/mes",
    features: ["Proyectos ilimitados", "Soporte 24/7", "Consultoría personalizada"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Planes de Precios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 bg-white shadow-md rounded-lg text-center ${
                plan.highlight ? "border-2 border-blue-500" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold my-4">{plan.price}</p>
              <ul className="text-gray-600 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">✅ {feature}</li>
                ))}
              </ul>
              <button className="bg-blue-500 px-6 py-3 rounded text-lg text-white hover:bg-blue-600">
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
