"use client";

import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 1. Escuchamos el evento secreto de Chrome
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Mostramos el banner (puedes poner un temporizador si quieres que no salga de golpe)
      setTimeout(() => setShowBanner(true), 3000); 
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Si el usuario ya instaló la app, ocultamos el banner
    window.addEventListener("appinstalled", () => setShowBanner(false));

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // 2. Disparamos el cartel nativo de Chrome
    deferredPrompt.prompt();
    
    // 3. Esperamos la respuesta del usuario
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-[#2e1f14] border border-[#c4a580]/50 rounded-2xl p-4 shadow-2xl flex items-center gap-4 relative">
        <button 
          onClick={() => setShowBanner(false)} 
          className="absolute top-2 right-2 text-[#c4a580]/50 hover:text-white"
        >
          <X size={16} />
        </button>

        <div className="bg-[#c4a580] p-2.5 rounded-xl flex-shrink-0">
          <Download size={24} className="text-[#1a0f0a]" />
        </div>

        <div className="flex-1 pr-4">
          <p className="text-white text-sm font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            Lleva Sonidos contigo
          </p>
          <p className="text-[#c4a580] text-xs" style={{ fontFamily: "'Lora', serif" }}>
            Instala la app en tu teléfono para pedir más rápido.
          </p>
        </div>

        <button
          onClick={handleInstallClick}
          className="bg-[#e8d5c0] text-[#1a0f0a] px-4 py-2 rounded-lg text-xs font-bold hover:bg-white transition flex-shrink-0"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Instalar
        </button>
      </div>
    </div>
  );
}