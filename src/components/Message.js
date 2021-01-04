import React from 'react';
import './Message.css';

function Message({ content }) {
    return (
        <div className="message">
            <p>{content}</p>
        </div>
    )
}

export default Message
