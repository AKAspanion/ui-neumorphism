import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename={'/ui-neumorphism'}>
    <App />
  </Router>,
  document.getElementById('root')
)
