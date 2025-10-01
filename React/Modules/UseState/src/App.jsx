import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(0)

  useEffect(()=>{
    setSum(sum=>sum+count)
  },[count])

  
  console.log(count)
  return (
    <div>
      {/* Button Counter
      <p>Button clicked {count} times</p>
      <button onClick={()=>{
        setCount(count+1)
      }}>Click me</button>
 

      <h1>Sum Calculator</h1>
      <input
      onChange={(e)=>{
        setCount(parseInt(e.target.value))
      }}
      type="number" />
      <h3>Sum: {sum}</h3>
*/}
    <button id='click'>Click Me</button>
    <p id='para'>{data}</p>



    </div>
  )
}

export default App
