import {
  // Grid,
  Box,
  // VStack,
  // Flex,
  SimpleGrid,
  // Text,
  Divider,
  // Container,
  Stack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import CardFamily from "./CardFamily"
import CardOrg from "./CardOrg"
import React from "react";

const SosComponent = () => {
  return (
    <>
      <div h="100vh">
        <Stack as={Box} alignItems="center" spacing={{ base: 8, md: 14 }}>
          {/* <Text font-weight="700" fontSize="3xl">Whom do you like to contact?</Text> */}
          <Heading
          color={"pink.500"}
          mt={5}
          fontWeight={600}
          textTransform={"uppercase"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >Whom do you like to contact?</Heading>
            
            {/* <Grid columns={2} spacing={10}> */}
                 {/* <VStack alignItems="center">

          <Text fontSize="2xl">contact?</Text>
          <Text fontSize="2xl">to contact?</Text>
                </VStack>  */}

            {/* </Grid> */}
            <HStack justifyItems='space-between' >
            <Heading
          mt={8}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}>Family</Heading>
          </HStack>
        </Stack>
        <SimpleGrid columns={2} spacing={10}>
            
  <CardFamily/>
</SimpleGrid>
<Divider marginTop="6" color="grey.600" />
<Stack as={Box} alignItems="center" spacing={{ base: 8, md: 14 }}>
<HStack  justifyItems='space-between' >
    
<Heading
          mt={8}
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}>Organisation</Heading>
          </HStack>
        </Stack>
        <SimpleGrid columns={2} spacing={10}>
            
          <CardOrg/>
</SimpleGrid>
          
  
      </div>
    </>
  );
};

export default SosComponent;
