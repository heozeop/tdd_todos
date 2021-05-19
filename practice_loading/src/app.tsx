import React from 'react';
import { GirdCardList } from './components';
import { useCardRoversCuriocityPhotos } from './data/card';

const App = () => {
  const { cardList } = useCardRoversCuriocityPhotos({
    sol: 1,
  });
  return (
    <>
      <GirdCardList cardList={cardList} />
    </>
  );
};

export default App;
