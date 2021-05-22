import React, { useState } from 'react';
import styled from 'styled-components';
import { getPixelIfNumber } from './common';
import { GirdCardList, IntersectionFectcher } from './components';
import { useCardRoversCuriocityPhotos } from './data/card';

const App = () => {
  const [count, setCount] = useState(0);
  const { cardList } = useCardRoversCuriocityPhotos({ sol: 1 });
  return (
    <>
      <IntersectionFectcher
        onIntersectioned={() => {
          if (count < 10) {
            console.log(count);
            setCount(count + 1);
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
