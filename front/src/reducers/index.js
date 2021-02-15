import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
    example: exampleReducer,
    //MORE REDUCERS
});

export default rootReducer;