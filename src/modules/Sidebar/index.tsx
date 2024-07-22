import { Box, Flex, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { customTheme } from "../../providers/theme";
import { Link, useLocation } from "react-router-dom";

import { routesList } from "../../global/router";
export const Sidebar = () => {
  const location = useLocation();
  return (
    <Flex height="100vh">
      <Box
        as="aside"
        width="250px"
        bg={customTheme.colors.black}
        color="white"
        p={4}
      >
        <nav>
          <List spacing={5} h={'100%'}>
            {routesList.map((route, index) => {
              const Icon = route.previewIcon;
              const isActive = location.pathname === route.path;
              return (
                <ListItem
                  key={index}
                  bg={isActive ? customTheme.colors.lightBlack : "transparent"}
                  borderRadius="md"
                >
                  <Link
                    to={route.path}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <HStack spacing={5} p={2}>
                      {Icon && <img src={Icon} alt="Icon" />}
                      <Text
                        
                        fontSize={customTheme.fontSizes["lg"]}
                      >
                        {route.title}
                      </Text>
                    </HStack>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>
    </Flex>
  );
};
