import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuizCard } from "../component/QuizCard";
import { Link, useNavigate } from "react-router-dom";
import { fetchPostUser, getScore } from "../redux/action";
import { actionResetQuestion } from "../redux/actionType";


export function randomizer(arr,ele){
  let position = Math.floor(Math.random()*3)  
 let newPostion = [...arr];

 let temp = newPostion[position];
 newPostion[position]= ele;
    newPostion[3]=temp
 return newPostion

}

export const Quiz = () => {
  const quizeStore = useSelector((s) => s.quizeReducer);
  const [questionNumber, setQuestionNumber] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allQuestions,setAllQuestion] = useState([])



  useEffect(()=>{
    let temp = quizeStore?.question?.map((item)=>{
         
        return {question:item.question,correct_answer:item.correct_answer,options:randomizer(item.incorrect_answers,item.correct_answer)}
    })
    //console.log(temp)
    setAllQuestion(temp)
  },[quizeStore.question])




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
    const score = quizeStore?.score
    // console.log(score);
     let total =0;
     for (let key in score){
       total+=score[key]
    }
    dispatch(
      fetchPostUser({
        user: quizeStore?.form.name,
        score: getScore(quizeStore?.form.difficulty,total)
      })
    );
    navigate("/results");
  }
   


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
              question: allQuestions[questionNumber],
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
