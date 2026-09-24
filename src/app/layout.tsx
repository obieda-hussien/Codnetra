import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://obieda-hussien.github.io/Codnetra/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Codenetra | تطوير التطبيقات والمواقع',
  description: 'Codenetra — تصميم وتطوير تطبيقات أندرويد والمواقع والحلول البرمجية، مع الاهتمام بالأداء وسهولة الاستخدام. تواصل معنا مباشرة على واتساب.',
  applicationName: 'Codenetra',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    siteName: 'Codenetra',
    title: 'Codenetra | من الفكرة إلى تجربة رقمية',
    description: 'تطوير التطبيقات والمواقع وحلول برمجية تناسب احتياجات مشروعك.',
    url: siteUrl,
  },
  robots: { index: true, follow: true },
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>
}
