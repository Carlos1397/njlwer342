import React from 'react';
import ReactDOM from 'react-dom';
import reactTestRenderer from 'react-test-renderer/cjs/react-test-renderer.development';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
