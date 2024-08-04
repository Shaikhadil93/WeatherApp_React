import React from 'react'

export default function TimeAndLocaion({weather:{formattedLocalTime,name,country}}) {
  return (
    <div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-xl font-extralight'>
                {formattedLocalTime}
            </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-3xl font-medium'> {`${name},${country}`} </p>
      </div>
    </div>
  )
}
