// import React from 'react'
// import "../components/styles/home.css"
// // import background from "../assets/images/Women-homepage.jpeg"
// const Home = () => {
//     return (
//         <div className="home">
//              <section className="header-section">
//         <div className="center-div">
//           <h1 className="font-weight-bold"> <span className="logo-letter">A</span>bhaya.</h1>
//           <p>
//           here at your service!
//           </p>
//           <div className="header-buttons">
//             <a href="#"> Contact</a>
//             <a href="#"> About Us</a>
//           </div>
//         </div>
//       </section>
//             {/* <h1 className="heading"> <span className="logo-letter">A</span> bhaya.</h1>
//             <h5 >here at your service!</h5> */}
//             {/* <p>for you and the people you love</p> */}

//         </div>
//     )
// }

// export default Home


import {  } from "@chakra-ui/layout";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react';

import React from "react";

function Home() {
  return (
    
    
    <Container maxW={'3xl'}>
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        {/* Listen<br/> & <br/> */}
        <Text  color={'pink.500'}>
          A <br/>
        </Text>
        <Text as={'span'} color={'black.500'}>
          BHAYA.
        </Text>
      </Heading>
      <Text color={'gray.500'}>
      here at your service!
      </Text>
      <Stack
        direction={'column'}
        spacing={5}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
         <Button
         
          colorScheme={'green'}
          bg={'pink.600'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'pink.300',
          }}
          onClick={() => {
            window.open(process.env.REACT_APP_LOGIN, "_self");
          }}
          >
              <a href="#" >SOS </a>
          
        </Button>
        
       
      </Stack>
    </Stack>
  </Container>
    // </Flex>
  );
}

export default Home;