import React, { useState } from 'react';
import styled from 'styled-components';

const CommentTab = (props: {
  tabMenues: Array<any>;
  onTabMenu: (param: any) => void;
}) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  return (
    <CommentTabWrapper>
      {props.tabMenues.map((tabMenu, index) => {
        return (
          <div key={tabMenu}>
            <CommentTabItem
              onClick={() => {
                setScrollIndex(index);
                props.onTabMenu(tabMenu(tabMenu));
              }}
            ></CommentTabItem>
            {tabMenu}
          </div>
        );
      })}
      <CommentTabActiveIndicator scrollIndex={scrollIndex} />
    </CommentTabWrapper>
  );
};

export default CommentTab;

const CommentTabWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;
const CommentTabItem = styled.input.attrs({
  type: 'checkbox',
})`
  flex: 1;
  height: 100%;
  color: #a7a7a7;
  :checked {
    color: #87ceeb;
  }
`;
const CommentTabActiveIndicator = styled.div<{ scrollIndex?: number }>`
  position: absolute;
  bottom: 0;
  width: ${(props) => props.style?.width}px;
  transform: ${({ scrollIndex = 0 }) => `translateX(${scrollIndex * 100}%)`};
`;
