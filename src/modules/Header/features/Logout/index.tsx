import {
  Button,
  useDisclosure,
  
} from "@chakra-ui/react";
import { LoginModal } from "../../../Modals/Login";
import { useAppDispatch } from "../../../../shared/hooks/redux.hooks";
import { AuthSlice } from "../../../../global/store/slices/AuthSlice";

export const Logout = () => {
	const dispatch = useAppDispatch()
	const onLogout = () => {
		dispatch(AuthSlice.actions.setIsAuth(false))
	}
  return (
    <>
      <Button onClick={onLogout}>Logout</Button>
    </>
  );
};
