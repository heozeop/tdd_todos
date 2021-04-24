import React from 'react';
import DummyData from '../../../data';
import styled from 'styled-components';
import Comment from './comment';

const Comments = () => {
  const comments = DummyData.comments;
  return (
    <CommentsWrapper>
      <CommentHeader>
        <ArrowArea />내 댓글 보기
      </CommentHeader>
      <div style={{ height: '60px' }}></div>
      {comments.map((commentData) => (
        <Comment key={commentData.id} {...commentData} />
      ))}
    </CommentsWrapper>
  );
};

export default Comments;

const CommentsWrapper = styled.div`
  background: #fff;
`;

const CommentHeader = styled.div`
  position: fixed;
  top: 0;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  font-size: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.2);
`;

const ArrowArea = styled.div`
  width: 24px;
  height: 24px;
  background-color: red;
  position: absolute;
  left: 24px;
`;
