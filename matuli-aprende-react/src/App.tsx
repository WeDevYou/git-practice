import React, { useState } from 'react';
import logo from './logo.svg';
import LoginButton from './components/LoginButton';
import LoginMessage from './components/LoginMessage';
import { MessageContextProvider } from './context/MessageContext'


import './App.css';

function App() {

  const [message, setMessage] = useState('Not connected...')

  return (
    <div className="container">
      <MessageContextProvider>
        <LoginMessage />
        <LoginButton title = "Login" setMessage = {setMessage }></LoginButton>
      </MessageContextProvider> 
    </div>
  );
}

export default App;
