import { combineReducers } from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  authenticated: auth,
});

export default rootReducer;
