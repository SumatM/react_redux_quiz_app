import { Box, Button, Heading, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { fetchQuestion } from "../redux/action";


export const Home = () => {

   const [form,setForm] = useState({name:"",category:"",difficulty:"",amount:10})
   const naviage = useNavigate()
   const dispatch = useDispatch();

   function handleInput(e){
    const {name,value} = e.target
    setForm({...form,[name]:value})
   }
   
   function handleStart(e){
    e.preventDefault();
    dispatch(fetchQuestion(form))
    naviage('/quiz')
   }

  return (
    <Box pt='5vh' bg='#EDE7F6' h='100vh'>
      <Heading>Set up your Quiz</Heading>
      <Box w="60%" m="auto" mt="40px" bg='#FBE9E7' p='25px' border='1px solid'>
        <form onSubmit={handleStart}>
          <Box>
            <Input
              placeholder="Enter Your Name"
              name="name"
              border="1px solid gray"
              borderRadius="none"
              size='lg'
              onChange={handleInput}
            />
          </Box>
          <Box mt="30px">
            <Select
              name="category"
              size="lg"
              border="1px solid gray"
              borderRadius="none"
              onChange={handleInput}
            >
              <option value="">Select Category</option>
              <option value="9">General Knowledge</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
            </Select>
          </Box>
          <Box mt="30px">
            <Select
              name="difficulty"
              size="lg"
              border="1px solid gray"
              borderRadius="none"
              onChange={handleInput}
            >
              <option value="">Select Category</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
          </Box>
          <Box mt="30px">
            {" "}
            <Input
              name="amount"
              placeholder="Choose number of Question"
              border="1px solid gray"
              borderRadius="none"
              size='lg'
              type="number"
              onChange={handleInput}
            />
          </Box>
          <Box mt="30px">
            {" "}
            <Button type="submit" border="1px solid gray" borderRadius="none" p='20px 35px'>
              START QUIZ
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
