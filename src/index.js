import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ButtonWithClass from './component/ButtonWithClass';
import ButtonWithHooks from './component/ButtonWithHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtonWithClass />
    <ButtonWithHooks />
  </React.StrictMode>
);
