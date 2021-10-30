import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  bugCreateReducer,
  bugDetailsReducer,
  bugsDetailsReducer,
} from './reducers/bugReducer';
import {
  imagesDetailsReducer,
  imageDetailsReducer,
  imageDeleteReducer,
  imageCreateReducer,
} from './reducers/imageReducer';
import {
  userDetailsReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
} from './reducers/userReducer';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  bugsDetails: bugsDetailsReducer,
  bugDetails: bugDetailsReducer,
  bugCreate: bugCreateReducer,
  imagesDetails: imagesDetailsReducer,
  imageDetails: imageDetailsReducer,
  imageCreate: imageCreateReducer,
  imageDelete: imageDeleteReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
