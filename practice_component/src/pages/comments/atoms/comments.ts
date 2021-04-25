import { atomFamily } from 'recoil';
import { IComment } from '../types';

const COMMENT_ATOMS = 'comment_atoms';

export const CommentsState = atomFamily<IComment[], string>({
  key: COMMENT_ATOMS + 'state',
  default: (key) => [] as IComment[],
});
