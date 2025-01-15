import React from 'react';
import { Link } from 'react-router-dom';
import GirlImg from "../assets/GirlImg.png"
// import Boy from "../assets/Boy.png"
// import Cutie from "../assets/Cutie.png"

const Landing = () => {
    return (
        <div className="bg-black text-white">
            {/* Navigation - Added mobile menu */}
            

            {/* Hero Section - Improved responsiveness */}
            <section className="min-h-screen flex items-center pt-20 lg:pt-0">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
                        <div className="w-full md:w-1/2 space-y-6 lg:space-y-8 text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                                Create Something
                                <span className="text-green-500 block sm:inline"> Amazing</span>
                            </h1>
                            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button className="bg-green-500 px-6 sm:px-8 py-3 rounded-full hover:bg-green-600 transition-colors text-sm sm:text-base w-full sm:w-auto">
                                    Get Started
                                </button>
                                <button className="border border-green-500 text-green-500 px-6 sm:px-8 py-3 rounded-full hover:bg-green-500 hover:text-white transition-colors text-sm sm:text-base w-full sm:w-auto">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative max-w-lg mx-auto">
                                <div className="absolute -inset-1 bg-green-500 rounded-lg blur-2xl opacity-25"></div>
                                <div className="relative bg-black border border-green-500/20 rounded-lg p-4 sm:p-8">
                                    <img
                                        src={GirlImg}
                                        alt="Hero"
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Improved grid responsiveness */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Amazing <span className="text-green-500">Features</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                            Discover what makes our product special
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
                        {/* Feature Cards - Made responsive */}
                        {[
                            {
                                title: "Fast Performance",
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            },
                            {
                                title: "Secure System",
                                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            },
                            {
                                title: "Easy Integration",
                                icon: "M4 6h16M4 12h16m-7 6h7",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="p-4 sm:p-6 border border-green-500/20 rounded-xl hover:border-green-500 transition-colors">
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
