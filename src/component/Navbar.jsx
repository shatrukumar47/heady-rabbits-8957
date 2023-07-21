import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loginFlag, setLoginFlag] = useState(false);
  const [registerFlag, setRegisterFlag] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <Box
      bg={"black"}
      style={{ position: "sticky", top: 0, zIndex: 999 }}
      className={scroll ? "active-scroll" : ""}
    >
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
            transition={"border-radius 0.3s ease-in-out"}
            _hover={{
              borderRadius: "20px",
            }}
            key={"signin"}
            onClick={onOpen}
          >
            Log in
          </Button>
          <Button
            colorScheme="blue"
            transition={"border-radius 0.3s ease-in-out"}
            _hover={{
              borderRadius: "20px",
            }}
            key={"signout"}
            onClick={onOpen}
          >
            Sign up
          </Button>
        </HStack>
      </HStack>

      <LoginPage isOpen={isOpen} onClose={onClose} />
      {/* <SignupPage isOpen={isOpen} onClose={onClose} /> */}
    </Box>
  );
};

export default Navbar;
