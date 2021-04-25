import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from './comment';
import CommentTab from './commentTab';
import { useComments } from './useComments';

const Comments = (props: any) => {
  const tabMenu = ['QnA', '질문'];

  const [currentMenu, setCurrentMenu] = useState(tabMenu[0]);
  const { comments } = useComments({ commentKey: currentMenu });

  return (
    <>
      <CommentsWrapper>
        <CommentFixedTopArea>
          <CommentHeader>
            <ArrowArea />내 댓글 보기
          </CommentHeader>
          <CommentTab
            tabMenues={tabMenu}
            onTabMenu={(menuName: string) => setCurrentMenu(menuName)}
          />
        </CommentFixedTopArea>
        <div style={{ height: '110px' }}></div>
        {comments.map((commentData) => (
          <Comment
            key={commentData.id}
            commentKey={currentMenu}
            {...commentData}
          />
        ))}
      </CommentsWrapper>
    </>
  );
};

export default Comments;

const CommentsWrapper = styled.div`
  background: #fff;
`;
const CommentFixedTopArea = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;

const CommentHeader = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  font-size: 20px;
  background-color: #fff;
  border-bottom: #ededed 1px solid;
  /* box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.2); */
`;

const ArrowArea = styled.div`
  width: 24px;
  height: 24px;
  background-color: red;
  position: absolute;
  left: 24px;
`;
