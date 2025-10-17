import React, { useState } from 'react'

const ColorChanger = () => {
    const[color,setColor] = useState('')
    console.log(color)
  return (
    <div style={{backgroundColor:`${color}`}}  className='h-full '>
        <input
        onChange={(e)=>(setColor(e.target.value))}
        className='border w-[25vw] mt-5 h-9 p-3 rounded-3xl'
        type="text" placeholder='Enter the Color Name' />

        <select name="" id="">
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Green</option>
            <option value="">Pink</option>
        </select>
    </div>
  )
}

export default ColorChanger