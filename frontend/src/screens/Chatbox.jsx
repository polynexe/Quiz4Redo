import { useState } from 'react'
import ChatbotIcon from '../components/ChatbotIcon'
import ChatForm from '../components/ChatForm'
import UserIcon from '../components/UserIcon'

function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='chatbot-container'>
      {isOpen ? (
        <div className='chatbot-popup'>
          <div className='chatbot-header'>
            <div className='header-info'>
              <ChatbotIcon />
              <h2 className='logo-text'>Chatbot</h2>
            </div>
            <button className='material-symbols-outlined close-btn' onClick={() => setIsOpen(false)}>keyboard_arrow_down</button>
          </div>

          <div className='chatbot-body'>
            <div className='message bot-message'>
              <ChatbotIcon />
              <p className='message-text'>Hello! How can I assist you today?</p>
            </div>
          </div>

        <div className='usermessage-body'>
          <div className='message user-message'>
            <p className='message-text'>Lorem Ipsum</p>
            <UserIcon />
          </div>
        </div>

          <div className="chat-footer">
            <ChatForm />
          </div>
        </div>
      ) : (
        <button className='chatbot-toggle-btn' onClick={() => setIsOpen(true)} title="Open Chat">
          <ChatbotIcon />
        </button>
      )}
    </div>
  )
}
export default Chatbox