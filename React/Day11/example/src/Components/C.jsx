import { useContext } from "react"
import { exContext } from "./B"


function C() {
    const{name,age} = useContext(exContext)
  return (
    <div>
        {name}, {age}
    </div>
  )
}

export default C
