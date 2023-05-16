import React from 'react';
import ReactDOM from 'react-dom/client';
import './containers/index.css';
import App from './containers/App';
import Canvas from './components/background/Canvas';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <>
      <App />
      <Canvas />
    </>
  </React.StrictMode>
);
