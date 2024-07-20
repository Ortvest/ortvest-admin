import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Box,
  Divider,
  Stack,
  Button,
} from "@chakra-ui/react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/redux.hooks";

import { ModalProps } from "../../../shared/interfaces/Modal.interfaces";
import { OrderSlice } from "../../../global/store/slices/OrdersSlice";
import { useEffect } from "react";
import axios from "axios";
import { updateOrderStatus } from "../../../global/api/orders.api";
import { OrderStatus } from "../../../shared/interfaces/Orders.interfaces";

interface OrderModalProps extends ModalProps {
  orderId: string;
}

export const SelectOrderStatusModal = ({
  isOpen,
  onClose,
  orderId,
}: OrderModalProps) => {
  const dispatch = useAppDispatch();
  const {statuses} = useAppSelector(state => state.orderReducer)

  const onUpdateOrderStatus = (status: string) => {
    updateOrderStatus(dispatch, { _id: orderId, status }).then(() => {
      onClose();
    });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnEsc>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Text
              fontWeight="bold"
              textAlign="center"
              as="h1"
              fontSize="2xl"
              mb={4}
            >
              Select order status
            </Text>
            <Stack spacing={3}>
              {statuses.map((status: OrderStatus) => (
                <Button
                  key={status.label}
                  onClick={() => onUpdateOrderStatus(status.label)}
                  variant="outline"
				  bg={status.bgColor}
                >
                  {status.label}
                </Button>
              ))}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
