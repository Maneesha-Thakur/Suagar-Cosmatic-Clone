



import  { useState, useEffect } from 'react';
import { Container, Image, Box, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ReacentView = () => {
  const images = [
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FMatteAttackTransferproofLipstickPDPimagesFinal1_e21836f5-69f2-47f9-b5c9-8515047d1ece.jpg%3Fv%3D1712558956&w=256&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F599125845-01.jpg%3Fv%3D1711208074&w=256&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/ba3ccda6-f7ef-4618-a20f-a25094a58de3.jpg&w=1920&q=75"
  ];

  const [currentImages, setCurrentImages] = useState([images[0], images[1]]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 2) % images.length);
      setCurrentImages([images[index], images[(index + 1) % images.length]]);
    }, 300000);

    return () => clearInterval(interval); 
  }, [index, images]);

  return (
    <Container color='black'>
      <Heading size='1xl' color='grey'>RECENTLY VIEWED</Heading><br /><br />
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        {currentImages.map((src, idx) => (
          <Box key={idx} width="48%">
            <Image src={src} width="100%" />
            <Link to={`/notify-me/${idx}`}>
              <Button bg='black' color='white' mt={2}>Notify Me</Button>
            </Link>
          </Box>
        ))}
      </Box><br /><br /><br />
      <hr style={{color:"whitesmoke", boxShadow:"box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;" }} />
    </Container>
  );
};

export default ReacentView;
