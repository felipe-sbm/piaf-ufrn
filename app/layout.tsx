import './globals.css';

import { GeistSans } from 'geist/font/sans';

let title = 'PIAF - UFRN';
let description =
  'Portal de Integração de Atividades Físicas da Universidade Federal do Rio Grande do Norte';

export const metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}
