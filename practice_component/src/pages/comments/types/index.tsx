export interface IComment {
  content: string;
  likeCount: number;
  user: IUserInfo;
  relatedProduct: IProductInfo;
  id: number;
}

export interface IProductInfo {
  id: number;
  imageUrl: string;
  title: string;
}

export interface IUserInfo {
  imageUrl: string;
  name: string;
}
