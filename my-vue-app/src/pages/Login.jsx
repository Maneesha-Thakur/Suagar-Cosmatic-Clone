
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, VStack, Container, useToast } from '@chakra-ui/react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = localStorage.getItem(username);
    if (!user) {
      setError('User does not exist.');
      return;
    }

    const userData = JSON.parse(user);
    if (userData.password !== password) {
      setError('Incorrect password.');
      return;
    }

    setError('');
    toast({
      title: 'Login successful!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    navigate('/');
  };

  return (
    <Container centerContent>
      <Box p={8} mt={8} width="100%" borderWidth={1} borderRadius="lg" boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">
            Login Page
          </Heading>
          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </FormControl>
            {error && (
              <Text color="red.500" mt={2}>
                {error}
              </Text>
            )}
            <Button type="submit" colorScheme="teal" width="full" mt={4}>
              Login
            </Button>
          </form>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;
