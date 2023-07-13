import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Bnb',
  description: 'Airbnb Clone Coding',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
            {children}
      </body>
    </html>
  )
}