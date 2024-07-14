import { Flex } from "@chakra-ui/react";
import { Header } from "./modules/Header";
import { OrdersTable } from "./modules/OrdersTable";
import { Sidebar } from "./modules/Sidebar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        <Routes>
          <Route path="/orders" element={<OrdersTable />} />
        </Routes>
      </Flex>
    </>
  );
}

export default App;
