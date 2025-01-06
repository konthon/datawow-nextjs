import { Icon, IconProps } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props extends IconProps {}

const ArrowRightIcon: FC<Props> = (props) => (
  <Icon asChild {...props}>
    <svg viewBox='0 0 19 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.10645 7.48804L17.1064 7.48804M17.1064 7.48804L11.1064 1.48804M17.1064 7.48804L11.1064 13.488'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)

export default ArrowRightIcon
