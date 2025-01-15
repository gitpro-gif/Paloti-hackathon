import React from 'react';

const Landing = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');

    };
    

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 text-white rounded-lg shadow-lg flex flex-col items-center 
                            lg:h-[60vh] lg:w-[80vh] 
                            md:h-[55vh] md:w-[75vh] 
                            sm:h-[50vh] sm:w-[70vh] 
                            p-6 space-y-6">
                
                <h1 className="text-2xl font-bold mb-4">Ask Your Question</h1>
                
                
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                    
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Type your question here..."
                            className="w-full bg-black text-white rounded-lg px-4 py-2 border-2 border-green-500 
                                        focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="bg-black hover:bg-gray-900 text-white rounded-lg px-4 py-2 border-2 border-green-500">
                            Ask
                        </button>
                    </div>
                    
                    
                    <div className="flex flex-col w-full">
                        <textarea
                            placeholder="Your response will appear here..."
                            rows="6"
                            className="w-full bg-black text-white rounded-lg px-4 py-2 border-2 border-green-500 
                                        focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                        ></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Landing;
