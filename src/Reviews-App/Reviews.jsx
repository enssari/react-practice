import React, { useEffect, useState } from 'react'
import reviews from './Data'
import {FcNext} from 'react-icons/fc';
import {FcPrevious} from 'react-icons/fc';
import { floor, randomDependencies } from 'mathjs';
import { random } from 'mathjs';

export const Reviews = () => {
  const [index, setIndex] = useState(0);
  const {name, job, text, image} = reviews[index]

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
        return 0
    } 
    if (number < 0) {
        return reviews.length - 1
    }
    return number
  }

  const toggleNext = () => {
    setIndex((index) => {
        let newIndex = index + 1
        return checkNumber(newIndex)
    })
  }
  const togglePrev = () => {
    setIndex((index) => {
        let newIndex = index - 1
        return checkNumber(newIndex)
    })
  }
  const toggleSurprise = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
        randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <div className="flex flex-col" id="container">
        <div className="p-4 m-auto w-[40rem] shadow-2xl border-solid border-[1px]
        border-[#9e9d9d]"
         id="content-wrapper">
            <img src={image} 
            className='w-[10rem] object-cover rounded-full h-[10rem] ml-[14rem]' 
            alt="img" />

            <div className="space-y-[-1rem]" id="text-wrapper">
                <h1 className='font-bold capitalize'>{name}</h1>
                <h3 className='uppercase pb-[2rem] text-blue-400'>{job}</h3>
                <p className='pb-8'>{text}</p>
            </div>

            <div className='flex justify-center flex-col space-y-4' id="roam-buttons">
                <div className='flex justify-center space-x-4' id="arrows">
                    <FcPrevious size={27} 
                    onClick={togglePrev}
                    className='hover:cursor-pointer'/>

                    <FcNext size={27} 
                    onClick={toggleNext}
                    className='hover:cursor-pointer'/>
                </div>
                
                <div 
                className="bg-[#678fed] w-[6rem] h-[1.7rem] rounded-sm flex justify-center
                hover:bg-blue-400 duration-100 ml-[16rem]" 
                id="surprise-me">
                    <button 
                    onClick={toggleSurprise}
                    className='text-black hover:cursor-pointer'>Surprise Me</button>
                </div>
            </div>

        </div>
    </div>
  )
}
