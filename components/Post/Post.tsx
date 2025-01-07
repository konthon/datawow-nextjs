import { Badge, Box, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

import { PostsQuery } from '@/GraphQL/_generated'

import { Avatar } from '../ui/avatar'
import { CommentIcon } from '../Icons'

type Post = PostsQuery['posts'][number]
interface Props extends Post {}

const Post: FC<Props> = (props) => {
  const { title, content, author, community, commentsCount } = props
  return (
    <Box as='article' p={5} backgroundColor='white'>
      <HStack mb={4}>
        <Avatar name={author.username} />
        <Text color='gray.300' fontSize='sm' fontWeight={500}>
          {author.username}
        </Text>
      </HStack>
      <Badge mb={4}>{community.name}</Badge>
      <Stack gap={0.5} color='text'>
        <Heading fontSize='md' fontWeight={600}>
          {title}
        </Heading>
        <Text whiteSpace='pre-wrap' lineClamp={2} fontSize='xs'>
          {content}
        </Text>
      </Stack>
      <HStack mt={2} gap={1}>
        <CommentIcon color='gray.300' boxSize='12px' />
        <Text color='gray.300' fontSize='xs'>
          {`${commentsCount.toLocaleString()} comments`}
        </Text>
      </HStack>
    </Box>
  )
}

export default Post
