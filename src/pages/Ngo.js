import React from 'react'
import {
    Box,
    Link,
    SimpleGrid,
    Text,
    Badge,
    Button,
    Center,
    Stack,
    Heading,
    HStack,
  } from "@chakra-ui/react";
  import Ngodata from "../data/Ngodata.json"

const Ngo = () => {
    return (
        <>
             <div h="100vh">
        <Stack as={Box} alignItems="center" spacing={{ base: 8, md: 14 }}>
          {/* <Text font-weight="700" fontSize="3xl">Whom do you like to contact?</Text> */}
          <Heading
          mt={5}
          fontWeight={500}
          color={'pink.500'}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >We are here to help you.</Heading>
            
            
            <HStack justifyItems='space-between' >
            <Heading
          mb={8}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}>NGOs</Heading>
          </HStack>
        </Stack>
        <SimpleGrid columns={3} spacing={10}>
            

             {Ngodata.map((data)=>{
                 return(
                    <Center py={6}>
                    <Box
                      maxW={'320px'}
                      w={'full'}
                      // bg={useColorModeValue('white', 'gray.900')}
                      boxShadow={'2xl'}
                      rounded={'lg'}
                      p={6}
                      textAlign={'center'}>
                     
                      <Heading fontSize={'2xl'}  mb={5} fontFamily={'body'}>
                        {data.name}
                      </Heading>
                      
                      <Text
                        textAlign={'center'}
                      //   color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        {data.description}
                      </Text>
              
                      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                        <Badge
                          px={2}
                          py={1}
                          // bg={useColorModeValue('gray.50', 'gray.800')}
                          fontWeight={'400'}>
                          {data.tag}
                        </Badge>
                        
                      </Stack>
              
                      <Stack mt={8} direction={'row'} spacing={4}>
                        <Button
                          flex={1}
                          fontSize={'sm'}
                          rounded={'full'}
                          bg={'green.400'}
                          color={'white'}
                          _focus={{
                            bg: 'green.200',
                          }}>
                          call
                        </Button>
                        {/* <Link href={data.website}> */}
                        <Button
                          flex={1}
                          fontSize={'sm'}
                          rounded={'full'}
                          bg={'blue.400'}
                          color={'white'}
                          >
                          website
                        </Button>
                        {/* </Link> */}
                      </Stack>
                    </Box>
                  </Center>
                 )
             })}
       

</SimpleGrid>
{/* <Divider marginTop="6" color="grey.600" /> */}

          
  
      </div>
    </>
  );
};


export default Ngo
