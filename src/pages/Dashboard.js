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
import { actionResetQuestion } from "../redux/actionType";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchusers());
    dispatch(actionResetQuestion({}))
  }, []);

  const quizeStore = useSelector((s) => s.quizeReducer);

  //console.log(quizeStore);

  return (
    <Box className="bg" h="100vh">
      <Box backdropFilter="blur(5px)" borderRadius="md" p="15px">
        <Heading color="#9575CD">Dashboard</Heading>
      </Box>
      <Box
        w={{base:'90%',sm:'80%',md:'70%',lg:"50%"}}
        margin="auto"
        p="20px"
        border="1px solid"
        mt="10vh"
        backdropFilter="blur(10px)"
      >
        <Heading size="sm" p="10px" border="1px solid">
          Score Board
        </Heading>
        <TableContainer mt='10px'>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>
              <Link to="/">
                <Button border="1px solid" borderRadius="none" mt="10px">
                  Home
                </Button>
              </Link>
            </TableCaption>
            <Thead>
              <Tr>
              <Th>Sr. no.</Th>
                <Th>Name</Th>
                <Th>Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {quizeStore.users?.map((item) => {
                return (
                  <Tr key={item.id}>
                  <Td>{item.id}</Td>
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
