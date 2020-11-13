import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../state/User";

import {
  Container,
  ChatContent,
  Message,
  Name,
  Content,
  SendNewMessage,
  NewMessage,
  TextNewMessage,
} from "./styles";

import socketIo from 'socket.io-client';
import { useHistory } from "react-router-dom";

let clientSocket;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const { user } = useContext(UserContext);
  const history = useHistory();

  function sendNewMessage(){
    // setMessages([...messages, {name: user.name, message: currentMessage}]);
    clientSocket.emit('sendMessage', user.name, currentMessage)
    setCurrentMessage('');
  }

  useEffect(()=>{
    clientSocket = socketIo('http://localhost:5000');
    clientSocket.emit('createConnection', user.name, (err) => {
      alert(err);
    });
  }, []);

  useEffect(()=>{
    clientSocket.on('chat', (name, message) => {
      // setMessages([...messages, { name, message }]);
      setMessages( m => [...m, {name, message}] );
    });
  },[]);

  return (
    <>
      <Container>
        <ChatContent>
          {messages.map((message, index) => {
            return (
              <Message
                key={index}
                type={message.name === user.name ? "client" : "server"}
              >
                <Name>{message.name}</Name>
                <Content>{message.message}</Content>
              </Message>
            );
          })}
        </ChatContent>
        <NewMessage>
          <TextNewMessage
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          ></TextNewMessage>
          <SendNewMessage 
            onClick={sendNewMessage} 
            onKeyUp={e => {
              if(e.key === 13){   
                sendNewMessage()
              }
            }
          }>Enviar</SendNewMessage>
        </NewMessage>
      </Container>
    </>
  );
}

export default Chat;
