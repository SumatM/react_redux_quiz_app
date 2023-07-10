import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuizCard } from "../component/QuizCard";
import { Link, useNavigate } from "react-router-dom";
import { fetchPostUser } from "../redux/action";
import { actionResetQuestion } from "../redux/actionType";

export const Quiz = () => {
  const quizeStore = useSelector((s) => s.quizeReducer);
  const [questionNumber, setQuestionNumber] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [correct,setCorrect] = useState(0)



  //console.log(quizeStore)

  function handlenext() {
    if (questionNumber == quizeStore?.form.amount - 1) {
      alert("You are at Last Question");
      return;
    }
    setQuestionNumber(questionNumber + 1);
  }

  function handlePrevious() {
    if (questionNumber <= 0) {
      alert("You are at 1st Question");
      return;
    }
    setQuestionNumber(questionNumber - 1);
  }

  function handleSubmit() {
    navigate("/results");
    dispatch(
      fetchPostUser({
        user: quizeStore?.form.name,
        score: correct* 10,
      })
    );
  }
   
  useEffect(()=>{
    const score = quizeStore?.score
   // console.log(score);
    let total =0;
    for (let key in score){
      total+=score[key]
   }
  // console.log(total)
   setCorrect(total)
  },[])


  function handleBack(){
    dispatch(actionResetQuestion({}))
    navigate('/')
  }

  return (
    <Box className="bg" h="100vh">
      <Box backdropFilter="blur(5px)" borderRadius="md" p="15px">
        <Heading color="#9575CD">Question</Heading>
      </Box>
      <Box mt="30px">
        {
          <QuizCard
          key={questionNumber}
            value={{
              item: quizeStore.question[questionNumber],
              index: questionNumber,
            }}
          />
        }
      </Box>
      <Flex justify="space-around" mt="20px">
        <Box>
          <Button
            borderRadius="none"
            border="1px solid gray"
            onClick={handlePrevious}
          >
            Previous
          </Button>
        </Box>
        <Box>
          {questionNumber == quizeStore?.form.amount - 1 ? (
            <Button
              borderRadius="none"
              border="1px solid gray"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button
              borderRadius="none"
              border="1px solid gray"
              onClick={handlenext}
            >
              Next
            </Button>
          )}
        </Box>
      </Flex>
      <Box mt='30px'>

          <Button border="1px solid" bg='black'color='white' borderRadius="none" onClick={handleBack}>
            Back
          </Button>
      </Box>
    </Box>
  );
};
