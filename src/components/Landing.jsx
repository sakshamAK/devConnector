import { Link as ReactLink } from "react-router-dom"
import {
  Link,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react'

export const Landing = () => {
  return (
    <Flex
      backgroundImage="url('../../assets/showcase.jpg')"
      backgroundPosition="center"
      height="100vh"
      position="absolute"
      top="0px"
      zIndex="-1"
      width="100%"
      backgroundRepeat="no-repeat"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      gap="2rem"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h1" size="3xl" color="brand.light">Developer Connector</Heading>
        <Text fontSize='2xl' color="brand.light">Create a developer profile/portfolio, share posts and get help from other developers</Text>
      </Flex>
      <Flex gap="2rem">
        <Link as={ReactLink} to="/register" background="brand.pr.500" py={1.5} px={4} color="brand.light">
          Sign Up
        </Link>
        <Link as={ReactLink} to="/login" background="brand.light" py={1.5} px={4}>
          Login
        </Link>
      </Flex>
    </Flex>
  );
};
