import React, { useEffect, useRef, useState } from 'react'

const Otp = () => {

  //created reference for each field
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const ref6 = useRef()

  const[refArr, setRefArr] = useState([ref1,ref2,ref3,ref4,ref5,ref6])
  const[currIdx, setCurrIdx] = useState(0)
  const[otpInput, setOtpInput] = useState(new Array(6).fill(null))

  useEffect(()=>{
    refArr[currIdx].current.focus()
  },[currIdx])

  console.log(otpInput)

  return (
    <div className='h-screen gradient bg-gradient-to-tr from-pink-200 to-green-300'>
      <div className='flex items-center justify-center h-screen'>
        <div className='flex h-[50vh] w-[50vw] rounded-3xl gradient bg-gradient-to-bl from-cyan-200 to-yellow-500'>
              <div className='flex items-center justify-center container gap-4'>
                {refArr.map((item, idx)=>{
                  return(
                    <input
                    onChange={(e)=>{
                      if(currIdx<refArr.length-1){
                        setCurrIdx(currIdx+1)
                      }

                      let temp = otpInput
                      otpInput[idx] = Number(e.target.value)
                      setOtpInput(temp)
                    }}
                    ref={item} className='text-2xl font-bold text-center size-15 rounded-2xl border-2' type="number" />
                  )
                })}
              </div>
        </div>
      </div>
    </div>
  )
}

export default Otp