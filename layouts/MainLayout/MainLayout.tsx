import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  HStack,
  List,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { Header } from '@/components/Header'
import { NAVBAR_HEIGHT, NAVIGATION, SIDEBAR_WIDTH } from '@/shared/navigation'

interface Props extends BoxProps {}

const MainLayout: FC<Props> = (props) => {
  const { children, ...restProps } = props
  const router = useRouter()
  return (
    <Box {...restProps}>
      <Header />
      <Container px={0}>
        <Flex width='full' minHeight='100dvh' pt={NAVBAR_HEIGHT}>
          <Box
            as='aside'
            flexBasis={SIDEBAR_WIDTH}
            width={SIDEBAR_WIDTH}
            flexShrink={0}
            backgroundColor='gray.100'
            px={4}
            hideBelow='md'
          >
            <List.Root pt={8} position='sticky' top={NAVBAR_HEIGHT} left={0}>
              {NAVIGATION.map((nav) => {
                const isMatched = router.pathname === nav.link
                return (
                  <List.Item key={nav.id} asChild>
                    <Button
                      variant='plain'
                      color='green.500'
                      fontWeight={500}
                      _hover={{ backgroundColor: 'blackAlpha.100' }}
                      aria-current={isMatched ? 'page' : false}
                      _currentPage={{ fontWeight: 800 }}
                    >
                      <Link href={nav.link}>
                        <HStack gap={3}>
                          <nav.icon />
                          <Text>{nav.name}</Text>
                        </HStack>
                      </Link>
                    </Button>
                  </List.Item>
                )
              })}
            </List.Root>
          </Box>
          <Box as='main' flexGrow={1}>
            {children}
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default MainLayout
