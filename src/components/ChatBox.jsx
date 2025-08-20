import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const ChatBox = ({ car }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hi! I'm here to help you with information about the ${car.name}. What would you like to know?`,
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');

  const botResponses = {
    mileage: `The ${car.name} gives a mileage of ${car.mileage} kmpl, which is excellent for city and highway driving.`,
    price: `This ${car.name} is priced at ₹${car.price} Lakhs, which is competitive for its condition and features.`,
    cost: `This ${car.name} is priced at ₹${car.price} Lakhs, which is competitive for its condition and features.`,
    owners: `This vehicle has had ${car.owners} owner${car.owners > 1 ? 's' : ''}, and has been well-maintained.`,
    year: `This ${car.name} is a ${car.year} model, making it ${new Date().getFullYear() - car.year} years old.`,
    features: `Key features include: ${car.features.join(', ')}. Would you like to know more about any specific feature?`,
    fuel: `This car runs on ${car.fuelType} and has a ${car.transmission} transmission.`,
    km: `The odometer reading is ${car.kmDriven.toLocaleString()} km, which is reasonable for a ${car.year} model.`,
    location: `This car is located in ${car.location}. We can arrange viewing and test drives.`,
    similar: `Similar cars in our inventory include other hatchbacks and sedans in the same price range. Would you like recommendations?`,
    default: `I'd be happy to help! You can ask me about mileage, price, features, owners, or anything else about this ${car.name}.`
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = botResponses.default;

      Object.keys(botResponses).forEach(key => {
        if (lowerInput.includes(key) && key !== 'default') {
          response = botResponses[key];
        }
      });

      const botMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg h-96 flex flex-col">
      <div className="bg-blue-600 text-white p-4 rounded-t-xl flex items-center space-x-2">
        <Bot className="h-5 w-5" />
        <h3 className="font-semibold">Car Assistant</h3>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg flex items-start space-x-2 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
              <p className="text-sm">{message.text}</p>
              {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about mileage, price, features..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;