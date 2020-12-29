import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Wrapper from "../components/Wrapper";

const Index = () => {

  return (
    <Wrapper size="sm">
      <Box marginY={5}>
        <Heading size="2xl">Kaudan</Heading>
        <Text marginTop={3}>Welcome to the site!</Text>
      </Box>
    </Wrapper>
  );
};

export default Index;