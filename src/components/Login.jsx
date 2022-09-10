import { Link as ReactLink } from "react-router-dom"
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Heading,
  Container,
  Button,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useAuth } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

export const Login = () => {
  const { loginUser, loginPass, setLoginUser, setLoginPass, setLoginCreds } = useAuth();
  const color = useColorModeValue("brand.pr.500", "brand.pr.dark")
  return (
    <>
    <Toaster />
      <Container maxW="container.sm" my={10}>
        <Heading as="h1" size="3xl" color="#17a2b8" >Sign In</Heading>
        <Heading as="h5" size="lg" my={5}>
          Sign into Your Account
        </Heading>

        <FormControl mt={5}>
          <FormLabel>Username</FormLabel>
          <FormHelperText>Enter your username</FormHelperText>
          <Input type='text' value={loginUser} onChange={e => setLoginUser(e.target.value)} />
        </FormControl>

        <FormControl my={5}>
          <FormLabel>Password</FormLabel>
          <FormHelperText>Enter your password</FormHelperText>
          <Input type='password' value={loginPass} onChange={e => setLoginPass(e.target.value)} />
        </FormControl>

        <Button colorScheme='brand.pr' onClick = {() => setLoginCreds()}>Sign in</Button>
        <Text mt={5} fontSize='md'>Don't have an account?
          <Link as={ReactLink} to='/register' color={color}> Sign up</Link>
        </Text>
      </Container>
    </>
  );
};
