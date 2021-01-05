import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, Input, IconButton } from '@material-ui/core';
import Message from './components/Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  // useState
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useEffect
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({
          id: doc.id, 
          message: doc.data()
        })));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Let's we know who you are..."));
  }, []);

  // Functions
  const sendMessageHandler = (e) => {
    e.preventDefault();

    // Append new message to firebase store
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Clear the input
    setInput('');
  }

  const setInputHandler = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="app">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" />
      <h1>Hey! Let's join in our Messenger Clone</h1>
      <h2>Hello {username}</h2>

      <form 
        onSubmit={sendMessageHandler} 
        className="app__form"
      >
        <FormControl className="app__formControl">
          <Input 
            className="app__input"
            placeholder="Enter a message..." 
            onChange={setInputHandler} 
            value={input} 
          />
          <IconButton
            className="app__iconButton"
            disabled={!input} 
            variant="contained" 
            color="primary" 
            type="submit"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message 
              key={id} 
              username={username} 
              message={message}
            />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
