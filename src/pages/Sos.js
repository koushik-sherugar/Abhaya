import { Flex, Text, Box, Link, Heading } from "@chakra-ui/react";
import React from "react";
const Sos = () => {
  return (
    <Flex justifyContent="center" h="100vh" alignItems='center' flexDirection='column'>
      <Heading
          as="h1"
          fontFamily={"Raleway"}
          fontWeight={"bold"}
          fontSize={58}
          // textTransform={"uppercase"}
          mb={5}
          color={"pink.600"}
        >Are you feeling unsafe?</Heading>
      <br />
      <Text mb={4} fontSize="2xl">press the button below 👇</Text>
      <Link href= "/soscomponent">
      <Box
      
        as="button"
        height="300px"
        width= "300px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="8px"
        borderRadius="150px"
        fontSize="14px"
        fontWeight="semibold"
        bg="red"
        borderColor="#ccd0d5"
        color="#4b4f56"
        _hover={{ bg: "#8B0000" }}
        _active={{
          bg:"#B22222",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .25), 0 1px 1px rgba(0, 0, 0, .55)",
        }}
      >
            <Text color="white" fontSize="6xl">SOS </Text>
        
      </Box>
      </Link>
    </Flex>
  );
};

export default Sos;
