import { Icon, IconProps } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props extends IconProps {}

const SearchIcon: FC<Props> = (props) => (
  <Icon asChild {...props}>
    <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16.5 16.6802L12.875 13.0552M14.8333 8.34684C14.8333 12.0287 11.8486 15.0135 8.16667 15.0135C4.48477 15.0135 1.5 12.0287 1.5 8.34684C1.5 4.66494 4.48477 1.68018 8.16667 1.68018C11.8486 1.68018 14.8333 4.66494 14.8333 8.34684Z'
        stroke='currentColor'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)

export default SearchIcon
