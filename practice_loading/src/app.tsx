import React, { useState } from 'react';
import styled from 'styled-components';
import { getPixelIfNumber } from './common';
import { GirdCardList, IntersectionFectcher } from './components';
import { useCardRoversCuriocityPhotos } from './data/card';

const App = () => {
  const { cardList, isLoading, canFetchMore, fetchList } =
    useCardRoversCuriocityPhotos({ sol: 1 });
  return (
    <>
      <IntersectionFectcher
        onIntersectioned={() => {
          if (!isLoading && canFetchMore) {
            fetchList();
          }
        }}
      >
        <Spacing height={1000} />
        <GirdCardList cardList={cardList} />
      </IntersectionFectcher>
    </>
  );
};

export default App;

const Spacing = styled.div`
  height: ${(props: { height: number | string }) => {
    if (props.height) {
      return getPixelIfNumber(props.height);
    }
    return 0;
  }};
  width: 100%;
`;
