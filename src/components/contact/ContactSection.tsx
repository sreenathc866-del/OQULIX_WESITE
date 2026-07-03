import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-900 mb-4">Get in <span className="font-bold">Touch</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Ready to experience the future? Reach out to us for product inquiries or to book a live demonstration.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    <form className="bg-gray-50 border border-gray-100 p-10 rounded-3xl shadow-sm w-full md:w-1/2">
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="name">Name</label>
                            <input type="text" id="name" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow" placeholder="John Doe" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow" placeholder="john@example.com" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow" placeholder="+1 (555) 000-0000" required />
                        </div>
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="company">Company</label>
                            <input type="text" id="company" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow" placeholder="Your Company Name" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full transition-colors shadow-lg">Book Demo</button>
                            <button type="submit" className="flex-1 bg-gray-900 hover:bg-black text-white font-bold py-4 px-6 rounded-full transition-colors shadow-lg">Contact Us</button>
                        </div>
                    </form>

                    <div className="w-full md:w-1/2 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Headquarters</h3>
                        <div className="flex-1 w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 min-h-[300px] lg:min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509303!2d144.9537353153165!3d-37.81627997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b3f7%3A0x5045675218ceed30!2sOQULIX!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;