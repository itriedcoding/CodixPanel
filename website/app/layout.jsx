import '../styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://codixos-botzilla.vercel.app'),
  title: 'CodixOS - Lightweight Terminal Operating System',
  description: 'A lightweight, terminal-based operating system designed for simplicity and ease of use. Features custom kernel, shell, package manager, and desktop environment.',
  keywords: ['operating system', 'terminal', 'linux', 'lightweight', 'codixos', 'custom os'],
  authors: [{ name: 'CodixOS Team' }],
  openGraph: {
    title: 'CodixOS - Lightweight Terminal Operating System',
    description: 'A lightweight, terminal-based operating system designed for simplicity and ease of use.',
    url: 'https://codixos-botzilla.vercel.app',
    siteName: 'CodixOS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodixOS - Lightweight Terminal Operating System',
    description: 'A lightweight, terminal-based operating system designed for simplicity and ease of use.',
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
