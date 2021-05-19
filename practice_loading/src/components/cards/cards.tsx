import React from 'react';
import { getPixelIfNumber } from '../../common';
import { ICard } from '../../data/card';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const CardItem = (props: ICard) => {
  const { name, image, date } = props;
  return (
    <CardWrapper>
      <picture>
        <CardImage src={image} />
        <Skeleton width={'100%'} height={'80%'} />
      </picture>
      <CardInfo>
        <p>{name || <Skeleton />}</p>
        <p>{date || <Skeleton count={5} />}</p>
      </CardInfo>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardInfo = styled.div`
  width: 100%;
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
  display: grid;
  grid-template-columns: repeat(
    ${(props: any) => (props.columns ? props.columns : 1)},
    1fr
  );
  gap: ${(props: any) => (props.gap ? getPixelIfNumber(props.gap) : '2%')};
`;
