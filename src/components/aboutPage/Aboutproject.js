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
          <Tag size={"md"} variant="solid" colorScheme="blue" key={tag}>
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
          color={"green.400"}
        >
          About The Project
        </Heading>
        <BlogTags tags={["reactjs", "google maps", "mapbox"]} marginTop="3" />
        <Text as="p" fontSize="lg" marginTop="3">
          Abhaya - Women Safety Application This web based Application is
          helpful to ensure safety and protecting rights of Women. It tries to
          prevent and solves the various threats and exploitation that might
          occur against women. A single click on this application identifies the
          location of the place through GPS and sends a message containing this
          location URL to the registered contacts to help the women in dangerous
          situations and it also has an SOS Alarm alert. To create awareness
          about women rights, we have added the details regarding various
          constitutional rights and various legal actions regarding harassment
          of women.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;
