import {React, useState} from 'react'
import ambulence from "../assets/Audio/ambulance.mp3"
import { Button, ButtonGroup } from "@chakra-ui/react"


var song = new Audio(ambulence);

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

    <div>
      {/* <audio src={ambulence}></audio> */}

      <Button aria-label="play"  size="large"onClick={TogglePausePlay} >
       {isplaying ? <i class="far fa-pause-circle"/>: <i class="far fa-play-circle"/> }
      
      </Button>
      
    </div>
  )
}

export default AudioTest
