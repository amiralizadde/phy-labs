import Navbar from '@/components/module/navbar/Navbar';
import './globals.css'
import { Inter } from 'next/font/google'
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {notFound} from 'next/navigation';
import Footer from '@/components/module/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, params: {locale}}:{ children: React.ReactNode; params: {locale: string}}) {

  const messages = useMessages();

  return (
    <html lang={locale} className={locale === 'en' ? 'ltr' : 'rtl'}>
      <body className={inter.className}>
      <NextIntlClientProvider  locale={locale} messages={messages}>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </NextIntlClientProvider>
      </body>
    </html>
  )
}
