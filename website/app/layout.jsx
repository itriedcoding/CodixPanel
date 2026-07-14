import '../styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://codixos.vercel.app'),
  title: 'CodixOS - Lightweight Terminal Operating System',
  description: 'A lightweight, terminal-based operating system designed for simplicity and ease of use. Features custom kernel, shell, package manager, and desktop environment.',
  keywords: ['operating system', 'terminal', 'linux', 'lightweight', 'codixos', 'custom os'],
  authors: [{ name: 'CodixOS Team' }],
  openGraph: {
    title: 'CodixOS - Lightweight Terminal Operating System',
    description: 'A lightweight, terminal-based operating system designed for simplicity and ease of use.',
    url: 'https://codixos.vercel.app',
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
      <body className="antialiased">{children}</body>
    </html>
  )
}
