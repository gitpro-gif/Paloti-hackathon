import React, { useState, useRef, useEffect } from 'react'

const AskGuruji = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Namaste! I am Guruji, your AI learning assistant. How may I help you today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
    
    // TODO: Add API call here to get bot response
    // For now, adding a mock response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "I'm processing your question. This is a placeholder response."
      }]);
    }, 1000);

    setInputMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gray-900 rounded-lg shadow-xl p-6">
        <div className="flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                <span className="text-2xl">🧘</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Ask Guruji</h2>
                <p className="text-gray-400 text-sm">Your AI Learning Assistant</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full ${message.type === 'bot' ? 'bg-orange-600' : 'bg-blue-600'} flex items-center justify-center`}>
                    <span className="text-sm">{message.type === 'bot' ? '🧘' : '👤'}</span>
                  </div>
                </div>
                <div className={`${message.type === 'bot' ? 'bg-gray-800' : 'bg-blue-700'} rounded-lg p-3 max-w-[80%]`}>
                  <p className="text-white">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-700 pt-4">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask your question..."
                className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button 
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
              >
                <span>Ask</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AskGuruji
