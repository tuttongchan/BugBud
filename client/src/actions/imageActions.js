import Axios from 'axios'

export const imagesDetails = () => async (dispatch) => {
    dispatch({ type: IMAGES_DETAILS_REQUEST });
    try {
      const { data } = await Axios.get('/api/images');
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