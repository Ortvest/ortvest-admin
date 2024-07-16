import { Flex } from "@chakra-ui/react";
import { Header } from "./modules/Header";
import { Sidebar } from "./modules/Sidebar";
import { AppRouter } from "./global/router/AppRouter";
import { useEffect } from "react";
import { ordersApi } from "./global/api/orders.api";
function App() {
  useEffect(() => {
    ordersApi.getOrders();
  }, []);
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        <AppRouter />
      </Flex>
    </>
  );
}

export default App;
