
// import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
// import { Button, Link as ChakraLink, Flex, Image, Input, Box, List, ListItem, useBreakpointValue, Text } from "@chakra-ui/react";
// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContextProvider";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import { useCart } from '../context/CartContext';

// const items = ["Liquid Lipstick","Matte Lipstick","Lip Gloss","Eyeliner","Mascara","Foundation", "Blush","Highlighter",];

// export default function Navbar() {
//   const { isAuthenticated, logout } = useContext(AuthContext);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();
//   const { cart } = useCart();

//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     if (query.length > 0) {
//       const results = items.filter((item) =>
//         item.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredItems(results);
//     } else {
//       setFilteredItems([]);
//     }
//   };

//   const handleSearchClick = () => {
//     if (searchQuery.trim() !== "") {
//       const formattedQuery = searchQuery.toLowerCase().replace(/\s+/g, '-');
//       navigate(`/product/${formattedQuery}`);
//     }
//   };

//   const flexDirection = useBreakpointValue({ base: "column", md: "row" });
//   const inputWidth = useBreakpointValue({ base: "100%", md: "40%" });
//   const justifyContent = useBreakpointValue({ base: "center", md: "space-around" });

//   return (
//     <Flex
//       w="100%"
//       direction={flexDirection}
//       align="center"
//       justify={justifyContent}
//       background="#36454F"
//       color="white"
//       padding={4}
//       position="sticky"
//       top={0}
//       zIndex={1000}
//     >
//       <Image
//         src="https://in.sugarcosmetics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNonCVLogoDesktop.86874a45.png&w=256&q=100"
//         alt="Logo"
//         mb={{ base: 4, md: 0 }}
//       />
//       <Box position="relative" width={inputWidth}>
//         <Input
//           placeholder='Try "Liquid Lipstick"'
//           color='white'
//           backgroundColor='#212121'
//           borderRadius="4px"
//           padding="5px"
//           border="1px solid white"
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//         {filteredItems.length > 0 && (
//           <Box
//             position="absolute"
//             top="40px"
//             left="0"
//             right="0"
//             background="white"
//             borderRadius="4px"
//             color='black'
//             boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
//             zIndex="10"
//             maxHeight="200px"
//             overflowY="auto"
//           >
//             <List spacing={2} padding={2}>
//               {filteredItems.map((item) => (
//                 <ListItem key={item} padding={2} _hover={{ background: "#f0f0f0", cursor: "pointer" }}>
//                   <ChakraLink as={ReactRouterLink} to={`/product/${item.toLowerCase().replace(/\s+/g, '-')}`}>
//                     {item}
//                   </ChakraLink>
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         )}
//       </Box>
//       <Button
//         backgroundColor='white'
//         color='black'
//         marginLeft={{ base: 0, md: "10px" }}
//         borderRadius="5px"
//         padding="6px"
//         onClick={handleSearchClick}
//         mt={{ base: 4, md: 0 }}
//       >
//         🔍 Search
//       </Button>

//       <Flex align="center" mt={{ base: 4, md: 0 }}>
//         {isAuthenticated ? (
//           <Button onClick={logout} color="gray.900">
//             Logout
//           </Button>
//         ) : (
//           <ChakraLink as={ReactRouterLink} to="/login" color="gray.900" mr={4}>
//             LOGIN
//           </ChakraLink>
//         )}
//         <ChakraLink as={ReactRouterLink} to="/register" color="gray.900">
//           Register
//         </ChakraLink>
//         <ChakraLink as={ReactRouterLink} to="/wishlist" color="white" mr={4} marginLeft='12px'>
//           <FontAwesomeIcon icon={faHeart} />
//         </ChakraLink>
//         <ChakraLink as={ReactRouterLink} to="/cart" color="gray.900" mr={4}>
//           <FontAwesomeIcon icon={faShoppingBag} />
//           <Text ml={2} as="span">{cart.length}</Text>
//         </ChakraLink>
//       </Flex>
//     </Flex>
//   );
// }




import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Button, Link as ChakraLink, Flex, Image, Input, Box, List, ListItem, useBreakpointValue, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import { useWishlist } from "../context/WishListProvider";

const items = ["Liquid Lipstick", "Matte Lipstick", "Lip Gloss", "Eyeliner", "Mascara", "Foundation", "Blush", "Highlighter"];

export default function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const results = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() !== "") {
      const formattedQuery = searchQuery.toLowerCase().replace(/\s+/g, '-');
      navigate(`/product/${formattedQuery}`);
    }
  };

  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const inputWidth = useBreakpointValue({ base: "100%", md: "40%" });
  const justifyContent = useBreakpointValue({ base: "center", md: "space-around" });

  return (
    
    <Flex
      w="100%"
      direction={flexDirection}
      align="center"
      justify={justifyContent}
      background="#36454F"
      color="white"
      // padding={4}
      position="sticky"
      top={0}
      zIndex={1000}
      >
        
      <Image  src="https://in.sugarcosmetics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNonCVLogoDesktop.86874a45.png&w=256&q=100"  alt="logo" boxSize="100px" marginBottom={{ base: 2, md: 0 }}/>

  

      <Flex align="center" width={inputWidth}>
        <Input
          placeholder="Search for Products"
          value={searchQuery}
          onChange={handleSearch}
          color="white"
          marginBottom={{ base: 2, md: 0 }}
        />
        <Button
          onClick={handleSearchClick}
          colorScheme="blue"
          bg="black"
          color="white"
          marginLeft={{ base: 0, md: 2 }}
        >
          Search
        </Button>
      </Flex>

      <Box
        position="absolute"
        bg="white"
        color="black"
        mt={14}
        width="80%"
        zIndex={10}
      >
        {filteredItems.length > 0 && (
          <List>
            {filteredItems.map((item) => (
              <ListItem
                key={item}
                onClick={() => {
                  setSearchQuery(item);
                  setFilteredItems([]);
                }}
                cursor="pointer"
              >
                {item}
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      <Flex align="center">
        {isAuthenticated ? (
          <Button
            colorScheme="blue"
            bg="black"
            color="white"
            mr={4}
            onClick={logout}
          >
            Logout
          </Button>
        ) : (
          <>
            <ChakraLink
              as={ReactRouterLink}
              to="/login"
              color="white"
              mr={4}
              marginLeft="12px"
            >
              Login
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/signup"
              color="white"
              mr={4}
              marginLeft="12px"
            >
              Signup
            </ChakraLink>
          </>
        )}

        <ChakraLink as={ReactRouterLink} to="/wishlist" color="white" mr={4} marginLeft="12px">
          <FontAwesomeIcon icon={faHeart} />
          <Text ml={2} as="span">{wishlist.length}</Text>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/cart" color="gray.900" mr={4}>
          <FontAwesomeIcon icon={faShoppingBag} />
          <Text ml={2} as="span">{cart.length}</Text>
        </ChakraLink>
      </Flex>
    </Flex>
  );
}