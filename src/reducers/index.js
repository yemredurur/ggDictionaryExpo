import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PageFormReducer from './PageFormReducer';
import PageReducer from './PageReducer';

export default combineReducers({
   auth: AuthReducer,
   pageForm: PageFormReducer,
   pages: PageReducer
});