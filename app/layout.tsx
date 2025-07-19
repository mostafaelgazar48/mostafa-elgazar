import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mostafa Elgazar - Backend Developer',
  description: 'Professional portfolio of Mostafa Elgazar, a skilled backend developer with expertise in modern web technologies.',
  keywords: ['backend developer', 'full-stack developer', 'web development', 'API development', 'database design'],
  authors: [{ name: 'Mostafa Elgazar' }],
  creator: 'Mostafa Elgazar',
  openGraph: {
    title: 'Mostafa Elgazar - Backend Developer',
    description: 'Professional portfolio of Mostafa Elgazar, a skilled backend developer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 