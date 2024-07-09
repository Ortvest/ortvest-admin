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

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
