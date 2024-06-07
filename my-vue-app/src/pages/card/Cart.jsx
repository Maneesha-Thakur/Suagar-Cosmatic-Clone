
import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";

import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Box p={5}>
      <Heading mb={4}>Shopping Cart</Heading>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        cart.map((product) => (
          <Flex key={product.id} align="center" mb={4}>
            <Image src={product.image_link} alt={product.name} boxSize="100px" />
            <Box ml={4}>
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price_sign}{product.price}</Text>
              <Button colorScheme="red" onClick={() => removeFromCart(product.id)}>Remove</Button>
            </Box>
          </Flex>
        ))
      )}
    </Box>
  );
};

export default Cart;
