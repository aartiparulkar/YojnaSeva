import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/chatbot.css';

const responses = {
  "Schemes for Visual Disability": "Here are some schemes for visual disability:\n1. ADIP Scheme\n2. Assistance to visually impaired students\n3. Smart Cane Program",
  "Schemes for Hearing Disability": "Schemes for hearing disability:\n1. Cochlear Implant Program\n2. Scholarships for hearing impaired students",
  "Mental Disability": "Schemes for mental disability:\n1. National Mental Health Programme\n2. Scheme for Early Intervention Centres",
  "Physical Disability": "Schemes for physical disability:\n1. ADIP Scheme\n2. Deendayal Disabled Rehabilitation Scheme",
  "Below 18": "Schemes for individuals below 18:\n1. Inclusive Education Program\n2. ADIP Scheme for children",
  "18 to 40": "Schemes for age group 18 to 40:\n1. Skill Training Programs\n2. Entrepreneurship Support",
  "Above 40": "Schemes for above 40:\n1. Pension for Senior Disabled\n2. Health & Wellness Yojana"
};

const Chatbot = ({ isOpen, toggleChatbot }) => {
  const [chat, setChat] = useState([
    { sender: 'bot', text: "How can I help you today?" }
  ]);
  const [context, setContext] = useState("main"); // 'main', 'age', 'other'

  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  const handleOptionClick = (option) => {
    if (option === "View All Schemes") {
      setChat(prev => [...prev, { sender: 'user', text: option }, { sender: 'bot', text: "Redirecting you to the schemes page..." }]);
      setContext("none");
      // setTimeout(() => navigate('/schemes'), 1000);
      navigate('/schemes');
      return;
    }

    if (option === "Schemes by Age Group") {
      setContext("age");
      return;
    }

    // Regular options
    if (["Below 18", "18 to 40", "Above 40"].includes(option)) {
      // No user message for these
      setChat(prev => [...prev, { sender: 'bot', text: responses[option] }]);
      setContext("back");
    } else {
      setChat(prev => [...prev, { sender: 'user', text: option }, { sender: 'bot', text: responses[option] || "Sorry, I didn't get that." }]);
      setContext("back");
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat]);

  const mainOptions = [
    "Schemes for Visual Disability",
    "Schemes for Hearing Disability",
    "Schemes by Age Group",
    "Mental Disability",
    "Physical Disability",
    "View All Schemes"
  ];

  const ageOptions = ["Below 18", "18 to 40", "Above 40"];

  const renderOptions = () => {
    if (context === "main") {
      return mainOptions.map((option, index) => (
        <button key={index} className="chat-option-btn" onClick={() => handleOptionClick(option)}>
          {option}
        </button>
      ));
    } else if (context === "age") {
      return ageOptions.map((age, index) => (
        <button key={index} className="chat-option-btn" onClick={() => handleOptionClick(age)}>
          {age}
        </button>
      ));
    } else if (context === "back") {
      return (
        <button className="chat-option-btn" onClick={() => setContext("main")}>
          Back to All Schemes
        </button>
      );
    }
    return null;
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <span>🤖 Yojna Sevak</span>
        <button className="close-btn" onClick={toggleChatbot}>×</button>
      </div>

      <div className="chat-window">
        {chat.map((msg, index) => (
          <div key={index} className={`chat-msg ${msg.sender}`}>
            {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="options-container">
        {renderOptions()}
      </div>
    </div>
  );
};

export default Chatbot;
