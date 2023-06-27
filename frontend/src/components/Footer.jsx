import { logo } from '../assets';

const Footer = () => {
    return (
        <footer className="bg-white m-0 mx-6">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex justify-center md:justify-start mb-4">
                    <a href="http://korea.fi/">
                        <img src={logo} alt="logo" className='w-24 object-contain py-4' />
                    </a>
                </div>
                <ul className="flex flex-row flex-wrap justify-center items-center mb-4 text-sm font-medium text-[#8a8a8a] ">
                    <li>
                        <a href="/" className="mx-4 text-[#8a8a8a] underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px]">Home</a>
                    </li>
                    <li>
                        <a href="/faq" className="mx-4 text-[#8a8a8a] underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px]">FAQ</a>
                    </li>
                    <li>
                        <a href="/about" className="mx-4 text-[#8a8a8a] underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px]">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="mx-4 text-[#8a8a8a] underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px]">Contact</a>
                    </li>
                </ul>
                <ul className="flex justify-center sm:mt-4 md:mt-0 pb-4 items-center text-sm font-medium text-[#8a8a8a] ">
                    <li>
                        <a href="/instagram" target='_blank' className="mx-4 text-[#8a8a8a] underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px]">Instagram</a>
                    </li>
                </ul>
            </div>
        </footer >
    )
}

export default Footer
