import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "../redux/action";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchusers());
  }, []);

  const quizeStore = useSelector((s) => s.quizeReducer);

  //console.log(quizeStore);

  return (
    <Box pt="5vh" bg="#EDE7F6" >
      <Box>
        <Heading>Dashboard</Heading>
      </Box>
      <Box
        w="50%"
        margin="auto"
        p="20px"
        border="1px solid"
        mt="10vh"
        bg="#FBE9E7"
      >
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>
              <Heading size="sm" p="10px" border="1px solid">
                Score Board
              </Heading>
              <Link to='/'><Button border='1px solid' borderRadius='none' mt='10px'>Home</Button></Link>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {quizeStore.users?.map((item) => {
                return (
                  <Tr>
                    <Td>{item.user}</Td>
                    <Td>{item.score}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
