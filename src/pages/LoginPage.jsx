import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
  Container,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../Redux/authReducer/action";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const navigate = useNavigate();

  //Redux Store
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const loading = useSelector((store) => store.authReducer.isLoading);
  const error = useSelector((store) => store.authReducer.isError);
  const User = useSelector((store) => store.authReducer.User);
  const errorMessage = useSelector((store) => store.authReducer.errorMessage);
  const dispatch = useDispatch();

  // Toast feature
  const toast = useToast();
  const positions = ["top"];

  //Login handle
  const handleLogin = () => {
    let user = {
      email,
      password,
    };
    if (email && password) {
      dispatch(loginAction(user)).then((res) => {
        if (res.data.length === 0) {
          return toast({
            title: `Invalid email and password !`,
            position: positions[0],
            isClosable: true,
            duration: 1000,
            status: "error",
          });
        } else if (res.data.length === 1) {
          navigate("/dashboard");
          onClose();
        }
      });
    } else {
      toast({
        title: `All fields are required !`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "warning",
      });
    }
  };

  return (
    <Modal
      isCentered
      size={{ base: "sm", md: "md", lg: "md" }}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      colorScheme="orange"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Email : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="email"
                name="email"
                value={email}
                ref={initialRef}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Password : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.300" />
              </InputLeftElement>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  style={{ background: "white" }}
                  onClick={handleClick}
                >
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleLogin}
            isLoading={loading}
          >
            Log in
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginPage;
