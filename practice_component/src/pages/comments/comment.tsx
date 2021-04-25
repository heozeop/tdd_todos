import React, { useState } from 'react';
import { IComment } from './types';
import styled from 'styled-components';

interface ICommentProps extends IComment {
  commentKey: string;
}

const Comment = (props: ICommentProps) => {
  const { content, likeCount, relatedProduct } = props;
  return (
    <CommentWrapper>
      <ProductInfo>
        <ProductImage src={relatedProduct.imageUrl} />
        <ProductTitle>{relatedProduct.title}</ProductTitle>
      </ProductInfo>
      <CommentContent>
        <ContentWithSeemore content={content} />
      </CommentContent>
      <LikeCount>{likeCount}</LikeCount>
    </CommentWrapper>
  );
};

export default Comment;

const ContentWithSeemore = (props: { content: string; limit?: number }) => {
  const { limit = 100, content } = props;
  const [isClicked, setIsClicked] = useState(false);
  const contentPeek = content.substring(0, limit);
  if (isClicked || content.length <= limit) {
    return <>{content}</>;
  }

  return (
    <>
      {contentPeek}
      <SeeMore onClick={() => setIsClicked(true)}>...더보기</SeeMore>
    </>
  );
};

const SeeMore = styled.span`
  color: #a7a7a7;
`;

const CommentWrapper = styled.div`
  padding: 24px;
  min-height: 140px;
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 60px;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
`;
const ProductTitle = styled.p`
  font-size: 24px;
  overflow: hidden;
  height: 100%;
  text-overflow: ellipsis;
  padding: 0 24px;
  margin: 0;
`;
const CommentContent = styled.p`
  font-size: 14px;
  word-break: break-word;
  white-space: pre-line;
  padding: 0;
  margin: 0;
`;
const LikeCount = styled.div`
  color: blue;
`;
