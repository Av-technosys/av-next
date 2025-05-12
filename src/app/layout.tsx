import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'AV Technosys : Top Website And Mobile App Development Company',
    template:
      '%s | AV Technosys : Top Website And Mobile App Development Company',
  },
  description:
    'AV Technosys is a mobile app development and web development company, builds world-class high-performing mobile applications and web apps.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./fav.svg" type="image/x-icon" />
        {/* Google search console */}
        <meta
          name="google-site-verification"
          content="HQJB1181ErQ3G35WCCaCOIniYQOafoWa9LWO5SpZclk"
        />
      </head>
      <body className={`antialiased`}>
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
