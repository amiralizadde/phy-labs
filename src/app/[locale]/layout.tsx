
import  Navbar from '../../components/module/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {notFound} from 'next/navigation';
import Footer from '@/components/module/footer/Footer'
import Head from 'next/head';
import { ContextProvider } from '@/context/Context';
import ScrollToTop from '@/components/module/scrollToTop/ScrollToTop';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Phylabs',
  icons:{
    icon:"/favicon.png"
  }
}

export default function RootLayout({ children, params: {locale}}:{ children: React.ReactNode; params: {locale: string}}) {

  const messages = useMessages();

  return (
    <html lang={locale} className={locale === 'en' ? 'ltr' : 'rtl'}>
      <body  className={locale === 'en' ? inter.className : 'font-shabnam'}>
      <NextIntlClientProvider  locale={locale} messages={messages}>
      <ContextProvider>
        <Navbar />
          <div>
            {children}
          </div>
        <Footer />
        <ScrollToTop />
        </ContextProvider>
      </NextIntlClientProvider>
      </body>
    </html>
  )
}
