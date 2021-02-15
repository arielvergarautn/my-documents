import { combineReducers } from 'redux';
import filesReducer from './filesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    files: filesReducer,
    user: userReducer,
    //MORE REDUCERS
});

export default rootReducer;