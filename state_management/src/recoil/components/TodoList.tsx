import React from 'react';
import {Todos, Todo} from '../modules/Todo';
import TodoItem from './TodoItem';


function TodoList() {
  const list: Todos = [{id: 1, title: 'hehe', done: false}];
  return (
    <ul>
      {list.map((item: Todo) => (
        <li key={item.id}>
          <TodoItem todo={item}/>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
