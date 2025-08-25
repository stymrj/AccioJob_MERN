import React from "react"
import Dog from "./components/example"

import { Function1, Function2 as Fn2, Function3, MyName } from "./Components/NamedExports"

function App(){
  return (
    <div>
      {/* <SuchBhi /> */}
      <Dog />
      <Function1 />
      <Fn2 />
      <Function3 />
      <h2>Hi this is demonstated by {MyName}. Thanks!</h2>
      
    </div>
  )
}

export default App