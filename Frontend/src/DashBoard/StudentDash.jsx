import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bar from './Bar';
import Marks from './Marks';
import Pie from './Pie';
import Scatter from './Scatter';
import ZoomLineChart from './ZoomLineChart';
import ZoomBarChart from './ZoomBarChart';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import AiRecommendation from '../AI/AiRecommendation';
const StudentDash = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      <nav className="bg-gray-900 p-4 mb-6 rounded-lg">
        <div onClick={() => navigate('/')} className='text-2xl font-bold text-white'>
          <IoIosArrowBack />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-2xl font-bold">AI Learning Assistant</div>
          
          {/* Menu button for mobile */}
          <button className="lg:hidden px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation buttons */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto gap-4 mt-4 lg:mt-0`}>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 w-full lg:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span>Personalized Path</span>
            </button>
            
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center gap-2 w-full lg:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              <span>Skill Analysis</span>
            </button>
            
            <button onClick={() => navigate('/ai-recommendation')} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg flex items-center gap-2 w-full lg:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
              </svg>
              <span>AI Recommendations</span>
            </button>
          </div>

          <Link to="/ask-guruji" className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg flex items-center gap-2 w-full lg:w-auto justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span>Ask Guruji</span>
          </Link>
            
            <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg flex items-center gap-2 w-full lg:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
              </svg>
              <span>Easy Learning</span>
            </button>
          </div>

      </nav>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-6">
        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 h-[300px] flex items-center justify-center">
            <Bar />
          </div>
          <div className="bg-gray-800 rounded-lg p-6 h-[300px] flex items-center justify-center w-full transition-colors">
            <Marks />
          </div>
          <div className="bg-gray-800 rounded-lg h-[300px] flex items-center justify-center">
            <Pie />
          </div>
          <div className="bg-gray-800 rounded-lg p-6 h-[300px] flex items-center justify-center">
            <ZoomBarChart /> {/* Add ZoomBarChart here */}
          </div>
        </div>

        {/* Flex Section */}
        <div className="flex flex-col gap-6">
          <div className="bg-gray-800 rounded-lg p-6 h-[400px] flex items-center justify-center text-xl font-semibold">
            <Scatter />
          </div>

          <div className="bg-gray-800 rounded-lg p-6 h-auto flex items-center justify-center text-xl font-semibold">
            <ZoomLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
