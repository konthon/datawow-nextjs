import {
  Button,
  Drawer,
  Heading,
  HStack,
  IconButton,
  List,
  Spacer,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { ArrowRightIcon, MenuIcon } from '@/components/Icons'
import { request } from '@/libs/graphql-request'
import { meQuery } from '@/queries/auth'
import { NAVBAR_HEIGHT, NAVIGATION } from '@/shared/navigation'

import { Avatar } from '../ui/avatar'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '../ui/menu'
import { useAuth } from '@/hooks/useAuth'

const Header: FC = () => {
  const router = useRouter()
  const { me, isLoading } = useAuth()

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationKey: ['auth', 'logout'],
    mutationFn: () => request.logout(),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: meQuery().queryKey })
    },
  })

  return (
    <Drawer.Root>
      <HStack
        as='header'
        color='white'
        backgroundColor='green.500'
        position='fixed'
        zIndex='sticky'
        top={0}
        left={0}
        right={0}
        px={{ base: 4, lg: 8 }}
        py={{ base: 4, lg: 2.5 }}
        height={NAVBAR_HEIGHT}
      >
        <Link href='/'>
          <Heading
            as='h2'
            fontFamily='Castoro'
            fontSize='xl'
            fontStyle='italic'
          >
            a Board
          </Heading>
        </Link>
        <Spacer />
        {!me && (
          <Link href='/sign-in'>
            <Button hideBelow='md' disabled={isLoading}>
              {isLoading ? <Spinner /> : 'Sign In'}
            </Button>
          </Link>
        )}
        {me && (
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant='plain' disabled={isPending} hideBelow='md'>
                <Text color='white'>{me.username}</Text>
                <Avatar name={me.username} size='sm' />
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem
                value='Log out'
                onClick={() => {
                  mutate()
                }}
              >
                Log out
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        )}
        <Drawer.Trigger asChild>
          <IconButton
            aria-label='Open menu'
            variant='plain'
            color='white'
            hideFrom='md'
          >
            <MenuIcon />
          </IconButton>
        </Drawer.Trigger>
      </HStack>

      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content
          color='green.100'
          backgroundColor='green.500'
          borderLeftRadius='xl'
        >
          <Drawer.Body px={4}>
            <Drawer.CloseTrigger>
              <IconButton aria-label='Back' variant='ghost' color='green.100'>
                <ArrowRightIcon />
              </IconButton>
            </Drawer.CloseTrigger>

            <List.Root mt={9} gap={1}>
              {NAVIGATION.map((nav) => {
                const isMatched = router.pathname === nav.link
                return (
                  <List.Item key={nav.id} asChild>
                    <Button
                      variant='plain'
                      justifyContent='start'
                      color='gray.100'
                      fontWeight={500}
                      _hover={{ backgroundColor: 'blackAlpha.300' }}
                      aria-current={isMatched ? 'page' : false}
                      _currentPage={{
                        color: 'green.100',
                        fontWeight: 800,
                      }}
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
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}

export default Header
