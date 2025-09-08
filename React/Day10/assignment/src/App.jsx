

import { useState } from 'react'
import Input from './Components/Input'
import { Display1 } from './Components/Display1'
import { Display2 } from './Components/Display2'
import { Display3 } from './Components/Display3'
import { Display4 } from './Components/Display4'
import { Navbar } from './Components/Navbar'
import { Details } from './Components/Details'
import { Preview } from './Components/Preview'

function App() {
  const[text,setText] = useState(["","","",""])

  const[data,setData] = useState(["","","","",""])

  return (
    <div>
      <Navbar />
    {/* <div className='flex gap-2 h-[100vh] bg-gray-100'>
      <div>
        <Input text={text} setText={setText}/>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center h-[90vh] w-[50vw] bg-cyan-200 border-2 m-6 rounded-3xl">
      <p className="text-3xl font-extrabold italic underline mb-5">Your Entered Data</p>
        <Display1 text={text[0]} />
        <Display2 text={text[1]} />
        <Display3 text={text[2]} />
        <Display4 text={text[3]} />
      </div>
    </div>  */}


    <div className='flex'>
      <Details data={data} setData={setData}/>
      <Preview data={data}/>
    </div>

    </div>
  )
}

export default App
