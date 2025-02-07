import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Av Technosys',
  description: 'Av Technosys -Innovate | Inspire | Implement',
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
      </head>
      {/* <body className={`bg-[#1c1c1e] text-white antialiased`}>{children}</body> */}
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
