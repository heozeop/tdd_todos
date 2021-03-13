import { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import { decrease, increase, increaseBy } from '../modules/counter';
import { decreaseAsync, increaseAsync, increaseBy } from '../modules/counter';
import { RootState } from '../modules';

function useCounter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(()=>dispatch(increaseAsync()), [dispatch]);
  const onDecrease = useCallback(()=>dispatch(decreaseAsync()), [dispatch]);
  const onIncreaseBy = useCallback((diff: number)=>dispatch(increaseBy(diff)), [dispatch]);

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
  };
}

export default useCounter;
