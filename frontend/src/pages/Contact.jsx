import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userInput, setUserInput] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value,
        });

        if (userInput.user_name && userInput.user_email && userInput.message) {
            setFormStatus('');
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!userInput.user_name || !userInput.user_email || !userInput.message) {
            setFormStatus('Please fill out all fields.');
            return;
        }

        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_APP_SERVICE_ID,
            import.meta.env.VITE_APP_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                form.current.reset(); // reset form fields
                setFormStatus('Message sent successfully!');
                setUserInput({
                    user_name: '',
                    user_email: '',
                    message: ''
                });
                setTimeout(() => {
                    navigate('/');
                }, 4000); // navigate to '/' after 4 seconds
            }, (error) => {
                console.log(error.text);
                setFormStatus('Holy Crap! An error occurred, please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };
    return (
        <div className="max-w-7xl sm:mx-6 lg:mx-10 mx-auto">

            <h1 className="font-extrabold text-[#222328] text-[32px]">
                Contact Us
            </h1>

            <p className="mt-5 text-[#666e75] text-md">
                We always appreciate hearing from our users. Whether you have a question,
                want to give feedback, or simply want to share your experience with our product,
                please feel free to drop us a line. We're here to listen and help.
            </p>

            <form className="mt-12 max-w-3xl" ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                        <label className="text-[#222328]">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md"
                            onChange={handleInputChange} />
                    </div>

                    <div className="w-full md:w-1/2">
                        <label className="text-[#222328]">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md"
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className="mt-2">
                    <label className="text-[#222328]">
                        Your Message
                    </label>
                    <textarea
                        name="message"
                        className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md"
                        onChange={handleInputChange} />
                </div>
                <div className="mt-2">
                    {!isSubmitting && formStatus !== 'Message sent successfully!' &&
                        <input
                            type="submit"
                            value="Send"
                            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-[16px] w-full sm:w-auto px-5 py-2.5 text-center hover:ease-in duration-300 hover:bg-[green]"
                            disabled={isSubmitting}
                        />
                    }
                    {isSubmitting && !formStatus &&
                        <button disabled={true} className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-[16px] w-full sm:w-auto px-5 py-2.5 text-center">
                            Sending
                            <span className="loader">.<span>.</span><span>.</span></span>
                        </button>
                    }
                    {formStatus === 'Message sent successfully!' && <p className="mt-3 text-[16px] text-green-500 font-medium">{formStatus}</p>}
                </div>
                {formStatus === 'Please fill out all fields.' && <p className="mt-8 text-[16px] text-red-600 font-medium">{formStatus}</p>}
            </form>
        </div>

    );
};

export default Contact;
