import { ChakraProvider } from '@chakra-ui/react'
import { Castoro, Inter } from 'next/font/google'
import React, { FC, PropsWithChildren } from 'react'

import theme from '@/styles/theme'

const castoro = Castoro({
  weight: ['400'],
  variable: '--font-castoro',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return (
    <div className={`${inter.variable} ${castoro.variable}`}>
      <ChakraProvider value={theme}>{children}</ChakraProvider>
    </div>
  )
}

export default ThemeProvider
