import { Box, Container, Heading, Td, Tfoot, useMediaQuery } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react';
import { useSelector } from "react-redux";

export const Transaction = () => {
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
  const User = useSelector((store)=> store.authReducer.User);
const {budget,withdraw}=User.financialinfo;
console.log(budget)

  return (
    <>
      <Container maxW={"8xl"} p={"10px"} gap={"10px"} display={"flex"} flexDirection={isSmallerThan900 ? "column" : "row"} justifyContent={"space-evenly"}>
        <Box>
          <TableContainer>
            <Heading as={"h4"} size={"md"} color={"green"}>Credited Transaction</Heading>
            <Table variant='striped' colorScheme='blue' textAlign={"center"}>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
              {budget.map((item) => (
          <Tr key={item.id}>
            <Td>{item.title}</Td>
            <Td>{item.date}</Td>
            <Td>{item.amount}</Td>
          </Tr>
        ))}
        </Tbody>
              <Tfoot>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <TableContainer>
            <Heading as={"h4"} size={"md"} color={"red"}>Debited Transaction</Heading>
            <Table variant='striped' colorScheme='blue'>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
              {withdraw.map((item) => (
          <Tr key={item.id}>
            <Td>{item.title}</Td>
            <Td>{item.date}</Td>
            <Td>{item.amount}</Td>
          </Tr>
        ))}
        </Tbody>
              <Tfoot>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};
