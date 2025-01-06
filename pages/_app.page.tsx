import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from '@/components/ThemeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>a Board</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
