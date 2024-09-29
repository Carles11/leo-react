/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App.jsx';

const element = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  element,
);

registerServiceWorker();
