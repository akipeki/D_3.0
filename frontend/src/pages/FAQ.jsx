import React from 'react'
'use client';

import { Accordion } from 'flowbite-react';

const FAQ = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto sm:mx-6 lg:mx-10'>
                <div>
                    <h1 className='font-extrabold text-[#1B2828] text-[32px]'>Frequently Asked Questions</h1>
                    <p className='mt-4 mb-8 text-[#666e75] text-[16px] max-w-[500px]'>Here you can find answers to the most commonly asked questions about our service.</p>
                </div>

                <Accordion >

                    <Accordion.Panel  >
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            Who have created this website?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px] ">
                                <p>
                                    This website is designed, coded, and created by Peki. <b>Peki Sinikoski</b> is an <b>fullstack developer</b> and digital <b>storyteller</b>, known for his unique fusion of art, design, and technology.
                                </p>
                            </p>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    With over two decades of experience in photography, Peki's work has reached global acclaim, featured in exhibitions on four continents and leading media outlets like The New Yorker, Vogue, The Guardian, Le Monde, and Stern. As an author Sinikoski is published by Schildts & Söderströms.
                                </p>
                                <p className='mt-4'>
                                    As a professional, Peki balances authenticity with a deep interest in artificial intelligence, crafting digital narratives that resonate with audiences. His skills extend beyond visual narratives, proficient in creating intricate digital experiences that encapsulate the spirit of his stories.
                                </p>
                                <p className='mt-4'>
                                    To further explore Peki's work and delve into his digital world, visit his LinkedIn page:
                                </p>
                                <a
                                    className="text-[#6469ff] text-[16px] font-bold hover:underline dark:text-[#6469ff]" target='_blank'
                                    href="https://www.linkedin.com/in/sinikoski/"
                                >
                                    <p className='mt-4'>
                                        Peki Sinikoski - LinkedIn
                                    </p>
                                </a>
                                <p className='mt-4'>
                                    He continues to invite new people into his journey, eager to share insights, experiences, and perspectives. 👋
                                </p>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>


                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            Why is this Website is created?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    This platform is created for saying 'I'm Sorry.' Peki's idea was to support individuals in voicing their silent words and to illuminate our unvoiced apologies, while preserving anonymity.
                                </p>
                            </p>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    Here is the whole background story written by himself:
                                </p>
                            </p>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    "Have you ever wished you could turn back time, mend a shattered bond, or utter those words you never said? This platform was born out of two profoundly emotional incidents that left a deep impact on my heart. The first, the untimely passing of a dear friend's father, whom he never got to express his gratitude and love to, leaving a void filled with unsaid words. The second, a complex global scenario where many of my Russian friends felt the need to apologize me and many others for circumstances beyond their control - the war started by a president they never voted.
                                </p>

                                <p className='mt-4'>
                                    Inspired by these deeply personal incidents, this platform emerged as a sanctuary for unvoiced apologies and unexpressed sentiments. This platform is your safe space to express feelings anonymously when face-to-face apology isn't possible.
                                </p>

                                <p className='mt-4'>
                                    Our community thrives on sincerity, hosting heartfelt apologies powered by advanced technology like ChatGPT, DALL-E, ensuring anonymity yet allowing voices to be heard. The process is simple: fill forms, and let our AI assist you in sharing your apology. We respect your privacy, requiring no full names and pairing your message with an anonymous photo.
                                </p>
                                <p className='mt-4'>
                                    Relieve your heart. This platform fosters healing and understanding. Experience the lightness that comes with expressing regret and seeking forgiveness."
                                </p>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>


                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            What technologies have been used to create this?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p>
                                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                    dropdowns, modals, navbars, and more.
                                </p>
                            </p>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p>
                                    Check out this guide to learn how to
                                </p>
                                <a
                                    className="text-[#6469ff] hover:underline dark:text-[#6469ff]"
                                    href="https://flowbite.com/docs/getting-started/introduction/"
                                >
                                    <p>
                                        get started
                                    </p>
                                </a>
                                <p>
                                    and start developing websites even faster with components on top of Tailwind CSS.
                                </p>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>




                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            How can AI help people already now?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">

                                <p className='mt-4'>
                                    We truly hope even this website, using AI can help many people, but to give you more general answer AI has already started to redefine many aspects of our personal life. At present, it can:
                                </p>

                                <p className='mt-4'>・ Simplify communication through translation and transcription services</p>
                                <p className='mt-0'>・ Enhance home security with smart systems</p>
                                <p className='mt-0'>・ Improve health and fitness through personalized coaching</p>
                                <p className='mt-0'>・ Facilitate our daily tasks through virtual assistants</p>
                                <p className='mt-0'>・ Predict our needs, providing recommendations or personalized content</p>

                                <p className='mt-8'>
                                    Three years down the line, we might see AI:
                                </p>

                                <p className='mt-4'>・ Offering more detailed and accurate health predictions</p>
                                <p className='mt-0'>・ Making autonomous vehicles a mainstream reality</p>
                                <p className='mt-0'>・ Providing advanced personal finance management</p>
                                <p className='mt-0'>・ Facilitating immersive learning through virtual reality</p>
                                <p className='mt-0'>・ Enhancing remote work with sophisticated collaborative tools</p>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>


                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            How AI help potentially help people and our planet in the future?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-8'>
                                    In the foreseeable future, AI could take on even larger tasks. It holds enormous potential to
                                    significantly enhance both individual wellbeing and global prosperity. Let's imagine a future where
                                    AI is not just an aide but a key participant in our collective journey, enabling us to realize dreams we once deemed impossible:
                                </p>
                            </p>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    🌍 Reversing Climate Change: With its capability to analyze massive volumes of environmental data,
                                    AI could help forecast climate patterns and devise strategies to curb global warming,
                                    effectively becoming a vital tool in our fight to preserve the Earth.
                                </p>
                                <p className='mt-4'>
                                    🎓 Revolutionizing Education: Tailored to individual learning styles and pacing, AI has the potential
                                    to democratize education, ensuring each student gets the attention they need to flourish and fostering
                                    a generation of well-rounded, knowledgeable individuals.
                                </p>
                                <p className='mt-4'>
                                    👩‍⚕️ Transforming Healthcare: AI could revolutionize healthcare by predicting potential health issues before they become apparent,
                                    offering precise treatments, and making healthcare affordable and accessible to every corner of the globe.
                                </p>
                                <p className='mt-4'>
                                    🚀 Pioneering Cosmic Exploration: AI could pave the way for us to venture deeper into the universe,
                                    leading to discoveries of new celestial bodies and potentially, extraterrestrial life.
                                </p>
                                <p className='mt-4'>
                                    🕊️ Promoting Global Peace: As an impartial intermediary, AI could assist in resolving international disputes,
                                    contributing to world peace and unity.
                                </p>
                                <p className='mt-4'>
                                    🎨 Igniting a Creative Renaissance: AI could stir a resurgence in art and literature, inspiring our creative
                                    impulses and enriching our shared cultural heritage.
                                </p>
                                <p className='mt-4'>
                                    🍽️ Eradicating Global Hunger: By optimizing farming practices, AI could ensure food security worldwide, bringing us closer to ending hunger.
                                </p>
                                <p className='mt-4'>
                                    🌃 Building Sustainable Cities: By efficiently managing urban infrastructures and reducing pollution, congestion, and energy consumption, AI can make our cities more sustainable and livable.
                                </p>
                                <p className='mt-4'>
                                    💡 Pioneering Energy Abundance: AI stands to revolutionize renewable energy, enhancing efficiency and making it more widespread, thereby leading us into an era of energy abundance.
                                </p>
                                <p className='mt-4'>
                                    So, in essence, AI can be a game-changer, helping us in addressing some of the most pressing challenges faced by humanity and our planet. The potential benefits are immense, and they paint a hopeful picture of a future shaped by our partnership with AI.
                                </p>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>

                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            When reflecting on AI as a whole, are there any risks?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    While AI presents a promising future, it's crucial to remember that we are still in the early
                                    stages of understanding its long-term effects, especially on younger generations.
                                    The potential benefits are immense, but so are the potential pitfalls. Like any powerful tool,
                                    AI can be used both constructively and destructively.
                                </p>
                                <p className='mt-4'>
                                    Without the proper safeguards, we might face a dystopian future where AI could be misused.
                                    Consider the following worrying scenarios of unregulated AI development:
                                </p>
                                <p className='mt-4'>
                                    🤖 Autonomous Weapons: AI could be instrumental in future warfare, leading to the development of autonomous weapons.
                                    These could turn into mercilessly efficient, yet potentially uncontrollable, instruments of destruction.
                                    The ethical implications and risks of accidental casualties are profound.
                                </p>
                                <p className='mt-4'>
                                    📧 AI-Generated Blackmail: Advanced AI tools could be misused by cybercriminals to generate highly convincing,
                                    personalized blackmail messages, potentially leading to more successful extortion schemes and making it harder
                                    to track down the offenders.
                                </p>
                                <p className='mt-4'>
                                    🗣️ Amplification of Hate Speech: AI platforms could be exploited to disseminate hate speech, propaganda,
                                    or misinformation on a vast scale, aggravating societal divisions, inciting violence, and undermining
                                    democratic values.
                                </p>
                                <p className='mt-4'>
                                    🕵️‍♂️ AI-Driven Surveillance: Authoritarian regimes could leverage AI's capabilities for mass surveillance,
                                    infringing upon personal privacy and human rights.
                                </p>
                                <p className='mt-4'>
                                    📉 Market Manipulation: AI could be utilized for manipulative practices in financial markets, inducing artificial
                                    fluctuations and destabilizing economies. This could enable malevolent actors to amass wealth while causing global economic harm.
                                </p>
                                <p className='mt-4'>
                                    To maximize the benefits of AI while mitigating its risks, we must establish ethical standards, regulatory structures,
                                    and encourage collaboration among all stakeholders. Shaping the narrative of AI's future will require the wisdom of researchers,
                                    artists, philosophers, and other experts from diverse fields. As we grapple with the expanding role of AI in our lives, ethical considerations will undoubtedly be at the forefront.
                                </p>
                                <p className='mt-4'>
                                    As we spend more and more time with AI and focus on directing AI for the greater good, we must ensure that we don't let
                                    our human cognitive processes be influenced by AI's machine-like logic. The future is not just for specialists but for
                                    multi-talented creatives who can bridge different disciplines and offer a broader viewpoint.
                                    It's vital to keep our human ability to think beyond 'if-else' statements.
                                </p>

                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>

                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            In more philosophical level? Can you actually create photographs with AI?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    Wow, what an interesting question! Let's consider a different perspective.
                                    Traditional photography involves a camera, where light is captured on film to produce an image of the real world.
                                    Or, to be more precise, a framed slice of reality that often reveals as much about the photographer as it does
                                    about the subject or reality itself. But here's the twist: AI creating photographs
                                    is a different ball game. It needs us, humans, to provide it with data or information.
                                    Then, using this data, AI generates images in an equally fascinating process.
                                </p>
                            </p>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    Though photographs aren't a direct representation of reality, they often act as visual narratives that mirror it.
                                    Interestingly, AI-generated images, while not anchored to a specific moment, can also reflect reality,
                                    wouldn't you agree? We, as viewers, creators, curators, and AI developers, add a touch of our human experiences
                                    to them. It's we humans who breathe life and meaning into these AI-generated pictures. On this platform,
                                    they also capture the real stories, emotions, and apologies from people like you and me.
                                </p>

                                <p className='mt-4'>
                                    From its inception in 1839, photography has undergone a tremendous transformation – from light-reactive glass plates, to film, to digital,
                                    and now to AI-rendered images. Yet, in spite of these advancements, our arsenal of tools continues to respect the old-school techniques.
                                    The real enchantment stems from our imaginative creativity, both as creators and spectators.
                                    Traditional or AI-created photos, or any other kind of images, in their raw form, are but inanimate materials, lacking inherent life, soul,
                                    or any genuine bond with the world beyond. The true connection ignites in the observer's mind; it's through our imaginative capacity that
                                    these images acquire vitality and interconnection. Fascinating, don't you think? 😊
                                </p>

                                <p>

                                </p>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>

                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            Why I had problems to create my apology?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p>
                                    Rude language.
                                </p>
                            </p>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p>
                                    Check out this guide to learn how to
                                </p>
                                <a
                                    className="text-[#6469ff] hover:underline dark:text-[#6469ff]"
                                    href="https://flowbite.com/docs/getting-started/introduction/"
                                >
                                    <p>
                                        get started
                                    </p>
                                </a>
                                <p>
                                    and start developing websites even faster with components on top of Tailwind CSS.
                                </p>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>



                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            Who is the copyright owner of the site's content?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    In this exciting era of AI, we often stumble upon intriguing questions, don't we?
                                    Well, just to set your mind at ease, the copyright of this lovely site belongs to its creator,
                                    Peki, who breathed life into it with his code. But hey, don't let that stop you from sharing
                                    your image and text on social media. In fact, we'd be thrilled if you did! After all, sharing is caring, right? 😊
                                </p>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>

                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            Are there any modifications or moderations done to this site?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='mt-4'>
                                    Indeed! Just as we occasionally dust off our bookshelves at home,
                                    we also take care of this virtual platform. This might include refining
                                    any unconventional text that our AI companions produce - they're still
                                    on their learning journey, after all! Also, we have the right to erase
                                    any content that could potentially pose harm to any individual or group.
                                    Our aim is to create a nurturing and welcoming digital habitat for all. 😊
                                </p>
                                <p className='mt-4'>
                                    Do remember, this site is still in its testing phase, so there may be moments
                                    when we need to adjust or take down something due to a technical hiccup.
                                    Regardless of the challenge, you can count on us to always do our best!
                                </p>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>


                    <Accordion.Panel>
                        <Accordion.Title className='font-extrabold text-[#1B2828] text-[16px]'>
                            What is the ultimate meaning of life?
                        </Accordion.Title>
                        <Accordion.Content className='sm:mx-6 lg:mx-10 '>
                            <p className="className='mt-4 text-[#1B2828] text-[16px]">
                                <p className='my-4'>
                                    Seeking the meaning of life? While we can't make any guarantees, we're pretty confident that venues more suited than our FAQ section exist for this eternal riddle. 😉😃  That being said, never forget that you are a one-of-a-kind individual, an irreplaceable part of the grand cosmic ballet, and yes, we truly adore you. ❤️
                                </p>
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion >
            </section >
        </>
    )
}


export default FAQ
