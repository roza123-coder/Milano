// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App.jsx"
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// убедись, что store есть

import App from './App.jsx'
import { store } from '@/redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
