import {
  IMAGES_DETAILS_FAIL,
  IMAGES_DETAILS_REQUEST,
  IMAGES_DETAILS_SUCCESS,
  IMAGE_CREATE_FAIL,
  IMAGE_CREATE_REQUEST,
  IMAGE_CREATE_RESET,
  IMAGE_CREATE_SUCCESS,
  IMAGE_DELETE_FAIL,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_RESET,
  IMAGE_DELETE_SUCCESS,
  IMAGE_DETAILS_FAIL,
  IMAGE_DETAILS_REQUEST,
  IMAGE_DETAILS_SUCCESS,
} from '../constants/imageConstants';

export const imagesDetailsReducer = (
  state = { loading: true, images: [] },
  action
) => {
  switch (action.type) {
    case IMAGES_DETAILS_REQUEST:
      return { loading: true };
    case IMAGES_DETAILS_SUCCESS:
      return { loading: false, images: action.payload };
    case IMAGES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const imageDetailsReducer = (
  state = { image: {}, loading: true },
  action
) => {
  switch (action.type) {
    case IMAGE_DETAILS_REQUEST:
      return { loading: true };
    case IMAGE_DETAILS_SUCCESS:
      return { loading: false, image: action.payload };
    case IMAGE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const imageCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGE_CREATE_REQUEST:
      return { loading: true };
    case IMAGE_CREATE_SUCCESS:
      return { loading: false, success: true, image: action.payload };
    case IMAGE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case IMAGE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const imageDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case IMAGE_DELETE_REQUEST:
      return { loading: true };
    case IMAGE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case IMAGE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case IMAGE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
