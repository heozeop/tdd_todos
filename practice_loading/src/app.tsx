import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPixelIfNumber } from './common';
import { GirdCardList, IntersectionFectcher } from './components';
import { useCardRoversCuriocityPhotos } from './data/card';

const App = () => {
  const [fetchState, setFetchState] = useState(false);
  const { cardList, isLoading, canFetchMore, fetchList } =
    useCardRoversCuriocityPhotos({ sol: 1 });

  const triggerFetch = useCallback(() => {
    if (!fetchState) {
      setFetchState(true);
    }
  }, [fetchState, setFetchState]);

  useEffect(() => {
    if (!isLoading && canFetchMore && fetchState) {
      fetchList().finally(() => setFetchState(false));
    }
  }, [isLoading, canFetchMore, fetchState, setFetchState, fetchList]);

  return (
    <>
      <IntersectionFectcher
        onIntersectioned={() => {
          triggerFetch();
        }}
        disableTrigger={canFetchMore}
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
