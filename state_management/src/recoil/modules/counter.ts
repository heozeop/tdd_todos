import {atom} from 'recoil';

export const counterState = atom({
  key: 'count',
  default: 0,
});
