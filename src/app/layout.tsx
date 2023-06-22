import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vitor Rodrigues',
  description:
    'Bem vindo a minha Landing Page. Saiba um pouco mais de mim e veja alguns dos projetos que já criei',
  openGraph: {
    title: 'Vitor Rodrigues',
    description:
      'Bem vindo a minha Landing Page. Saiba um pouco mais de mim e veja alguns dos projetos que já criei',
    url: process.env.NEXT_PUBLIC_API_URL_BASE,
    siteName: 'Vitor Rodrigues',
    images: [
      {
        url: './icon.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
