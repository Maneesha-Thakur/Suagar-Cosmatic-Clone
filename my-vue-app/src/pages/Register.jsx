

import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  VStack,
  Container,
  useToast,
} from '@chakra-ui/react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false); // State to toggle register form
  const toast = useToast();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Check if user already exists
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      setError('User already exists.');
      return;
    }

    // Save user to localStorage
    localStorage.setItem(username, JSON.stringify({ username, password }));
    setError('');
    toast({
      title: 'Registration successful!',
      description: 'You can now log in.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent>
      <Box
        p={8}
        mt={8}
        maxWidth="400px"
        width="100%"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="lg">
            Register Page
          </Heading>
          {!showRegisterForm && (
            <Button onClick={() => setShowRegisterForm(true)}>Register</Button>
          )}
          {showRegisterForm && (
            <form onSubmit={handleRegister} style={{ width: '100%' }}>
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
                Register
              </Button>
            </form>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default Register;
