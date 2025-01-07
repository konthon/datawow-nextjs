import { useDisclosure } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import React from 'react'

import { PostDialog } from '@/components/PostDialog'
import { MainLayout } from '@/layouts/MainLayout'
import { communitiesQuery } from '@/queries/community'

const HomePage: NextPage = () => {
  const { open, onClose } = useDisclosure()

  // prefetch
  useQuery(communitiesQuery())

  return (
    <>
      <MainLayout>sdcsdc</MainLayout>
      <PostDialog open={open} onClose={onClose} />
    </>
  )
}

export default HomePage
