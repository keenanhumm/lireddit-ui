import { Heading, Text } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import { useMeQuery } from "../generated/graphql";

const Index = () => {
  const [{ data = {} }] = useMeQuery();
  const { username } = data.me || {};

  return (
    <Wrapper size="sm">
      <Heading>Home</Heading>
      <Text>Welcome to the site, <strong>{username}</strong>!</Text>
    </Wrapper>
  );
};

export default Index;