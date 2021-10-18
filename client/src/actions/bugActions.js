import Axios from 'axios';
import {
  BUG_DETAILS_FAIL,
  BUG_DETAILS_REQUEST,
  BUG_DETAILS_SUCCESS,
} from '../constants/bugConstants';

export const detailsBug = () => async (dispatch) => {
  dispatch({ type: BUG_DETAILS_REQUEST });
  try {
    const { data } = await Axios.get(`/api/bugs`);
    dispatch({ type: BUG_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BUG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
