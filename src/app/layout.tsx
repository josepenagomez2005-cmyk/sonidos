import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen"; // <-- Importamos el componente

export const metadata: Metadata = {
  title: "Sonidos | Tienda de Percusión en Cuba",
  description: "Baquetas, atriles, platillos y accesorios para bateristas en Cuba. Envíos a toda La Habana.",
  keywords: "baquetas, baquetas cuba, comprar baquetas la habana, baquetas 5A, baquetas 7A, baquetas 5B, baquetas de maple, baquetas para bateria, guia de baquetas, tipos de baquetas, atriles, platillos, sonidos",
  manifest: "/manifest.webmanifest", 
  appleWebApp: { 
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sonidos",
  },
  icons: {
    icon: "/fotos/icon-192x192.png",
    apple: "/fotos/icon-192x192.png",
  },
  other: {
    "apple-touch-startup-image": "/fotos/splash-screen.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="google-site-verification" content="anM4fHARqY-IkW-G8ZEXXTWG9nY9S8n4aANZS2sqLFI" />
        <meta name="theme-color" content="#1a0f0a" /> 
        <link rel="apple-touch-icon" href="/fotos/icon-192x192.png" /> 
        <link rel="apple-touch-startup-image" href="/fotos/splash-screen.png" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#1a0f0a]">
        {/* AQUÍ COLOCAMOS EL SPLASH SCREEN */}
        <SplashScreen /> 
        
        {children} 
        <Analytics/> 
      </body>
    </html>
  );
}