import { DeleteIcon } from "@chakra-ui/icons";
import { Heading, Box, IconButton, Flex } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useAreaQuery, useLogPerformanceMutation, usePerformanceQuery, useUpdateUserAreaMutation } from "../generated/graphql";

interface Props {
  areaId: number;
  day?: string;
}

export const AreaPerformance = (props: Props) => {
  const {
    areaId,
    // day,
  } = props;
  const [, updateArea] = useUpdateUserAreaMutation();
  const [{ data: areaData }, getUserArea] = useAreaQuery({ variables: { id: areaId } });
  const [{ data: performanceData }, getPerformance] = usePerformanceQuery({ variables: { areaId } });
  const [, logPerformance] = useLogPerformanceMutation();
  const areaName = areaData?.area?.name || "";
  const rating = performanceData?.performance?.rating || 0;

  useEffect(() => {
    if (areaId) {
      getUserArea();
      getPerformance();
    }
  }, [areaId]);

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      background="gray.200"
      marginY={2}
      borderRadius={5}
      padding={5}
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        paddingY={3}
      >
        <Heading>
          {areaName}
        </Heading>
        <Rating
          name={String(areaId)}
          value={rating}
          onChange={(_, newRating) => {
            logPerformance({ areaId, rating: Number(newRating) });
          }}
          size="large"
        />
      </Flex>
      <Box>
        <IconButton
          colorScheme="red"
          aria-label="deleteArea"
          icon={<DeleteIcon />}
          onClick={() => updateArea({ id: areaId, isActive: false })}
        />
      </Box>
    </Flex>
  );
};

export default AreaPerformance;
