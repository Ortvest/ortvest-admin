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
import { authApi } from "../../../global/api/auth.api";
import { useState } from "react";
import { Credentials } from "../../../shared/interfaces/Auth.interfaces";

export const LoginModal = ({ isOpen, onClose }: ModalProps) => {
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = useState<Credentials>({email: "", password: ""} as Credentials)

  const onChangeHandler = (key: keyof Credentials, value: string) => {
	setCredentials(prevState => ({...prevState, [key]: value}))
  }
  const onLogin = () => {
    authApi
      .signIn(credentials)
      .then((response) => {
        dispatch(AuthSlice.actions.setIsAuth(true));
		localStorage.setItem("access_token", response.access_token)
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin();
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
                <Input type="email" onChange={(e) => onChangeHandler("email", e.currentTarget.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e) => onChangeHandler("password", e.currentTarget.value)} />
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
