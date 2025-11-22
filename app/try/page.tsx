import React from 'react'
import data from '../contents.json'

function page() {
  return (
      <div>
       <h1> page</h1>
          {data['grade-9'].history['Course-Outline'].map((item,index)=>{
              return(<li key={index} className='mt-2'>
                <span className='text-slate-600'>{item.split(':')[0]}</span>
              :{item.split(':')[1]}</li>)
          })}
      </div>
    
  )
}

export default page