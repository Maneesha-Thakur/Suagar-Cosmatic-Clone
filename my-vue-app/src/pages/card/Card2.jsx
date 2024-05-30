import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Card2 = () => {
  return (
    <Box color='black' >
        <Heading>The famous 90/s trend : How to  wear brown lipstick</Heading><br /><br />
        <Text>Written by <Link to='https://in.sugarcosmetics.com/blog/author/akruti-khandkar' > <strong style={{color:'red'}} >Akruti Khandkar</strong></Link> | Aug 17,2021 </Text>
      <Image w='50%' src="https://d1f34ajap1v5tm.cloudfront.net/image/The-Famous-90s-Trend-How-To-Wear-Brown-Lipstick-1%20.png" /><br />
      <Text>There is no secret we all love the 90s, and when we talk about makeup, it indeed surpassed the iconic. Be it sculpted face or spider eyelashes, 9os have been a big part of most of our life. One 90s trend that stayed with us up until now is brown lipstick. TBH, you can not take your eyes off the mauve brown pout, and this year it hypnotised the beauty arena ramp walks, Instagram trends, and celebrity looks. And, why not? Brown lipstick is a universally flattering colour that suits all skin types.  But, we get it sometimes it can be hard to ace a brown lipstick makeup look. Do not fret! Today, we have got some great tips on how to wear dark brown lipstick without looking outdated.

</Text>
    </Box>
  );
};

export default Card2;
