import { CORRECT_ANSWERS, GET_USER, SAVE_FORM, SAVE_QUESTION } from "./actionType";

const intitialState = {
  question: [],
  users: [],
  score: null,
  form: { name: "", category: "", difficulty: "", amount: 5 },
  correct: 0,
};

export function reducer(state = intitialState, { type, payload }) {
  switch (type) {
    case SAVE_FORM:
      return { ...state, form: payload };
    case SAVE_QUESTION:
      return { ...state, question: payload };
    case CORRECT_ANSWERS:
      return { ...state, correct: state.correct + 1 };

      case GET_USER : return {...state,users:payload}
    default:
      return state;
  }
}
