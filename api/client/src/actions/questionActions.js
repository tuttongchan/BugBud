import { axiosInstance } from '../config';
import {
  QUESTIONS_DETAILS_REQUEST,
  QUESTIONS_DETAILS_SUCCESS,
  QUESTIONS_DETAILS_FAIL,
} from '../constants/questionConstants';

export const questionsDetails = () => async (dispatch) => {
  dispatch({ type: QUESTIONS_DETAILS_REQUEST });
  try {
    const { data } = await axiosInstance.get('/questions');
    console.log(data)

    dispatch({ type: QUESTIONS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: QUESTIONS_DETAILS_FAIL, payload: error.message });
  }
};