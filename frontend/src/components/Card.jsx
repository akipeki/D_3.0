import React, { useRef, useState, useEffect } from 'react'
// import { download } from '../assets'
import { downloadImage } from '../utils'
import { Link } from 'react-router-dom';

const Card = ({ _id, name, photo, generatedText }) => {
    const cardRef = useRef();
    const [fontSize, setFontSize] = useState('text-sm');

    useEffect(() => {
        // function to determine font size based on card width
        const determineFontSize = () => {
            const width = cardRef.current.offsetWidth;
            if (width < 300) {
                setFontSize('text-xs');
            } else if (width < 600) {
                setFontSize('text-sm');
            } else {
                setFontSize('text-md');
            }
        };
        determineFontSize();
        // listen for window resize events
        window.addEventListener('resize', determineFontSize);
        // cleanup function
        return () => window.removeEventListener('resize', determineFontSize);
    }, []); // empty dependency array, so this effect only runs once

    return (
        <div ref={cardRef} className='card rounded-xl group relative shadow-card hover:shadow-cardhover my-4 xs:my-0'>
            <Link to={`/apology/${_id}`}>
                <img
                    className='w-full h-auto object-cover rounded-xl'
                    src={photo}
                    alt={generatedText}
                />
                <div className='absolute top-0 left-0 right-0 bottom-0 group-hover:flex flex-col items-center justify-center hidden bg-white opacity-70 p-4 rounded-md'>
                    <div className='md:overflow-y-auto md:scrollbar-padding'>
                        <p className={`text-black ${fontSize} overflow-y-auto prompt mt-4 mb-2 mx-4 text-center`}>{generatedText}</p>
                    </div>
                    <div className='mt-5 flex justify-between items-center gap-2 w-full'>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-7 h-7 rounded-full object-cover bg-[green] flex justify-center items-center text-white text-xs font-bold'>
                            {name[0]}
                        </div>
                        <p className='text-black text-sm'>{name}</p>
                    </div>
                    <button type='button' onClick={() => downloadImage(_id, photo)} className='outline-none bg-transparent border-none'>
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default Card



    // when commenting out this one below, I also removed index from above

/* const wordArray = generatedText.split(' ')
const wordCount = ((index + 1) % 7 === 0 || index === 0) ? wordArray.length : 12
wordArray.length = wordArray.length < wordCount ? wordArray.length : wordCount
const shortText = wordArray.join(' ') */