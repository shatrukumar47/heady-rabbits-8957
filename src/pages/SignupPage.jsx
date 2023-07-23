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
} from "@chakra-ui/react";
import {
  EditIcon,
  EmailIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import { signupData } from "../utils/userData";
import { SignupAction } from "../Redux/authReducer/action";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../Redux/actionTypes";
import { useNavigate } from "react-router-dom";


const SignupPage = ({ isOpen, onClose }) => {

  const [show, setShow] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handleClick = () => setShow(!show);
  const [userInfo, setUserInfo] = useState(signupData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Redux Dispatch
  const dispatch = useDispatch();

  // destructuring userInfo state
  const { name, username, email, password } = userInfo;

  // Toast feature
  const toast = useToast();
  const positions = ["top"];

  // Input handling function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  //Submit button handle function
  const handleSignup = ()=>{
    if(name && username && email && password){
      setLoading(true)
      SignupAction(userInfo).then((res)=>{
        setLoading(false)
        toast({
          title: `Welcome aboard, ${res?.data?.name}.`,
          position: positions[0],
          isClosable: true,
          duration: 2000,
          status: "success",
        });
        dispatch({type:LOGIN_SUCCESS, payload: res?.data})
        onClose();
        navigate("/dashboard");
      })
    }else{
      toast({
        title: `All fields are required !`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "warning",
    });
    }
  }


  return (
    <Modal
      isCentered
      size={{ base: "sm", md: "lg", lg: "xl" }}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      colorScheme="orange"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl marginBottom={"5px"}>
            <FormLabel>Name : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EditIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl marginBottom={"5px"}>
            <FormLabel>Username : </FormLabel>
            <InputGroup>
             <InputLeftElement pointerEvents="none">
                <EditIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="username e.g. abc47"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl marginBottom={"5px"}>
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

          <FormControl marginBottom={"5px"}>
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
          <Button colorScheme="green" onClick={handleSignup} marginRight={"10px"} isLoading={loading} loadingText="Submitting">Submit</Button>
          <Button onClick={onClose} isDisabled={loading}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignupPage;
