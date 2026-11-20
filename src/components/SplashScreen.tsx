"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Duración de la pantalla de carga (2 segundos)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a0f0a]"
        >
          {/* La imagen se adapta a la pantalla. Usamos object-cover para que llene todo */}
          <img
            src="/fotos/splash-screen.png"
            alt="Cargando Sonidos..."
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}