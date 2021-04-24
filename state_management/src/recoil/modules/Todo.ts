import {atom} from 'recoil';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export type Todos = Todo[];


const initialState = [
  {id: 1, title: 'hehe', done: false},
  {id: 2, title: 'hoho', done: false},
  {id: 3, title: 'haha', done: true}
];

export const listState = atom<Todos>({
  key: 'ListState',
  default: initialState,
});
