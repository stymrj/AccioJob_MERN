import { useContext } from "react"
import B, { exContext } from "./B"

function A() {
//    const{name,age} = useContext(exContext)

// Here we can not use context as it only give access to their childs not parent 
// or any top level component so we are not able to access exContext in A as it is 
// created in the B so onwards B it will have the access to it.

  return (
    <div>
      <B />
      {/* {name}{age} */}
    </div>

  )
}

export default A
