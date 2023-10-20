import React from 'react'
import { Reviews } from './Reviews'

export const Main = () => {
  return (
    <div className="text-center flex flex-col justify-center" id="container">
        <div className="flex justify-center" id="header-text">
            <h1 
            className='font-bold border-b-solid border-blue-400 border-b-[2px]
            w-[12rem] flex justify-center pb-2'>
                Our reviews
            </h1>
        </div>
        <Reviews/>
    </div>
  )
}
