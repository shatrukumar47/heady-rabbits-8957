import { Box, Container, Heading, Tfoot, useMediaQuery } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

export const Transaction = () => {
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <Container maxW={"8xl"} p={"10px"} gap={"10px"} display={"flex"} flexDirection={isSmallerThan900 ? "column" : "row"} justifyContent={"space-evenly"}>
        <Box>
          <TableContainer>
            <Heading as={"h4"} size={"md"} color={"green"}>Credited Transaction</Heading>
            <Table variant='striped' colorScheme='blue'>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
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
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
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
