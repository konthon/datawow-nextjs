import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

import { ArrowLeftIcon, CommentIcon } from '@/components/Icons'
import { Avatar } from '@/components/ui/avatar'
import { MainLayout } from '@/layouts/MainLayout'
import { postQuery } from '@/queries/post'
import { getRelativeTime } from '@/shared/time'

const PostPage: NextPage = () => {
  const router = useRouter()
  const postId = router.query.postId as string

  const { data } = useQuery({
    ...postQuery({ postId: !!postId ? +postId : 0 }),
    enabled: !Number.isNaN(+postId),
  })

  return (
    <MainLayout>
      <Container maxWidth='800px' pt={{ base: 6, lg: 9 }}>
        <IconButton
          aria-label='Back'
          onClick={() => {
            router.back()
          }}
          variant='subtle'
          colorPalette='green'
          rounded='full'
        >
          <ArrowLeftIcon />
        </IconButton>

        <Box as='article' mt={10} color='text'>
          <Box as='header' mb={4}>
            <HStack gap={2}>
              <HStack gap={2}>
                <Avatar name={data?.post?.author.username} size='xl' />
                <Text fontSize='sm' fontWeight={500}>
                  {data?.post?.author.username}
                </Text>
              </HStack>
              <Text fontSize='xs' color='gray.300'>
                {getRelativeTime(data?.post?.updatedAt)}
              </Text>
            </HStack>

            <Badge mt={2}>{data?.post?.community.name}</Badge>
          </Box>

          <Box>
            <Heading as='h1' fontSize='3xl' fontWeight={600} mb={4}>
              {data?.post?.title}
            </Heading>
            <Text whiteSpace='pre-wrap' fontSize='xs'>
              {data?.post?.content}
            </Text>
            <HStack mt={{ base: 5, md: 6 }} color='gray.300' gap={1}>
              <CommentIcon boxSize='12px' />
              <Text fontSize='xs'>{`${data?.post?.commentsCount.toLocaleString()} comments`}</Text>
            </HStack>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  )
}

export default PostPage
