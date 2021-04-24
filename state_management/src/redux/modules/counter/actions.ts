import {createAction} from 'typesafe-actions';

export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();


/* async action */
export const INCREASE_ASYNC = 'counter/INCREASE_ACSYNC' as const;
export const DECREASE_ASYNC = 'counter/DECREASE_ACSYNC' as const;
export const INCREASE_BY_ASYNC = 'counter/INCREASE_BY_ACSYNC' as const;

export const increaseAsync = () => ({type: INCREASE_ASYNC});
export const decreaseAsync = () => ({type: DECREASE_ASYNC});