import { React, useState } from "react";
import siren from "../assets/Audio/siren.mp3";
import { Flex, Heading, Box } from "@chakra-ui/react";
// import { NotAllowedIcon } from '@chakra-ui/icons'

var song = new Audio(siren);

const Panic = () => {
  const [isplaying, setIsplaying] = useState(false);

  const TogglePausePlay = () => {
    // console.log("data", isplaying)
    setIsplaying(!isplaying);

    // console.log("data after", isplaying)

    let audio = !isplaying;
    console.log("audio", audio);

    if (audio) {
      // song.pause()
      song.play();
    } else {
      // song.play()
      song.pause();
    }
  };
  return (
    <div>
      <Flex
        h="100vh"
        alignItems="center"
        flexDirection="column"
        bgGradient="linear(to-l, #f1a7f1, #fad0c4 )"
      >
        {/* <Flex  h='100vh' bg="pink.500" flexDirection='column' alignItems='center'> */}
        {/* <audio src={ambulence}></audio>  */}
        {/* <Center  bg="pink.500" h="100vh" > */}
        {/* <Text my={8}  fontSize="4xl">Panic button</Text> */}
        <Heading
          color="pink.600"
          as="h1"
          fontSize="6xl"
          textTransform={"uppercase"}
          mb={3}
        >
          Panic button
        </Heading>
        <Heading fontSize={"x-large"} mb={8} px={6} color={"pink.500"}>
          According pshycology it creates panic to the assaulter during attack.
        </Heading>

        <Box
          as="button"
          height="300px"
          width="300px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="8px"
          borderRadius="150px"
          fontSize="14px"
          fontWeight="semibold"
          bg="red"
          borderColor="#ccd0d5"
          color="white"
          _hover={{ bg: "#8B0000" }}
          _active={{
            bg: "#B22222",
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .25), 0 1px 1px rgba(0, 0, 0, .55)",
          }}
          onClick={TogglePausePlay}
        >
          {/* <NotAllowedIcon color="white"  />: <i className="far fa-play-circle" /> */}
          {isplaying ? (
            <Heading as="h1" fontWeight={"bold"} fontSize={58}>
              STOP
            </Heading>
          ) : (
            <Heading as="h1" fontWeight={"bold"} fontSize={58}>
              START
            </Heading>
          )}
        </Box>
      </Flex>
    </div>
  );
};

export default Panic;
