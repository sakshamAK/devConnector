import { Link as ReactLink, useNavigate } from "react-router-dom"
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
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../Redux/Features/auth/authSlice";
import { useEffect } from "react";

export const Login = () => {
  const [login, setLogin] = useState({ input: { username: "", password: "" } })
  const dispatch = useDispatch();

  const setCreds = e => {
    const { name, value } = e.target;
    setLogin(
      {
        ...login,
        input: {
          ...login.input,
          [name]: value
        }
      }
    )
  }

  const color = useColorModeValue("brand.pr.500", "brand.pr.dark")

  const { auth } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) navigate("/dashboard");
  }, [auth])

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
          <Input type='text' value={login.input.username} name="username" onChange={e => setCreds(e)} />
        </FormControl>

        <FormControl my={5}>
          <FormLabel>Password</FormLabel>
          <FormHelperText>Enter your password</FormHelperText>
          <Input type='password' value={login.input.password} name="password" onChange={e => setCreds(e)} />
        </FormControl>

        <Button colorScheme='brand.pr' onClick={() => dispatch(loginHandler({ login, setLogin }))}>Sign in</Button>
        <Text mt={5} fontSize='md'>Don't have an account?
          <Link as={ReactLink} to='/register' color={color}> Sign up</Link>
        </Text>
      </Container>
    </>
  );
};
