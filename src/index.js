/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App.jsx'

const el = document.querySelector('.app-root')

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  el,
)
