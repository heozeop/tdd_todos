import React from 'react';
import { useRecoilState } from 'recoil';
import {counterState} from '../modules/counter';

function Counter() {
  const [count, setCount] = useRecoilState(counterState);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </>
  );
}

export default Counter;
