import { IComment } from '../src/pages/comments/types';

class DummyData {
  static get comments(): IComment[] {
    function genContent(character: string) {
      return character.repeat(10).concat(' ').repeat(100);
    }

    return [
      {
        content: genContent('a'),
        likeCount: 100,
        user: {
          name: 'crispy',
          imageUrl: 'https://avatars.githubusercontent.com/u/29042329?s=48&v=4',
        },
        relatedProduct: {
          id: 1,
          imageUrl: 'https://cdn.pixabay.com/photo/2020/12/10/09/22/beach-front-5819728_1280.jpg',
          title: 'hoho',
        },
        id: 1,
      },
      {
        content: genContent('b'),
        likeCount: 100,
        user: {
          name: 'crispy',
          imageUrl: 'https://avatars.githubusercontent.com/u/29042329?s=48&v=4',
        },
        relatedProduct: {
          id: 2,
          imageUrl: 'https://cdn.pixabay.com/photo/2020/12/10/09/22/beach-front-5819728_1280.jpg',
          title: 'hoho',
        },
        id: 2,
      },
      {
        content: genContent('c'),
        likeCount: 100,
        user: {
          name: 'crispy',
          imageUrl: 'https://avatars.githubusercontent.com/u/29042329?s=48&v=4',
        },
        relatedProduct: {
          id: 3,
          imageUrl: 'https://cdn.pixabay.com/photo/2020/12/10/09/22/beach-front-5819728_1280.jpg',
          title: 'hoho',
        },
        id: 3,
      },
    ];
  }
}

export default DummyData;
