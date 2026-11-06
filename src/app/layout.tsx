import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonidos | Tienda de Percusión en Cuba",
  description: "Baquetas, atriles, platillos y accesorios para bateristas en Cuba. Envíos a toda La Habana.",
  keywords: "baquetas, baquetas cuba, comprar baquetas la habana, baquetas 5A, baquetas 7A, baquetas 5B, baquetas de maple, baquetas para bateria, guia de baquetas, tipos de baquetas, atriles, platillos, sonidos",
  manifest: "/manifest.webmanifest", // <-- AGREGA ESTO
  appleWebApp: { // <-- AGREGA ESTO
    capable: true,
    statusBarStyle: "default",
    title: "Sonidos",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="anM4fHARqY-IkW-G8ZEXXTWG9nY9S8n4aANZS2sqLFI" />
        <meta name="theme-color" content="#1a0f0a" /> {/* <-- AGREGA ESTO */}
        <link rel="apple-touch-icon" href="/fotos/logoS.png" /> {/* <-- AGREGA ESTO */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      {/* CAMBIA bg-[#f5efe6] POR bg-[#1a0f0a] PARA QUE COINCIDA CON TU TIENDA */}
      <body className="bg-[#1a0f0a]">
        {children} 
        <Analytics/> 
      </body>
    </html>
  );
}