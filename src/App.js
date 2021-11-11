import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";

import Route from "./routes/routes";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
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
        position="absolute"
        right="3"
        top="3"
        _focus={{ outline: "none" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </Button>

      <Header />
      <Route />
      <Footer />

      {/* <AudioTest/> */}
      {/* </Flex> */}
    </>
  );
}

export default App;
