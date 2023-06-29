import React, { useRef, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { downloadImage } from '../utils'
import { Link } from 'react-router-dom';

const Card = ({ _id, name, photo, generatedText }) => {
    const cardRef = useRef();
    const [fontSize, setFontSize] = useState('text-sm');
    const [showText, setShowText] = useState(false);

    // define the screen size you want to target
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

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
                <div className={`absolute top-0 left-0 right-0 bottom-0 ${isTabletOrMobileDevice ? '' : 'group-hover:flex'} flex-col items-center justify-center hidden bg-white opacity-70 p-4 rounded-md`}>
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
                    {isTabletOrMobileDevice && (
                        <button
                            type='button'
                            onClick={() => setShowText(!showText)}
                            className='absolute bottom-2.5 left-1/2 transform -translate-x-1/2 px-5 py-2 bg-red-500 text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out md:hidden'
                        >
                            {showText ? "Hide Details" : "Read More"}
                        </button>
                    )}
                    <button type='button' onClick={() => downloadImage(_id, photo)} className='outline-none bg-transparent border-none'>
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default Card




    // when commenting out this one below, I also removed index from Card

/* const wordArray = generatedText.split(' ')
const wordCount = ((index + 1) % 7 === 0 || index === 0) ? wordArray.length : 12
wordArray.length = wordArray.length < wordCount ? wordArray.length : wordCount
const shortText = wordArray.join(' ') */