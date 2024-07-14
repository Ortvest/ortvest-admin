import { Flex } from "@chakra-ui/react";
import { Header } from "./modules/Header";
import { Sidebar } from "./modules/Sidebar";
import { AppRouter } from "./global/router/AppRouter";
function App() {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
       <AppRouter/>
      </Flex>
    </>
  );
}

export default App;
