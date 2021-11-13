import React from "react";
import {
  Heading,
  Text,
  HStack,
  Tag,
  Container,
  VStack,
} from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="green" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const About = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading
          as="h1"
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={48}
          textTransform={"uppercase"}
          mb={7}
          color={"pink.500"}
        >
          About The Project
        </Heading>
        <Text fontFamily={"poppins"}as="p" fontSize="lg" marginTop="3">

        <Heading as="h6" pt={3} pb={1} color="grey">What problem we are trying to solve? </Heading>
           Women think twice before stepping out of their
          house, they live in constant fear. Some of them are even subjected to
          domestic violence and not well aware of constitutional laws and the
          organisations to whom they can ask to help them. So our aim is to
          provide safety as well creating awareness about constitutional rights
          and various NGOs to help them. <br/>
          

          <Heading as="h6" pt={3} pb={1} color="grey">How we are solving it? </Heading>
        <BlogTags tags={["reactjs", "google maps", "mapbox", "twilio"]} marginTop="3" marginBottom="2" />
          {/* Abhaya - Women Safety Application This web based Application is
          helpful to ensure safety and protecting rights of Women. */}
          <br/>
          We are providing live location sharing through
          SMS , calling family members and organisations like police station,
          office which are nearer to their current location.
          <br/>
          Creating awareness of constitutional law and bringing justice to all victims through NGOs
          and contact us section for assisting with their issues.
          
        </Text>
      </VStack>
    </Container>
  );
};

export default About;
