import React, { useState } from 'react';
import Chatbot from './Chatbot';  // Ensure the import is correct
import '../styles/helpbutton.css';

const HelpButton = () => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    return (
        <div className="help-button-container">
            <button className="help-button" onClick={toggleChatbot}>
                🤖
            </button>

            {/* Pass the isOpen prop to Chatbot */}
            <Chatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
        </div>
    );
};

export default HelpButton;
