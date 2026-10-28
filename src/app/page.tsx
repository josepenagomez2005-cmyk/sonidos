"use client";

import { ShoppingBag, Music, Wrench, Star, ArrowRight, Flame, Phone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";

// --- COMPONENTE SPOTLIGHT CARD ---
const SpotlightCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(232,213,192,0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default function Home() {
  const banners = [
    { id: 1, titulo: "Baquetas AQJUNONG 5A", subtitulo: "La Más Vendida", descripcion: "La reina de la versatilidad.", imagen: "/fotos/5A-roble.jpg", link: "/baquetas" },
    { id: 2, titulo: "Pack Completo de Hi-Hat", subtitulo: "Oferta Especial", descripcion: "Todo por 163 USD. ¡Llave y baquetas de regalo!", imagen: "/fotos/h250.jpg", link: "#oferta" },   
    { id: 3, titulo: "Nuevos Baqueteros", subtitulo: "Novedades", descripcion: "Lleva tus baquetas seguras. Disponibles ya.", imagen: "/fotos/baqueteroM.jpg", link: "/nuevos-productos" },
    { id: 4, titulo: "Llave de Afinación Gratis", subtitulo: "Promoción", descripcion: "Compra 2 pares o más y te la llevas gratis.", imagen: "/fotos/hero.jpg", link: "/baquetas" },
    { id: 5, titulo: "Atriles Mapex", subtitulo: "Equipamiento", descripcion: "Calidad profesional para tu batería.", imagen: "/fotos/set-gibraltar.jpg", link: "/atriles" }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const [mostrarToast, setMostrarToast] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, link: string) => {
    e.preventDefault();
    setMostrarToast(true);
    setTimeout(() => {
      setMostrarToast(false);
      window.open(link, "_blank");
    }, 1500); 
  };

  // --- LÓGICA DEL CARRUSEL PRINCIPAL ---
  const autoplayRef = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false, containScroll: false },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setTimeout(() => autoplayRef.current.play(), 100);
    return () => clearTimeout(timer);
  }, [emblaApi]);

  return (
    <main className="min-h-screen text-[#f5efe6] font-sans overflow-x-hidden relative">
      <div 
        className="fixed inset-0 z-0"
        style={{ backgroundImage: "url('/fotos/fondo-madera.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      ></div>
      <div className="fixed inset-0 z-0 bg-black/60"></div>

      <div className="relative z-10">
        
        {/* NAVBAR PRINCIPAL CON CINTA A LA DERECHA */}
        <nav className="bg-[#1a0f0a]/90 backdrop-blur border-b border-[#c4a580]/30 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
            
            <Link href="/" className="flex-shrink-0 z-10">
              <img src="/fotos/logoS.png" alt="SONIDOS" style={{ height: "60px", width: "auto", display: "block" }} />
            </Link>
            
            <div className="flex-1 overflow-hidden ml-6 relative">
              <div className="animate-marquee flex">
                <span className="mx-4 text-[#e8d5c0] text-xs md:text-sm font-normal italic whitespace-nowrap" style={{ fontFamily: "'Lora', serif" }}>
                  Nueva sección disponible pronto... "Conoces acerca de los in-ears KZ?"    &nbsp; • &nbsp;
                  Próximamente: "Set de Platillos BEATELLO, de siete piezas" &nbsp; • &nbsp;
                  AL comprar +2 pares de baquetas lleva gratis una "Llave de Afinación" en su primera compra &nbsp; • &nbsp;
                </span>
                <span className="mx-4 text-[#e8d5c0] text-xs md:text-sm font-normal italic whitespace-nowrap" style={{ fontFamily: "'Lora', serif" }}>
                  Nueva sección disponible pronto... "Conoces acerca de los in-ears KZ?"    &nbsp; • &nbsp;
                  Próximamente: "Set de Platillos BEATELLO, de siete piezas" &nbsp; • &nbsp;
                  AL comprar +2 pares de baquetas lleva gratis una "Llave de Afinación" en su primera compra &nbsp; • &nbsp;
                </span>
              </div>
            </div>

          </div>
        </nav>

        {/* HERO: Embla Carousel */}
        <section className="pt-2 pb-4 w-full relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-2">
              {banners.map((banner, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div key={banner.id} className="flex-[0_0_auto] min-w-0 px-2 py-2 flex justify-center">
                    <Link
                      href={banner.link}
                      className={`relative group block w-[220px] md:w-[240px] h-[340px] md:h-[380px] shrink-0 rounded-xl overflow-hidden transition-all duration-500 ${
                        isActive ? 'shadow-[0_15px_40px_rgba(0,0,0,0.8)] scale-100 opacity-100 z-10' : 'shadow-lg scale-90 opacity-50 z-0 pointer-events-none'
                      }`}
                    >
                      <div className="absolute inset-0">
                        <img src={banner.imagen} alt={banner.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-[#1a0f0a]/60 to-transparent"></div>
                      </div>
                      <div className={`absolute bottom-0 left-0 w-full p-4 flex flex-col items-start transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="bg-[#e8d5c0] text-[#1a0f0a] text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase inline-block mb-2" style={{ fontFamily: "'Lora', serif" }}>
                          {banner.subtitulo}
                        </span>
                        <h1 className="text-2xl md:text-[26px] font-extrabold text-white mb-1.5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {banner.titulo}
                        </h1>
                        <p className="text-[#f5efe6] text-xs md:text-sm mb-1 font-medium line-clamp-2" style={{ fontFamily: "'Lora', serif" }}>
                          {banner.descripcion}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-2 relative z-20">
            {banners.map((_, index) => {
              const isDotActive = selectedIndex === index;
              return (
                <button key={index} onClick={() => emblaApi?.scrollTo(index)}
                  className={`transition-all duration-300 rounded-full ${isDotActive ? "bg-[#e8d5c0] w-5 h-1.5" : "bg-[#c4a580]/40 w-1.5 h-1.5 hover:bg-[#c4a580]/60"}`}
                />
              );
            })}
          </div>
        </section>

       {/* SECCIÓN: LOS MÁS VENDIDOS */}
<section className="py-12 px-4 max-w-5xl mx-auto">
  <div className="flex flex-col items-center mb-8">
    <h2 className="text-2xl md:text-4xl font-extrabold text-white flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md">
        <defs>
          <linearGradient id="fireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="30%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#fde047" />
          </linearGradient>
        </defs>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" fill="url(#fireGradient)" stroke="#b91c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      Los Más Vendidos
    </h2>
    <p className="text-[#c4a580] mt-1 text-sm" style={{ fontFamily: "'Lora', serif" }}>Los favoritos de nuestros clientes</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Producto 1 */}
    <div 
      className="bg-[#2e1f14]/80 backdrop-blur border border-[#c4a580]/30 rounded-xl overflow-hidden group hover:border-[#e8d5c0] transition-all flex flex-col cursor-pointer"
      onClick={(e) => handleWhatsAppClick(e as any, "https://wa.me/5356956051?text=Hola%2C+quiero+pedir+las+AQJUNONG+5A")}
    >
      <div className="relative h-48 bg-white overflow-hidden">
        <img src="/fotos/5A-roble.jpg" alt="AQJUNONG 5A" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>AQJUNONG 5A</h3>
        <p className="text-[#c4a580] text-xs mb-4" style={{ fontFamily: "'Lora', serif" }}>La reina de la versatilidad en roble.</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-black text-[#e8d5c0]" style={{ fontFamily: "'Playfair Display', serif" }}>8.00 USD</span>
          <button className="bg-[#e8d5c0] hover:bg-white text-[#1a0f0a] px-3 py-1.5 rounded-lg font-bold text-xs transition" style={{ fontFamily: "'Lora', serif" }}>
            Pedir
          </button>
        </div>
      </div>
    </div>

    {/* Producto 2 */}
    <div 
      className="bg-[#2e1f14]/80 backdrop-blur border border-[#c4a580]/30 rounded-xl overflow-hidden group hover:border-[#e8d5c0] transition-all flex flex-col cursor-pointer"
      onClick={(e) => handleWhatsAppClick(e as any, "https://wa.me/5356956051?text=Hola%2C+quiero+pedir+el+Practice+Pad+12")}
    >
      <div className="relative h-48 bg-white flex items-center justify-center p-4">
        <img src="/fotos/pad12.png" alt="Practice Pad 12" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Practice Pad 12"</h3>
        <p className="text-[#c4a580] text-xs mb-4" style={{ fontFamily: "'Lora', serif" }}>El favorito para practicar en casa.</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-black text-[#e8d5c0]" style={{ fontFamily: "'Playfair Display', serif" }}>25.00 USD</span>
          <button className="bg-[#e8d5c0] hover:bg-white text-[#1a0f0a] px-3 py-1.5 rounded-lg font-bold text-xs transition" style={{ fontFamily: "'Lora', serif" }}>Pedir</button>
        </div>
      </div>
    </div>

    {/* Producto 3 */}
    <div 
      className="bg-[#2e1f14]/80 backdrop-blur border border-[#c4a580]/30 rounded-xl overflow-hidden group hover:border-[#e8d5c0] transition-all flex flex-col cursor-pointer"
      onClick={(e) => handleWhatsAppClick(e as any, "https://wa.me/5356956051?text=Hola%2C+quiero+pedir+el+Baquetero+Mediano")}
    >
      <div className="relative h-48 bg-white flex items-center justify-center p-4">
        <img src="/fotos/baqueteroM.jpg" alt="Baquetero" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Baquetero Mediano</h3>
        <p className="text-[#c4a580] text-xs mb-4" style={{ fontFamily: "'Lora', serif" }}>Lleva tus baquetas seguras a donde vayas.</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-black text-[#e8d5c0]" style={{ fontFamily: "'Playfair Display', serif" }}>28.00 USD</span>
          <button className="bg-[#e8d5c0] hover:bg-white text-[#1a0f0a] px-3 py-1.5 rounded-lg font-bold text-xs transition" style={{ fontFamily: "'Lora', serif" }}>Pedir</button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* SECCIÓN: CARRUSELES DE PRODUCTOS */}

{/* 1. Carrusel de Accesorios */}
<section className="py-10 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-6">
      <h2 className="text-xl md:text-2xl font-semibold text-[#e8d5c0]" style={{ fontFamily: "'Playfair Display', serif" }}>Accesorios</h2>
      <p className="text-[#c4a580]/60 text-xs mt-1" style={{ fontFamily: "'Lora', serif" }}>Atriles y soportes para tu batería</p>
    </div>

    <div className="flex gap-3 overflow-x-auto scroll-horizontal snap-x snap-mandatory pb-2 -mx-4 px-4">
      {[
        { img: "/fotos/H250.jpg", nombre: "Hi-Hat Mapex", precio: "92 USD" },
        { img: "/fotos/S250.jpg", nombre: "Atril de Caja Mapex", precio: "50 USD" },
        { img: "/fotos/B250.jpg", nombre: "Atril Ajustable Mapex", precio: "81 USD" },
        { img: "/fotos/P250.jpg", nombre: "Pedal de Bombo Mapex", precio: "78 USD" },
        { img: "/fotos/C250.jpg", nombre: "Atril Recto Mapex", precio: "67 USD" },
        { img: "/fotos/T400.jpg", nombre: "Banqueta Mapex", precio: "85 USD" },
      ].map((prod, i) => (
        <div
          key={prod.nombre}
          onClick={(e) => handleWhatsAppClick(e as any, `https://wa.me/5356956051?text=Hola%2C+quiero+pedir+el+${prod.nombre}`)}
          className="min-w-[180px] md:min-w-[200px] snap-center bg-[#2e1f14]/70 backdrop-blur rounded-xl shadow-sm border border-[#c4a580]/20 hover:shadow-md transition overflow-hidden flex-shrink-0 cursor-pointer group"
        >
          <img src={prod.img} alt={prod.nombre} className="w-full h-32 object-contain bg-white group-hover:scale-105 transition-transform duration-500" />
          <div className="p-4 text-center">
            <h3 className="font-bold text-sm text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.nombre}</h3>
            <p className="text-lg font-black text-[#e8d5c0] mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.precio}</p>
          </div>
        </div>
      ))}

      <Link href="/atriles" className="min-w-[160px] md:min-w-[180px] snap-center self-center flex-shrink-0 flex items-center justify-center">
        <div className="bg-transparent hover:bg-[#c4a580]/10 border border-[#c4a580] px-6 py-4 rounded-xl transition-all duration-300 text-center">
          <div className="flex items-center gap-2 justify-center">
            <span className="text-[#e8d5c0] font-bold text-sm" style={{ fontFamily: "'Lora', serif" }}>Ver atriles</span>
            <span className="text-[#e8d5c0] text-lg">→</span>
          </div>
        </div>
      </Link>
    </div>
  </div>
</section>

{/* 2. Carrusel de Baquetas */}
<section className="py-10 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-6">
      <h2 className="text-xl md:text-2xl font-semibold text-[#e8d5c0]" style={{ fontFamily: "'Playfair Display', serif" }}>Baquetas</h2>
      <p className="text-[#c4a580]/60 text-xs mt-1" style={{ fontFamily: "'Lora', serif" }}>Encuentra tu sonido perfecto</p>
    </div>

    <div className="flex gap-3 overflow-x-auto scroll-horizontal snap-x snap-mandatory pb-2 -mx-4 px-4">
      {[
        { img: "/fotos/5A-roble.jpg", nombre: "AQJUNONG 5A", precio: "8.00 USD" },
        { img: "/fotos/5B-AQJUNONG.jpg", nombre: "AQJUNONG 5B", precio: "6.00 USD" },
        { img: "/fotos/7A-roble.jpg", nombre: "AQJUNONG 7A Roble", precio: "7.00 USD" },
        { img: "/fotos/7A-AQJUNONG.jpg", nombre: "AQJUNONG 7A Maple", precio: "5.00 USD" },
        { img: "/fotos/5A-sticks.jpg", nombre: "5A Maple", precio: "6.50 USD" },
      ].map((prod, i) => (
        <div
          key={prod.nombre}
          onClick={(e) => handleWhatsAppClick(e as any, `https://wa.me/5356956051?text=Hola%2C+quiero+pedir+las+${prod.nombre}`)}
          className="relative min-w-[180px] md:min-w-[200px] h-[260px] snap-center rounded-xl shadow-lg border border-[#c4a580]/20 hover:shadow-2xl transition-all duration-300 overflow-hidden flex-shrink-0 cursor-pointer group"
        >
          <img src={prod.img} alt={prod.nombre} className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-[#1a0f0a]/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col items-start">
            <h3 className="font-bold text-sm text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.nombre}</h3>
            <p className="text-lg font-black text-[#e8d5c0]" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.precio}</p>
          </div>
        </div>
      ))}

      <Link href="/baquetas" className="min-w-[160px] md:min-w-[180px] snap-center self-center flex-shrink-0 flex items-center justify-center">
        <div className="bg-transparent hover:bg-[#c4a580]/10 border border-[#c4a580] px-6 py-4 rounded-xl transition-all duration-300 text-center">
          <div className="flex items-center gap-2 justify-center">
            <span className="text-[#e8d5c0] font-bold text-sm" style={{ fontFamily: "'Lora', serif" }}>Ver baquetas</span>
            <span className="text-[#e8d5c0] text-lg">→</span>
          </div>
        </div>
      </Link>
    </div>
  </div>
</section>

{/* 3. Carrusel de Nuevos Productos */}
<section className="py-10 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-6">
      <h2 className="text-xl md:text-2xl font-semibold text-[#e8d5c0]" style={{ fontFamily: "'Playfair Display', serif" }}>Nuevos Productos</h2>
      <p className="text-[#c4a580]/60 text-xs mt-1" style={{ fontFamily: "'Lora', serif" }}>Ampliando el catálogo</p>
    </div>

    <div className="flex gap-3 overflow-x-auto scroll-horizontal snap-x snap-mandatory pb-2 -mx-4 px-4">
      {[
        { img: "/fotos/baqueteroM.jpg", nombre: "Baquetero", precio: "28 USD" },
        { img: "/fotos/baquetas-Timbal.jpg", nombre: "Baquetas para Timbal", precio: "9 USD" },
        { img: "/fotos/pad12.png", nombre: "Practice Pad 12'", precio: "25 USD" },
        { img: "/fotos/baqueteroP.jpg", nombre: "Baquetero Pequeño", precio: "17 USD" },
      ].map((prod, i) => (
        <div
          key={prod.nombre}
          onClick={(e) => handleWhatsAppClick(e as any, `https://wa.me/5356956051?text=Hola%2C+quiero+pedir+el+${prod.nombre}`)}
          className="w-[200px] md:w-[220px] shrink-0 snap-center bg-[#2e1f14]/70 backdrop-blur rounded-xl shadow-sm border border-[#c4a580]/20 hover:shadow-md transition overflow-hidden flex flex-col cursor-pointer group"
        >
          <img src={prod.img} alt={prod.nombre} className="w-full h-32 object-contain bg-white group-hover:scale-105 transition-transform duration-500" />
          <div className="p-4 text-center flex-1 flex flex-col">
            <h3 className="font-bold text-sm text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.nombre}</h3>
            <p className="text-lg font-black text-[#e8d5c0] mt-auto pt-2" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.precio}</p>
          </div>
        </div>
      ))}

      <Link href="/nuevos-productos" className="min-w-[160px] md:min-w-[180px] snap-center self-center flex-shrink-0 flex items-center justify-center">
        <div className="bg-transparent hover:bg-[#c4a580]/10 border border-[#c4a580] px-6 py-4 rounded-xl transition-all duration-300 text-center">
          <div className="flex items-center gap-2 justify-center">
            <span className="text-[#e8d5c0] font-bold text-sm" style={{ fontFamily: "'Lora', serif" }}>Ver todos</span>
            <span className="text-[#e8d5c0] text-lg">→</span>
          </div>
        </div>
      </Link>
    </div>
  </div>
</section>  

{/* SECCIÓN: ¿BUSCAS ALGO MÁS? (Servicios + Sugerencias integrados) */}
<section className="py-16 px-4 max-w-5xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-2xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
      ¿Buscas algo más?
    </h2>
    <p className="text-[#c4a580] mt-2 text-sm max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
      No todo está en la web. Si necesitas un producto específico, de una marca que no ves, o simplemente quieres preguntar por algo, nosotros lo conseguimos por ti.
    </p>
  </div>

  <div className="border-t border-[#c4a580]/20">
    {[
      { titulo: "Marcas Especiales", desc: "¿Buscas baquetas Vic Firth, Promark o Zildjian? Podemos importar la marca que necesitas a pedido.", link: "https://wa.me/5356956051?text=Hola%2C+estoy+buscando+una+marca+especial+que+no+veo+en+la+web.+%C2%BFMe+pueden+ayudar%3F" },
      { titulo: "Hardware Específico", desc: "¿Un soporte para un Tom extra? ¿Un pedal doble? Si necesitas hardware especializado, te lo conseguimos.", link: "https://wa.me/5356956051?text=Hola%2C+necesito+preguntar+por+un+accesorio+de+hardware+que+no+est%C3%A1+en+la+web.+%C2%BFMe+ayudan%3F" },
      { titulo: "Pads y Parches", desc: "¿Necesitas medidas específicas o marcas de parches que no tenemos? Dinos cuál buscas y lo traemos.", link: "https://wa.me/5356956051?text=Hola%2C+busco+un+parche+o+pad+en+espec%C3%ADfico+que+no+veo+en+el+cat%C3%A1logo.+%C2%BFLo+pueden+traer%3F" }
    ].map((servicio, i) => (
      <a 
        key={i} 
        href="#" 
        onClick={(e) => handleWhatsAppClick(e, servicio.link)}
        className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-[#c4a580]/20 hover:bg-[#c4a580]/5 px-4 md:px-8 transition-all duration-500 relative overflow-hidden"
      >
        <span className="absolute left-0 top-0 text-[100px] md:text-[140px] font-black text-white/[0.02] leading-none select-none pointer-events-none group-hover:text-[#c4a580]/10 transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
          0{i + 1}
        </span>

        <div className="relative z-10 max-w-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-[#e8d5c0] mb-2 group-hover:text-white transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
            {servicio.titulo}
          </h3>
          <p className="text-[#f5efe6]/70 text-sm leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            {servicio.desc}
          </p>
        </div>

        {/* Flecha eliminada aquí */}
      </a>
    ))}
  </div>

  <div className="pt-10">
    <div className="flex items-center gap-4 mb-8">
      <div className="h-[1px] bg-[#c4a580]/30 flex-1"></div>
      <h3 className="text-lg md:text-xl font-bold text-[#e8d5c0] whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
        Sugerencias de Importación
      </h3>
      <div className="h-[1px] bg-[#c4a580]/30 flex-1"></div>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {[
        { img: "/fotos/cajaMPX.jpg", marca: "Mapex", nombre: "Caja Mapex", link: "caja+mapex" },        
        { img: "/fotos/evans.jpg", marca: "Evans", nombre: "Parches Evans", link: "parches+evans" },
        { img: "/fotos/setSabian.jpg", marca: "Sabian", nombre: "Set Platillos Sabian", link: "set+sabian" },
        { img: "/fotos/cajaMPX1.jpg", marca: "Mapex", nombre: "Caja Mapex Pro", link: "caja+mapex+pro" },
        { img: "/fotos/set-gibraltar.jpg", marca: "Gibraltar", nombre: "Set Hardware Gibraltar", link: "set+gibraltar" },
        { img: "/fotos/pedalDw.jpg", marca: "DW", nombre: "Pedal DW 5000", link: "pedal+dw" },
        { img: "/fotos/drumsAlesis.jpg", marca: "Alesis", nombre: "Batería Alesis", link: "bateria+alesis" }
      ].map((prod, i) => (
        <div 
          key={i} 
          onClick={(e) => handleWhatsAppClick(e as any, `https://wa.me/5356956051?text=Hola%2C+vi+la+sugerencia+del+${prod.link}+y+me+interesa+preguntar+su+precio.`)}
        >
          <SpotlightCard className="bg-[#1a0f0a] border border-[#c4a580]/10 hover:border-[#e8d5c0]/50 transition-colors duration-500 p-4 w-full h-full flex flex-col items-center justify-between cursor-pointer group">
            <div className="w-full h-28 md:h-36 flex items-center justify-center mb-3">
              <img src={prod.img} alt={prod.nombre} className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            {/* Textos sin la flecha ni la línea */}
            <div className="text-center w-full flex-grow flex flex-col justify-end">
              <p className="text-[9px] text-[#c4a580]/60 uppercase tracking-[0.2em] mb-1" style={{ fontFamily: "'Lora', serif" }}>{prod.marca}</p>
              <h4 className="text-[11px] md:text-sm font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.nombre}</h4>
            </div>
          </SpotlightCard>
        </div>
      ))}
    </div>
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
<footer className="text-center py-10 px-4 border-t border-[#c4a580]/10">
  <img
    src="/fotos/logoS.png"
    alt="SONIDOS - Tienda de Percusión"
    style={{ height: "40px", width: "auto", margin: "0 auto", display: "block" }}
  />
  <p className="text-sm text-[#c4a580] font-medium mt-4" style={{ fontFamily: "'Lora', serif" }}>Tu tienda de percusión en Cuba</p>
  <p className="text-xs mt-6 text-[#8b7a6b]" style={{ fontFamily: "'Lora', serif" }}>© 2026 Sonidos · Todos los derechos reservados</p>
  <p className="text-[#6b5a4b] text-xs mt-2" style={{ fontFamily: "'Lora', serif" }}>
    Baquetas, atriles y accesorios disponibles en La Habana · Envíos a toda La Habana · Pago en efectivo o transferencia
  </p>
</footer>

      </div>
      
      {/* Toast de Redirección a WhatsApp */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${mostrarToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="bg-[#1a0f0a] border border-[#c4a580] text-[#e8d5c0] px-8 py-4 rounded-full shadow-2xl flex items-center gap-3">
          <Phone size={20} className="animate-bounce text-[#e8d5c0]" />
          <span className="text-sm font-bold" style={{ fontFamily: "'Lora', serif" }}>Abriendo WhatsApp...</span>
        </div>
      </div>
    </main>
  );
}