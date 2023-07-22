import React, { useState } from 'react'
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
    Container
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';





const LoginPage = ({isOpen, onClose}) => {

    console.log("Login", isOpen);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    // Toast feature
    const toast = useToast();
    const positions = ["top"];

  return (
    <Modal
        isCentered
        size={{base:"sm", md:"md", lg:"md"}}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        colorScheme='orange'
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
              onChange={(e)=> setEmail(e.target.value)}
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
              onChange={(e)=> setPassword(e.target.value)}
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
            <Button colorScheme='blue' mr={3} >
              Log in
            </Button>
            <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default LoginPage
