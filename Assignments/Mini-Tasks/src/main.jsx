import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />

)

// import { createRoot } from 'react-dom/client'

// // const div = document.querySelector('#root'); //DOM Access
// const div = document.getElementById('root')
// const root = createRoot(div);

// root.render(<App />);
