import { Link as ReactLink, useNavigate } from "react-router-dom"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Image,
  HStack,
  Heading,
  Container,
  Button,
  Link,
  Text
} from '@chakra-ui/react';
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupHandler } from "../Redux/Features/auth/authSlice";


export const Register = () => {
  const [signup, setSignup] = useState({ input: {profileSrc: "https://gravatar.com/avatar/"} })
  const dispatch = useDispatch();

  const setCreds = (e) => {
    const { name, value, files } = e.target;
    setSignup({
      ...signup,
      input: {
        ...signup.input,
        [name]: name === "profileSrc" ? URL.createObjectURL(files[0]) : value
      }
    })
  }

  const navigate = useNavigate();
  const { signupSuccess } = useSelector(state => state.auth);

  useEffect(() => {
    if(signupSuccess) navigate("/login")
  }, [signupSuccess])

  return (
    <>
      <Toaster position="bottom-center" />
      <Container maxW="container.sm" my={10}>
        <Heading as="h1" size="3xl" color="#17a2b8" >Sign Up</Heading>
        <Heading as="h5" size="lg" my={5}>
          Sign Up Your Account
        </Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <FormHelperText>We'll never share your email.</FormHelperText>
          <Input name="email" type='email' value={signup.input.email} onChange={e => setCreds(e)} />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Username</FormLabel>
          <FormHelperText>Username is your unique identity</FormHelperText>
          <Input name="username" type='text' value={signup.input.username} onChange={e => setCreds(e)} />
          <FormErrorMessage>Username Already Exists.</FormErrorMessage>
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>First Name</FormLabel>
          <FormHelperText>Enter your first name</FormHelperText>
          <Input name="firstName" type='text' value={signup.input.firstName} onChange={e => setCreds(e)} />
          <FormErrorMessage>First name cannot be empty</FormErrorMessage>
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Last Name</FormLabel>
          <FormHelperText>Enter your last name</FormHelperText>
          <Input name="lastName" type='text' value={signup.input.lastName} onChange={e => setCreds(e)} />
          <FormErrorMessage>Last name cannot be empty</FormErrorMessage>
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Password</FormLabel>
          <FormHelperText>Password must contain letter, numbers and special characters</FormHelperText>
          <Input name="password" type='password' value={signup.input.password} onChange={e => setCreds(e)} />
        </FormControl>

        {/* <FormControl mt={5}>
          <FormLabel>Re-type Password</FormLabel>
          <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <FormErrorMessage>Passwords don't match</FormErrorMessage>
        </FormControl> */}

        <FormControl mt={5}>
          <HStack spacing='1rem'>
            <FormLabel>Upload Photo:</FormLabel>
            <FormLabel cursor="pointer"><i className="material-icons">photo_camera</i></FormLabel>
          </HStack>
          <Input name="profileSrc" type='file' display="none" onChange={e => setCreds(e)} />
        </FormControl>

        {signup.input.profileSrc !== "https://www.gravatar.com/avatar/" && <Image
          my={5}
          height='5rem'
          width='auto'
          src={signup.input.profileSrc}
          alt='profilep picture'
        />}
        <Button colorScheme='brand.pr' onClick={() => dispatch(signupHandler({ signup }))} >Sign up</Button>
        <Text mt={5} fontSize='md'>Already have an account?
          <Link as={ReactLink} to='/login' color="brand.pr.500"> Sign in</Link>
        </Text>
      </Container>
    </>
  );
};
