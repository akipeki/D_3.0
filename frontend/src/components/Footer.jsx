import { logo } from '../assets';

const Footer = () => {
    return (
        <footer class="bg-white shadow dark:bg-gray-900 m-0">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="http://korea.fi/" class="flex items-center mb-4 sm:mb-0">
                        <img src={logo} alt="logo" className='w-24 pt-12 pb-12 object-contain flex justify-center items-center' />
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-[#667e75] sm:mb-0 dark:text-[#667e75]">
                        <li>
                            <a href="/about" class="mr-4 hover:underline underline-offset-8 decoration-2 md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="/contact" class="mr-4 hover:underline underline-offset-8 decoration-2 md:mr-6 ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer


