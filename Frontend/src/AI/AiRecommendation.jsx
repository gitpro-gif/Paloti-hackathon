import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AiRecommendation = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const learningPaths = [
    {
      id: 1,
      title: "Web Development",
      description: "Master modern web development technologies",
      icon: "🌐",
      roadmap: [
        { phase: "Fundamentals", skills: ["HTML", "CSS", "JavaScript Basics"] },
        { phase: "Frontend", skills: ["React", "Redux", "Tailwind CSS"] },
        { phase: "Backend", skills: ["Node.js", "Express", "MongoDB"] },
        { phase: "Advanced", skills: ["TypeScript", "Next.js", "AWS"] }
      ]
    },
    {
      id: 2,
      title: "Data Science",
      description: "Explore data analysis and machine learning",
      icon: "📊",
      roadmap: [
        { phase: "Basics", skills: ["Python", "Statistics", "Pandas"] },
        { phase: "Analysis", skills: ["NumPy", "Data Visualization", "SQL"] },
        { phase: "ML Basics", skills: ["Scikit-learn", "TensorFlow", "Model Training"] },
        { phase: "Advanced ML", skills: ["Deep Learning", "NLP", "Computer Vision"] }
      ]
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Build mobile apps for iOS and Android",
      icon: "📱",
      roadmap: [
        { phase: "Fundamentals", skills: ["JavaScript/TypeScript", "Mobile UI/UX", "State Management"] },
        { phase: "React Native", skills: ["Components", "Navigation", "APIs"] },
        { phase: "Advanced", skills: ["Native Modules", "Performance", "Publishing"] },
        { phase: "Cross-Platform", skills: ["iOS Specifics", "Android Specifics", "Testing"] }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">AI Learning Path Recommendations</h1>
      
      {/* Learning Paths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {learningPaths.map((path) => (
          <motion.div
            key={path.id}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl shadow-lg cursor-pointer transition-colors
              ${selectedPath?.id === path.id ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => setSelectedPath(path)}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{path.icon}</span>
              <h3 className="text-xl font-semibold">{path.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{path.description}</p>
            <button 
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              View Roadmap
            </button>
          </motion.div>
        ))}
      </div>

      {/* Selected Path Roadmap */}
      {selectedPath && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6">
            {selectedPath.icon} {selectedPath.title} Roadmap
          </h2>
          
          <div className="space-y-6">
            {selectedPath.roadmap.map((phase, index) => (
              <div key={index} className="relative">
                {index !== selectedPath.roadmap.length - 1 && (
                  <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-blue-500" />
                )}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button 
              className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
            >
              Start Learning Path
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AiRecommendation;
