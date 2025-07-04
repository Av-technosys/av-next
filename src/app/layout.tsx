import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    default: 'AV Technosys : Top Website And Mobile App Development Company',
    template:
      '%s | AV Technosys : Top Website And Mobile App Development Company',
  },
  description:
    'AV Technosys is a mobile app development and web development company, builds world-class high-performing mobile applications and web apps.',
  alternates: {
    canonical: 'https://www.avtechnosys.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'AV Technosys : Top Website And Mobile App Development Company',
    description:
      'AV Technosys is a mobile app development and web development company, builds world-class high-performing mobile applications and web apps.',
    url: 'https://www.avtechnosys.com',
    siteName: 'AV Technosys',
    images: [
      {
        url: 'https://av-blog-web.s3.ap-south-1.amazonaws.com/av-only-logo.png',
        width: 512,
        height: 512,
        alt: 'AV Technosys Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AV Technosys : Top Website And Mobile App Development Company',
    description:
      'AV Technosys builds world-class mobile and web apps. Experience top-tier tech with us.',
    images: [
      'https://av-blog-web.s3.ap-south-1.amazonaws.com/av-only-logo.png',
    ],
  },
  icons: {
    icon: '/new/favicon.ico',
    shortcut: '/new/favicon.ico',
    apple: '/new/favicon.ico',
  },
};

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/new/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google search console */}
        <meta
          name="google-site-verification"
          content="HQJB1181ErQ3G35WCCaCOIniYQOafoWa9LWO5SpZclk"
        />
        <meta
          name="dmca-site-verification"
          content="TjFlbHU5SmZnSFQ2UjV2TXp5Ti9sWGVaazEvR1JQRjBnR1pPQzlEM0JRYz01"
        />
      </head>
      <body className={` ${inter.className} scroll-smooth antialiased`}>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-CG4YB8XJ0P`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CG4YB8XJ0P');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
