import React, { useState } from 'react'

export const Tour = ({tour, removeTour}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="ml-[-2rem] sm:ml-0" id="container">
        <div 
        className="
        text-start p-12 bg-white shadow-2xl shadow-black w-[33rem] sm:w-[45rem] border-b-[3rem] border-b-grey m-auto"
        id="main-content">
            <div id="image">
                <img src={tour.image} className='object-cover h-[25rem] w-[25rem] sm:w-[50rem]' alt="img" />
            </div>
            <div id="tour-name">
                <h1 className='font-bold text-[1.5rem]'>{tour.name}</h1>
            </div>
            <div 
            className="text-blue-400 font-bold text-end mt-[-2.6rem] text-[1.4rem] pb-8" 
            id="tour-price">
                ${tour.price}
            </div>
            <div id="tour-info">
                {readMore ? (
                    <>
                    <p>{tour.info}</p>
                    <button
                    onClick={() => {setReadMore(!readMore)}}
                    className='text-blue-400'>
                        Show less
                </button>
                    </>
                ) : (
                    <>
                    <p>{tour.info.substring(0, 200)}...</p>
                    <button
                    onClick={() => {setReadMore(!readMore)}}
                    className='text-blue-400'>
                        Read more
                    </button>
                    </>
                )}
                
            </div>
            <div className="flex justify-center mt-5" id="hide-button">
                <button
                onClick={() => removeTour(tour.id)}
                className='
                text-red-600 border-solid border-[1px] border-red-600 w-[15rem] h-[2rem] rounded-sm
                font-bold'>
                    Not interested
                </button>
            </div>
        </div>
    </div>
  )
}
