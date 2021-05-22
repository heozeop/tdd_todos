export interface ICard {
  id: number | string;
  image: string;
  name: string;
  date: string;
}

export interface ICardHookResponse {
  cardList: ICard[];
  fetchList: (param?: any) => any;
  canFetchMore?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
}
