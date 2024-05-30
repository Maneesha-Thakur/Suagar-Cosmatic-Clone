
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Button, Link as ChakraLink, Flex, Image, Input, Box, List, ListItem } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const items = [
  "Liquid Lipstick",
  "Matte Lipstick",
  "Lip Gloss",
  "Eyeliner",
  "Mascara",
  "Foundation",
  "Blush",
  "Highlighter",
];

const links = [
  {
    to: "/",
    label: "",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  {
    to: "/register",
    label: "Register",
  }, 
];

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  return (
    <Flex
    w=''
      align="center"
      justify="space-around"
      background="#36454F"
      color="white"
      padding={4}
      position="sticky" // Set position to sticky
      top={0} // Stick to the top of the viewport
      zIndex={1000} // Ensure it's above other content
    >
      <Image
        src="https://in.sugarcosmetics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNonCVLogoDesktop.86874a45.png&w=256&q=100"
        alt="Logo"
      />
      <Box position="relative" width="">
        <Input
          placeholder='Try "Liquid Lipstick"'
          style={{
            color: 'white',
            backgroundColor: '#212121',
            width: "200%",
            borderRadius: "4px",
            padding: "5px",
            border: "1px solid white",
          }}
          value={searchQuery}
          onChange={handleSearch}
        />
        {filteredItems.length > 0 && (
          <Box
            position="absolute"
            top="40px"
            left="0"
            right="0"
            background="white"
            borderRadius="4px"
            color='black'
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
            zIndex="10"
          >
            <List spacing={2} padding={2}>
              {filteredItems.map((item) => (
                <ListItem key={item} padding={2} _hover={{ background: "#f0f0f0", cursor: "pointer" }}>
                  <ChakraLink as={ReactRouterLink} to={`/product/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    {item}
                  </ChakraLink>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
      <Button
        backgroundColor='white'
        color='black'
        marginLeft="100px"
        borderRadius="5px"
        padding="6px"
        onClick={handleSearchClick}
      >
        🔍 Search
      </Button>

      {links?.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          key={link.to}
          to={link.to}
          color="gray.900"
        >
          {link.label}
        </ChakraLink>
      ))}
    </Flex>
  );
}
