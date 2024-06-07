// src/components/Wishlist.js
import React from 'react';
import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <Box p={5}>
      <Heading mb={4}>Wishlist</Heading>
      {wishlist.length === 0 ? (
        <Text>Your wishlist is empty.</Text>
      ) : (
        wishlist.map((product) => (
          <Flex key={product.id} align="center" mb={4}>
            <Image src={product.image_link} alt={product.name} boxSize="100px" />
            <Box ml={4}>
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price_sign}{product.price}</Text>
              <Button colorScheme="red" onClick={() => removeFromWishlist(product.id)}>Remove</Button>
            </Box>
          </Flex>
        ))
      )}
    </Box>
  );
};

export default Wishlist;
