import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ButtonWithClass from './component/ButtonWithClass';
import ButtonWithHooks from './component/ButtonWithHook';
import Header from './component/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header to="end of header2" />
    <ButtonWithClass />
    {/* <ButtonWithHooks /> */}
  </React.StrictMode>
);
