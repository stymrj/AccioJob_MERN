import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react"


// function App() {
//   const [count, setCount] = useState(0)
//   const [num, setNum] = useState(1)


//   const findNthPrime = useCallback(
//     function (n) {
//       if (n <= 0) {
//         return "Please enter a positive integer for 'n'.";
//       }

//       let count = 0; // To keep track of how many primes we've found
//       let num = 1;   // The number we are currently checking for primality

//       while (count < n) {
//         num++; // Move to the next number

//         // Check if the current number is prime
//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//           if (num % i === 0) {
//             isPrime = false;
//             break; // Not prime, no need to check further divisors
//           }
//         }

//         if (isPrime) {
//           count++; // Increment prime count if the number is prime
//         }
//       }

//       return num; // The nth prime number
//     },[])

//   let ans = useMemo(() => (findNthPrime(num)), [num])

//   return (
//     <div>
//       {/* Heavy Task */}
//       <div>
//         <input onChange={(e) => {
//           setNum(e.target.value)
//         }} type="number" />
//         <h1>{ans}</h1>
//       </div>

//       {/* Counter App */}

//       <div>
//         <p>{count}</p>
//         <button onClick={() => (setCount(count + 1))}>+</button>
//         <button onClick={() => (setCount(0))}>Reset</button>
//         <button onClick={() => (setCount(count - 1))}>-</button>
//       </div>
//     </div>
//   )
// }

function App(){
 const[num,setNum] =  useState(0)
 const[pow,setPow] =  useState(2)

  return(
    <div className="">
      <input onChange={(e)=>{

      }} className="border p-4 m-4 rounded-xl" type="text" placeholder="Enter Number" />
      <input onChange={(e)=>{

      }} className="border p-4 m-4 rounded-xl" type="text" placeholder="Enter Power" />
      <p className="h-[10vh] w-[10vw] rounded-xl p-3 text-2xl" >0</p>
    </div>
  )
}


export default App
