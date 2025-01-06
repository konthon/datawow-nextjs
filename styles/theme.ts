import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        green: {
          DEFAULT: { value: '#243831' },
          500: { value: '#243831' },
          300: { value: '#2B5F44' },
          100: { value: '#D8E9E4' },
        },
        gray: {
          300: { value: '#939494' },
          100: { value: '#BBC2C0' },
        },
        golden: {
          DEFAULT: { value: '#C5A365' },
        },
        text: {
          DEFAULT: { value: '#191919' },
        },
        success: {
          DEFAULT: { value: '#49A569' },
        },
      },
      fonts: {
        heading: { value: 'Inter, sans-serif' },
        body: { value: 'Inter, sans-serif' },
        Inter: { value: 'var(--font-inter)' },
        Castoro: { value: 'var(--font-castoro)' },
      },
    },
  },
})

export default createSystem(defaultConfig, config)
