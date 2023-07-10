import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostUser, getPercentage, makeFirstLetterCap } from "../redux/action";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Result = () => {
  const quizeStore = useSelector((s) => s.quizeReducer);
  const [message, setmessage] = useState("");
  const dispatch = useDispatch();

 const [correct,setCorrect] = useState(0)


 useEffect(()=>{
  const score = quizeStore?.score
  console.log(score);
  let total =0;
  for (let key in score){
    total+=score[key]
 }
 //console.log(total)
 setCorrect(total)
 },[])


  useEffect(() => {
    let per = getPercentage(correct, Number(quizeStore?.form.amount));
    if (per >= 80) {
      setmessage("Well Done!!");
    } else if (per >= 60) {
      setmessage("Almost there!!");
    } else {
      setmessage("Need to Work Hard!!");
    }
  }, [correct]);





  return (
    <Box className="bg" h="100vh">
      <Box backdropFilter="blur(5px)" borderRadius="md" p="15px">
        <Heading color="#9575CD">Results</Heading>
      </Box>

      <Box mt="15vh">
        <Box backdropFilter='blur(8px)' display='inline-block' p='8px 25px' border='1px solid'>
          <Text fontWeight="bolder" fontSize="20px">
            {message} <Text display="inline-block" fontSize="28px">{makeFirstLetterCap(quizeStore?.form.name)}</Text>
          </Text>
        </Box>
        <Grid
          gridTemplateColumns="repeat(4,1fr)"
          w="80%"
          m="auto"
          mt="30px"
          bg="#FBE9E7"
        >
          <Box border="1px solid">
            <Text fontWeight="600" padding="10px 15px">
              Correct Answers
            </Text>
          </Box>
          <Box border="1px solid">
            <Text fontWeight="600" padding="10px 15px">
              Incorrect Answers
            </Text>
          </Box>
          <Box border="1px solid">
            <Text fontWeight="600" padding="10px 15px">
              Total Score
            </Text>
          </Box>
          <Box border="1px solid">
            <Text fontWeight="600" padding="10px 15px">
              Percentage
            </Text>
          </Box>
          {/* values  */}
          <Box border="1px solid">
            <Text fontWeight="600" padding="10px 15px">
              {correct || 0}
            </Text>
          </Box>
          <Box border="1px solid">
            <Text fontWeight="600" padding="10px 15px">
              {quizeStore?.form.amount - correct || 0}
            </Text>
          </Box>
          <Box border="1px solid">
            <Text fontWeight="600" padding="10px 15px">
              {correct * 10 || 0}
            </Text>
          </Box>
          <Box border="1px solid">
            <Text fontWeight="600" padding="10px 15px">
              {getPercentage(correct, Number(quizeStore?.form.amount)) || 0}
              %
            </Text>
          </Box>
        </Grid>
      </Box>
      <Box mt="10vh">
        <Link to="/dashboard">
          <Button border="1px solid" borderRadius="none">
            DashBoard
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
