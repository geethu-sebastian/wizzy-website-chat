
import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Sparkles } from 'lucide-react';
import ChatMessage from './ChatMessage';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
}

const ChatInterface = ({ messages, onSendMessage }: ChatInterfaceProps) => {
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Simulate typing indicator
    if (messages.length > 1 && !messages[messages.length - 1].isUser) {
      setIsTyping(false);
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      setIsTyping(true);
      onSendMessage(inputText.trim());
      setInputText('');
    }
  };

  const suggestions = [
    "Create a modern portfolio website",
    "Build a business landing page",
    "Design a blog with dark theme",
    "Make an e-commerce store"
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 border-b-2 border-black bg-black">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-white bg-white flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">AI Website Builder</h2>
            <p className="text-sm text-gray-300">Describe your vision, watch it come to life</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-black bg-black flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="bg-gray-100 border-2 border-black px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions */}
      {messages.length === 1 && (
        <div className="p-4 border-t-2 border-black">
          <p className="text-sm text-gray-600 mb-3">Try these suggestions:</p>
          <div className="grid grid-cols-1 gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSendMessage(suggestion)}
                className="text-left p-3 bg-gray-100 hover:bg-gray-200 border-2 border-black text-sm text-black transition-all duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t-2 border-black bg-gray-50">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Describe the website you want to create..."
            className="flex-1 bg-white border-2 border-black px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="bg-black text-white border-2 border-black px-6 py-3 hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
