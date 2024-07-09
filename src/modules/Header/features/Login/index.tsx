import {
  Button,
  useDisclosure,
  
} from "@chakra-ui/react";
import { LoginModal } from "../../../Modals/Login";

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Login</Button>
      <LoginModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
};
