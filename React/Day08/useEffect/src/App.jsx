import { useEffect } from "react"
import { useState } from "react" // 
import { A } from "./Components/A"
import HarryPoter from "./Components/HarryPoter"
import { Users } from "./Components/Users"
import { Products } from "./Components/Products"


// function App() {
// /*>> First Case for using useEffect by not passing any dependency array!  */

//   useEffect(()=>{
//     console.log("Use Effect fired..")
//   })

// /*>> Second Case for using useEffect by passing empty dependency array!  */
//   useEffect(()=>{
//     console.log("Use Effect-2 fired")
//   },[])

//   const[val,setVal] = useState(0)
//   const[text, setText] = useState("")

// /*>> Third Case for using useEffect by passing state/states in the dependency array!  */

//   useEffect(()=>{
//     console.log("Use Effect-3 fired..")
//   },[text]) //state in dependency array

//   // },[text,val])//state in dependency array

//   return (
//     <div>
//       <div>
//         <input onChange={(e)=>{setText(e.target.value)}} type="text" />
//         <h1>{text}</h1>
//       </div>
//     <div>
//       <div>{val}</div>
//       <button onClick={()=>{setVal(val+1)}}>+</button>
//       <button onClick={()=>{setVal(0)}}>Reset</button>
//       <button onClick={()=>{setVal(val-1)}}>-</button>
//     </div>
//     </div>
//   )
// }


// function App(){
//   useEffect(()=>{
//         console.log("App")
//     },[])
//   return(
//     <div>
//       <h1>A</h1>
//       <A />
//     </div>
//   )
// }

// export default App


function App(){
  return(
    <div>
      {/* <HarryPoter /> */}
      <Products />
      <Users />
    </div>
  )
}

export default App