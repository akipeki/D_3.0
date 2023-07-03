import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams, Link } from 'react-router-dom';
import { LoaderHomePage } from '../components';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";



const Apology = () => {
    const [apology, setApology] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const title = 'I AM SORRY!';

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 768px)'
    });

    useEffect(() => {
        fetch(`https://dille.onrender.com/api/v1/post/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setApology(data.data);
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    }, [id]);

    // Loading State
    if (isLoading) {
        return <div><LoaderHomePage /></div>;
    }

    return (
        <div className="py-6 px-2 sm:px-6">
            {isTabletOrMobileDevice && (
                <Link to='/' className="btn-back sm:px-2 text-[#8a8a8a] underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px] font-bold pt-10">Back to Main</Link>
            )}
            <div className="content flex flex-col items-center mx-auto px-2 py-2">
                <img className="w-full pt-12 sm:pt-18 md:pt-20 pb-0 sm:pt-6 max-w-lg sm:px-0 md:px-10" src={apology.photo} alt="Apology Image" />
                <p className="text-left mt-16 md:mt-12 text-[#191919] max-w-lg w-full sm:px-0 md:px-10">{apology.generatedText}</p>
                <h1 className="text-center text-[#191919] font-medium mt-10 md:mt-12 mb-5 w-full">{apology.name}</h1>
                <div className='flex my-8 gap-4'>
                    <div className="some-network">
                        <FacebookShareButton
                            url={shareUrl}
                            quote={'I want to share you this text and image from I\'M SORRY website'}
                            hashtag={"#iamsorry"}>
                            <FacebookIcon
                                className='saturate-0 hover:saturate-100'
                                size={28} round={true} />
                        </FacebookShareButton>
                    </div>
                    <div className="some-network">
                        <TwitterShareButton
                            url={shareUrl}
                            title={title}
                            hashtag={"iamsorry"}
                            className="saturate-0 hover:saturate-100" >
                            <TwitterIcon size={28} round={true} />
                        </TwitterShareButton>
                    </div>
                    <div className="some-network">
                        <WhatsappShareButton
                            url={shareUrl}
                            title={title}
                            separator=":: "
                            className="saturate-0 hover:saturate-100" >
                            <WhatsappIcon size={28} round={true} />
                        </WhatsappShareButton>
                    </div>
                </div>
            </div>
            <Link to='/' className="btn-back sm:px-2 md:px-12 text-[#8a8a8a] underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px] font-bold pt-10">Back to Main</Link>
        </div >
    );
};

export default Apology;


/*

                    <div className="some-network">
                        <LinkedinShareButton
                            url={shareUrl}
                            title='I am Sorry - The Website' >
                            <LinkedinIcon className='saturate-0 hover:saturate-100' size={28} round={true} />
                        </LinkedinShareButton>
                    </div>
*/
