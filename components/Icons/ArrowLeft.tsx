import { Icon, IconProps } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props extends IconProps {}

const ArrowLeftIcon: FC<Props> = (props) => (
  <Icon asChild {...props}>
    <svg viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15 8.92529H1M1 8.92529L8 15.9253M1 8.92529L8 1.92529'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)

export default ArrowLeftIcon
