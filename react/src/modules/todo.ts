const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

type TodosAction = 
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type TodosState = Todo[];

const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false }
];

function todos(state: TodosState = initialState, action: TodosAction) {
  switch(action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map(todo => todo.id));
      const nextContent = action.payload;
      return state.concat({id: nextId, text: nextContent, done: false});
    case TOGGLE_TODO:
      const toogleTargetId = action.payload;
      return state.map(todo => todo.id === toogleTargetId ? { ...todo, done: !todo.done } : todo);
    case REMOVE_TODO:
      const removeTargetId = action.payload;
      return state.filter(todo => todo.id !== removeTargetId);
    default:
      return state;
  }
}

export default todos;