import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={4} mx={"auto"} maxW={"lg"} py={12} px={2}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log in </Heading>
          <Text fontSize={"lg"} color={"grey.500"}>
            for the safety of you and your loved ones.
          </Text>
        </Stack>
        <Box
          minW={"70vh"}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={2}
        >
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="contact1">
              <FormLabel>Contact name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="number1">
              <FormLabel>Phone Number</FormLabel>
              <Input type="number" required />
            </FormControl>
            {/* TODO: A meesage textArea which is required */}
            <Stack spacing={10}>
              {/* <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack> */}
              <Button
                bg={"pink.400"}
                color={"white"}
                _hover={{
                  bg: "pink.500",
                }}
                type="button"
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
