import React from 'react'

function ChatForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Type your message..." className="message-input" required/>
        <button className='material-symbols-outlined'>arrow_upward</button>
    </form>
  )
}

export default ChatForm