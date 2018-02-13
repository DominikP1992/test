import { combineReducers } from 'redux';

// parts of state
import exampleReducer from './example/exampleReducer';

// combine all reducers
const rootReducer = combineReducers({
  exampleState: exampleReducer,
});

export default rootReducer;
