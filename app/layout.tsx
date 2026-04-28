import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Top Beer Pelotas | Distribuidora de Bebidas',
  description: 'Distribuidora de Bebidas em Pelotas - RS. Diversas bebidas, conveniência e entrega.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="bg-stone-950 text-stone-100 antialiased">
        {children}
      </body>
    </html>
  );
}
