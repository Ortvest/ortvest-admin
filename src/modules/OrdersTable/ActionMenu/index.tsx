import { MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
import { SelectOrderStatusModal } from "../../Modals/SelectOrderStatus";

interface ActionMenuProps {
  orderId: string;
}
export const ActionMenu = ({ orderId }: ActionMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleMenuClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  return (
    <MenuList onClick={handleMenuClick}>
      <MenuItem onClick={onOpen}>Update status</MenuItem>

      <SelectOrderStatusModal
        onClose={onClose}
        isOpen={isOpen}
        orderId={orderId}
      />
    </MenuList>
  );
};
