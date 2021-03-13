import React from 'react';

function Counter() {
  const [count, {increase, decrease}] = [0, ({increase: ()=>{}, decrease: () => {}})]; // TODO: useRecoilState 사용

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </>
  );
}

export default Counter;
