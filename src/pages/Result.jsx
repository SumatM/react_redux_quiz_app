import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostUser, getPercentage } from '../redux/action';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Result = () => {

  
  const quizeStore = useSelector((s)=>s.quizeReducer);
  const [message,setmessage] = useState("")
  const dispatch = useDispatch();
  console.log(quizeStore?.correct,quizeStore?.form.amount)
 

  useEffect(()=>{
    let per = getPercentage(quizeStore?.correct,quizeStore?.form.amount)
    console.log(per);
    if(per>=80){
      setmessage("Well Done!")
    }else if(per>=60){
      setmessage("Almost there!")
    }else {
      setmessage('Need to Work Hard!')
    }
   
    
  },[])




  return (
    <Box pt='5vh' bg='#EDE7F6' h='100vh'>
        <Box>
          <Heading>Results</Heading>
        </Box>
       <Box mt='15vh'>
       <Box>
          <Text fontWeight='bolder' fontSize='28px'>{message} {quizeStore?.form.name}</Text>
        </Box>
        <Grid gridTemplateColumns="repeat(4,1fr)"  w='80%' m='auto' mt='30px' bg='#FBE9E7'>
          <Box border='1px solid'>
            <Text fontWeight='600' padding='10px 15px'>Correct Answers</Text>
          </Box>
          <Box border='1px solid'>
            <Text fontWeight='600' padding='10px 15px'>Incorrect Answers</Text>
          </Box>
          <Box border='1px solid'>
            <Text fontWeight='600' padding='10px 15px'>Total Score</Text>
          </Box>
          <Box border='1px solid'>
            <Text fontWeight='600' padding='10px 15px'>Percentage</Text>
          </Box>
        {/* values  */}
          <Box border='1px solid'>
            <Text fontWeight='600' padding='10px 15px'>{quizeStore?.correct}</Text>
          </Box>
          <Box border='1px solid'>
            <Text fontWeight='600' padding='10px 15px'>{quizeStore?.form.amount-quizeStore?.correct || 0}</Text>
          </Box>
          <Box border='1px solid'>
            <Text fontWeight='600' padding='10px 15px'>{quizeStore?.correct*10}</Text>
          </Box>
          <Box border='1px solid'>
            <Text fontWeight='600' padding='10px 15px'>{getPercentage(quizeStore?.correct,quizeStore?.form.amount) || 0}%</Text>
          </Box>
        </Grid>
       </Box>
       <Box mt='10vh'>
        <Link to='/dashboard'><Button border='1px solid' borderRadius='none'>DashBoard</Button></Link>
       </Box>
    </Box>
  )
}
