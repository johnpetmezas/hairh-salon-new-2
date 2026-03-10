import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Magic Hairh | Luxury Hair Salon Corinth',
  description: 'Experience premium haircare at Magic Hairh by Rania Gkika. Specialized in balayage, hair color, and high-end styling in Corinth.',
  keywords: 'hair salon Corinth, hair color Corinth, balayage Corinth, hair stylist Corinth, Rania Gkika, premium hair salon Greece',
  openGraph: {
    title: 'Magic Hairh | Luxury Hair Salon Corinth',
    description: 'Transform your look with the touch of magic. Premium hair services in the heart of Corinth.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
