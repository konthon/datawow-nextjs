import { Box, Stack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { FilterBar, usePostFilter } from '@/components/FilterBar'
import { Post } from '@/components/Post'
import { PostDialog, usePostDialogStore } from '@/components/PostDialog'
import { useAuth } from '@/hooks/useAuth'
import { MainLayout } from '@/layouts/MainLayout'
import { communitiesQuery } from '@/queries/community'
import { ourPostsQuery } from '@/queries/post'
import { SIDEBAR_WIDTH } from '@/shared/navigation'

import {
  DeletePostDialog,
  useDeletePostDialogStore,
} from './components/DeletePostDialog'

const OurBlogPage: NextPage = () => {
  const router = useRouter()
  const { isLoggedIn, isLoading } = useAuth()

  const postFilter = usePostFilter()
  const { data } = useQuery(ourPostsQuery(postFilter))

  const onOpenPost = usePostDialogStore((state) => state.onOpen)
  const onOpenDeletePost = useDeletePostDialogStore((state) => state.onOpen)

  // prefetch
  useQuery(communitiesQuery())

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/sign-in')
    }
  }, [router, isLoggedIn, isLoading])

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
            {data?.ourPosts.map((post) => (
              <Link key={post.id} href={`/post/${post.id}`}>
                <Post
                  {...post}
                  onEdit={() => {
                    onOpenPost(post.id)
                  }}
                  onDelete={() => {
                    onOpenDeletePost(post.id)
                  }}
                />
              </Link>
            ))}
          </Stack>
        </Box>
      </MainLayout>
      <PostDialog />
      <DeletePostDialog />
    </>
  )
}

export default OurBlogPage
