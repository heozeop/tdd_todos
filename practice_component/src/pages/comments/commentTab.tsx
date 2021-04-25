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
          <CommentTabItem key={tabMenu}>
            <input
              type={'radio'}
              id={tabMenu}
              checked={index === scrollIndex}
              value={tabMenu}
              onChange={(value) => {
                setScrollIndex(index);
                props.onTabMenu(value);
              }}
              name={'tabMenu'}
            />
            <label htmlFor={tabMenu}>{tabMenu}</label>
          </CommentTabItem>
        );
      })}
      <CommentTabActiveIndicator
        scrollIndex={scrollIndex}
        indexSize={props.tabMenues.length}
      />
    </CommentTabWrapper>
  );
};

export default CommentTab;

const CommentTabWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #fff;
  box-shadow: 0 0 4 4 rgba(0, 0, 0, 0.3);
`;
const CommentTabItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  height: 100%;
  color: #a7a7a7;
  contain: paint;
  input[type='radio'] {
    appearance: none;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    :checked + label {
      color: #87ceeb;
    }
  }
`;
const CommentTabActiveIndicator = styled.div<{
  scrollIndex?: number;
  indexSize?: number;
}>`
  position: absolute;
  bottom: 0;
  background-color: #87ceeb;
  width: ${(props) => `calc(100% / ${props.indexSize || 1})`};
  transform: ${({ scrollIndex = 0 }) => `translateX(${scrollIndex * 100}%)`};
  transition: transform 0.3s ease;
  height: 1px;
`;
