import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sonidos - Tienda de Percusión',
    short_name: 'Sonidos',
    description: 'Baquetas, atriles y accesorios para bateristas en Cuba.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a0f0a',
    theme_color: '#1a0f0a',
    orientation: 'portrait',
    icons: [
      {
        src: '/fotos/logoS.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/fotos/logoS.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}