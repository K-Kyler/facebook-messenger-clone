import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './components/Message';

function App() {
  // useState
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useEffect
  useEffect(() => {
    setUsername(prompt("Let's we know who you are..."));
  }, []);

  // Functions
  const sendMessageHandler = (e) => {
    e.preventDefault();

    // Append new message
    setMessages([...messages, input]);

    // Clear the input
    setInput('');
  }

  const setInputHandler = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>Eyy! Let's join in our Messenger Clone</h1>

      <form onSubmit={sendMessageHandler}>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input onChange={setInputHandler} value={input} />
          <Button disabled={!input} variant="contained" color="primary" type="submit">Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map((message, index) => (
          <Message key={index} content={message} />
        ))
      }
    </div>
  );
}

export default App;
