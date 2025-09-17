import store from './Utils/Store.js'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './Utils/ItemsSlice'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />

  </Provider>
  
)
