import { useContext } from "react"
import { textContext } from "../App"

function C() {
    console.log(useContext(textContext))
    // const text = useContext(textContext)
    const {text,name} = useContext(textContext)
  return (
    <div>
      {text}, {name}
    </div>
  )
}

export default C
