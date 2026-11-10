import './index.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router basename={'/ui-neumorphism'}>
    <App />
  </Router>
)
