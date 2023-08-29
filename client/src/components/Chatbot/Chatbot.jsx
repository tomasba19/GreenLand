import ChatBot from 'react-chatbot-kit'
import style from './styles/Chatbot.css';
import 'react-chatbot-kit/build/main.css'


import { config } from './config';
import { MessageParser } from './MessageParser';
import { ActionProvider } from './ActionProvider';

export const Chatbot = () => {
  const validator = (input) => {
    if (input.length >= 3) return true;
    return false
  }
  
  return (
    <div className='chatContainer'>
      <div className='chatHeader'>
        <ChatBot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          validator={validator}
          style={style}
        />
      </div>

    </div>
  );
};


