import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCorrectAnswer } from "../redux/actionType";

export const QuizCard = ({ value }) => {
  const { item, index } = value;
  const quizeStore = useSelector((s) => s.quizeReducer);
  console.log(quizeStore.correct)
  //console.log(item);
  const [correct,setCorrect] = useState("")
  const dispatch = useDispatch()
  const [flag,setFlag] = useState(false)
  const toast = useToast()


  useEffect(()=>{
    setCorrect(item?.correct_answer)
  },[value])



  function trueOrFalse(e){
    
    console.log(e.target.innerHTML,correct)

     if(e.target.innerHTML==correct){
         toast({
            position:'top',
            render:()=>(
                <Box bg='green.500' p='10px' borderRadius='15px' color='white' textAlign='center'>
                    <Text fontWeight='500'>Correct Answer</Text>
                </Box>
            )
         })
        
            dispatch(actionCorrectAnswer())
     }else{
        toast({
            position:'top',
            render:()=>(
                <Box bg='red.500' p='10px' borderRadius='15px' color='white' textAlign='center'>
                    <Text fontWeight='500'>Wrong Answer</Text>
                </Box>
            )
         })
        
     }
  }


  
  return (
    <Box border="1px solid" p="25px" mt="25px" w="60%" m="auto" bg='#FBE9E7'>
      <Flex justify="space-between">
        <Box>
          <Heading size="md">
            {index + 1}. {item?.question}
          </Heading>
        </Box>
        <Box >
          <Text>
            {index + 1}/{quizeStore?.form.amount}
          </Text>
        </Box>
      </Flex>
      <Box textAlign="left" mt="30px">
        {item?.incorrect_answers.map((ans) => {
          return (
            <Box border="1px solid gray" fontWeight='500' mt="8px" p="10px" borderRadius="10px" _hover={{cursor:"pointer"}} >
              <Text onClick={trueOrFalse}>{ans}</Text>
            </Box>
          );
        })}
      </Box>
      <Box textAlign='left' border="1px solid gray" mt="8px" p="10px" borderRadius="10px" fontWeight='500' _hover={{cursor:"pointer"}}>
        <Text onClick={trueOrFalse}>{item?.correct_answer}</Text>
      </Box>
    </Box>
  );
};
