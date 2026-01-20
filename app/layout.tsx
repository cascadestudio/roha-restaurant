import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Roha Restaurant - Fusion Éthiopienne, Italienne et Française",
  description:
    "Découvrez une expérience culinaire unique mêlant les saveurs de l'Éthiopie, de l'Italie et de la France au cœur de Marseille. Restaurant fusion proposant des options vegan, sans gluten et sans lactose.",
  metadataBase: new URL("https://www.roharestaurant.fr"),
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "Roha Restaurant - Fusion Éthiopienne, Italienne et Française",
    description:
      "Une fusion unique de saveurs, où l'Éthiopie rencontre l'Italie et la France pour une expérience gustative multiculturelle inoubliable.",
    url: "https://www.roharestaurant.fr",
    siteName: "Roha Restaurant",
    images: [
      {
        url: "/salle.jpg",
        width: 1200,
        height: 630,
        alt: "Intérieur du restaurant Roha - Salle moderne avec tables en bois et chaises noires",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.roharestaurant.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "add-your-google-site-verification-here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.className}>
      <body>
        {children}
        {/* Zenchef Widget */}
        <div
          className="zc-widget-config"
          data-restaurant="382411"
          data-open="2000"
        />
        <Script
          id="zenchef-sdk"
          strategy="afterInteractive"
          src="https://sdk.zenchef.com/v1/sdk.min.js"
        />
      </body>
    </html>
  );
}
