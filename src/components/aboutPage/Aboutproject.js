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
        <BlogTags tags={["reactjs", "google maps", "mapbox"]} marginTop="3" />
        <Text as="p" fontSize="lg" marginTop="3">

          
           Women think twice before stepping out of their
          house, they live in constant fear. Some of them are even subjected to
          domestic violence and not well aware of constitutional laws and the
          organisations to whom they can ask to help them. So our aim is to
          provide safety as well creating awareness about constitutional rights
          and various NGOs to help them. 
          <br/>
          How are we solving it? <br/>
          Abhaya - Women Safety Application This web based Application is
          helpful to ensure safety and protecting rights of Women.
          <br/>
            we are providing live location sharing through
          SMS , calling family members and organisations like police station,
          office which are nearer to their current location. <br/>
          creating awareness of constitutional law and bringing justice to all victims through NGOs
          and contact us section for assisting with their issues.
          {/* It tries to
          prevent and solves the various threats and exploitation that might
          occur against women. A single click on this application identifies the
          location of the place through GPS and sends a message containing this
          location URL to the registered contacts to help the women in dangerous
          situations and it also has an SOS Alarm alert. To create awareness
          about women rights, we have added the details regarding various
          constitutional rights and various legal actions regarding harassment
          of women. */}
        </Text>
      </VStack>
    </Container>
  );
};

export default About;
