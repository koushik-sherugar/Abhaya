import React from 'react'

import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
const Footer = () => {
    return (
        <div>
             <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2021  Hack-Up007. All rights reserved</Text>
          
        </Container>
      </Box>
  
     
  
  
        </div>
    )
}

export default Footer
