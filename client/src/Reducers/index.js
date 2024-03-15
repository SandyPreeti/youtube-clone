import {combineReducers} from 'redux';
import authReducer from './auth';
import currentUserReducer from './currentUser';
 import chanelReducers from './chanel';
import videoReducer from './Video';



export default combineReducers({
authReducer , 
currentUserReducer,  
chanelReducers,
videoReducer
});