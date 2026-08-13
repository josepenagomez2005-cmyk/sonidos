"use client";

import { Phone, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Atriles() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const atriles = [
    {
      img: "/fotos/hit-hat-Griffin.jpg",
      nombre: "Hi-Hat Griffin",
      desc: "Soporte de hi-hat profesional. Base estable, ajuste de altura y tensión. Perfecto para uso intensivo en presentaciones y estudio.",
      precio: "75 USD",
      estado: "Disponible",
     estadoColor: "bg-green-600 text-white border-green-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+el+Hi-Hat+Griffin.+%C2%BFMe+ayudas%3F",
    },
    {
      img: "/fotos/atril-ajustable-Griffin.jpg",
      nombre: "Atril Ajustable Griffin",
      desc: "Atril versátil con altura regulable. Se adapta a cualquier configuración de batería. Ideal para músicos que buscan flexibilidad.",
      precio: "71 USD",
      estado: "Disponible",
      estadoColor: "bg-green-600 text-white border-green-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+el+Atril+Ajustable+Griffin.+%C2%BFMe+ayudas%3F",
    },
    {
      img: "/fotos/atril-recto-Griffin.jpg",
      nombre: "Atril Recto Griffin",
      desc: "Atril recto resistente y fácil de ajustar. Construcción sólida para un rendimiento confiable en cualquier escenario.",
      precio: "58 USD",
      estado: "Disponible",
      estadoColor: "bg-green-600 text-white border-green-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+el+Atril+Recto+Griffin.+%C2%BFMe+ayudas%3F",
    },
    {
      img: "/fotos/atril-caja-Griffin.jpg",
      nombre: "Atril de Caja Griffin",
      desc: "Soporte para caja con base estable. Diseñado para mantener tu caja segura durante las sesiones más intensas.",
      precio: "42 USD",
      estado: "Disponible",
      estadoColor: "bg-green-600 text-white border-green-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+el+Atril+de+Caja+Griffin.+%C2%BFMe+ayudas%3F",
    },
    {
      img: "/fotos/atril-caja-Yamaha.jpg",
      nombre: "Atril de Caja Yamaha",
      desc: "Atril de caja de la reconocida marca Yamaha. Calidad y durabilidad garantizadas para tu batería.",
      precio: "35 USD",
      precioOriginal: "47 USD",
      estado: "Usado",
      estadoColor: "bg-red-600 text-white border-red-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+el+Atril+de+Caja+Yamaha.+%C2%BFMe+ayudas%3F",
    },
  ];

  return (
    <main
      className="min-h-screen text-[#f5efe6] font-sans overflow-x-hidden relative"
      style={{
        backgroundImage: "url('/fotos/fondo-madera.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/50"></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="bg-[#2e1f14]/90 backdrop-blur border-b border-[#c4a580]/30 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
            <div className="flex items-center gap-3">
              <img
                src="/fotos/baqueta-pro.jpg"
                alt="Baquetas Pro Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <h1 className="text-xl font-extrabold tracking-tight text-[#f5efe6]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Baquetas <span className="text-[#e8d5c0]">Pro</span>
              </h1>
            </div>
            <Link href="/" className="text-[#e8d5c0] hover:text-white transition text-sm font-medium flex items-center gap-1" style={{ fontFamily: "'Lora', serif" }}>
              <ArrowLeft size={16} /> Volver
            </Link>
          </div>
        </nav>

        {/* Hero pequeño */}
        <section className="py-16 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[#e8d5c0] text-[#2e1f14] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Soportes y Accesorios
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Atriles y Soportes
            </h2>
            <p className="text-[#f5efe6] text-lg max-w-2xl mx-auto font-medium" style={{ fontFamily: "'Lora', serif" }}>
              Todo lo que necesitas para montar tu batería. Calidad garantizada.
            </p>
          </motion.div>
        </section>

        {/* Grid de atriles */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atriles.map((prod, i) => (
              <motion.div
                key={prod.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#2e1f14]/80 backdrop-blur rounded-2xl shadow-sm border border-[#c4a580]/30 hover:shadow-md transition overflow-hidden relative"
              >
                {/* Badge de estado */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${prod.estadoColor}`} style={{ fontFamily: "'Lora', serif" }}>
                    {prod.estado}
                  </span>
                </div>

                <img src={prod.img} alt={prod.nombre} className="w-full h-48 object-contain bg-white" />
                <div className="p-6">
                  <h3 className="font-extrabold text-lg text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.nombre}</h3>
                  <p className="text-[#f5efe6] text-sm mt-2 font-medium leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>{prod.desc}</p>
                  <div className="mt-3">
                    {prod.precioOriginal && (
                      <p className="text-sm text-[#c4a580]/60 line-through" style={{ fontFamily: "'Lora', serif" }}>
                        {prod.precioOriginal}
                      </p>
                    )}
                    <p className="text-2xl font-black text-[#e8d5c0]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {prod.precio}
                    </p>
                  </div>
                  <a href={prod.mensajeWA} className="inline-block mt-3 bg-[#e8d5c0] text-[#1a0f0a] px-5 py-2 rounded-xl font-bold text-sm hover:bg-white transition w-full text-center" style={{ fontFamily: "'Lora', serif" }}>
                    Pedir por WhatsApp →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#e8d5c0] mb-4 font-medium" style={{ fontFamily: "'Lora', serif" }}>¿Tienes dudas?</p>
            <a href="https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+tengo+una+duda+sobre+los+atriles.+%C2%BFMe+ayudas%3F" className="bg-[#e8d5c0] hover:bg-white text-[#1a0f0a] px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl inline-flex items-center gap-2" style={{ fontFamily: "'Lora', serif" }}>
              <Phone size={20} /> Escríbeme por WhatsApp
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 px-4 border-t border-[#c4a580]/10">
          <p className="text-sm text-[#c4a580] font-medium" style={{ fontFamily: "'Lora', serif" }}>© 2026 Baquetas Pro · Todos los derechos reservados</p>
        </footer>
      </div>
    </main>
  );
}