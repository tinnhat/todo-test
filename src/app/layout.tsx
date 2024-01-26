import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Created by NTN',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <ToastContainer position='bottom-right' autoClose={1500} />
      </body>
    </html>
  )
}
