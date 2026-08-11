import type { Metadata } from "next";
import {Analytics} from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baquetas Pro | Guía de Baquetas para Bateristas en Cuba",
  description: "Todo sobre baquetas: numeración, tipos de madera y guía de compra. Baquetas disponibles en La Habana, Cuba. Envíos a toda la Habana.",
  keywords: "baquetas, baquetas cuba, comprar baquetas la habana, baquetas 5A, baquetas 7A, baquetas 5B, baquetas de maple, baquetas para bateria, guia de baquetas, tipos de baquetas",
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
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
</head>
      <body className="bg-[#f5efe6]">{children} <Analytics/> </body>
    </html>
  );
}