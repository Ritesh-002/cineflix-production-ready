import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Store } from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
)
