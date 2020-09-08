import React, { useState, useEffect } from 'react';
import { IconButton, Button, FormControl, InputLabel, Input, Icon } from '@material-ui/core';
import Message from './Message';
import './App.css';
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';




function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  //useState = Variable in REACT | name - variable setName is how to update/change

  //useEffect = Method based on condition in REACT | if condtion [] is blank only runs on reload
  // if we have a variable like input in condition, effect runs on every key

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name: '));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input, 
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="App">
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?
        w=150&h=150" />
        <h1>FB Messenger Clone!</h1>
        <h2>Welcome {username}</h2>
      
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message.." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} 
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={sendMessage}>
            <SendIcon />
          </IconButton> 
        </FormControl>
      </form>

      <FlipMove>
       { 
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
        
        
    </div>
  );
}

export default App;
