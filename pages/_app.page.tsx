import { AppProps } from 'next/app'
import Head from 'next/head'

import { QueryProvider } from '@/components/QueryProvider'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/Toaster'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>a Board</title>
      </Head>
      <ThemeProvider>
        <QueryProvider>
          <Component {...pageProps} />
        </QueryProvider>
        <Toaster />
      </ThemeProvider>
    </>
  )
}
