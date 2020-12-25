import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { Provider as UrqlProvider, createClient } from "urql";

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
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </UrqlProvider>

  );
}

export default MyApp;
