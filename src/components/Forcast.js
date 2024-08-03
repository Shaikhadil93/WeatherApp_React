import React from 'react'

export default function Forcast() {
    const data =[1,2,3,,4,5]
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase'>3 hour step forcast</p>
      </div>
      <hr className='my-1'/>
      <div className='flex items-center justify-between'>
        {data.map((data,index)=>(
            <div key={index} className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>Wed</p>
                <img src="https://openweathermap.org/img/wn/01d@2x.png" 
                alt="Weather Icon" 
                className='w-12 my-1'/>
                <p className='font-medium'>23&deg;</p>
            </div>
        ))}
      </div>
    </div>
  )
}
