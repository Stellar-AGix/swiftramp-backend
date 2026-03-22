import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'StarGate – Creator Token Access', description: 'Hold tokens, unlock exclusive content' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" /></head>
      <body style={{ fontFamily: "'Inter', sans-serif", background: '#faf8f5', color: '#1a1a1a', margin: 0 }}>{children}</body>
    </html>
  )
}
