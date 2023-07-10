import axios from "axios";
import { actionGetUser, actionSaveForm, actionSaveQuestion } from "./actionType";

export const fetchQuestion = (payload) => (dispatch) => {
  const { category, difficulty, amount } = payload;
  axios(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  ).then((res) => {
    console.log(res.data.results);
    dispatch(actionSaveQuestion(res.data.results));
  });
  dispatch(actionSaveForm(payload));
};

export const fetchPostUser = (payload) => (dispatch) => {
  axios.post("https://mock3-server-vx9d.onrender.com/users", { ...payload }).then((res) => {
    console.log(res.data);
  });
};

export function getPercentage(solve, total) {
  console.log(solve/total*100)
  let per = Math.floor((solve/total*100));
  return per ;
}


export const fetchusers =()=>(dispatch)=>{
  axios('https://mock3-server-vx9d.onrender.com/users?_sort=score&_order=desc')
  .then((res)=>{
    //console.log(res);
    dispatch(actionGetUser(res.data));
  })
}


export function makeFirstLetterCap(str){

  let result = str.split("").reduce((acc,item,index)=>{
      if(index==0){
        acc+= item.toUpperCase();
      }else{
        acc+=item;
      }
      return acc;
  },"")
  return result;
}


