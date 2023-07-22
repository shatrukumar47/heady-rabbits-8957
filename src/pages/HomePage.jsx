import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import animeGif1 from "../images/animeGif1.gif";
import animeGif2 from "../images/animeGif2.gif";
import animeGif3 from "../images/animeGif3.gif";

//AOS Styling
import AOS from "aos";
import "aos/dist/aos.css";
import SignupPage from "./SignupPage";
AOS.init();

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"#F2F2FC"}>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                spendwise,
              </Text>
              <br />
              <Text fontSize={"30px"} as={"span"} color={"red.400"}>
                Manage your finances wisely
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              <span style={{ fontWeight: "bold" }}>spendwise</span> is a fintech
              mobile application that aims to help manage users finance by{" "}
              <span style={{ fontWeight: "bold" }}>Alerting users</span> when
              they are close to their spending limit and also give{" "}
              <span style={{ fontWeight: "bold" }}>helpful tips</span> to help
              improve their spending habits
            </Text>
            <Stack alignItems={"center"}>
              <Button
                variant={"outline"}
                colorScheme={"blue"}
                padding={"23px"}
                transition={"border-radius 0.3s ease-in-out"}
                _hover={{
                  borderRadius: "20px",
                }}
                rightIcon={<ArrowForwardIcon />}
                onClick={onOpen}
              >
                Get Started
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"animation"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={animeGif1}
              />
            </Box>
          </Flex>
        </Stack>

        <div
          data-aos="fade-up"
        >
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"animation"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={animeGif2}
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={{ base: 1.1, md: 1.1, lg: 0.7 }}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text fontSize={"30px"} as={"span"} color={"#3182CE"}>
                  spendwise, the best buddy for your financial budget
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                With <span style={{ fontWeight: "bold" }}>spendwise</span> , you
                can easily track your{" "}
                <span style={{ fontWeight: "bold" }}>expenses</span>, set{" "}
                <span style={{ fontWeight: "bold" }}>budget</span> goals, and
                take control of your finances like never before
              </Text>
            </Stack>
          </Stack>
        </div>

        <div
          data-aos="fade-up"
        >
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={{ base: 1.1, md: 1.1, lg: 0.7 }}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text fontSize={"30px"} as={"span"} color={"#3182CE"}>
                  Effortlessly manage your money with spendwise
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                With <span style={{ fontWeight: "bold" }}>spendwise</span>makes
                budgeting simple and stress-free. giving you the power to make{" "}
                <span style={{ fontWeight: "bold" }}>smart</span> financial
                decisions.
              </Text>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"animation"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://cdn.dribbble.com/userupload/4097875/file/original-313ee2e49043329aa2ffde12aaca6e1a.png?resize=1200x900"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </div>

        <div
          data-aos="fade-up"
        >
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"animation"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={animeGif3}
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={{ base: 1.1, md: 1.1, lg: 0.7 }}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text fontSize={"30px"} as={"span"} color={"#3182CE"}>
                  Say goodbye to financial stress with spendwise
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                <span style={{ fontWeight: "bold" }}>spendwise</span> helps you
                stay on top of your spending, providing you with the insights
                and tools you need to achieve{" "}
                <span style={{ fontWeight: "bold" }}>financial freedom.</span>
              </Text>
            </Stack>
          </Stack>
        </div>

        <div
          data-aos="fade-up"
        >
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            className="container-feedback"
          >
            <VStack className="feedback">
              <Text>
                "Spendwise keeps me on track! Alerts & tips make money
                management a breeze."
              </Text>
              <Heading size={"md"}>- Sarah Johnson</Heading>
            </VStack>
            <VStack className="feedback">
              <Text>
                "Spendwise keeps me on track! Alerts & tips make money
                management a breeze."
              </Text>
              <Heading size={"md"}>- Michael Lee</Heading>
            </VStack>
            <VStack className="feedback">
              <Text>
                "Spendwise keeps me on track! Alerts & tips make money
                management a breeze."
              </Text>
              <Heading size={"md"}>- Emily Hernandez</Heading>
            </VStack>
            <VStack className="feedback">
              <Text>
                "Spendwise keeps me on track! Alerts & tips make money
                management a breeze."
              </Text>
              <Heading size={"md"}>- David Patel</Heading>
            </VStack>
            <VStack className="feedback">
              <Text>
                "Spendwise keeps me on track! Alerts & tips make money
                management a breeze."
              </Text>
              <Heading size={"md"}>- Jennifer Adams</Heading>
            </VStack>
            <VStack className="feedback">
              <Text>
                "Spendwise keeps me on track! Alerts & tips make money
                management a breeze."
              </Text>
              <Heading size={"md"}>- Laura Kim</Heading>
            </VStack>
          </Grid>
        </div>
      </Container>

      <SignupPage isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default HomePage;
