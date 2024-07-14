import {
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import { customTheme } from "../../../providers/theme";
import { useAppDispatch } from "../../../shared/hooks/redux.hooks";
import { AuthSlice } from "../../../global/store/slices/AuthSlice";
import { ModalProps } from "../../../shared/interfaces/Modal.interfaces";

export const LoginModal = ({ isOpen, onClose }: ModalProps) => {
	const dispatch = useAppDispatch()
	const onLogin = () => {
		dispatch(AuthSlice.actions.setIsAuth(true))
	}
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
	onLogin()
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Text
            fontWeight={"bold"}
            textAlign={"center"}
            as="h1"
            fontSize={customTheme.fontSizes["2xl"]}
          >
            Login to the system
          </Text>
          <ModalBody>
            <form onSubmit={onSubmit}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button mt={4} type="submit">
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
