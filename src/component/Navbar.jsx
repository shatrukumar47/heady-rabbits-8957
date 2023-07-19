import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <Box bg={"black"}>
      <HStack
        justify={"space-between"}
        paddingLeft={{ base: "10px", md: "10px", lg: "60px" }}
        paddingRight={{ base: "10px", md: "10px", lg: "60px" }}
      >
        <HStack spacing={"5px"}>
          <Image
            boxSize="80px"
            objectFit={"cover"}
            src={logo}
            alt="spendwise"
          />
          <Text fontSize={"md"} color={"white"}>
            spendwise
          </Text>
        </HStack>
        <HStack spacing={{ base: "5px", md: "10px", lg: "20px" }}>
          <Button
            color={"white"}
            variant={"outline"}
            _hover={{
              borderRadius: "20px",
              transition: "border-radius 0.3s ease-in-out 0s",
            }}
          >
            Log in
          </Button>
          <Button
            colorScheme="blue"
            _hover={{
              borderRadius: "20px",
              transition: "border-radius 0.3s ease-in-out 0s",
            }}
          >
            Sign up
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
