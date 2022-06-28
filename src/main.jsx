import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import './assets/fonts/iconfont.css'
// import './assets/fonts/iconfont.css'
import './assets/styles/reset.css'
import './modules/rem' // 自适应
// import 'swiper/dist/css/swiper.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  < HashRouter>
    <App />
  </ HashRouter>
)