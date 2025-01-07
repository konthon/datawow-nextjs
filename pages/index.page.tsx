import { Box, Stack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import { FilterBar, usePostFilter } from '@/components/FilterBar'
import { Post } from '@/components/Post'
import { PostDialog } from '@/components/PostDialog'
import { MainLayout } from '@/layouts/MainLayout'
import { communitiesQuery } from '@/queries/community'
import { postsQuery } from '@/queries/post'
import { SIDEBAR_WIDTH } from '@/shared/navigation'

const HomePage: NextPage = () => {
  const postFilter = usePostFilter()
  const { data } = useQuery(postsQuery(postFilter))

  // prefetch
  useQuery(communitiesQuery())

  return (
    <>
      <MainLayout backgroundColor='gray.100'>
        <Box
          mx={{ base: 4, lg: 10 }}
          pr={SIDEBAR_WIDTH}
          py={{ base: 12, lg: 8 }}
        >
          <FilterBar />
          <Stack
            as='section'
            gap={0}
            divideY='0.5px'
            divideColor='gray.100'
            borderRadius='xl'
            overflow='hidden'
          >
            {data?.posts.map((post) => (
              <Link key={post.id} href={`/post/${post.id}`}>
                <Post {...post} />
              </Link>
            ))}
          </Stack>
        </Box>
      </MainLayout>
      <PostDialog />
    </>
  )
}

export default HomePage
