import { Icon, IconProps } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props extends IconProps {}

const MenuIcon: FC<Props> = (props) => (
  <Icon asChild {...props}>
    <svg viewBox='0 0 21 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.96582 7.80371H19.9658M1.96582 1.80371H19.9658M1.96582 13.8037H19.9658'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)

export default MenuIcon
