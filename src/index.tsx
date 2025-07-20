import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/globals.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

// eslint-disable-next-line
const root = createRoot(document.getElementById('root')!)
root.render(<App />)
// Great instructions for implementing Linaria in CRA with TypeScript
// https://betterprogramming.pub/create-react-app-with-linaria-9938b3b8e94
// https://github.com/manakuro/create-react-app-with-linaria-example

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
