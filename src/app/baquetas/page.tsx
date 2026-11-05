"use client";

import { Phone, Zap, Shield, Music, Star, BookOpen, ChevronRight, ChevronDown, Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuAbierto, setMenuAbierto] = useState(false);

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
<nav className="bg-[#2e1f14]/90 backdrop-blur border-b border-[#c4a580]/30 sticky top-0 z-50">
  <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
    
    <div className="flex items-center gap-3">
      <Link href="/">
        <img
          src="/fotos/logoS.png"
          alt="SONIDOS"
          style={{ height: "60px", width: "auto", display: "block" }}
        />
      </Link>
    </div>

    {/* Botón para volver atrás (sin fondo ni borde) */}
    <Link 
      href="/" 
      className="inline-flex items-center gap-2 text-[#e8d5c0] hover:text-white transition-colors duration-300 text-sm font-bold" 
      style={{ fontFamily: "'Lora', serif" }}
    >
      <ArrowLeft size={16} /> Volver
    </Link>
    
  </div>
</nav>

       {/* Hero */}
<section className="py-16 md:py-24">
  <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      
      {/* Badge Superior */}
      <span className="bg-[#c4a580] text-[#1a0f0a] text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase inline-block mb-6" style={{ fontFamily: "'Lora', serif" }}>
        Sticks Drummer
      </span>
      
      {/* Título Principal - Playfair Display */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
        Elige tus baquetas,<br />
        <span className="text-[#e8d5c0]">elige tu sonido.</span>
      </h2>
      
      {/* Subtítulos */}
      <div className="space-y-4 mb-8">
        <p className="text-[#f5efe6] text-lg leading-relaxed font-medium" style={{ fontFamily: "'Lora', serif" }}>
          La madera correcta, el peso adecuado y la medida correcta.
        </p>
        <p className="text-[#c4a580] text-base font-semibold italic border-l-2 border-[#c4a580] pl-3" style={{ fontFamily: "'Lora', serif" }}>
          ¿No sabes cuál elegir? Aquí te traemos una guía para instruirte.
        </p>
      </div>
      
      {/* Botones */}
      <div className="flex gap-4 flex-wrap">
        <a href="#catalogo" className="bg-[#e8d5c0] text-[#1a0f0a] px-8 py-3.5 rounded-lg font-bold text-base transition hover:bg-white shadow-xl inline-flex items-center gap-2" style={{ fontFamily: "'Lora', serif" }}>
          Catálogo <ArrowRight size={18} />
        </a>
        <a href="#numeracion" className="border-2 border-[#c4a580] text-[#e8d5c0] px-8 py-3.5 rounded-lg font-bold text-base transition hover:bg-[#c4a580]/20 hover:text-white inline-flex items-center gap-2" style={{ fontFamily: "'Lora', serif" }}>
          <BookOpen size={18} /> Leer la Guía
        </a>
      </div>
    </motion.div>
    
    {/* Imagen */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex justify-center"
    >
      <img
        src="/fotos/hero.jpg"
        alt="Baquetas Pro"
        className="w-72 h-72 md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#c4a580]/20"
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
                  desc: "La más ligera, aproximadamente 10% más que el Hickory. Esto permite fabricar baquetas de mayor diámetro sin que resulten pesadas. Sensación de ligereza y respuesta rápida, sonido cálido en platillos. Excelente para bateristas que buscan baquetas gruesas pero ligeras.",
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
          img: "/fotos/5A-sticks.jpg",
          nombre: "5A Maple",
          desc: "Deseadas por aquellos que combinan ligereza y versatilidad. Hechas de madera de maple.",
          precio: "6.50 USD",
          estado: "disponible",
          estadoTexto: "2 pares en stock",
          estadoColor:  "bg-green-0 text-green-900 border-green-700",
          claseImagen: "object-[center_6%]",
          mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+las+5A+Maple.+%C2%BFMe+ayudas%3F",
        },

         {
          img: "/fotos/5A-roble.jpg",
          nombre: "AQJUNONG 5A",
          desc: "Baquetas de roble. Resistentes y muy versátiles. Perfectas para quienes buscan mayor durabilidad y peso. ",
          precio: "8.00 USD",
          precioOriginal: "8.50 USD",
          estado: "disponible",
          estadoTexto: "Agotadas",
          estadoColor:  "bg-red-600 text-white border-red-700",
          claseImagen: "object-top",
          mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+las+AQJUNONG+5A.+%C2%BFMe+ayudas%3F",
        },
        {
          img: "/fotos/5B-AQJUNONG.jpg",
          nombre: "AQJUNONG 5B",
          desc: "Madera de maple. Un poco más gruesas, aunque livianas. Idóneas para principiantes.",
          precio: "6.00 USD",
          estado: "pocas",
          estadoTexto: "Agotadas",
          estadoColor:  "bg-red-600 text-white border-red-700",
          claseImagen: "object-top",
          mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+las+AQJUNONG+5B.+%C2%BFMe+ayudas%3F",
        },

        {
          img: "/fotos/7A-AQJUNONG.jpg",
          nombre: "AQJUNONG 7A Maple",
          desc: "Madera de maple. Ligera y rápida. Ideal para niños y principiantes.",
          precio: "5.00 USD",
          estado: "disponible",
          estadoTexto: "Disponibles",
          estadoColor:  "bg-green-700/10 text-green-200 border-green-500/50",
          claseImagen: "object-[center_42%] ",
          mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+las+AQJUNONG+7A.+%C2%BFMe+ayudas%3F",
        },
        
        {
          img: "/fotos/7A-roble.jpg",
          nombre: "AQJUNONG 7A Roble",
          desc: "Fabricadas con madera de roble. Finas, delgadas, y a la vez resistentes. Calidad asegurada.",
          precio: "7.00 USD",
          precioOriginal: "7.50 USD",
          estado: "disponible",
          estadoTexto: "Agotadas",
          estadoColor:  "bg-red-600 text-white border-red-700",
          mensajeWA: "https://wa.me/5356956051?text=Hola%2C+vi+la+p%C3%A1gina+de+Baquetas+Pro+y+quiero+pedir+las+AQJUNONG+7A.+%C2%BFMe+ayudas%3F",
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
            className={`w-full h-70 object-cover ${prod.claseImagen || "object-center"} bg-white`}
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

    </div> {/* <-- ESTE ES EL CIERRE DEL BLOQUE COMERCIAL UNIFICADO */}
  </div> {/* <-- ESTE ES EL CIERRE DEL relative z-10 */}
</main>
);
}