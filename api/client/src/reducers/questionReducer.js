import {
  QUESTIONS_DETAILS_FAIL,
  QUESTIONS_DETAILS_REQUEST,
  QUESTIONS_DETAILS_SUCCESS,
  QUESTION_CREATE_FAIL,
  QUESTION_CREATE_REQUEST,
  QUESTION_CREATE_RESET,
  QUESTION_CREATE_SUCCESS,
} from '../constants/questionConstants';

export const questionsDetailsReducer = (
  state = { loading: true, questions: [] },
  action
) => {
  switch (action.type) {
    case QUESTIONS_DETAILS_REQUEST:
      return { loading: true };
    case QUESTIONS_DETAILS_SUCCESS:
      return { loading: false, questions: action.payload };
    case QUESTIONS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const questionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_CREATE_REQUEST:
      return { loading: true };
    case QUESTION_CREATE_SUCCESS:
      return { loading: false, success: true, question: action.payload };
    case QUESTION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case QUESTION_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
