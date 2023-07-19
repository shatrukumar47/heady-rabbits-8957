import { Box, Button, Container, Flex, Heading, IconButton, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import {ArrowForwardIcon, PlayIcon} from "@chakra-ui/icons"
import React from 'react'
import image1 from "./image-1.gif"


const HomePage = () => {
  return (
    // <Box>
    //   <Image src={"https://im.ezgif.com/tmp/ezgif-1-f1164e8754.gif"} />
    // </Box>
    <Container maxW={'7xl'}>
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.400',
              zIndex: -1,
            }}>
            spendwise,
          </Text>
          <br />
          <Text fontSize={"30px"} as={'span'} color={'red.400'}>
            Manage your finances wisely
          </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={"lg"}>
        <span style={{fontWeight:"bold"}}>spendwise</span> is a fintech mobile application that aims to help manage users finance by <span style={{fontWeight:"bold"}}>Alerting users</span> when they are close to their spending limit and also give <span style={{fontWeight:"bold"}}>helpful tips</span> to help improve their spending habits
        </Text>
        <Stack alignItems={"center"}>
          <Button
            variant={"outline"}
            colorScheme={'blue'}
            padding={"23px"}
            _hover={{borderRadius:"20px", transition:"border-radius 0.3s ease-in-out 0s" }}
            rightIcon={<ArrowForwardIcon />}
            >
            Get Started 
          </Button>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}>
          <Image
            alt={'animation'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={image1}
          />
        </Box>
      </Flex>
    </Stack>
  </Container>
  )
}

export default HomePage
