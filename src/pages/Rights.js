import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Container,
} from "@chakra-ui/react";
import Law from "../data/Law.json";
// interface IBlogTags {
//   tags: Array<string>;
//   marginTop?: SpaceProps['marginTop'];
// }

// const BlogTags = (props) => {
//   return (
//     <HStack spacing={2} marginTop={props.marginTop}>
//       {props.tags.map((tag) => {
//         return (
//           <Tag size={"md"} variant="solid" colorScheme="pink" key={tag}>
//             {tag}
//           </Tag>
//         );
//       })}
//     </HStack>
//   );
// };

// interface BlogAuthorProps {
//   date: Date;
//   name: string;
// }

// export const BlogAuthor = (props) => {
//   return (
//     <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
//       <Image
//         borderRadius="full"
//         boxSize="40px"
//         src="https://100k-faces.glitch.me/random-image"
//         alt={`Avatar of ${props.name}`}
//       />
//       <Text fontWeight="medium">{props.name}</Text>
//       <Text>—</Text>
//       <Text>{props.date.toLocaleDateString()}</Text>
//     </HStack>
//   );
// };

const Rights = () => {
  return (
    <Container maxW={"7xl"} p="10">
      <Heading
        color="pink.600"
        as="h1"
        fontSize="6xl"
        textTransform={"uppercase"}
        mb={3}
      >
        Know your rights!!
      </Heading>
      <Text color="pink.600" as="h3" fontSize="2xl" mb={3}>
        rights supporting women safety
      </Text>
      <Divider marginTop="5" color="pink.400" />

      {Law.map((law, index) => {
        return (
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
            >
              <Box
                width={{ base: "100%", sm: "85%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                marginTop="5%"
              >
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    borderRadius="lg"
                    src={law.image}
                    alt="rights"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={
                    ("radial(orange.600 1px, transparent 1px)",
                    "radial(orange.300 1px, transparent 1px)")
                  }
                  backgroundSize="20px 20px"
                  opacity="0.6"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", sm: "0" }}
            >
              {/* <BlogTags tags={['rights', 'constitution']} /> */}
              <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {law.heading}
                </Link>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                // color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg"
              >
                {law.description}
              </Text>
              {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default Rights;
