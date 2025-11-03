import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import callIcon from '../assets/contact/call.svg?url';
import emailIcon from '../assets/contact/email.svg?url';
import locationIcon from '../assets/contact/location.svg?url';
import mapImage from '../assets/contact/map.png';

export default function Contact() {
    return (
        <div className="min-h-screen">
            <Header />
            <div 
                className="min-h-screen"
                style={{
                    background: 'linear-gradient(180deg, #E3E7EB 0%, #E3E7EB 40%, #F48034 100%)'
                  }}
                  
            >
                <div className="container mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#F48034' }}>
                        Contact Us
                    </h1>

                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex flex-col md:flex-row justify-between gap-8">
                            <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center text-center flex-1">
                                <img src={callIcon} alt="Phone" className="w-8 h-8 mb-4" />
                                <p className="text-black font-medium">+41 41 399 18 80</p>
                            </div>

                            <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center text-center flex-1">
                                <img src={emailIcon} alt="Email" className="w-8 h-8 mb-4" />
                                <p className="text-black font-medium">info@kstf.ch</p>
                            </div>

                            <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center text-center flex-1">
                                <img src={locationIcon} alt="Location" className="w-8 h-8 mb-4" />
                                <p className="text-black font-medium">Hinterbergstrasse 18<br />CH - 6312 Steinhausen</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-8" style={{ color: '#DF742D' }}>
                            Get in Touch
                        </h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F48034] focus:border-transparent"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F48034] focus:border-transparent"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F48034] focus:border-transparent"
                                        placeholder="Enter your business email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F48034] focus:border-transparent"
                                        placeholder="Enter your job title"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F48034] focus:border-transparent"
                                    placeholder="Enter your company name"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F48034] focus:border-transparent"
                                    placeholder="Enter your message"
                                />
                            </div>

                            <p className="text-sm text-gray-500">
                                By submitting, you agree to our Privacy Policy and consent to being contacted about TPS products and services.
                            </p>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 hover:opacity-90"
                                style={{ backgroundColor: '#F48034' }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative">
                            <img 
                                src={mapImage} 
                                alt="World Map" 
                                className="w-full max-w-4xl h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
