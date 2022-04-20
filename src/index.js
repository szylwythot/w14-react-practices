import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ButtonWithClass from './component/ButtonWithClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtonWithClass />
  </React.StrictMode>
);
