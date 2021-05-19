import React from 'react';
import { ICard } from 'src/data/card';

export const CardItem = (props: ICard) => {
  return <></>;
};

interface CardList {
  cardList: ICard[];
  columns?: number;
  colGap?: number | string;
}

export const CardList = (props: CardList) => {
  return <></>;
};
