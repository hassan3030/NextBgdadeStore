// layout is static name 

// Metadata for the site 
import type { Metadata } from 'next'
// import Inter font from google fonts using any font provider
import { Inter } from 'next/font/google' 
import { ToastContainer } from 'react-toastify'; //
// make style toast on main comp and func in child comp 
import 'react-toastify/dist/ReactToastify.css';
// use style globals is static
import './globals.css'
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

// import Inter font
// const anyfont = anyfont({ subsets: ['latin' ,  , , ,] } , {options});
const inter = Inter({ subsets: ['latin'] });

// metadata static name
export const metadata: Metadata = {
  title: 'Cloud Hosting', // default title for the site next to icon title 
  description: 'Cloud hosting project', // default description for the site

}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* static component */}
        <Header />
        {/* ToastContainer theme */}
        <ToastContainer theme='colored' position='top-center' />
        <main>
          {/* any page in app folder child  */}
         {children} 
        </main>
        <Footer />
      </body>
    </html>
  )
}
