import { combineReducers } from 'redux';

import slide from './slider';
import counter from './counter';

const rootReducer = combineReducers({
  slide,
  counter,
});

export default rootReducer;
