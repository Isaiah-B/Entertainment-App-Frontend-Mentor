import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { GlobalStyles } from './index.styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </RecoilRoot>,
);
