import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './scss/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
