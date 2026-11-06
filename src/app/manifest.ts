import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sonidos',
    short_name: 'Sonidos',
    description: 'Baquetas, atriles, platillos y accesorios para bateristas en Cuba.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a0f0a',
    theme_color: '#1a0f0a',
    orientation: 'portrait',
    icons: [
      {
        src: '/fotos/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/fotos/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/fotos/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
  }
}