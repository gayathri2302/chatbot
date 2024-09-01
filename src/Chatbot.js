// // src/Chatbot.js
// import React, { useState } from 'react';
// import './Chatbot.css';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSend = () => {
//     if (input.trim()) {
//       const userMessage = { text: input, sender: 'user' };
//       setMessages([...messages, userMessage]);
//       setInput('');

//       // Generate a response from the bot
//       setTimeout(() => {
//         const botMessage = getBotResponse(input);
//         setMessages((prevMessages) => [...prevMessages, botMessage]);
//       }, 1000);
//     }
//   };

//   const getBotResponse = (userInput) => {
//     const lowercaseInput = userInput.toLowerCase();

//     // Basic conversation logic
//     if (lowercaseInput.includes('hello')) {
//       return { text: 'Hi there! How can I help you?', sender: 'bot' };
//     } else if (lowercaseInput.includes('help')) {
//       return { text: 'Sure! What do you need help with?', sender: 'bot' };
//     } else if (lowercaseInput.includes('bye')) {
//       return { text: 'Goodbye! Have a great day!', sender: 'bot' };
//     } else {
//       return { text: `I'm not sure how to respond to "${userInput}".`, sender: 'bot' };
//     }
//   };

//   return (
//     <div className="chatbot">
//       <div className="chat-window">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-area">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
// src/Chatbot.js

// src/Chatbot.js

import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  // Define default questions and answers
  const defaultQuestions = [
    {
      question: 'What is your name?',
      answer: 'I am Chatbot, your virtual assistant.',
    },
    {
      question: 'What services do you offer?',
      answer: 'I can help you with information retrieval, customer support, and more.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact support via email at support@example.com.',
    },
    {
      question: 'Where are you located?',
      answer: 'We are located in San Francisco, California.',
    },
    // Add more questions and answers as needed
  ];

  const handleQuestionClick = (question) => {
    // Add user's question to messages
    const userMessage = { text: question, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Find the answer to the question
    const botResponse = defaultQuestions.find((q) => q.question === question);

    // Add bot's response to messages after a delay
    setTimeout(() => {
      const botMessage = { text: botResponse.answer, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="default-questions">
        <h4>Choose a Question:</h4>
        {defaultQuestions.map((q, index) => (
          <button key={index} onClick={() => handleQuestionClick(q.question)}>
            {q.question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
