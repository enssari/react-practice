import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { Tours } from './Tours';
import { Tour } from './Tour';

const url = 'https://course-api.com/react-tours-project';

export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    return (
      <Loading/>
    )
  }

  if (tours.length === 0) {
    return (
      <div className='flex flex-col space-y-5 pt-8 font-bold text-center' id="text">
        No tour left 
        <button className='bg-blue-400 text-black p-4 w-[6rem] m-auto' onClick={fetchData}>
          Refresh
        </button>
      </div>
    )
    
  }

  return (
    <main className='flex justify-center flex-col text-center'>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
  
}
