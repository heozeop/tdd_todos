import React, { useState } from 'react';
import { getPixelIfNumber } from '../../common';
import { ICard } from '../../data/card';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const CardItem = (props: ICard) => {
  const { name, image, date } = props;
  const [showSkeleton, setShowSkeleton] = useState(true);

  return (
    <CardWrapper>
      <SkeletonCard>
        {showSkeleton && (
          <Skeleton wrapper={SkeletonCard} width={'100%'} height={'100%'} />
        )}
        <CardImage
          onLoad={() => setShowSkeleton(false)}
          loading={'lazy'}
          src={image}
        />
      </SkeletonCard>
      <CardInfo>
        <p>{name || <Skeleton />}</p>
        <p>{date || <Skeleton />}</p>
      </CardInfo>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2;
  isolation: isolate;
`;

const SkeletonCard = styled.div`
  width: 300px;
  height: 300px;
  top: 0;
  left: 0;
  z-index: 0;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const CardInfo = styled.div`
  width: 100%;
  font-size: 20px;
`;

interface GridCardList extends IGridWrapper {
  cardList: ICard[];
}

export const GirdCardList = (props: GridCardList) => {
  const { cardList, ...gridRelated } = props;

  return (
    <GridWrapper {...gridRelated}>
      {cardList.map((card) => {
        return <CardItem key={card.id} {...card} />;
      })}
    </GridWrapper>
  );
};

interface IGridWrapper {
  columns?: number;
  gap?: number | string;
}

const GridWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props: any) => (props.columns ? props.columns : 1)},
    minmax(100px, 300px)
  );
  gap: ${(props: any) => (props.gap ? getPixelIfNumber(props.gap) : '20px')};
`;
