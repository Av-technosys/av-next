import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Chatbot from './chatbot';
import Whatsapp from './whatsapp';
import { PostHogProvider } from './providers';

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
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AV Technosys : Top Website And Mobile App Development Company',
    url: 'https://www.avtechnosys.com/',
    description:
      'AV Technosys is a mobile app development and web development company, building world-class high-performing mobile applications and web apps.',
    provider: {
      '@type': 'Organization',
      name: 'AVTechnosys',
      url: 'https://clutch.co/profile/avtechnosys#highlights',
    },
    image: 'https://ik.imagekit.io/avtechnosys/new-logo.png',
    review: {
      '@type': 'Review',
      datePublished: '2022-01-10',
      dateModified: '2025-02-05',
      author: {
        '@type': 'Organization',
        name: 'Clutch.co',
        url: 'https://clutch.co/profile/avtechnosys',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
      },
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "synyul31ml");`,
          }}
        />
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

        {/* JSON-LD Schema Markup */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.className} scroll-smooth antialiased`}>
        {/* Google Analytics */}
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
        <PostHogProvider>{children}</PostHogProvider>
        <Chatbot />
        <Whatsapp />
      </body>
    </html>
  );
}
