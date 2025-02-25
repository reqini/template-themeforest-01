const testimonials = [
  {
    name: "María Gómez",
    feedback: "Este template es increíble, súper fácil de usar y muy rápido.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos López",
    feedback: "Me ahorró horas de desarrollo, es perfecto para mi startup.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sofía Fernández",
    feedback: "Diseño moderno y muy bien optimizado para SEO. Lo recomiendo!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Testimonios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-100 shadow-md rounded-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
