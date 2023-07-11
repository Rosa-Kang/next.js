import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'


const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Bnb',
  description: 'Airbnb Clone Coding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Modal />
          <Navbar />
        </ClientOnly>
            {children}
      </body>
    </html>
  )
}
