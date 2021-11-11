import {React, useState} from 'react'
import siren from "../assets/Audio/siren.mp3"
import { Button, Text, Flex } from "@chakra-ui/react"


var song = new Audio(siren);

const AudioTest = () => {

  const [isplaying, setIsplaying] = useState(false)
  
  const TogglePausePlay=()=>{
    // console.log("data", isplaying)
    setIsplaying(!(isplaying))
 
    // console.log("data after", isplaying)

    let audio = !(isplaying)
    console.log("audio", audio)

    if(audio){
      // song.pause()
      song.play()

      
    }
    else {
      // song.play()
      song.pause()      
    }
    
  }
  return (

    <div  >
      <Flex  h='100vh' bg="pink.500" flexDirection='column' alignItems='center'>
      {/* <audio src={ambulence}></audio>  */}
      {/* <Center  bg="pink.500" h="100vh" > */}
      <Text m={11}  fontSize="4xl">Alert button</Text>

      <Button
            h='40'
            
            w='40'
            
            
            onClick={TogglePausePlay} >
       {isplaying ? <i  w='10' className=" far fa-pause-circle"/>: <i className="far fa-play-circle" />}
          </Button>
       

       {/* <Button aria-label="play"   size="2xl"onClick={TogglePausePlay} >
       {isplaying ? <i class="far fa-pause-circle"/>: <i class="far fa-play-circle"/> }
      
      </Button> */}
{/* </Center>  */}
</Flex>
    
    
    </div>
  )
}

export default AudioTest
