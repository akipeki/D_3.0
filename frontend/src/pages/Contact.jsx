import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate, Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
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
                setTimeout(() => {
                    navigate('/');
                }, 6000); // navigate to '/' after 6 seconds
            }, (error) => {
                console.log(error.text);
                setFormStatus('An error occurred, please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };
    return (
        <div className="max-w-7xl mx-auto">

            <h1 className="font-extrabold text-[#222328] text-[32px]">
                Contact Us
            </h1>

            <p className="mt-5 text-[#667e75] text-md">
                We always appreciate hearing from our users. Whether you have a question,
                want to give feedback, or simply want to share your experience with our product,
                please feel free to drop us a line. We're here to listen and help.
            </p>

            {formStatus && <p className="mt-5 text-[green] text-lg">{formStatus}</p>}

            <form className="mt-16 max-w-3xl" ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                        <label className="text-[#222328]">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md" />
                    </div>

                    <div className="w-full md:w-1/2">
                        <label className="text-[#222328]">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="mt-2">
                    <label className="text-[#222328]">
                        Your Message
                    </label>
                    <textarea
                        name="message"
                        className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md" />
                </div>
                <input
                    type="submit"
                    value={isSubmitting ? "Sent" : "Send"}
                    className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-[16px] w-full sm:w-auto px-5 py-2.5 text-center hover:ease-in duration-300 hover:bg-[green]"
                    disabled={isSubmitting} />
            </form>
            <div className='mt-12'>
                <Link to='/' className="btn-back text-[#8a8a8a] underline-offset-8 hover:underline hover:text-[#191919]  hover:underline-offset-8 hover:decoration-[3px] font-bold pt-10">Back to Main</Link>
            </div>
        </div>
    );
};

export default Contact;
