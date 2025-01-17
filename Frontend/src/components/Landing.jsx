import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GirlImg from "../assets/GirlImg.png"
// import Boy from "../assets/Boy.png"
// import Cutie from "../assets/Cutie.png"
import NavBar from "./NavBar"

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-black text-white">
            {/* Navigation - Added mobile menu */}
            <NavBar />

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
                                <button onClick={() => navigate('/login')} className="bg-green-500 px-6 sm:px-8 py-3 rounded-full hover:bg-green-600 transition-colors text-sm sm:text-base w-full sm:w-auto">
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
                                title: "Progress Tracking",
                                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                description: "Track your learning progress with detailed analytics and insights."
                            },
                            {
                                title: "AI Assistant Guruji",
                                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                                description: "Get personalized help and answers from our AI-powered learning assistant."
                            },
                            {
                                title: "Personalized Roadmap",
                                icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                                description: "Follow a customized learning path tailored to your goals and skill level."
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

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Frequently Asked <span className="text-green-500">Questions</span>
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                question: "How can I improve my study concentration?",
                                answer: "Create a dedicated study space, use the Pomodoro Technique (25 minutes study, 5 minutes break), eliminate distractions, and maintain a consistent study schedule."
                            },
                            {
                                question: "What's the best way to prepare for exams?", 
                                answer: "Start early, create a study plan, use active recall techniques, practice past papers, and ensure adequate rest and nutrition."
                            },
                            {
                                question: "How can I manage my time effectively?",
                                answer: "Use a planner or digital calendar, prioritize tasks, break large assignments into smaller tasks, and avoid procrastination."
                            },
                            {
                                question: "What should I do if I'm struggling with a subject?",
                                answer: "Seek help from teachers, join study groups, use online resources, and consider getting a tutor for personalized assistance."
                            },
                            {
                                question: "How can I reduce academic stress?",
                                answer: "Practice regular exercise, maintain a balanced lifestyle, use stress-management techniques, and don't hesitate to seek support from counselors or mentors."
                            }
                        ].map((faq, index) => (
                            <details key={index} className="bg-gray-800 rounded-lg p-6">
                                <summary className="text-xl font-semibold text-green-500 cursor-pointer hover:text-green-400 transition-colors">
                                    {faq.question}
                                </summary>
                                <p className="text-gray-300 mt-4 pl-4 border-l-2 border-green-500">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">About Us</h3>
                            <p className="text-sm">Empowering students with AI-driven learning solutions for a better educational experience.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-green-500">Home</a></li>
                                <li><a href="#" className="hover:text-green-500">Features</a></li>
                                <li><a href="#" className="hover:text-green-500">About</a></li>
                                <li><a href="#" className="hover:text-green-500">Contact</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Contact</h3>
                            <ul className="space-y-2">
                                <li>Email: Startprep@example.com</li>
                                <li>Phone: +91 9876543210</li>
                                <li>Address: 123 Education St</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-green-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>
                                <a href="#" className="hover:text-green-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                </a>
                                <a href="#" className="hover:text-green-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p>&copy; 2024 Startprep. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
