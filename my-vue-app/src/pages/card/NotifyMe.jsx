import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

const NotifyMe = () => {
  const { id } = useParams(); 

  return (
    <Box color='black' >
      <Heading>Notify Me Page</Heading>
      <Text>This is the Notify Me page for image {id}</Text>
    </Box>
  );
};

export default NotifyMe;
