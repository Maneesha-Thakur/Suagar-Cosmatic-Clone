
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json`);
        const productData = response.data.find(item => item.id.toString() === id);

        if (productData) {
          setProduct(productData);
        } else {
          setError('Product not found');
        }
      } catch (error) {
        console.error('Error fetching the product:', error);
        setError('Error fetching the product details');
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Logic to add product to cart can be added here
    if (product) {
      console.log(`Added ${product.name} to cart`);
    }
  };

  return (
    <Box p={5} bg="white" w='100%' >
      {error ? (
        <Text color="red.500">{error}</Text>
      ) : product ? (
        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          <Box flex="1">
            <Image src={product.image_link} alt={product.name} borderRadius="md" />
          </Box>
          <Box flex="1" ml={{ md: 5 }} mb={{ base: 5, md: 0 }}>
            
            <Heading mb={4}>{product.name}</Heading>
            <Text mb={4} color="black">{product.description}</Text>
            <Text fontWeight="bold">Price: {product.price_sign}{product.price}</Text>
            <Button mt={4} colorScheme="blue" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Box>
        </Flex>
      ) : (
        <p>Loading product details...</p>
      )}
    </Box>
  );
};

export default ProductDescription;
