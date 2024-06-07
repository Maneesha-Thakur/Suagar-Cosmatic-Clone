import { Heading, Box, Card, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MidBottom = () => {
  let images = [
    "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/79f6cb09-9676-4973-bfad-5812deec472c.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9e38f392-ad5f-47b2-8f1a-65f7b8f7d7b7.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/ba3ccda6-f7ef-4618-a20f-a25094a58de3.jpg&w=1920&q=75"
  ];

  return (
    <>
   <Box color='black' >
         

      <Heading color='black' fontSize='30px' marginLeft='500px' >SUGAR BEAUTY BLOG</Heading> <br /><br />
      <Box  display= 'flex' flexDirection= 'row' >
        {images.map((src, index) => (
          <Link to={`/card${index + 1}`} key={index}>
            <Card  marginRight= '10px' >
              <Image src={src} />
            </Card>
          </Link>
        ))}
      </Box>
        </Box> 
    </>
  );
};

export default MidBottom;
