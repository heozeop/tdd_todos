import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPixelIfNumber } from './common';
import { GirdCardList, IntersectionFectcher } from './components';
import { useCardRoversCuriocityPhotos, useNasaImagesSearch } from './data/card';

const App = () => {
  const { cardList, isLoading, isSuccess, canFetchMore, fetchList } =
    // useCardRoversCuriocityPhotos({ sol: 1 });
    useNasaImagesSearch({ q: 'earth', media_type: 'image' });
  const [fetchableState, setFetchableState] = useState(true);

  const triggerFetch = useCallback(() => {
    if (!isLoading && fetchableState) {
      setFetchableState(false);
      fetchList();
    }
  }, [fetchableState, setFetchableState, isLoading]);

  useEffect(() => {
    if (!isLoading && isSuccess && !fetchableState) {
      setFetchableState(true);
    }
  }, [fetchableState, isLoading, isSuccess]);

  return (
    <>
      <IntersectionFectcher
        onIntersectioned={() => {
          triggerFetch();
        }}
        disableTrigger={!canFetchMore}
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
