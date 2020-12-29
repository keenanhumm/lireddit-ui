import {
  Avatar,
  Box,
  Flex,
  Link,
  Heading,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import { BubbleChart } from "@material-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

function NavBar({ }): ReactElement {
  const router = useRouter();
  const [{ data }] = useMeQuery();
  const [, logout] = useLogoutMutation();
  const { me: currentUser } = data || {};

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding={4}
      boxShadow="md"
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        onClick={() => router.push("/areas")}
      >
        <BubbleChart
          style={{ color: "#0987A0" }}
        />
        <Heading
          color="cyan.500"
        >
          Kaudan
        </Heading>
      </Flex>
      <Box
        marginLeft="auto"
      >
        {
          !currentUser ? <Flex>
            {
              !router.pathname.includes("login") && <NextLink href="/login">
                <Link
                  textDecoration="none"
                  color="cyan.700"
                  marginRight={2}>
                  Log in
                </Link>
              </NextLink>
            }
            {
              !router.pathname.includes("register") && <NextLink href="/register">
                <Link
                  color="cyan.700"
                  marginRight={2}>
                  Register
                </Link>
              </NextLink>
            }
          </Flex> : <Flex alignItems="center">
              <Menu>
                <MenuButton>
                  <Avatar
                    size="sm"
                    name={currentUser.username}
                    textDecoration="none"
                  />
                </MenuButton>
                <MenuList
                  background="white"
                >
                  <MenuItem
                    onClick={() => { logout().then(() => router.push("/login")); }}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
        }
      </Box>
    </Flex >
  );
}

export default NavBar;
