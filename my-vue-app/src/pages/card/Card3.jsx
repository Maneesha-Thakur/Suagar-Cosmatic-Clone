import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Card3 = () => {
  return (
    <Box color='black' >
        <Heading>How To Apply BB Cream For A Flaless Look</Heading><br /><br />

        <Text>Written by <Link to='https://in.sugarcosmetics.com/blog/author/akruti-khandkar' > <strong style={{color:'red'}} >Akruti Khandkar</strong></Link> | Aug 17,2021 </Text>

      <Image w='50%' src="https://d1f34ajap1v5tm.cloudfront.net/image/How-to-swap-your-BB-cream-for-foundation.jpg" /><br />

      <Text>Cakey faces during summers are a big nah. The advent of skinimalistic makeup trends especially during this time of the year seem like a saving base, oops we mean a saving grace! A tragic melting face, courtesy, heavy layers of foundation, can be avoided if you skip your foundation for good. You have probably heard this for a zillion times but please pay attention to it for once – slathering foundation on your face during summers in the midst of scorching heat and constant sweating is the perfect recipe for a makeup disaster! Listen to the pros and pick up a BB cream for your face, this summer!</Text>
    </Box>
  );
};

export default Card3;
