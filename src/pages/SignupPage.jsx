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
    Container,
    HStack
} from "@chakra-ui/react";
import { CalendarIcon, EditIcon, EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const SignupPage = ({isOpen, onClose}) => {
    console.log("Reguster", isOpen);

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [userInfo, setUserInfo] = useState({
        firstname: "",
        lastname: "",
        dateOfBirth: "",
        email: "",
        password: "",
      });

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
      };



    const { firstname, lastname, dateOfBirth, email, password } = userInfo;

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
        <ModalHeader>Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
        <HStack>
          <FormControl>
            <FormLabel>First name : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EditIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                name="firstname"
                value={firstname}
                placeholder="First name"
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Last name : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EditIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                name="lastname"
                value={lastname}
                placeholder="Last name"
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Date of Birth : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CalendarIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

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
              placeholder="Email address"
              onChange={handleChange}
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
              onChange={handleChange}
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
            <Button colorScheme="green">
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default SignupPage
