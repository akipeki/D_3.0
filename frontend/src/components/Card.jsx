import React from 'react'
import { download } from '../assets'
import { downloadImage } from  '../utils'

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative shadow-card
     hover:shadow-carhover card'>
      <img
       className='w-full h-auto object-cover rounded-xl'
       src={photo}
       alt={prompt}
       />
      <div className='h-full group-hover:flex flex-col items-center justify-center 
   hidden absolute top-0 left-0 right-0 bg-white opacity-70 p-8 rounded-md'>
    <p className='text-black text-sm overflow-y-auto prompt mb-4 text-center'>{prompt}</p>
    <div className='mt-5 flex justify-between items-center gap-2 w-full'>
        <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full object-cover bg-green-700
            flex justify-center items-center text-white text-xs font-bold'>
                {name[0]}
            </div>
            <p className='text-black text-sm'>{name}</p>
        </div>
        <button type='button' onClick={() => downloadImage(_id, photo)}
        className='outline-none bg-transparent border-none'>
            <img src={download} alt='download' className='w-6 h-6
            object-contain' />
        </button>
            </div>
          </div>
    </div>
  )
}

export default Card
