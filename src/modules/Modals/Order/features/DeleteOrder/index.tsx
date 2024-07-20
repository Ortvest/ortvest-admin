import { Button } from "@chakra-ui/react";
import { deleteOrder } from "../../../../../global/api/orders.api";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../shared/hooks/redux.hooks";
import { customTheme } from "../../../../../providers/theme";

interface DeleteOrderProps {
	onClose: () => void;
}
export const DeleteOrder = ({onClose}: DeleteOrderProps) => {
  const dispatch = useAppDispatch();
  const { selectedOrder } = useAppSelector((state) => state.orderReducer);
  const onDeleteOrder = () => {
    deleteOrder(dispatch, selectedOrder?._id || "").then(() => {
		onClose()
	})
  };
  return <Button bg={customTheme.colors.red} color={customTheme.colors.white} onClick={onDeleteOrder}>Delete order</Button>;
};
