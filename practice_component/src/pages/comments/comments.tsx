import React from 'react';
import DummyData from '../../../data';
import styled from 'styled-components';
import Comment from './comment';

const Comments = () => {
  const comments = DummyData.comments;
  return (
    <CommentsWrapper>
      {comments.map((commentData) => (
        <Comment key={commentData.id} {...commentData} />
      ))}
    </CommentsWrapper>
  );
};

export default Comments;

const CommentsWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
`;
