import React from 'react';
import { akipeki_cat_web } from '../assets';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#1B2828] text-[32px]'>404 Not Found</h1>
                <p className='mt-4 text-[#667e75] text-[16px] max-w-[500px]'>We're sorry, but the page you're looking for could not be found. Please check the URL and try again.</p>
                <Link to='/' className='mt-4 text-[#6469ff] text-[16px] underline'>Go back to Home</Link>
                <div className="p-5">
                    <div className="flex flex-col items-center mx-auto px-2 py-2">
                        <img className="pt-6 max-w-md sm:px-0 md:px-10 " src={akipeki_cat_web} alt="Cat - 404" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFound;