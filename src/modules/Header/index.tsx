import { Box, Flex, Text } from "@chakra-ui/react";
import {customTheme} from "../../providers/theme.ts";
import { Login } from "./features/Login/index.tsx";
import { useAppSelector } from "../../shared/hooks/redux.hooks.ts";
import { Logout } from "./features/Logout/index.tsx";

export const Header = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);


  return (
    <Flex
      alignItems={"center"}
      as={"header"}
      background={customTheme.colors.black}
      width={"100%"}
      height={"70px"}
      justifyContent={"space-between"}
      padding={"0 20px"}
    >
      <Box>
        <Text
          fontSize={customTheme.fontSizes["3xl"]}
          color={customTheme.colors.white}
        >
          Ortvest Admin
        </Text>
      </Box>
     <Box>
        {isAuthenticated ? <Logout /> : <Login />}
    </Box>
    </Flex>
  );
};
