"use client";

import { Phone, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NuevosProductos() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const productos = [
    { 
      imgs: ["/fotos/baqueteroM.jpg", "/fotos/baqueteroM-1.jpg"], 
      nombre: "Baquetero", 
      desc: "Bolso acolchado para transportar tus baquetas con seguridad.",
      precio: "28 USD",
      estado: "Disponible",
      estadoColor: "bg-green-600 text-white border-green-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Sonidos+y+quiero+pedir+el+Baquetero.+%C2%BFMe+ayudan%3F",
    },
    { 
      imgs: ["/fotos/baqueteroP.jpg", "/fotos/baqueteroP-3.jpg", "/fotos/baqueteroP-2.jpg"], 
      nombre: "Baquetero Pequeño", 
      desc: "Estuche compacto para baquetas. Ideal para llevar a ensayos.",
      precio: "17 USD",
      estado: "Disponible",
      estadoColor: "bg-green-600 text-white border-green-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Sonidos+y+quiero+pedir+el+Baquetero+Peque%C3%B1o.+%C2%BFMe+ayudan%3F",
    },
    { 
      imgs: ["/fotos/baquetas-Timbal.jpg"], 
      nombre: "Baquetas para Timbal", 
      desc: "Baquetas diseñadas para timbal. Mayor alcance y control.",
      precio: "8.25 USD",
      estado: "Disponible",
      estadoColor: "bg-green-600 text-white border-green-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Sonidos+y+quiero+pedir+las+Baquetas+para+Timbal.+%C2%BFMe+ayudan%3F",
    },
    { 
      imgs: ["/fotos/pad8.png"], 
      nombre: "Practice Pad 8\"", 
      desc: "Pad de práctica de 8 pulgadas. Perfecto para calentar y estudiar.",
      precio: "19 USD",
      estado: "Agotado",
      estadoColor: "bg-red-600 text-white border-red-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Sonidos+y+quiero+pedir+el+Practice+Pad+8+puLGadas.+%C2%BFMe+ayudan%3F",
    },
    { 
      imgs: ["/fotos/pad12.png"], 
      nombre: "Practice Pad 12\"", 
      desc: "Pad de práctica de 12 pulgadas. Superficie realista.",
      precio: "25 USD",
      estado: "Disponible",
      estadoColor: "bg-green-600 text-white border-green-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Sonidos+y+quiero+pedir+el+Practice+Pad+12+puLGadas.+%C2%BFMe+ayudan%3F",
    },
    { 
      imgs: ["/fotos/parches-Ktaxon.avif"], 
      nombre: "Pack de Parches", 
      desc: "Parches de calidad para tu batería. Sonido definido. Disponibles todos excepto el 22\". (En caso de compra por unidad -> 23 usd)",
      precio: "83 USD",
      estado: "Disponible",
      estadoColor: "bg-green-600 text-white border-green-700",
      mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Sonidos+y+quiero+pedir+el+Pack+de+Parches.+%C2%BFMe+ayudan%3F",
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
                src="/fotos/logoS.png"
                alt="SONIDOS - Tienda de Percusión"
                style={{ height: "50px", width: "auto", display: "block" }}
              />
            </div>
            <Link href="/" className="text-[#e8d5c0] hover:text-white transition text-sm font-medium flex items-center gap-1" style={{ fontFamily: "'Lora', serif" }}>
              <ArrowLeft size={16} /> Volver
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[#e8d5c0] text-[#2e1f14] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-4" style={{ fontFamily: "'Lora', serif" }}>
              Nuevos Productos
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ampliando el Catálogo
            </h2>
            <p className="text-[#f5efe6] text-lg max-w-2xl mx-auto font-medium" style={{ fontFamily: "'Lora', serif" }}>
              Más opciones para tu batería. Calidad y buenos precios.
            </p>
          </motion.div>
        </section>

        {/* Grid de productos */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((prod, i) => (
              <motion.div
                key={prod.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#2e1f14]/80 backdrop-blur rounded-2xl shadow-sm border border-[#c4a580]/30 hover:shadow-md transition overflow-hidden flex flex-col"
              >
                {/* Imagen con carrusel interno y badge */}
                <div className="relative h-48 overflow-hidden">
                  {/* Badge sobre la imagen */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${prod.estadoColor}`} style={{ fontFamily: "'Lora', serif" }}>
                      {prod.estado}
                    </span>
                  </div>

                  <div className="flex h-full overflow-x-auto scroll-horizontal snap-x snap-mandatory">
                    {prod.imgs.map((img, j) => (
                      <img
                        key={j}
                        src={img}
                        alt={`${prod.nombre} ${j + 1}`}
                        className="w-full h-48 object-contain bg-white snap-center shrink-0"
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-lg text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.nombre}</h3>
                  <p className="text-[#f5efe6] text-sm mt-2 font-medium leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>{prod.desc}</p>
                  <div className="mt-auto pt-4">
                    <p className="text-2xl font-black text-[#e8d5c0] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.precio}</p>
                    <a href={prod.mensajeWA} className="inline-block bg-[#e8d5c0] hover:bg-white text-[#1a0f0a] px-5 py-2 rounded-xl font-bold text-sm transition w-full text-center" style={{ fontFamily: "'Lora', serif" }}>
                      Pedir por WhatsApp →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#e8d5c0] mb-4 font-medium" style={{ fontFamily: "'Lora', serif" }}>¿Tienes dudas?</p>
            <a href="https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Sonidos+y+tengo+una+duda+sobre+los+nuevos+productos.+%C2%BFMe+ayudan%3F" className="bg-[#e8d5c0] hover:bg-white text-[#1a0f0a] px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl inline-flex items-center gap-2" style={{ fontFamily: "'Lora', serif" }}>
              <Phone size={20} /> Escríbeme por WhatsApp
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 px-4 border-t border-[#c4a580]/10">
          <div className="flex justify-center mb-3">
            <img
              src="/fotos/logoS.png"
              alt="SONIDOS - Tienda de Percusión"
              style={{ height: "40px", width: "auto" }}
            />
          </div>
          <p className="text-sm text-[#c4a580] font-medium" style={{ fontFamily: "'Lora', serif" }}>© 2026 Sonidos · Todos los derechos reservados</p>
        </footer>
      </div>
    </main>
  );
}