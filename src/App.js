import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";

import Route from "./routes/routes"
import Header from "./pages/Header"
import AudioTest from "./components/AudioTest"
import Footer from './pages/Footer';
function App() {
    // <div className="App">
    //     <Header/>
    //     <Route/>
        
    //     <AudioTest/>
    // </div>
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    {/* <Flex justify='center' flexDir='column' align='center'> */}
      <Button
        position='absolute'
        right='3'
        top='3'
        _focus={{ outline: "none" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <i class="fas fa-moon"></i> : <i class="fas fa-sun"></i>}
      </Button>
      
      <Header />
      <Route />
      <Footer/>
      {/* <AudioTest/> */}
    {/* </Flex> */}
    </>
  );
}

export default App;
