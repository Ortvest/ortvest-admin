import { Flex } from "@chakra-ui/react";
import { Header } from "./modules/Header";
import { Sidebar } from "./modules/Sidebar";
import { AppRouter } from "./global/router/AppRouter";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./shared/hooks/redux.hooks";
import { AuthSlice } from "./global/store/slices/AuthSlice";
function App() {
  const dispatch = useAppDispatch();

  const { isAuthenticated } = useAppSelector((state) => state.authReducer);
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      dispatch(AuthSlice.actions.setIsAuth(true));
    }
  }, []);
  return (
    <>
      <Header />
      {isAuthenticated ? (
        <Flex>
          <Sidebar />
          <AppRouter />
        </Flex>
      ) : null}
    </>
  );
}

export default App;
