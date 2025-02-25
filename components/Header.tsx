export default function Header() {
  return (
    <header className="w-full p-6 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Mi Template 🚀</h1>
      <nav>
        <ul className="flex gap-6">
          <li><a href="#features" className="hover:text-gray-400">Características</a></li>
          <li><a href="#testimonials" className="hover:text-gray-400">Testimonios</a></li>
          <li><a href="#pricing" className="hover:text-gray-400">Precios</a></li>
        </ul>
      </nav>
      <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        Empezar
      </button>
    </header>
  );
}
