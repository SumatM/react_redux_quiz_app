import { Box, Button, Heading, Input, Select, Text,Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchQuestion } from "../redux/action";
import { ShowToast } from "../component/ShowToast";

export const Home = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    difficulty: "",
    amount: 0,
  });
  const naviage = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleStart(e) {
    e.preventDefault();
    const {name,category,difficulty,amount} = form;


    if(!name && !category && !difficulty && !amount){
      ShowToast(toast,"red.500",'Please Fill All Deails')
      
     return;
    }
    if(!name){
      ShowToast(toast,"red.500",'Please Enter the Name');
      return;
    }
    if(!category){
      ShowToast(toast,"red.500",'Please Enter the Category');
      return;
    }
    if(!difficulty){
      ShowToast(toast,"red.500",'Please Enter the Difficulty Level');
      return;
    }
    if(!amount){
      ShowToast(toast,"red.500",'Please Enter the Question Number');
      return;
    }
    
    dispatch(fetchQuestion(form));
    naviage("/quiz");
  }


  return (
    <Box className="bg" h="100vh">
      <Box
        backdropFilter="blur(5px)"
        borderRadius="md"
        p="15px"        
      >
        <Heading color="#9575CD">Set up your Quiz</Heading>
      </Box>
      <Box w={{base:'90%',sm:'80%',md:'70%',lg:"50%"}} m="auto" mt="40px" bg="#FBE9E7" p="25px" border="1px solid">
        <form onSubmit={handleStart}>
          <Box>
            <Input
              placeholder="Enter Your Name"
              name="name"
              border="1px solid gray"
              borderRadius="none"
              size="lg"
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
              <option value="">Select Difficulty</option>
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
              size="lg"
              type="number"
              onChange={handleInput}
            />
          </Box>
          <Box mt="30px">
            {" "}
            <Button
              type="submit"
              border="1px solid gray"
              borderRadius="none"
              p="20px 35px"
            >
              START QUIZ
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
