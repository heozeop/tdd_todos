import React from 'react';
import ReactDom from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './app';

ReactDom.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
