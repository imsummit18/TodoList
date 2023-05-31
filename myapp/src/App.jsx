import React, { useState } from 'react'
import Addtask from './components/Addtask'

const App = () => {
 
  return (
    <>
     <div className='w-[50%] m-auto mt-[50px] bg-gray-200 p-4 rounded-lg h-fit'>
     <Addtask/>
     </div>
    </>
  )
}

export default App
