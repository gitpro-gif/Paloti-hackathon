import React from 'react';

const Features = () => {
    const coreFeatures = [
        {
            title: "User Profiling",
            description: "Create dynamic learner profiles using diagnostic tests and behavior analysis"
        },
        {
            title: "Content Recommendation",
            description: "Provide tailored educational resources based on user performance and goals"
        },
        {
            title: "Adaptive Assessments",
            description: "Generate interactive quizzes and dynamically adjust difficulty levels"
        },
        {
            title: "Progress Tracking",
            description: "Offer dashboards to visualize strengths, weaknesses, and overall growth"
        },
        {
            title: "Interactive Feedback",
            description: "AI-driven feedback to help learners continuously improve"
        }
    ];

    const powerBIFeatures = [
        {
            title: "Student Analytics Dashboard",
            description: "Visualize individual progress, time spent on modules, and assessment scores"
        },
        {
            title: "Educator Insights",
            description: "Track performance metrics of students, identify learning gaps, and predict outcomes"
        },
        {
            title: "Content Performance Analysis",
            description: "Analyze which learning resources are most effective and engaging"
        }
    ];

    const additionalFeatures = [
        {
            title: "Multi-Device Support",
            description: "Seamless access across devices (mobile, tablet, and desktop)"
        },
        {
            title: "Integration with MOOCs",
            description: "Incorporate content from existing educational providers"
        },
        {
            title: "Gamified Elements",
            description: "Add leaderboards, badges, and rewards to enhance engagement"
        },
        {
            title: "Cloud Scalability",
            description: "AWS-hosted infrastructure to handle 10,000+ concurrent users"
        }
    ];

    return (
        <div className="min-h-screen bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-green-500 mb-12 text-center">
                    Platform Features
                </h2>

                {/* Core Features Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-white mb-6">Core Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                        {coreFeatures.map((feature, index) => (
                            <div key={index} className="bg-black border border-green-500 rounded-lg p-6 hover:bg-gray-900 transition duration-300">
                                <h4 className="text-xl font-semibold text-green-500 mb-3">{feature.title}</h4>
                                <p className="text-white">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Power BI Features Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-white mb-6">Power BI Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                        {powerBIFeatures.map((feature, index) => (
                            <div key={index} className="bg-black border border-green-500 rounded-lg p-6 hover:bg-gray-900 transition duration-300">
                                <h4 className="text-xl font-semibold text-green-500 mb-3">{feature.title}</h4>
                                <p className="text-white">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Features Section */}
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-6">Additional Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                        {additionalFeatures.map((feature, index) => (
                            <div key={index} className="bg-black border border-green-500 rounded-lg p-6 hover:bg-gray-900 transition duration-300">
                                <h4 className="text-xl font-semibold text-green-500 mb-3">{feature.title}</h4>
                                <p className="text-white">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;