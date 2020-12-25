import { Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface Props {
  children: any;
  size?: 'sm' | 'lg';
}

export default function Wrapper({ children, size }: Props): ReactElement {
  return (
    <Box
      marginTop="8px"
      marginX="auto"
      maxWidth={ size === 'sm' ? '400px' : '800px'}
      width="100%"
    >
      { children}
    </Box>
  );
}

