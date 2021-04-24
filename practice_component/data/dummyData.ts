import { IComment } from '../src/pages/comments/types';
const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstu\nvwxyz0123456789';

class DummyData {
  static get comments(): IComment[] {
    function genWord() {
      return base.substring(Math.random() * base.length);
    }
    function genContent() {
      const contentData = [];
      const wordLength = Math.random() * 100 + 1;
      for (let i = 0; i < wordLength; i++) {
        contentData.push(`${genWord()}`);
      }
      return contentData.join(' ');
    }

    const userInfo = {
      name: 'crispy',
      imageUrl: 'https://avatars.githubusercontent.com/u/29042329?s=48&v=4',
    };
    const productInfo = {
      id: 1,
      imageUrl: 'https://cdn.pixabay.com/photo/2020/12/10/09/22/beach-front-5819728_1280.jpg',
    };

    const numOfComments = Math.random() * 60 + 1;
    const data: IComment[] = [];
    for (let i = 0; i < numOfComments; ++i) {
      data.push({
        id: i,
        likeCount: i,
        content: genContent(),
        user: userInfo,
        relatedProduct: {
          ...productInfo,
          title: genWord(),
        },
      });
    }

    return data;
  }
}

export default DummyData;
