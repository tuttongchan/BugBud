import { axiosInstance } from '../config';
import {
  BUGS_DETAILS_FAIL,
  BUGS_DETAILS_REQUEST,
  BUGS_DETAILS_SUCCESS,
  BUG_CREATE_FAIL,
  BUG_CREATE_REQUEST,
  BUG_CREATE_SUCCESS,
  BUG_DELETE_FAIL,
  BUG_DELETE_REQUEST,
  BUG_DELETE_SUCCESS,
  BUG_DETAILS_FAIL,
  BUG_DETAILS_REQUEST,
  BUG_DETAILS_SUCCESS,
  BUG_UPDATE_FAIL,
  BUG_UPDATE_REQUEST,
  BUG_UPDATE_SUCCESS,
} from '../constants/bugConstants';

export const bugsDetails = () => async (dispatch) => {
  dispatch({ type: BUGS_DETAILS_REQUEST });
  try {
    const { data } = await axiosInstance.get('/bugs');
    dispatch({ type: BUGS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: BUGS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const bugDetails = (bugId) => async (dispatch) => {
  dispatch({ type: BUG_DETAILS_REQUEST, payload: bugId });
  try {
    const { data } = await axiosInstance.get(`/bugs/${bugId}`);
    dispatch({ type: BUG_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BUG_DETAILS_FAIL, payload: message });
  }
};

export const createBug =
  (bugName, language, desc, links, code) => async (dispatch) => {
    dispatch({ type: BUG_CREATE_REQUEST });
    try {
      const { data } = await axiosInstance.post('/bugs', {
        bugName,
        language,
        desc,
        links,
        code,
      });
      dispatch({ type: BUG_CREATE_SUCCESS, payload: data.bug });
    } catch (error) {
      dispatch({
        type: BUG_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateBug = (bug) => async (dispatch) => { 
  dispatch({ type: BUG_UPDATE_REQUEST, payload: bug });
  try {
    const { data } = await axiosInstance.put(`/bugs/${bug._id}`, bug);
    console.log(data)
    // console.log(bug)
    dispatch({ type: BUG_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BUG_UPDATE_FAIL, error: message });
  }
};

export const deleteBug = (bugId) => async (dispatch) => {
  dispatch({ type: BUG_DELETE_REQUEST, payload: bugId });
  try {
    const { data } = axiosInstance.delete(`/bugs/${bugId}`);
    dispatch({ type: BUG_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BUG_DELETE_FAIL, error: message });
  }
};
