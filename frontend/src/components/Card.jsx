import React, { useRef, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { downloadImage } from '../utils'
import { Link } from 'react-router-dom';

const Card = ({ _id, name, photo, generatedText }) => {
    const cardRef = useRef();
    const [fontSize, setFontSize] = useState('text-sm');
    const [cardSize, setCardSize] = useState(null);

    // define the screen size you want to target
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 768px)'
    });

    useEffect(() => {
        function updateCardSize() {
            if (cardRef.current) {
                const newCardSize = cardRef.current.offsetWidth;
                setCardSize(newCardSize);
            }
        }
        updateCardSize();
        window.addEventListener('resize', updateCardSize);
        return () => window.removeEventListener('resize', updateCardSize);
    }, []);

    useEffect(() => {
        let newSize = 'text-sm';
        if (cardSize < 200) {
            newSize = 'text-xs';
        } else if (cardSize < 340) {
            newSize = 'text-xs';
        } else if (cardSize < 500) {
            newSize = 'text-md';
        } else {
            newSize = 'text-lg';
        }
        setFontSize(newSize);
    }, [cardSize]);

    return (
        <div ref={cardRef} className='card rounded-xl group relative shadow-card my-4 xs:my-0'>
            <Link to={`/apology/${_id}`}>
                <img
                    className='w-full h-auto object-cover rounded-xl'
                    src={photo}
                    alt={generatedText}
                />
                {!isTabletOrMobileDevice && (
                    <div className={`absolute top-0 left-0 right-0 bottom-0 flex-col items-center justify-center p-4 rounded-md hidden group-hover:flex bg-white opacity-70`}>
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
                )}
            </Link>
        </div>
    )
}
export default Card;
