"use client";

import { Phone, Zap, Shield, Music, Star, BookOpen, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const mensajeWA = "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+hacer+un+pedido.+%C2%BFMe+ayudas%3F";

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

      <h1 className="sr-only">
  Baquetas Pro — Guía completa de baquetas para bateristas en Cuba. Compra baquetas 5A, 7A, 5B en La Habana con envíos a toda la habana.
</h1>
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="bg-[#2e1f14]/80 backdrop-blur border-b border-[#c4a580]/30 sticky top-0 z-50">
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
            <div className="hidden md:flex gap-8 text-sm font-medium text-[#e8d5c0]" style={{ fontFamily: "'Lora', serif" }}>
              <a href="#numeracion" className="hover:text-white transition">Numeración</a>
              <a href="#maderas" className="hover:text-white transition">Maderas</a>
              <a href="#marcas" className="hover:text-white transition">Marcas</a>
              <a href="#catalogo" className="hover:text-white transition">Catálogo</a>
              <a href="#resenas" className="hover:text-white transition">Reseñas</a>
              <a href="#contacto" className="hover:text-white transition">Pedir</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="bg-[#e8d5c0] text-[#2e1f14] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-6" style={{ fontFamily: "'Lora', serif" }}>
                🥁 Guía para Bateristas
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Todo Sobre<br />
                <span className="text-[#e8d5c0]">Baquetas</span>
              </h2>
              <p className="text-[#f5efe6] text-lg mb-8 leading-relaxed font-medium" style={{ fontFamily: "'Lora', serif" }}>
                Aprende a elegir las baquetas perfectas según numeración, madera y estilo musical. La guía más completa en español.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="#numeracion" className="bg-[#e8d5c0] text-[#2e1f14] px-8 py-3.5 rounded-xl font-bold hover:bg-white transition shadow-lg" style={{ fontFamily: "'Lora', serif" }}>
                  <BookOpen size={18} className="inline mr-2" />Comenzar Guía
                </a>
                <a href={mensajeWA} className="border-2 border-[#e8d5c0] text-[#e8d5c0] px-8 py-3.5 rounded-xl font-bold hover:bg-[#e8d5c0]/20 transition" style={{ fontFamily: "'Lora', serif" }}>
                  Pedir por WhatsApp
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <img
                src="/fotos/hero.jpg"
                alt="Baquetas Pro"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Numeración */}
        <section id="numeracion" className="py-20 px-4 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <span className="text-[#e8d5c0] font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "'Lora', serif" }}>Aprende</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>El Sistema de Numeración</h2>
            <p className="text-[#f5efe6] max-w-2xl mx-auto font-medium" style={{ fontFamily: "'Lora', serif" }}>
              ¿Qué significan los números y letras? Aquí te lo explicamos.
            </p>
          </motion.div>

          <div className="bg-[#2e1f14]/80 backdrop-blur rounded-3xl p-8 shadow-sm border border-[#c4a580]/30 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-extrabold mb-4 flex items-center gap-2 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="bg-[#e8d5c0] text-[#2e1f14] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  El Número
                </h3>
                <p className="text-[#f5efe6] leading-relaxed font-medium" style={{ fontFamily: "'Lora', serif" }}>
                  Indica el <strong className="text-[#e8d5c0]">diámetro</strong> de la baqueta. La regla general es: cuanto más bajo es el número, más gruesa y pesada es la baqueta. Por ejemplo: una <strong className="text-[#e8d5c0]">2B</strong> es mucho más gruesa que una <strong className="text-[#e8d5c0]">7A</strong>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-extrabold mb-4 flex items-center gap-2 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="bg-[#e8d5c0] text-[#2e1f14] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  La Letra
                </h3>
                <p className="text-[#f5efe6] leading-relaxed font-medium" style={{ fontFamily: "'Lora', serif" }}>
                  Indica el <strong className="text-[#e8d5c0]">estilo de música</strong> para el que se diseñó:
                </p>
                <ul className="mt-3 space-y-2 text-[#f5efe6] font-medium" style={{ fontFamily: "'Lora', serif" }}>
                  <li className="flex items-start gap-2"><span className="font-bold text-[#e8d5c0]">A</span> — Orchestra (Son las más ligeras y delgadas, ideales para toques suaves)</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-[#e8d5c0]">B</span> — Band (Suelen ser de mayor grosor y peso)</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-[#e8d5c0]">S</span> — Street (Para bandas de marcha. Eran las más gruesas y pesadas, para proyectar mucho volumen. Hoy en día poco comunes)</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-[#e8d5c0] text-sm italic text-center bg-[#2e1f14]/80 backdrop-blur p-4 rounded-xl border border-[#c4a580]/30 font-medium" style={{ fontFamily: "'Lora', serif" }}>
            💡 Este sistema no es exacto y varía entre fabricantes, pero sirve como guía general.
          </p>
        </section>

        {/* Tallas Clásicas */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <span className="text-[#e8d5c0] font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "'Lora', serif" }}>Las 4 Clásicas</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Tallas que Debes Conocer</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/fotos/5A.jpg", talla: "5A", tag: "La más popular", desc: "La reina de las baquetas. Su diámetro y peso medio la hacen ideal para una gran variedad de géneros. Es la opción más recomendada para la mayoría de principiantes.", genero: "Rock · Pop · Jazz · Estudio", icon: Star },
              { img: "/fotos/5B.jpg", talla: "5B", tag: "Más potencia", desc: "Un poco más gruesa que la 5A. Perfecta para quienes buscan más volumen y presencia en el golpeo.", genero: "Rock · Metal · En vivo", icon: Zap },
              { img: "/fotos/7A.jpg", talla: "7A", tag: "Ligera y rápida", desc: "Delgada y ligera. Diseñada para toques suaves y rápidos. Permite tocar a gran velocidad y durante mucho tiempo, debido a su composición. Es la favorita para estudiantes con manos pequeñas.", genero: "Jazz · Blues · Acústico", icon: Music },
              { img: "/fotos/2B.jpg", talla: "2B", tag: "La más gruesa", desc: "Una de las más gruesas en el mercado. Pesada y duradera. Preferida por muchos a la hora de estudiar controles de baqueta (practice pad). Perfecta para tocar a máximo volumen.", genero: "Heavy Metal · Práctica", icon: Shield },
            ].map((item, i) => (
              <motion.div
                key={item.talla}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#2e1f14]/80 backdrop-blur rounded-2xl shadow-sm border border-[#c4a580]/30 hover:shadow-md transition overflow-hidden"
              >
                <img src={item.img} alt={`Baqueta ${item.talla}`} className="w-full h-40 object-cover" />
                <div className="p-5 text-center">
                  <motion.div
                    initial={{ rotateY: 90, opacity: 0 }}
                    whileInView={{ rotateY: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="bg-[#e8d5c0] text-[#2e1f14] w-14 h-14 rounded-full flex items-center justify-center mx-auto -mt-10 relative z-10 text-xl font-black border-4 border-[#2e1f14]"
                  >
                    {item.talla}
                  </motion.div>
                  <span className="text-xs bg-[#3e2c1c] text-[#e8d5c0] px-2 py-0.5 rounded-full font-bold mt-3 inline-block" style={{ fontFamily: "'Lora', serif" }}>{item.tag}</span>
                  <p className="text-[#f5efe6] text-sm mt-3 font-medium" style={{ fontFamily: "'Lora', serif" }}>{item.desc}</p>
                  <div className="flex items-center justify-center gap-1 mt-3 text-xs text-[#e8d5c0] font-bold" style={{ fontFamily: "'Lora', serif" }}>
                    <item.icon size={14} /> {item.genero}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tipos de Madera */}
        <section id="maderas" className="py-20 px-4 bg-[#2e1f14]/60 backdrop-blur">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <span className="text-[#e8d5c0] font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "'Lora', serif" }}>Materiales</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Tipos de Madera</h2>
              <p className="text-[#f5efe6] max-w-2xl mx-auto font-medium" style={{ fontFamily: "'Lora', serif" }}>
                Más del 90% de las baquetas son de madera. El material influye en sonido, sensación y durabilidad.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/fotos/nogal.jpg",
                  nombre: "Hickory (Nogal Americano)",
                  tag: "El Estándar",
                  desc: "Es la madera más popular de la industria. Es un material muy resistente, con una excelente capacidad para absorber impactos, lo que reduce la fatiga en las muñecas.",
                  pros: ["Muy resistente", "Absorbe vibraciones", "Peso equilibrado"],
                  genero: "Rock · Pop · Metal · Jazz",
                },
                {
                  img: "/fotos/arce.jpg",
                  nombre: "Arce (Maple)",
                  tag: "Ligero y Cálido",
                  desc: "La más ligera, aproximadamente 10% menos que el Hickory. Esto permite fabricar baquetas de mayor diámetro sin que resulten pesadas. Sensación de ligereza y respuesta rápida, sonido cálido en platillos. Excelente para bateristas que buscan baquetas gruesas pero ligeras.",
                  pros: ["Muy ligero", "Sonido cálido", "Respuesta rápida"],
                  genero: "Jazz · Acústico · Práctica",
                },
                {
                  img: "/fotos/roble.jpg",
                  nombre: "Roble (Oak)",
                  tag: "Máxima Durabilidad",
                  desc: "Es la madera más densa, pesada y dura de las tres. Extrema durabilidad para bateristas que tocan fuerte. Transmite más vibraciones a las manos, lo que puede causar fatiga, es menos flexible y más rígida.",
                  pros: ["Muy duradero", "Máximo volumen", "Ideal para golpe fuerte"],
                  genero: "Heavy Metal · Rock Duro",
                },
              ].map((madera, i) => (
                <motion.div
                  key={madera.nombre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-[#2e1f14]/80 backdrop-blur rounded-2xl shadow-sm border border-[#c4a580]/30 hover:shadow-md transition overflow-hidden"
                >
                  <motion.img
                    src={madera.img}
                    alt={madera.nombre}
                    className="w-full h-40 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-extrabold mb-1 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{madera.nombre}</h3>
                    <span className="text-xs bg-[#3e2c1c] text-[#e8d5c0] px-2 py-0.5 rounded-full font-bold" style={{ fontFamily: "'Lora', serif" }}>{madera.tag}</span>
                    <p className="text-[#f5efe6] text-sm mt-3 mb-4 font-medium" style={{ fontFamily: "'Lora', serif" }}>{madera.desc}</p>
                    <div className="space-y-1 mb-4">
                      {madera.pros.map((pro) => (
                        <p key={pro} className="text-xs text-[#e8d5c0] flex items-center gap-1 font-bold" style={{ fontFamily: "'Lora', serif" }}>✅ {pro}</p>
                      ))}
                    </div>
                    <div className="text-xs text-[#f5efe6] font-medium" style={{ fontFamily: "'Lora', serif" }}>🎵 {madera.genero}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Marcas */}
        <section id="marcas" className="py-20 px-4 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <span className="text-[#e8d5c0] font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "'Lora', serif" }}>Marcas</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Principales Referencias de Marcas de Baquetas
            </h2>
            <p className="text-[#f5efe6] max-w-2xl mx-auto font-medium" style={{ fontFamily: "'Lora', serif" }}>
              Aunque son muchas las marcas en el mercado, algunas de las más reconocidas a nivel mundial son:
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                img: "/fotos/vic-firth.jpg",
                nombre: "Vic Firth",
                tag: "Icónica",
                desc: "Es una de las marcas más icónicas y utilizadas. Su línea American Classic es un estándar, y su modelo 5A es considerado el más vendido de la historia. Ofrecen una gran variedad de modelos y maderas.",
                dato: "American Classic · 5A el más vendido",
                color: "border-l-red-500",
                bg: "bg-[#2e1f14]/60",
              },
              {
                img: "/fotos/pro-mark.jpg",
                nombre: "Promark",
                tag: "Innovación",
                desc: "Otra marca líder, conocida por su innovación. Son famosos por sus baquetas de roble japonés (Shira Kashi Oak) y su tecnología FireGrain para mayor durabilidad.",
                dato: "FireGrain · Roble Japonés",
                color: "border-l-blue-500",
                bg: "bg-[#2e1f14]/80",
              },
              {
                img: "/fotos/zildjian.jpg",
                nombre: "Zildjian",
                tag: "Legendaria",
                desc: "Es la marca de platillos más famosa del mundo, y también tienen una sólida línea de baquetas. Son conocidos por sus modelos con puntas de nailon y por sus colaboraciones con artistas legendarios como Ringo Starr.",
                dato: "Puntas de nailon · Ringo Starr",
                color: "border-l-amber-500",
                bg: "bg-[#2e1f14]/60",
              },
            ].map((marca, i) => (
              <motion.div
                key={marca.nombre}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`${marca.bg} backdrop-blur rounded-2xl shadow-sm border border-[#c4a580]/20 ${marca.color} border-l-4 hover:shadow-md transition flex flex-col md:flex-row overflow-hidden`}
              >
                <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                  <img src={marca.img} alt={marca.nombre} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-extrabold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{marca.nombre}</h3>
                    <span className="text-xs bg-[#3e2c1c] text-[#e8d5c0] px-2 py-0.5 rounded-full font-bold" style={{ fontFamily: "'Lora', serif" }}>{marca.tag}</span>
                  </div>
                  <p className="text-[#f5efe6] text-sm mb-3 font-medium leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>{marca.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-[#e8d5c0] font-bold" style={{ fontFamily: "'Lora', serif" }}>
                    <span>⭐</span> {marca.dato}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-[#e8d5c0] text-sm italic text-center bg-[#2e1f14]/60 backdrop-blur p-4 rounded-xl border border-[#c4a580]/20 font-medium"
            style={{ fontFamily: "'Lora', serif" }}
          >
            💡 Estas marcas son de las más reconocidas y costosas del mercado, pero existen alternativas de calidad para todos los bolsillos. La decisión final es un balance entre presupuesto, necesidades y prioridades de cada uno.
          </motion.div>
        </section>

        {/* Bloque Comercial Unificado */}
        <div className="bg-gradient-to-b from-[#1a0f0a] via-[#2e1f14] to-[#1a0f0a]">

          {/* Transición al catálogo */}
          <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: "radial-gradient(circle, rgba(232,213,192,0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}></div>

            <div className="relative z-10 max-w-2xl mx-auto text-center px-4 py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Logo circular con pulso */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  animate={{ boxShadow: [
                    "0 0 0 0 rgba(232,213,192,0.5), 0 0 0 0 rgba(196,165,128,0.4)",
                    "0 0 0 15px rgba(232,213,192,0), 0 0 0 25px rgba(196,165,128,0)",
                    "0 0 0 0 rgba(232,213,192,0.5), 0 0 0 0 rgba(196,165,128,0.4)"
                  ] }}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-8 border-4 border-[#c4a580]"
                >
                  <motion.img
                    src="/fotos/hero.jpg"
                    alt="Baquetas Pro"
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-white text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Pero no necesitas gastar una fortuna.<br />
                  <span className="text-[#e8d5c0]">Aquí tienes la solución.</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-[#c4a580] text-lg md:text-xl font-medium mb-10"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Baquetas de calidad a precios justos. Materiales probados y envíos a toda La Habana.
                </motion.p>

                <motion.a
                  href="#catalogo"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="inline-flex flex-col items-center gap-2 text-[#e8d5c0] font-bold text-sm hover:text-white transition"
                >
                  <span style={{ fontFamily: "'Lora', serif" }}>Ver catálogo</span>
                  <motion.span
                    className="text-2xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    ↓
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* Línea divisoria */}
          <div className="max-w-2xl mx-auto px-4 py-4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c4a580]/50 to-transparent"></div>
          </div>

          {/* Catálogo */}
<section id="catalogo" className="py-20 px-4">
  <div className="max-w-5xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="text-center mb-6"
    >
      <span className="text-[#e8d5c0] font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "'Lora', serif" }}>Catálogo</span>
      <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
        Baquetas Disponibles
      </h2>
    </motion.div>

    {/* Banner de descuento web */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="max-w-2xl mx-auto mb-10"
    >
      <div className="bg-[#1a0f0a] border border-[#c4a580]/25 rounded-xl py-4 px-6 text-center shadow-md">
        <p className="text-[#e8d5c0] text-xs tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "'Lora', serif" }}>
          Precio Exclusivo Web
        </p>
        <p className="text-[#f5efe6] text-sm" style={{ fontFamily: "'Lora', serif" }}>
          Ahorra <span className="text-white font-bold">$0.50</span> por cada par al comprar desde esta página
        </p>
      </div>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {[
        {
          img: "/fotos/7A-AQJUNONG.jpg",
          nombre: "AQJUNONG 7A",
          desc: "Madera de maple. Ligera y rápida. Ideal para jazz, blues y manos pequeñas.",
          precio: "5.00 USD",
          precioOriginal: "5.50 USD",
          estado: "disponible",
          estadoTexto: "Disponible",
          estadoColor:  "bg-green-700/40 text-green-200 border-green-500/50",
          mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+las+AQJUNONG+7A.+%C2%BFMe+ayudas%3F",
        },
        {
          img: "/fotos/5A-sticks.jpg",
          nombre: "5A Maple",
          desc: "Madera de maple. La más versátil. Perfecta para rock, pop y principiantes.",
          precio: "5.50 USD",
          precioOriginal: "6.00 USD",
          estado: "disponible",
          estadoTexto: "Disponible",
          estadoColor:  "bg-green-700/40 text-green-200 border-green-500/50",
          mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+las+5A+Maple.+%C2%BFMe+ayudas%3F",
        },
        {
          img: "/fotos/5B-AQJUNONG.jpg",
          nombre: "AQJUNONG 5B",
          desc: "Madera de maple. Un poco más gruesa. Más volumen y presencia.",
          precio: "6.00 USD",
          precioOriginal: "6.50 USD",
          estado: "pocas",
          estadoTexto: "Quedan pocas",
          estadoColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
          mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+las+AQJUNONG+5B.+%C2%BFMe+ayudas%3F",
        },
      ].map((prod, i) => (
        <motion.div
          key={prod.nombre}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#2e1f14]/80 backdrop-blur rounded-2xl shadow-sm border border-[#c4a580]/30 hover:shadow-md transition overflow-hidden relative"
        >
          {/* Badge de estado */}
          <div className="absolute top-3 right-3 z-10">
            <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${prod.estadoColor}`} style={{ fontFamily: "'Lora', serif" }}>
              {prod.estadoTexto}
            </span>
          </div>

          <motion.img
            src={prod.img}
            alt={prod.nombre}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <div className="p-5 text-center">
            <h3 className="font-extrabold text-lg text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.nombre}</h3>
            <p className="text-[#f5efe6] text-sm mt-2 font-medium" style={{ fontFamily: "'Lora', serif" }}>{prod.desc}</p>
            <div className="mt-3">
              <p className="text-sm text-[#c4a580]/60 line-through" style={{ fontFamily: "'Lora', serif" }}>
                {prod.precioOriginal}
              </p>
              <motion.p
                whileHover={{ scale: 1.1, color: "#ffffff" }}
                className="text-2xl font-black text-[#e8d5c0] cursor-default"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {prod.precio}
              </motion.p>
            </div>
            <a href={prod.mensajeWA} className="inline-block mt-3 bg-[#e8d5c0] text-[#1a0f0a] px-5 py-2 rounded-xl font-bold text-sm hover:bg-white transition" style={{ fontFamily: "'Lora', serif" }}>
              Pedir por WhatsApp →
            </a>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Promoción */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="max-w-2xl mx-auto bg-[#1a0f0a] border border-[#c4a580]/25 rounded-xl p-6 text-center shadow-md"
    >
      <p className="text-[#e8d5c0] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'Lora', serif" }}>
        Promoción Especial
      </p>
      <p className="text-[#f5efe6] text-sm font-medium leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
        Al comprar <span className="text-white font-bold">2 pares o más</span>, recibe una <span className="text-white font-bold">llave de afinación</span> sin costo adicional.
      </p>
      <p className="text-[#c4a580]/60 text-xs mt-3" style={{ fontFamily: "'Lora', serif" }}>
        Combínalos como prefieras · Efectivo o transferencia · La Habana
      </p>
    </motion.div>
  </div>
</section>

{/* Reseñas + Dejar opinión */}
<section id="resenas" className="py-20 px-4 max-w-4xl mx-auto">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className="text-center mb-12"
  >
    <span className="text-[#e8d5c0] font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "'Lora', serif" }}>Reseñas</span>
    <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Lo Que Dicen Nuestros Clientes</h2>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    {[
      { nombre: "Alejandro G.", texto: "Excelente calidad. Las baquetas llegaron rápido y se sienten muy bien. Recomendado.", estrellas: 5, color: "border-l-amber-500" },
      { nombre: "Julio Gutierrez", texto: "Me gustaron las 5B, pero quisiera usar madera de hickory en vez de maple. Deberian agrandar su catalogo y brindar mas opciones.", estrellas: 4, color: "border-l-purple-500" },
      { nombre: "Pedro R.", texto: "Las AQJUNONG 7A son justo lo que buscaba. Livianas y rápidas. Además me llevé la llave gratis.", estrellas: 5, color: "border-l-emerald-500" },
    ].map((resena, i) => (
      <motion.div
        key={resena.nombre}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15 }}
        className={`bg-[#2e1f14]/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-[#c4a580]/20 ${resena.color} border-l-4`}
      >
        <div className="flex gap-1 mb-3 text-amber-400">
          {[...Array(resena.estrellas)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
        <p className="text-[#f5efe6] text-sm italic mb-4 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>"{resena.texto}"</p>
        <p className="text-[#e8d5c0] font-bold text-sm" style={{ fontFamily: "'Lora', serif" }}>{resena.nombre}</p>
      </motion.div>
    ))}
  </div>

  {/* Formulario de reseña */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 }}
    className="max-w-xl mx-auto bg-[#1a0f0a] border border-[#c4a580]/25 rounded-xl p-6 shadow-md"
  >
    <p className="text-[#e8d5c0] text-sm font-bold tracking-wide mb-4 text-center" style={{ fontFamily: "'Lora', serif" }}>
      Deja tu opinión
    </p>
    <form action="https://formspree.io/f/xzepdkbr" method="POST" className="space-y-3">
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        required
        className="w-full bg-[#2e1f14] border border-[#c4a580]/30 rounded-lg px-4 py-2.5 text-[#f5efe6] text-sm focus:border-[#e8d5c0] focus:outline-none"
        style={{ fontFamily: "'Lora', serif" }}
      />
      <textarea
        name="reseña"
        placeholder="Cuéntanos tu experiencia..."
        required
        rows={3}
        className="w-full bg-[#2e1f14] border border-[#c4a580]/30 rounded-lg px-4 py-2.5 text-[#f5efe6] text-sm focus:border-[#e8d5c0] focus:outline-none resize-none"
        style={{ fontFamily: "'Lora', serif" }}
      />
      <button
        type="submit"
        className="w-full bg-[#e8d5c0] hover:bg-white text-[#1a0f0a] py-2.5 rounded-lg font-bold text-sm transition"
        style={{ fontFamily: "'Lora', serif" }}
      >
        Enviar reseña
      </button>
    </form>
  </motion.div>
</section>




          {/* Contacto */}
          <section id="contacto" className="py-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-3xl mx-auto text-center px-4"
            >
              <span className="text-[#e8d5c0] font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "'Lora', serif" }}>Contacto</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>¿Listo para tus baquetas?</h2>
              <p className="text-[#e8d5c0] mb-10 font-medium" style={{ fontFamily: "'Lora', serif" }}>Escríbeme por WhatsApp. Envíos a toda La Habana.</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0 0 0 0 rgba(232,213,192,0.4)", "0 0 0 20px rgba(232,213,192,0)", "0 0 0 0 rgba(232,213,192,0)"] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                href={mensajeWA}
                className="bg-[#e8d5c0] hover:bg-white text-[#1a0f0a] px-10 py-5 rounded-xl font-bold text-xl transition shadow-xl inline-flex items-center gap-2"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <Phone size={24} /> Pedir por WhatsApp
              </motion.a>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="text-center py-10 px-4 border-t border-[#c4a580]/10">
            <p className="text-lg font-bold text-[#e8d5c0] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>🥁 Baquetas Pro</p>
            <p className="text-sm text-[#c4a580] font-medium" style={{ fontFamily: "'Lora', serif" }}>La guía más completa sobre baquetas en español</p>
            <p className="text-xs mt-6 text-[#8b7a6b]" style={{ fontFamily: "'Lora', serif" }}>© 2026 · Todos los derechos reservados</p>
            <p className="text-[#6b5a4b] text-xs mt-2" style={{ fontFamily: "'Lora', serif" }}>
  Baquetas disponibles en La Habana, Cuba · Envíos a toda la habana · Pago en efectivo o transferencia
</p>
          </footer>

        </div>
      </div>
    </main>
  );
}