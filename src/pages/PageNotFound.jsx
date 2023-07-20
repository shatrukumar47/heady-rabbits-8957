import { Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import pageNotFoundGif from "../images/pageNotFoundGif.gif"

const PageNotFound = () => {
  return (
    <div style={{background:"#D1CBD4", padding:"70px 0px"}}>
    <Container>
      <Image src={pageNotFoundGif} />
      <Heading>Page Not Found !</Heading>
    </Container>
    </div>
  )
}

export default PageNotFound
