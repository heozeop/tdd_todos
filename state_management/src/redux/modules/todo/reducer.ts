import {createReducer} from 'typesafe-actions';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';
import {TodosState, TodosAction} from './types';

const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false }
];

// function todos(state: TodosState = initialState, action: TodosAction) {
//   switch(action.type) {
//     case ADD_TODO:
//       const nextId = Math.max(...state.map(todo => todo.id));
//       const nextContent = action.payload;
//       return state.concat({id: nextId, text: nextContent, done: false});
//     case TOGGLE_TODO:
//       const toogleTargetId = action.payload;
//       return state.map(todo => todo.id === toogleTargetId ? { ...todo, done: !todo.done } : todo);
//     case REMOVE_TODO:
//       const removeTargetId = action.payload;
//       return state.filter(todo => todo.id !== removeTargetId);
//     default:
//       return state;
//   }
// }
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id)
});

export default todos;
