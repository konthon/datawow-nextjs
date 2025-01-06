import { Icon, IconProps } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props extends IconProps {}

const EditIcon: FC<Props> = (props) => (
  <Icon asChild {...props}>
    <svg viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7.5576 13.0002H13.5576M1.55762 13.0002H2.67398C3.0001 13.0002 3.16316 13.0002 3.31661 12.9633C3.45266 12.9306 3.58272 12.8768 3.70201 12.8037C3.83657 12.7212 3.95187 12.6059 4.18247 12.3753L12.5576 4.00015C13.1099 3.44787 13.1099 2.55244 12.5576 2.00015C12.0053 1.44787 11.1099 1.44787 10.5576 2.00015L2.18246 10.3753C1.95185 10.6059 1.83655 10.7212 1.7541 10.8558C1.68099 10.9751 1.62712 11.1051 1.59446 11.2412C1.55762 11.3946 1.55762 11.5577 1.55762 11.8838V13.0002Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)

export default EditIcon
