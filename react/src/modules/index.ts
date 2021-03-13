import { combineReducers } from 'redux';
import {all} from 'redux-saga/effects';
import counter, {counterSaga} from './counter';
import todos from './todo';

/* reducer */
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
                                   
/* saga */
export function* rootSaga() {
  yield all([counterSaga()]);
}
                                   