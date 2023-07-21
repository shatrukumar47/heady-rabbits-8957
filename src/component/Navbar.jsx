import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "./logo.png";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <Box bg={"black"} style={{position: "sticky", top:0, zIndex: 999}} className={scroll ? "active-scroll" : ""}>
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
          <Text
            fontSize={"md"}
            color={"white"}
            display={{ base: "none", md: "block", lg: "block" }}
          >
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
