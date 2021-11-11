import { Flex, Text, Box, Link } from "@chakra-ui/react";
import React from "react";
// import SosComponent from "./SosComponent";
const Sos = () => {
  return (
    <Flex justify="center" h="100vh" alignItems='center' flexDirection='column'>
      <Text fontSize="4xl">Feeling unsafe?</Text>
      <br />
      <Text fontSize="2xl">press the button below 👇</Text>
      <Link href= "/soscomponent">
      <Box
      
        as="button"
        height="300px"
        width= "300px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="8px"
        borderRadius="100px"
        fontSize="14px"
        fontWeight="semibold"
        bg="red"
        borderColor="#ccd0d5"
        color="#4b4f56"
        _hover={{ bg: "#ebedf0" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
            <Text fontSize="4xl">SOS <i class="fas fa-ban"/></Text>
        
      </Box>
      </Link>
    </Flex>
  );
};

export default Sos;
