
import React from 'react';
import { User, MessageCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`w-8 h-8 border-2 border-black flex items-center justify-center flex-shrink-0 ${
        message.isUser 
          ? 'bg-black' 
          : 'bg-white'
      }`}>
        {message.isUser ? (
          <User className="w-4 h-4 text-white" />
        ) : (
          <MessageCircle className="w-4 h-4 text-black" />
        )}
      </div>
      
      <div className={`max-w-[80%] ${message.isUser ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block px-4 py-3 ${
          message.isUser 
            ? 'bg-black text-white border-2 border-black' 
            : 'bg-gray-100 text-black border-2 border-black'
        }`}>
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        <p className={`text-xs text-gray-500 mt-1 ${message.isUser ? 'text-right' : 'text-left'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
