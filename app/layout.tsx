import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

import "pretendard/dist/web/variable/pretendardvariable.css";
import '@/styles/globals.css'
import '@/styles/notionStyle.scss'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <html lang='en'>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  )
}
