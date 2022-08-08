import { Link as ReactLink } from "react-router-dom"
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
import { useAuth } from "../context/AuthContext";


export const Register = () => {
  const { creds, setCreds, isInvalid, password, setPassword, setCredentials } = useAuth();
  return (
    <>
      <Toaster position="bottom-center" />
      <Container maxW="container.sm" my={10}>
        <Heading as="h1" size="3xl" color="#17a2b8" >Sign Up</Heading>
        <Heading as="h5" size="lg" my={5}>
          Sign Up Your Account
        </Heading>
        <FormControl isInvalid={isInvalid.email}>
          <FormLabel>Email address</FormLabel>
          <FormHelperText>We'll never share your email.</FormHelperText>
          <Input name="email" type='email' value={creds.email} onChange={e => setCreds({ ...creds, email: e.target.value })} />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>

        <FormControl mt={5} isInvalid={isInvalid.username}>
          <FormLabel>Username</FormLabel>
          <FormHelperText>Username is your unique identity</FormHelperText>
          <Input name="username" type='text' value={creds.username} onChange={e => setCreds({ ...creds, username: e.target.value })} />
          <FormErrorMessage>Username Already Exists.</FormErrorMessage>
        </FormControl>

        <FormControl mt={5} isInvalid={isInvalid.firstName}>
          <FormLabel>First Name</FormLabel>
          <FormHelperText>Enter your first name</FormHelperText>
          <Input name="firstName" type='text' value={creds.firstName} onChange={e => setCreds({ ...creds, firstName: e.target.value })} />
          <FormErrorMessage>First name cannot be empty</FormErrorMessage>
        </FormControl>

        <FormControl mt={5} isInvalid={isInvalid.lastName}>
          <FormLabel>Last Name</FormLabel>
          <FormHelperText>Enter your last name</FormHelperText>
          <Input name="lastName" type='text' value={creds.lastName} onChange={e => setCreds({ ...creds, lastName: e.target.value })} />
          <FormErrorMessage>Last name cannot be empty</FormErrorMessage>
        </FormControl>

        <FormControl mt={5} isInvalid={isInvalid.password}>
          <FormLabel>Password</FormLabel>
          <FormHelperText>Password must contain letter, numbers and special characters</FormHelperText>
          <Input name="password" type='password' value={creds.password} onChange={e => setCreds({ ...creds, password: e.target.value })} />
        </FormControl>

        <FormControl mt={5} isInvalid={isInvalid.rePassword}>
          <FormLabel>Re-type Password</FormLabel>
          <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <FormErrorMessage>Passwords don't match</FormErrorMessage>
        </FormControl>

        <FormControl mt={5}>
          <HStack spacing='1rem'>
            <FormLabel>Upload Photo:</FormLabel>
            <FormLabel cursor="pointer"><i className="material-icons">photo_camera</i></FormLabel>
          </HStack>
          <Input name="profileSrc" type='file' display="none" onChange={e => setCreds({ ...creds, profileSrc: URL.createObjectURL(e.target.files[0]) })} />
        </FormControl>

        {creds.profileSrc !== "https://www.gravatar.com/avatar/" && <Image
          my={5}
          height='5rem'
          width='auto'
          src={creds.profileSrc}
          alt='profilep picture'
        />}
        <Button colorScheme='brand.pr' onClick={() => setCredentials(creds)} >Sign up</Button>
        <Text mt={5} fontSize='md'>Already have an account?
          <Link as={ReactLink} to='/login' color="brand.pr.500"> Sign in</Link>
        </Text>
      </Container>
    </>
  );
};
