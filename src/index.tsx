import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root')!)
root.render(<App />)

export { globals } from 'src/styles/globals'
// Great instructions for implementing Linaria in CRA with TypeScript
// https://betterprogramming.pub/create-react-app-with-linaria-9938b3b8e94
// https://github.com/manakuro/create-react-app-with-linaria-example

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
