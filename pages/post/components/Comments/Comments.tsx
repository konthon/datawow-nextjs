import { Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { commentsQuery } from '@/queries/comment'
import { getRelativeTime } from '@/shared/time'

const Comments: FC = () => {
  const router = useRouter()
  const rawPostId = router.query.postId as string
  const postId = !Number.isNaN(+rawPostId) ? +rawPostId : undefined

  const { data } = useQuery({
    ...commentsQuery({ postId: postId! }),
    enabled: !!postId,
  })

  return (
    <Stack gap={6} mb={6}>
      {data?.post?.comments.map((comment) => (
        <Grid key={comment.id} templateColumns='auto 1fr' gap={2}>
          <GridItem>
            <Avatar name={comment.user.username} />
          </GridItem>
          <GridItem alignContent='center'>
            <HStack gap={2}>
              <Text color='text' fontWeight={500} fontSize='sm'>
                {comment.user.username}
              </Text>
              <Text color='gray.300' fontSize='xs'>
                {getRelativeTime(comment.updatedAt)}
              </Text>
            </HStack>
          </GridItem>
          <GridItem />
          <GridItem>
            <Text whiteSpace='pre-wrap' color='text' fontSize='xs'>
              {comment.content}
            </Text>
          </GridItem>
        </Grid>
      ))}
    </Stack>
  )
}

export default Comments
