import React from 'react';
import {useRecoilValue} from 'recoil';
import TodoInsert from './TodoInsert';
import {listState, Todo} from '../modules/Todo';
import TodoItem from './TodoItem';



function TodoList() {
  const list = useRecoilValue(listState) ;
  return (
    <>
    <TodoInsert />
    <ul>
      {list.map((item: Todo) => (
        <li key={item.id}>
          <TodoItem todo={item}/>
        </li>
      ))}
    </ul>
    </>
  );
}

export default TodoList;
