import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Coded By Gio - Dev & Designer com Identidade Própria",
  description:
    "Desenvolvedor e Designer especializado em identidade visual, UI/UX design e desenvolvimento front-end. Criando experiências digitais únicas e memoráveis.",
  keywords: "desenvolvedor, designer, identidade visual, UI/UX, front-end, React, Next.js, branding, landing pages",
  authors: [{ name: "Coded By Gio", url: "https://codedbygio.com" }],
  creator: "Coded By Gio",
  publisher: "Coded By Gio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://codedbygio.com",
    title: "Coded By Gio - Dev & Designer com Identidade Própria",
    description:
      "Desenvolvedor e Designer especializado em identidade visual, UI/UX design e desenvolvimento front-end.",
    siteName: "Coded By Gio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coded By Gio - Dev & Designer com Identidade Própria",
    description:
      "Desenvolvedor e Designer especializado em identidade visual, UI/UX design e desenvolvimento front-end.",
    creator: "@codedbygio",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F2F2" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  icons: {
    icon: "/logo-cbg.png",
    shortcut: "/logo-cbg.png",
    apple: "/logo-cbg.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://codedbygio.com" />
        <meta name="google-site-verification" content="your-verification-code" />
        <link rel="icon" href="/logo-cbg.png" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} ${poppins.variable} font-poppins antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
