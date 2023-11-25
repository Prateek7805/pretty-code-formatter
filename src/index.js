import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PageContext from './components/Contexts/PageContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PageContext>
    <App />
  </PageContext>
);

