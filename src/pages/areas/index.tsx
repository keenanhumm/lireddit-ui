import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AreaPerformance } from "../../components/AreaPerformance";
import Wrapper from "../../components/Wrapper";
import { useAreasQuery, useMeQuery } from "../../generated/graphql";

const Index = () => {
  const router = useRouter();
  const [{
    data: {
      areas = [],
    } = {},
  }] = useAreasQuery();
  const [{ data }] = useMeQuery();
  const username = data?.me?.username;
  const sortedAreas = areas?.sort((a, b) => a.id - b.id);

  return (
    <Wrapper size="sm">
      <Box>
        <Heading size="2xl">My Areas</Heading>
        <Text marginTop={2}>
          {
            !!sortedAreas.length ?
              `How did you perform today, ${username}?` : "Add some areas to begin tracking!"
          }
        </Text>
      </Box>
      <Box marginTop={5}><Button
        colorScheme="teal"
        variant="solid"
        onClick={() => router.push("/areas/create")}
      >
        <PlusSquareIcon
          marginRight={2}
        />
          Add new Area
        </Button>
        {
          sortedAreas?.map((area) => (
            <Box key={area.id}>
              <AreaPerformance areaId={area.id} />
            </Box>
          ))
        }
      </Box>


    </Wrapper >
  );
};

export default Index;