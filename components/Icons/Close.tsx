import { Icon, IconProps } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props extends IconProps {}

const CloseIcon: FC<Props> = (props) => (
  <Icon asChild {...props}>
    <svg viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.5674 1.00098L1.56738 11.001M1.56738 1.00098L11.5674 11.001'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)

export default CloseIcon
