import {
  Box,
  Heading
} from "@chakra-ui/react"

export const Navbar = () => {

  return (
    <Box bg="#343a40" py={3} px={10}>
      <Heading as="h1" size="lg" color="#ffffff">
        DevConnector
      </Heading>
    </Box>
  );
};
