import React from 'react';
import ReactDom from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDom.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
