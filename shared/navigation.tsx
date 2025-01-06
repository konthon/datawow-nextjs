import { IconProps } from '@chakra-ui/react'
import { FC } from 'react'

import { HomeIcon, OurBlogIcon } from '@/components/Icons'

interface Nav {
  id: string
  name: string
  icon: FC<IconProps>
  link: string
}

export const NAVIGATION: Nav[] = [
  {
    id: 'home',
    name: 'Home',
    icon: HomeIcon,
    link: '/',
  },
  {
    id: 'our-blog',
    name: 'Our Blog',
    icon: OurBlogIcon,
    link: '/our-blog',
  },
]
