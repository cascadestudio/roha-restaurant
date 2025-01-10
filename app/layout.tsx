import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Roha Restaurant - Fusion Éthiopienne, Italienne et Française',
  description: 'Découvrez une expérience culinaire unique mêlant les saveurs de l\'Éthiopie, de l\'Italie et de la France au cœur de Paris.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}

