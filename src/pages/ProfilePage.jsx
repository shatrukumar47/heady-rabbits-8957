import React from "react"

import {Box, HStack,Image, Heading} from "@chakra-ui/react"

export  const ProfilePage=()=>{
    
    return <>
    
    <Box> 
        <HStack>

    <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
 <Heading>
    Sonika Kanojia
 </Heading>
        </HStack>
 
    </Box>
    

    </>
}