import React  from 'react';
import {Todo} from '../modules/Todo';

interface TodoItemProps {
  todo: Todo
}

function TodoItem({todo}: TodoItemProps) {
  const {title} = todo;
  // TODO: onToggle, onRemove

  return (
    <>
      <span>{title}</span>
    </>
  );
}

export default TodoItem;
