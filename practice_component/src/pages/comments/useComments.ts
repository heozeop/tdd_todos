import DummyData from '../../../data';
import { useRecoilState } from 'recoil';
import { CommentsState } from './atoms/comments';
import { useEffect } from 'react';

export function useComments(params: { commentKey: string }) {
  const [comments, setComments] = useRecoilState(
    CommentsState(params.commentKey)
  );

  useEffect(() => {
    if (comments.length < 1) {
      setComments(DummyData.comments);
    }
  }, [params.commentKey]);

  return { comments };
}
