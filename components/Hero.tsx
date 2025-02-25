"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
      <motion.h2 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lanza tu Web en Minutos
      </motion.h2>
      
      <motion.p 
        className="text-lg text-gray-300 max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Un template moderno y optimizado para startups y negocios digitales.
      </motion.p>
      
      <motion.button
        className="mt-6 bg-blue-500 px-6 py-3 rounded text-lg hover:bg-blue-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Comenzar Ahora
      </motion.button>
    </section>
  );
}
