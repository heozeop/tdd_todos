export interface ICard {
  id: number | string;
  image: string;
  name: string;
  date: string;
}

export interface ICardHookResponse {
  cardList: ICard[];
}