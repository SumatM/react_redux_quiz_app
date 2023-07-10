import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCorrectAnswer } from "../redux/actionType";
import { ShowToast } from "./ShowToast";

export const QuizCard = ({ value }) => {
  const { item, index } = value;
  const quizeStore = useSelector((s) => s.quizeReducer);
  //console.log(item);
  const [correct, setCorrect] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    setCorrect(item?.correct_answer);
  }, [value]);

  function trueOrFalse(e) {
    //console.log(e.target.innerHTML,correct)

    if (e.target.innerHTML == correct) {
      //  console.log(quizeStore.score[index],index)
      if (!quizeStore.score[index]) {
        dispatch(actionCorrectAnswer({ [index]: 1 }));
        ShowToast(toast,"green.500","Correct Answer")
      } else {
        ShowToast(toast,"#FFB300","Already Answered!!")
      }
    } else {
      ShowToast(toast,'red.500','Wrong Answer')
    }
  }



  return (
    <Box border="1px solid" p="25px" mt="25px" w="60%" m="auto" bg="#A7FFEB" key={index}>
      <Flex justify="space-between">
        <Box>
          <Heading size="md">
            {index + 1}. {item?.question}
          </Heading>
        </Box>
        <Box>
          <Text>
            {index + 1}/{quizeStore?.form.amount}
          </Text>
        </Box>
      </Flex>
      <Box textAlign="left" mt="30px">
        {item?.incorrect_answers.map((ans) => {
          return (
            <Box
              border="1px solid gray"
              fontWeight="500"
              mt="8px"
              p="10px"
              borderRadius="10px"
              _hover={{ cursor: "pointer" }}
            >
              <Text onClick={trueOrFalse}>{ans}</Text>
            </Box>
          );
        })}
      </Box>
      <Box
        textAlign="left"
        border="1px solid gray"
        mt="8px"
        p="10px"
        borderRadius="10px"
        fontWeight="500"
        _hover={{ cursor: "pointer" }}
      >
        <Text onClick={trueOrFalse}>{item?.correct_answer}</Text>
      </Box>
    </Box>
  );
};
