import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {listState} from '../modules/Todo';

function TodoInsert() {
  const [value, setValue] = useState('');
  const addTodo = useSetRecoilState(listState);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function onSubmit (e: FormEvent) {
    e.preventDefault();
    addTodo((old) => [...old, {id: old.length + 1, done: false, title: value}]);
    setValue('');
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
