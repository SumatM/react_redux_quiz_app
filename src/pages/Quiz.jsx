import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { QuizCard } from '../component/QuizCard';
import { useNavigate } from 'react-router-dom';
import { fetchPostUser } from '../redux/action';

export const Quiz = () => {

  const quizeStore = useSelector((s)=>s.quizeReducer);
  const [questionNumber,setQuestionNumber] = useState(0)
  const navigate = useNavigate();
  const dispatch = useDispatch()

    //console.log(quizeStore)

    function handlenext(){
      if(questionNumber==quizeStore?.form.amount-1){
        alert('You are at Last Question')
        return
      }
      setQuestionNumber(questionNumber+1)
    }

    function handlePrevious(){
      if(questionNumber<=0){
        alert('You are at 1st Question')
        return
      }
      setQuestionNumber(questionNumber-1)
    }


    function handleSubmit(){
        navigate('/results')
        dispatch(fetchPostUser({user:quizeStore?.form.name,score:quizeStore?.correct*10}))
    }

  return (
    <Box  pt='5vh' bg='#EDE7F6' h='100vh'>
       <Box>
        <Heading>Question</Heading>
       </Box>
       <Box mt='30px'>
        {
           <QuizCard value={{item:quizeStore.question[questionNumber],index:questionNumber}}/>
        }
       </Box>
       <Flex justify="space-around"  mt="20px"  >
        <Box>
          <Button  borderRadius="none" border="1px solid gray" onClick={handlePrevious}>Previous</Button>
        </Box>
        <Box>
          {questionNumber==quizeStore?.form.amount-1 ? <Button  borderRadius="none" border="1px solid gray" onClick={handleSubmit}>Submit</Button> : <Button  borderRadius="none" border="1px solid gray" onClick={handlenext}>Next</Button>}
        </Box>
      </Flex>
    </Box>
  )
}
