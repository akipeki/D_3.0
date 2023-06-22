import React from 'react'

const About = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#1B2828] text-[32px]'>About Project X</h1>
                <p className='mt-4 text-[#667e75] text-[16px] max-w-[500px]'>Project X is an innovative solution designed to empower individuals, by providing a platform to express their apologies anonymously. Leveraging cutting-edge technology, including ChatGPT and DALL-E, Project X showcases the power of AI in fostering empathy and understanding within communities.
                    <br /><br />
                    Although we encourage face-to-face apologies, we also acknowledge the complexities of human emotions and situations. If direct confrontation isn't possible, Project X aims to be a solace, guiding individuals on their path to healing.</p>
            </div>

            <div className='mt-8 pt-2'>
                <h1 className='font-extrabold text-[#1B2828] text-[32px]'>About Person Y</h1>
                <p className='mt-4 text-[#667e75] text-[16px] max-w-[500px]'>Person Y is the brains behind Project X. With a passion for leveraging technology to enhance human connectivity, Person Y has consistently worked to bridge the gap between AI and the human experience.
                    <br /><br />
                    This project reflects Person Y's commitment to creating a space for individuals to express their sentiments anonymously, yet meaningfully. To learn more about Person Y's projects and initiatives, you can visit their website. </p>
                <a href="http://www.korea.fi" target='_blank' className='mt-4 text-[#6469ff] text-[16px] underline'>www.korea.fi</a>
            </div>
        </section>
    )
}

export default About
