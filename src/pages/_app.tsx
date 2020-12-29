import { ChakraProvider, ColorModeProvider, Container } from "@chakra-ui/react";
import { Provider as UrqlProvider, createClient } from "urql";
import NavBar from "../components/NavBar";

import theme from "../theme";

function MyApp({ Component, pageProps }: any) {
  // create urql client
  const client = createClient({
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include",
    },
  });

  return (
    <UrqlProvider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <NavBar />
          <Container>
            <Component {...pageProps} />
          </Container>
        </ColorModeProvider>
      </ChakraProvider>
    </UrqlProvider>

  );
}

export default MyApp;
