const {
  BUG_DETAILS_REQUEST,
  BUG_DETAILS_SUCCESS,
  BUG_DETAILS_FAIL,
} = require('../constants/bugConstants');

export const bugDetailsReducer = (
  state = { loading: true, bugs: [] },
  action
) => {
  switch (action.type) {
    case BUG_DETAILS_REQUEST:
      return { loading: true };
    case BUG_DETAILS_SUCCESS:
      return { loading: false, bugs: action.payload };
    case BUG_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
