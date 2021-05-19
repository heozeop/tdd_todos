import React, { useState } from 'react';
import { GirdCardList, IntersectionFectcher } from './components';
import { useCardRoversCuriocityPhotos } from './data/card';

const App = () => {
  const [count, setCount] = useState(0);
  const { cardList } = useCardRoversCuriocityPhotos({
    sol: 1,
  });
  return (
    <>
      <IntersectionFectcher
        onIntersectioned={() => {
          if (count < 10) {
            setCount(count + 1);
          }
        }}
      >
        <GirdCardList cardList={cardList} />
      </IntersectionFectcher>
    </>
  );
};

export default App;
