import {
  Button
  
} from "@chakra-ui/react";
import { useAppDispatch } from "../../../../shared/hooks/redux.hooks";
import { AuthSlice } from "../../../../global/store/slices/AuthSlice";

export const Logout = () => {
	const dispatch = useAppDispatch()
	const onLogout = () => {
		localStorage.removeItem("access_token")
		dispatch(AuthSlice.actions.setIsAuth(false))
	}
  return (
    <>
      <Button onClick={onLogout}>Logout</Button>
    </>
  );
};
