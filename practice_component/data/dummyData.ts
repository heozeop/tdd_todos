import { IComment } from '../src/pages/comments/types';

class DummyData {
  static get comments(): IComment[] {
    function genContent(character: string) {
      return character.repeat(10).concat(' ').repeat(10);
    }

    const userInfo = {
      name: 'crispy',
      imageUrl: 'https://avatars.githubusercontent.com/u/29042329?s=48&v=4',
    };
    const productInfo = {
      id: 1,
      imageUrl: 'https://cdn.pixabay.com/photo/2020/12/10/09/22/beach-front-5819728_1280.jpg',
      title: 'hoho',
    };

    const numOfComments = Math.random() * 20 + 1;
    const data: IComment[] = [];
    for (let i = 0; i < numOfComments; ++i) {
      data.push({
        id: i,
        likeCount: i,
        content: genContent(`${(Math.random()).toString().substring(10)} `),
        user: userInfo,
        relatedProduct: productInfo,
      });
    }

    return data;
  }
}

export default DummyData;
