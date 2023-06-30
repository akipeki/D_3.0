import { logo, instagram } from '../assets';

const Footer = () => {
    return (
        <footer className="bg-white m-0 mx-6">
            <div className="w-full cursor-pointer max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex justify-center md:justify-start mb-4">
                    <a href="http://korea.fi/">
                        <img src={logo} alt="logo" className='w-24 cursor-pointer object-contain pt-5 pb-3' />
                    </a>
                </div>
                <ul className="nav-links flex flex-col sm:flex-row flex-wrap justify-center items-center mb-4 text-xs sm:text-sm font-medium text-[#8a8a8a] ">
                    <li>
                        <a href="/" className="mx-4 text-[#8a8a8a] cursor-pointer underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px]">Home</a>
                    </li>
                    <li>
                        <a href="/faq" className="mx-4 text-[#8a8a8a] cursor-pointer underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px]">FAQ</a>
                    </li>
                    <li>
                        <a href="/about" className="mx-4 text-[#8a8a8a] cursor-pointer underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px]">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="mx-4 text-[#8a8a8a] cursor-pointer underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px]">Contact</a>
                    </li>
                </ul>
                <ul className="flex justify-center sm:mt-4 md:mt-0 pb-4 cursor-pointer items-center text-sm font-medium text-[#8a8a8a] ">
                    <li>
                        <a href="https://instagram.com/iamsorry_website/" target='_blank' rel='noreferrer noopener' className="mx-4 cursor-pointer hover:underline hover:text-[#191919]">
                            <img
                                src={instagram}
                                alt="Instagram"
                                className="w-16 h-16 md:w-16 md:h-16 filter grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
                                style={{ height: '24px', width: '24px', }}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer >
    )
}

export default Footer