import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App(){
//   return (
//     <div>
//       <h1>Welcome to my Website.</h1>
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br></br>Odit minus voluptates, ex neque asperiores optio ipsum velit <br />voluptatem autem non pariatur magni est nesciunt fugit tenetur quis? Debitis, esse amet!</p>
//       <footer>
//         © 2023 My Website. All rights reserved.
//       </footer>
//     </div>
//   )
// }

//---------------------------------------------------------------------------------
//khali tag ko use krke in place of div we removed extra div 
// -- this is called React Fragment

// function App(){
//   return (
//     <> 
//       <h1>Welcome to my Website.</h1>
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br></br>Odit minus voluptates, ex neque asperiores optio ipsum velit <br />voluptatem autem non pariatur magni est nesciunt fugit tenetur quis? Debitis, esse amet!</p>
//       <footer>
//         © 2023 My Website. All rights reserved.
//       </footer>
//     </>
//   )
// }

import demo  from './components/demo1'
import demo3  from './components/demo1'
import profile from './components/profile'

const demo2 = ()=>{
  return (
    <h1>Hey! I am demo2.</h1>
  )
}

function App(){
  return (
    <div>
      <h1>Hello from Main Function...</h1>
      {demo2()}
      {demo()}
      {profile()}
    </div>
  )
}

export default App
