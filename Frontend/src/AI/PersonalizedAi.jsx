import React, { useState } from 'react'

const PersonalizedAi = () => {
  const [userInput, setUserInput] = useState('')
  const [recommendation, setRecommendation] = useState(null)

  const handleSubmit = () => {
    // This is where you would integrate with your AI backend
    // For now using mock data
    const mockRecommendation = {
      path: "Full Stack Development",
      steps: [
        "Learn HTML, CSS and JavaScript fundamentals",
        "Master React.js for frontend development",
        "Study Node.js and Express for backend",
        "Learn database management with MongoDB",
        "Practice building full-stack applications"
      ],
      timeEstimate: "6-8 months"
    }
    setRecommendation(mockRecommendation)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Personalized Learning Path
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mb-8">
          Tell us about your goals and interests, and we'll create a customized learning path for you.
        </p>
        
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Example: I want to become a web developer. I have basic knowledge of HTML and CSS..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[160px] mb-6 transition-all"
        />
        
        <button 
          onClick={handleSubmit}
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 mb-10"
        >
          Get Recommendations
        </button>

        {recommendation && (
          <div className="w-full bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recommended Path: {recommendation.path}
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                Learning Steps:
              </h3>
              <ul className="space-y-3 list-disc pl-6">
                {recommendation.steps.map((step, index) => (
                  <li key={index} className="text-gray-600">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <p className="text-gray-800 font-medium">
                Estimated Time: {recommendation.timeEstimate}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PersonalizedAi
