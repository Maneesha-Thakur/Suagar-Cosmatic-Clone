

// Home.jsx or Home.js
import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Text, Image } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import MidTop from './MidTop';
import axios from 'axios';
import MidCenter from './MidCenter';
import MidBottom from './MidBottom';
import ReacentView from './RecentView';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(products.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Math.ceil(products.length / 4)) % Math.ceil(products.length / 4));
  };


  const handleSelectShade = (id) => {
    navigate(`/product/${id}`);
  };
  
  return (
    <Container maxW="full" p={0} bg='white'color='black' >
      
      <Box marginBottom="50px" >
        <MidTop />
        <br />
        <hr />
      </Box>

      <Box className="home-page" style={{ position: "relative", overflow: "hidden"  }}  p={4}  >
        <Heading color='pink' >Best Seller</Heading>
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <Box overflow="hidden" width="100%" position="relative" bg='black' >
            <Box display="flex" transition="transform 0.5s ease-in-out" transform={`translateX(-${currentSlide * 50}%)`} width={`${Math.ceil(products.length / 4) * 80}px`}>
              {products.map((product) => (
                <Card key={product.id} width="25%" flex="none" m={2} bg="white" height="auto">
                  <CardHeader>
                  <Image src={product.image_link} alt={product.name} borderRadius="lg" />
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                      <Heading size="md">{product.name}</Heading>
                        

                      </Box>
                      <Box>
                        <Text>₹ {product.price}</Text>
                      </Box>
                      <Box>
                        <Text className="product-price">
                          Price: {product.price_sign}{product.price}
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>


                  <CardFooter>
                    <Button variant="solid" colorScheme="blue" bg="black" onClick={() => handleSelectShade(product.id)}>
                      SELECT SHADE
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </Box>
            <Button position="absolute" top="50%" left="0" transform="translateY(-50%)" onClick={prevSlide} zIndex="1">&lt;</Button>
            <Button position="absolute" top="50%" right="0" transform="translateY(-50%)" onClick={nextSlide} zIndex="1">&gt;</Button>
          </Box>
        )}
      </Box>


<Box bg='white' color='black' marginBottom='100px' >
  <MidCenter/>
</Box>
<MidBottom/>
<br /><br />
<ReacentView/>
    </Container>


  );
};

export default Home