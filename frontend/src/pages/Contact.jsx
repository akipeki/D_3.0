import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // form submission logic
    };

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-extrabold text-[#222328] text-[32px]">
                Contact Us
            </h1>
            <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/3">
                        <label htmlFor="name" className="text-[#222328]">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="w-full md:w-1/3">
                        <label htmlFor="mobile" className="text-[#222328]">
                            Your Mobile
                        </label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="w-full md:w-1/3">
                        <label htmlFor="email" className="text-[#222328]">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <label htmlFor="message" className="text-[#222328]">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full py-2 px-3 mt-1 mb-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-[16px] w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
