import {createReducer} from 'typesafe-actions';
import {CounterAction, CounterState} from './types';
import {INCREASE,DECREASE,INCREASE_BY} from './actions'; 

const initialState: CounterState = {
  count: 0
};

/* object map 방식 */
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({count: state.count + 1}),
  [DECREASE]: (state) => ({count: state.count - 1}),
  [INCREASE_BY]: (state, action) => ({count: state.count + action.payload }),
})

// function counter(state: CounterState = initialState, action: CounterAction) {
//   switch(action.type) {
//     case INCREASE:
//       return {count: state.count + 1};
//     case DECREASE:
//       return {count: state.count - 1};
//     case INCREASE_BY:
//       return {count:state.count + action.payload};
//     default:
//       return state;
//   }
// }


/* method chaining 방식 */
// const counter = createReducer<CounterState, CounterAction>(initialState)
//   .handleAction(increase, state => ({count: state.count + 1}))
//   .handleAction(decrease, state => ({count: state.count - 1}))
//   .handleAction(increaseBy, (state, action) => ({count: state.count + action.payload}));

export default counter;
