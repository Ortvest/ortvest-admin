import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { customTheme } from "../../providers/theme";
import { OrderModal } from "../Modals/Order";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux.hooks";
import { FiMoreVertical } from "react-icons/fi";
import { ActionMenu } from "./ActionMenu";
import { getOrders } from "../../global/api/orders.api";


export const OrdersTable = () => {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrderId, setSelectedOrderId] = useState<string>("");

  const { allOrders } = useAppSelector((state) => state.orderReducer);

  const onOpenOrder = (id: string) => {
    setSelectedOrderId(id);
    onOpen();
  };

  const handleMenuClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };


  useEffect(() => {
    getOrders(dispatch);
  }, []);

  return (
    <Box display="flex" justifyContent="center" w={"100%"} p={4}>
      <Table variant="simple" h={70}>
        <Thead>
          <Tr>
            <Th>Order id</Th>
            <Th>Client Name</Th>
            <Th>Client Email</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allOrders.map((order, index) => (
            <Tr
              key={index}
              _hover={{
                backgroundColor: customTheme.colors.gray[50],
                cursor: "pointer",
                transition: "0.3s ease-in-out",
              }}
              onClick={() => onOpenOrder(order._id)}
            >
              <Td w={300}>{order._id}</Td>
              <Td w={300}>{order.clientName}</Td>
              <Td w={300}>{order.clientEmail}</Td>
              <Td w={300}>{order.status || "None"}</Td>
              <Td w={50}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<FiMoreVertical />}
                    variant="outline"
                    borderRadius={"100%"}
                    size="sm"
                    onClick={handleMenuClick}
                  />
                  <ActionMenu orderId={order._id}/>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <OrderModal isOpen={isOpen} onClose={onClose} orderId={selectedOrderId} />
    </Box>
  );
};


