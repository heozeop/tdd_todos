import React, { ChangeEvent, FormEvent, useState } from 'react';

function TodoInsert() {
  const [value, setValue] = useState('');
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function onSubmit (e: FormEvent) {
    e.preventDefault();
    // TODO: insert string to list
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
