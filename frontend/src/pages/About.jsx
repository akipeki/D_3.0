import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='max-w-7xl mx-auto md:mx-8'>
            <div>
                <h1 className='font-extrabold text-[#1B2828] text-[32px]'>About this website</h1>
                <h6 className='mt-4 text-[#666e75] font-bold text-[16px] max-w-[500px]'>Unspoken words, unheard apologies...</h6>
                <p className='mt-4 text-[#666e75] text-[16px] max-w-[500px]'>Have you ever wished you could turn back time, mend a shattered bond, or utter those words you never said? This platform was born out of two profoundly emotional incidents that left a deep impact on my heart. The first, the untimely passing of a dear friend's father, whom he never got to express his gratitude and love to, leaving a void filled with unsaid words. The second, a complex global scenario where many of my Russian friends felt the need to apologize for circumstances beyond their control - the war started by a president they never voted.</p>
                <p className='mt-4 text-[#666e75] text-[16px] max-w-[500px]'> Inspired by these deeply personal incidents, this platform emerged as a sanctuary for unvoiced apologies and unexpressed sentiments. This platform is your safe space to express feelings anonymously when face-to-face apology isn't possible.</p>
                <p className='mt-4 text-[#666e75] text-[16px] max-w-[500px]'>Our community thrives on sincerity, hosting heartfelt apologies powered by advanced technology like ChatGPT, DALL-E, ensuring anonymity yet allowing voices to be heard. The process is simple: fill forms, and let our AI assist you in sharing your apology. We respect your privacy, requiring no full names and pairing your message with an anonymous photo.</p>
                <p className='mt-4 text-[#666e75] text-[16px] max-w-[500px]'>   Relieve your heart. This platform fosters healing and understanding. Experience the lightness that comes with expressing regret and seeking forgiveness.</p>

            </div>

            <div className='mt-8 pt-2'>
                <h1 className='font-extrabold text-[#1B2828] text-[32px]'>About Peki</h1>
                <h6 className='mt-4 text-[#666e75] font-bold text-[16px] max-w-[500px]'>Fullstack developer and digital storyteller</h6>
                <p className='mt-4 text-[#666e75] text-[16px] max-w-[500px]'>Peki Sinikoski is an fullstack developer and digital storyteller, known for his unique fusion of art, design, and technology.</p>
                <p className='mt-4 text-[#666e75] text-[16px] max-w-[500px]'>With over two decades of experience in photography, Peki's work has reached global acclaim, featured in exhibitions on four continents and being published in medias like The New Yorker, Vogue, The Guardian, Le Monde, and Stern.</p>
                <p className='mt-4 text-[#666e75] text-[16px] max-w-[500px]'>As a professional, Peki balances authenticity with a deep interest in artificial intelligence, crafting digital narratives that resonate with audiences. His skills extend beyond visual narratives, proficient in creating intricate digital experiences that encapsulate the spirit of his stories.</p>
                <p className='mt-4 text-[#666e75] text-[16px] max-w-[500px]'>To further explore Peki's work and delve into his digital world, visit his LinkedIn page or wepage:
                    <a href="http://www.korea.fi" target='_blank' className='mt-4 text-[#6469ff] text-[16px] underline'> www.korea.fi</a> He continues to invite new people into his journey, eager to share insights, experiences, and perspectives. 👋</p>
            </div>
        </section >
    )
}

export default About


/*

    <div className='mt-12'>
                <Link to='/' className="btn-back text-[#8a8a8a] underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px] font-bold pt-10">Back to Main</Link>
            </div>

            */