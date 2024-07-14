import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Box,
  Divider,
  Stack,
} from "@chakra-ui/react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/redux.hooks";

import { ModalProps } from "../../../shared/interfaces/Modal.interfaces";
import { OrderSlice } from "../../../global/store/slices/OrdersSlice";
import { useEffect } from "react";

interface OrderModalProps extends ModalProps {
  orderId: string;
}
export const OrderModal = ({ isOpen, onClose, orderId }: OrderModalProps) => {
  const dispatch = useAppDispatch();
  const { selectedOrder } = useAppSelector((state) => state.orderReducer);

  const onGetOrder = () => {
    dispatch(OrderSlice.actions.setSelectedOrder(orderId));
	console.log(selectedOrder)
  };

  useEffect(() => {
    onGetOrder();
  }, [orderId]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnEsc >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
      <Text fontWeight="bold" textAlign="center" as="h1" fontSize="2xl" mb={4}>
        Order Details
      </Text>
      <Stack spacing={3}>
        <Box>
          <Text fontWeight="bold">Order ID:</Text>
          <Text>{selectedOrder?.id}</Text>
        </Box>
        <Divider />
        <Box>
          <Text fontWeight="bold">Client Name:</Text>
          <Text>{selectedOrder?.clientName}</Text>
        </Box>
        <Divider />
        <Box>
          <Text fontWeight="bold">Client Email:</Text>
          <Text>{selectedOrder?.clientEmail}</Text>
        </Box>
        <Divider />
        <Box>
          <Text fontWeight="bold">Status:</Text>
          <Text>{selectedOrder?.status}</Text>
        </Box>
        <Divider />
        <Box>
          <Text fontWeight="bold">Product Description:</Text>
          <Text>{selectedOrder?.productDescription}</Text>
        </Box>
        <Divider />
        <Box>
          <Text fontWeight="bold">Selected Services:</Text>
          <Text>{selectedOrder?.selectedServices?.join(", ")}</Text>
        </Box>
      </Stack>
    </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
