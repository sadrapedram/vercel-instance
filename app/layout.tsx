import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GameHouse - Korean Retro Gaming Developer | 한국 레트로 게임 개발사",
  description:
    "GameHouse.info is a leading Korean indie game development studio specializing in retro-style games, pixel art, and nostalgic gaming experiences. Based in Seoul, Korea. 한국 서울의 레트로 게임 개발 스튜디오",
  keywords:
    "Korean game developer, retro games, pixel art, indie games, Seoul gaming studio, 한국 게임 개발, 레트로 게임, 픽셀 아트, 인디 게임",
  authors: [{ name: "GameHouse.info Team" }],
  creator: "GameHouse.info",
  publisher: "GameHouse.info",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    url: "https://gamehouse.info",
    siteName: "GameHouse.info",
    title: "GameHouse - Korean Retro Gaming Developer",
    description:
      "Leading Korean indie game development studio specializing in retro-style games and pixel art. Based in Seoul, Korea.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GameHouse - Korean Retro Gaming Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GameHouse - Korean Retro Gaming Developer",
    description: "Leading Korean indie game development studio specializing in retro-style games and pixel art.",
    creator: "@gamehouseinfo",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://gamehouse.info" />
        <link rel="alternate" hrefLang="ko" href="https://gamehouse.info/ko" />
        <link rel="alternate" hrefLang="en" href="https://gamehouse.info" />
        <meta name="geo.region" content="KR-11" />
        <meta name="geo.placename" content="Seoul" />
        <meta name="geo.position" content="37.566535;126.9779692" />
        <meta name="ICBM" content="37.566535, 126.9779692" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GameHouse",
              description: "Korean indie game development studio specializing in retro-style games",
              url: "https://gamehouse.info",
              logo: "https://gamehouse.info/logo.png",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KR",
                addressLocality: "Seoul",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+82-2-1234-5678",
                contactType: "customer service",
                email: "hello@gamehouse.info",
              },
              sameAs: ["https://twitter.com/gamehouseinfo", "https://instagram.com/gamehouseinfo"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
