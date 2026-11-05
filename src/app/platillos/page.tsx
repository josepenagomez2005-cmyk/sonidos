"use client";

import { ArrowLeft, ChevronDown, Phone, Flame, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Platillos() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // Aquí puedes cambiar los productos por los que tengas tú
  const platillos = [

  { img: "/fotos/trashB.jpg", nombre: "Trash Crash Beatello 18\"", precio: "58 USD", desc: "Brillo y proyección profesional." },
  { img: "/fotos/splashAAX.jpg", nombre: "Splash Sabian AAX", precio: "140 USD", desc: "Splash Gama Alta, sonido espectacular " },
  { img: "/fotos/rideB.jpg", nombre: "Ride Beatello 20\"", precio: "65 USD", desc: "El estándar preciso en platillos." }, 
  { img: "/fotos/crashB.jpg", nombre: "Crash Beatello 16\"", precio: "58 USD", desc: "Brillo y proyección profesional." },
  { img: "/fotos/chinaB.jpg", nombre: "China Beatello 18\"", precio: "55 USD", desc: "Sonido de impacto necesario en todo set" },
  { img: "/fotos/splashB.jpg", nombre: "Splash Beatello 8\"", precio: "32 USD", desc: "La mejor relación calidad-precio." }, 
  
];

  return (
    <main className="min-h-screen text-[#f5efe6] font-sans overflow-x-hidden relative">
      <div 
        className="fixed inset-0 z-0"
        style={{ backgroundImage: "url('/fotos/fondo-madera.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      ></div>
      <div className="fixed inset-0 z-0 bg-black/40"></div>

      <div className="relative z-10">
        
        {/* Navbar */}
        <nav className="bg-[#2e1f14]/90 backdrop-blur border-b border-[#c4a580]/30 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
            <div className="flex items-center gap-3">
              <Link href="/">
                <img src="/fotos/logoS.png" alt="SONIDOS" style={{ height: "60px", width: "auto", display: "block" }} />
              </Link>
            </div>

            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-[#c4a580] hover:text-white transition-colors text-sm font-bold" 
              style={{ fontFamily: "'Lora', serif" }}
            >
              <ArrowLeft size={16} /> Volver
            </Link>
          </div>
        </nav>

        {/* Hero Platillos */}
        <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="bg-[#c4a580] text-[#1a0f0a] text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase inline-block mb-6" style={{ fontFamily: "'Lora', serif" }}>
              Platillos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.2] text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              El latido de tu batería,<br />
              <span className="text-[#e8d5c0] font-normal italic">en cada golpe.</span>
            </h2>
            <p className="text-[#f5efe6] text-lg mb-8 max-w-2xl mx-auto font-medium" style={{ fontFamily: "'Lora', serif" }}>
              Desde el brillo del crash hasta la sutileza del ride. Encuentra el set de platillos que dará vida a tu música.
            </p>
          </motion.div>
        </section>

        {/* Catálogo de Platillos */}
        <section className="py-12 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platillos.map((prod, i) => (
              <motion.div
                key={prod.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#2e1f14]/80 backdrop-blur rounded-2xl shadow-sm border border-[#c4a580]/30 hover:shadow-md transition overflow-hidden flex flex-col group"
              >
                <div className="relative h-56 bg-white overflow-hidden flex items-center justify-center p-4">
                  <img src={prod.img} alt={prod.nombre} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-grow text-center">
                  <h3 className="font-extrabold text-lg text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.nombre}</h3>
                  <p className="text-[#f5efe6] text-sm mb-4 font-medium" style={{ fontFamily: "'Lora', serif" }}>{prod.desc}</p>
                  <div className="mt-auto">
                    <p className="text-2xl font-black text-[#e8d5c0] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.precio}</p>
                    <a 
                      href={`https://wa.me/5356956051?text=Hola%2C+quiero+pedir+el+${prod.nombre}`} 
                      className="inline-block w-full bg-[#e8d5c0] text-[#1a0f0a] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white transition" 
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      Pedir por WhatsApp →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aviso de importación */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-2xl mx-auto bg-[#1a0f0a] border border-[#c4a580]/25 rounded-xl p-6 text-center shadow-md"
          >
            <Flame size={24} className="text-[#e8d5c0] mx-auto mb-3" />
            <p className="text-[#e8d5c0] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'Lora', serif" }}>
              ¿No ves el platillo que buscas?
            </p>
            <p className="text-[#f5efe6] text-sm font-medium leading-relaxed mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Podemos importar la marca y el modelo exacto que necesitas. Desde Zildjian hasta Meinl, te lo conseguimos.
            </p>
            <a 
              href="https://wa.me/5356956051?text=Hola%2C+estoy+buscando+un+platillo+espec%C3%ADfico+que+no+veo+en+la+web." 
              className="inline-flex items-center gap-2 text-[#c4a580] hover:text-white font-bold text-sm transition-colors" 
              style={{ fontFamily: "'Lora', serif" }}
            >
              Pedir cotización <ArrowRight size={16} />
            </a>
          </motion.div>
        </section>

        {/* Botón volver arriba */}
        <div className="text-center py-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-transparent hover:bg-[#c4a580]/10 border border-[#c4a580] text-[#e8d5c0] px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Volver arriba
            <ChevronDown size={16} className="rotate-180" />
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 px-4 border-t border-[#c4a580]/10">
          <img src="/fotos/logoS.png" alt="SONIDOS" style={{ height: "40px", margin: "0 auto", display: "block" }} />
          <p className="text-xs mt-4 text-[#8b7a6b]" style={{ fontFamily: "'Lora', serif" }}>© 2026 Sonidos · Todos los derechos reservados</p>
        </footer>
      </div>
    </main>
  );
}