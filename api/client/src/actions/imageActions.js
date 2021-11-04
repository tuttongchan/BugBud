import Axios from 'axios';
import { axiosInstance } from '../config';
import {
  IMAGES_DETAILS_FAIL,
  IMAGES_DETAILS_REQUEST,
  IMAGES_DETAILS_SUCCESS,
  IMAGE_CREATE_FAIL,
  IMAGE_CREATE_REQUEST,
  IMAGE_CREATE_SUCCESS,
  IMAGE_DELETE_FAIL,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_SUCCESS,
  IMAGE_DETAILS_FAIL,
  IMAGE_DETAILS_REQUEST,
  IMAGE_DETAILS_SUCCESS,
} from '../constants/imageConstants';

export const imagesDetails = () => async (dispatch) => {
  dispatch({ type: IMAGES_DETAILS_REQUEST });
  try {
    const { data } = await axiosInstance.get('/api/images');
    dispatch({ type: IMAGES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: IMAGES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const imageDetails = (imageId) => async (dispatch) => {
  dispatch({ type: IMAGE_DETAILS_REQUEST, payload: imageId });
  try {
    const { data } = await axiosInstance.get(`/api/images/${imageId}`);
    dispatch({ type: IMAGE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: IMAGE_DETAILS_FAIL, payload: message });
  }
};

export const createImage = (imageForm) => async (dispatch) => {
  dispatch({ type: IMAGE_CREATE_REQUEST });
  try {
    const { data } = await axiosInstance.post('/api/images', imageForm);
    dispatch({ type: IMAGE_CREATE_SUCCESS, payload: data.image });
  } catch (error) {
    dispatch({
      type: IMAGE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteImage = (imageId) => async (dispatch) => {
  dispatch({ type: IMAGE_DELETE_REQUEST, payload: imageId });
  try {
    const { data } = axiosInstance.delete(`/api/images/${imageId}`);
    dispatch({ type: IMAGE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: IMAGE_DELETE_FAIL, error: message });
  }
};
