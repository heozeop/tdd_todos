import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

export default function Todo() {
  return (
        <>
          <TodoInsert />
          <TodoList />
        </>
  );
}