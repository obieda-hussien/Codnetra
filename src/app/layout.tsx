import type { Metadata } from "next";
import { inter, jetbrainsMono } from "../lib/fonts";
import { ThemeProvider } from 'next-themes';
import "./globals.css";

// Import FontAwesome icons configuration
import "../lib/icons";

export const metadata: Metadata = {
  title: "Codenetra - حلول برمجية مبتكرة",
  description: "شركة كودنيترا المتخصصة في تطوير التطبيقات المبتكرة والحلول البرمجية الذكية للجيل الجديد",
  keywords: "تطوير تطبيقات، برمجة، حلول تقنية، كودنيترا، تطبيقات ويب، تطبيقات موبايل",
  authors: [{ name: "Codenetra Team" }],
  openGraph: {
    title: "Codenetra - حلول برمجية مبتكرة",
    description: "شركة كودنيترا المتخصصة في تطوير التطبيقات المبتكرة والحلول البرمجية الذكية",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codenetra - حلول برمجية مبتكرة",
    description: "شركة كودنيترا المتخصصة في تطوير التطبيقات المبتكرة والحلول البرمجية الذكية",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
