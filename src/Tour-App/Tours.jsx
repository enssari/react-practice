import React from 'react'
import { Tour } from './Tour'

export const Tours = ({tours, removeTour}) => {
  return (
    <>
    <h1 
    className='flex flex-col justify-center font-bold mt-[5rem] border-b-blue-500
    border-b-solid border-b-[2px] w-[10rem] m-auto'>
        Ours tours
    </h1>

    <div>
        {tours.map(tour => (
        <Tour tour={tour} removeTour={removeTour}/>
    ))}
    </div>
    </>
  )
}
