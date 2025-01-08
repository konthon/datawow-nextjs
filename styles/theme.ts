import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from '@chakra-ui/react'

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      primary: {
        bg: 'success',
        color: 'white',
        _hover: {
          bg: 'success/90',
        },
        _expanded: {
          bg: 'success/90',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

const badgeRecipe = defineRecipe({
  variants: {
    variant: {
      subtle: {
        bg: 'blackAlpha.100',
        color: 'gray.500',
        px: 2,
        py: 1,
        rounded: 'full',
        fontSize: 'xs',
      },
    },
  },
})

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
    recipes: {
      button: buttonRecipe,
      badge: badgeRecipe,
    },
  },
})

export default createSystem(defaultConfig, config)
