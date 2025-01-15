import React from 'react'
import { FaGraduationCap, FaChartLine, FaRobot, FaUsers } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaRobot className="w-8 h-8 text-green-500" />,
      title: "AI-Powered Learning",
      description: "Our platform leverages advanced AI algorithms to analyze learning patterns and deliver personalized educational content tailored to each student's unique needs."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-green-500" />,
      title: "Real-time Analytics",
      description: "Comprehensive Power BI dashboards provide detailed insights into learning progress, helping both students and educators make data-driven decisions."
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-green-500" />,
      title: "Adaptive Assessments",
      description: "Dynamic quizzes and assessments that adjust difficulty levels in real-time, ensuring optimal learning challenges for every user."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-green-500" />,
      title: "Collaborative Learning",
      description: "Enhanced engagement through interactive feedback systems and gamified elements that make learning both effective and enjoyable."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
            Transforming Education Through AI
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            We're revolutionizing the way people learn by creating a personalized, 
            adaptive learning experience powered by artificial intelligence.
          </p>
        </div>

        {/* Problem Statement Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-900 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-500">The Challenge</h2>
            <p className="text-gray-400">
              Traditional education systems often fail to accommodate individual learning styles, 
              leading to disengagement and suboptimal learning outcomes. Students struggle with 
              one-size-fits-all approaches that don't address their unique needs and pace.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-500">Our Solution</h2>
            <p className="text-gray-400">
              We've developed an AI-driven adaptive learning platform that analyzes user interaction, 
              assesses learning patterns, and delivers customized content in real-time. With Power BI 
              integration, we provide detailed visual insights for both learners and educators.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gray-900 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-green-500">Our Mission</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We're committed to democratizing education by providing personalized learning 
            experiences that adapt to individual needs. Our goal is to improve learner 
            engagement by 30% and make quality education accessible to everyone, everywhere.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-500">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "Vedant Mahajan", role: "AI/ML and Frontend Lead" },
              { name: "Nirmal Zade", role: "System Design and Project Manager" },
              { name: "Kunal Zade", role: "Backend Lead" },
              { name: "Meet Patel", role: "Data Analytics and AI/ML" },
              { name: "Swagat Koreti", role: "Frontend Developer" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-green-500">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
