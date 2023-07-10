import {
  CORRECT_ANSWERS,
  GET_USER,
  RESET_QUESTION,
  SAVE_FORM,
  SAVE_QUESTION,
} from "./actionType";

const intitialState = {
  question: [],
  users: [],
  score: {},
  form: { name: "", category: "", difficulty: "", amount: 5 },
};

export function reducer(state = intitialState, { type, payload }) {
  switch (type) {
    case SAVE_FORM:
      return { ...state, form: payload };
    case SAVE_QUESTION:
      return { ...state, question: payload };
    case CORRECT_ANSWERS:
      return { ...state, score: { ...state.score, ...payload } };

    case GET_USER:
      return { ...state, users: payload };

    case RESET_QUESTION: return { ...state, score: payload};
    default:
      return state;
  }
}
