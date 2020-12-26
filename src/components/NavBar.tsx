import { Avatar, Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

function NavBar({ }): ReactElement {
  const router = useRouter();
  const [{ data }] = useMeQuery();
  const [{ fetching: isLoggingOut }, logout] = useLogoutMutation();
  const { me: currentUser } = data || {};

  useEffect(() => {
    // route to login if not logged in
    if (!currentUser) router.push("/login");
  }, [currentUser]);

  return (
    <Flex
      background="tomato"
      padding={4}
    >
      <Box
        marginLeft="auto"
      >
        {
          !currentUser ? <Flex>
            <NextLink href="/login">
              <Link
                color="white"
                marginRight={2}>
                Log in
              </Link>
            </NextLink>
            <NextLink href="/register">
              <Link
                color="white"
                marginRight={2}>
                Register
              </Link>
            </NextLink>
          </Flex> : <Flex alignItems="center">
              <Text
                color="white"
                marginRight={2}
              >
                {currentUser.username}
              </Text>
              <Avatar
                marginRight={2}
                size="sm"
                name={currentUser.username}
              />
              <Button
                isLoading={isLoggingOut}
                color="white"
                variant="link"
                onClick={() => { logout().then(() => router.push("/login")); }}
              >
                Log out
              </Button>
            </Flex>
        }
      </Box>
    </Flex >
  );
}

export default NavBar;
