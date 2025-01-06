import {
  Box,
  Button,
  Center,
  Field,
  Flex,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignInPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ username: string }>({ defaultValues: { username: '' } })

  const onSubmit: Parameters<typeof handleSubmit>[0] = (values) => {
    console.log(values)
    reset()
  }

  return (
    <Flex
      minHeight='100dvh'
      color='white'
      backgroundColor='green.500'
      flexDirection={{ base: 'column', lg: 'row-reverse' }}
    >
      <Center
        flexBasis={{ base: '375px', lg: 'min(50vw, 632px)' }}
        backgroundColor='green.300'
        borderTopLeftRadius={{ lg: '4xl' }}
        borderBottomLeftRadius='4xl'
        borderBottomRightRadius={{ base: '4xl', lg: 'none' }}
      >
        <VStack gap={{ base: '28px', lg: '42px' }}>
          <Box
            position='relative'
            width={{ base: '170px', lg: '300px' }}
            height={{ base: '130px', lg: '230px' }}
          >
            <Image
              src='/logo.png'
              alt='a Board logo'
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Heading
            as='h1'
            fontSize={{ base: '2xl', lg: '3xl' }}
            fontFamily='Castoro'
            fontStyle='italic'
          >
            a Board
          </Heading>
        </VStack>
      </Center>
      <Center flexGrow={1} p={4}>
        <VStack alignItems='flex-start' width='min(100%, 384px)' gap={10}>
          <Heading as='h2'>Sign in</Heading>
          <VStack
            as='form'
            onSubmit={handleSubmit(onSubmit)}
            width='full'
            gap={5}
          >
            <Field.Root invalid={!!errors.username}>
              <Input
                placeholder='Username'
                backgroundColor='white'
                width='full'
                {...register('username', {
                  required: { value: true, message: 'Please fill in username' },
                })}
              />
              <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
            </Field.Root>
            <Button type='submit' width='full'>
              Sign In
            </Button>
          </VStack>
        </VStack>
      </Center>
    </Flex>
  )
}

export default SignInPage
