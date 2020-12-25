import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { ReactElement } from "react";
import { useMeQuery } from "../generated/graphql";

function NavBar({ }): ReactElement {
  const [{ data }] = useMeQuery();
  const { me: currentUser } = data || {};

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
          </Flex> : <Flex>
              <Text
                color="white"
                marginRight={2}
              >
                {currentUser.username}
              </Text>
              <Button
                color="white"
                variant="link"
              >
                Log out
              </Button>
            </Flex>
        }
      </Box>
    </Flex>
  );
}

export default NavBar;
