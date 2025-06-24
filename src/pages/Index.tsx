
import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import WebsitePreview from '../components/WebsitePreview';

const Index = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI website builder. Describe the website you'd like to create and I'll build it for you in real-time!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const [websiteContent, setWebsiteContent] = useState(`
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: Arial, sans-serif;">
      <div style="text-align: center; color: white; padding: 2rem;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Welcome</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">Start chatting to create your custom website!</p>
      </div>
    </div>
  `);

  const handleSendMessage = (text: string) => {
    const userMessage = {
      id: messages.length + 1,
      text,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response and website generation
    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const aiMessage = {
        id: messages.length + 2,
        text: aiResponse.text,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setWebsiteContent(aiResponse.websiteContent);
    }, 1000);
  };

  const generateAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('portfolio') || input.includes('personal')) {
      return {
        text: "Great! I'm creating a modern portfolio website for you with sections for your projects and skills.",
        websiteContent: `
          <div style="min-height: 100vh; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); font-family: Arial, sans-serif; color: white;">
            <nav style="padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);">
              <h2 style="margin: 0;">John Doe</h2>
              <div style="display: flex; gap: 2rem;">
                <a href="#" style="color: white; text-decoration: none;">About</a>
                <a href="#" style="color: white; text-decoration: none;">Projects</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
              </div>
            </nav>
            <div style="padding: 4rem 2rem; text-align: center;">
              <h1 style="font-size: 3.5rem; margin-bottom: 1rem;">Creative Developer</h1>
              <p style="font-size: 1.3rem; opacity: 0.9; max-width: 600px; margin: 0 auto 2rem;">I create beautiful and functional web experiences that bring ideas to life.</p>
              <button style="background: #ff6b6b; color: white; border: none; padding: 1rem 2rem; border-radius: 50px; font-size: 1.1rem; cursor: pointer;">View My Work</button>
            </div>
            <div style="padding: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto;">
              <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px);">
                <h3>Project One</h3>
                <p>Amazing web application built with modern technologies.</p>
              </div>
              <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px);">
                <h3>Project Two</h3>
                <p>Beautiful mobile-first design with great user experience.</p>
              </div>
              <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; backdrop-filter: blur(10px);">
                <h3>Project Three</h3>
                <p>Full-stack application with real-time features.</p>
              </div>
            </div>
          </div>
        `
      };
    }
    
    if (input.includes('business') || input.includes('company') || input.includes('startup')) {
      return {
        text: "Perfect! I'm building a professional business website with a clean layout and call-to-action sections.",
        websiteContent: `
          <div style="min-height: 100vh; background: white; font-family: Arial, sans-serif; color: #333;">
            <nav style="padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; background: #2c3e50; color: white;">
              <h2 style="margin: 0;">TechCorp</h2>
              <div style="display: flex; gap: 2rem;">
                <a href="#" style="color: white; text-decoration: none;">Services</a>
                <a href="#" style="color: white; text-decoration: none;">About</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
              </div>
            </nav>
            <div style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); color: white; padding: 4rem 2rem; text-align: center;">
              <h1 style="font-size: 3rem; margin-bottom: 1rem;">Innovating the Future</h1>
              <p style="font-size: 1.3rem; opacity: 0.9; max-width: 600px; margin: 0 auto 2rem;">We provide cutting-edge solutions for modern businesses.</p>
              <button style="background: #e74c3c; color: white; border: none; padding: 1rem 2rem; border-radius: 5px; font-size: 1.1rem; cursor: pointer; margin-right: 1rem;">Get Started</button>
              <button style="background: transparent; color: white; border: 2px solid white; padding: 1rem 2rem; border-radius: 5px; font-size: 1.1rem; cursor: pointer;">Learn More</button>
            </div>
            <div style="padding: 4rem 2rem; text-align: center;">
              <h2 style="margin-bottom: 3rem;">Our Services</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto;">
                <div style="padding: 2rem; border: 1px solid #eee; border-radius: 10px;">
                  <h3 style="color: #3498db;">Web Development</h3>
                  <p>Custom websites and applications built for your needs.</p>
                </div>
                <div style="padding: 2rem; border: 1px solid #eee; border-radius: 10px;">
                  <h3 style="color: #3498db;">Digital Marketing</h3>
                  <p>Grow your online presence with our marketing expertise.</p>
                </div>
                <div style="padding: 2rem; border: 1px solid #eee; border-radius: 10px;">
                  <h3 style="color: #3498db;">Consulting</h3>
                  <p>Strategic guidance to help your business succeed.</p>
                </div>
              </div>
            </div>
          </div>
        `
      };
    }
    
    if (input.includes('blog') || input.includes('news') || input.includes('article')) {
      return {
        text: "Excellent! I'm creating a modern blog layout with featured articles and a clean reading experience.",
        websiteContent: `
          <div style="min-height: 100vh; background: #f8f9fa; font-family: Georgia, serif; color: #333;">
            <nav style="padding: 1rem 2rem; background: white; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
              <h2 style="margin: 0; color: #2c3e50;">The Daily Blog</h2>
              <div style="display: flex; gap: 2rem;">
                <a href="#" style="color: #2c3e50; text-decoration: none;">Home</a>
                <a href="#" style="color: #2c3e50; text-decoration: none;">Categories</a>
                <a href="#" style="color: #2c3e50; text-decoration: none;">About</a>
              </div>
            </nav>
            <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 3rem; border-radius: 15px; margin-bottom: 3rem; text-align: center;">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Welcome to Our Blog</h1>
                <p style="font-size: 1.2rem; opacity: 0.9;">Discover amazing stories and insights from our community</p>
              </div>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
                <article style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <div style="height: 200px; background: linear-gradient(45deg, #ff6b6b, #ffa726); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem;">Featured Image</div>
                  <div style="padding: 1.5rem;">
                    <h3 style="margin-bottom: 0.5rem;">The Future of Web Development</h3>
                    <p style="color: #666; margin-bottom: 1rem;">Exploring the latest trends and technologies shaping the web development landscape...</p>
                    <small style="color: #999;">March 15, 2024</small>
                  </div>
                </article>
                <article style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <div style="height: 200px; background: linear-gradient(45deg, #4ecdc4, #44a08d); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem;">Featured Image</div>
                  <div style="padding: 1.5rem;">
                    <h3 style="margin-bottom: 0.5rem;">Design Trends for 2024</h3>
                    <p style="color: #666; margin-bottom: 1rem;">Discover the design patterns and aesthetics that will dominate this year...</p>
                    <small style="color: #999;">March 12, 2024</small>
                  </div>
                </article>
                <article style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <div style="height: 200px; background: linear-gradient(45deg, #a8edea, #fed6e3); display: flex; align-items: center; justify-content: center; color: #333; font-size: 1.2rem;">Featured Image</div>
                  <div style="padding: 1.5rem;">
                    <h3 style="margin-bottom: 0.5rem;">Building Better User Experiences</h3>
                    <p style="color: #666; margin-bottom: 1rem;">Learn how to create intuitive and engaging interfaces that users love...</p>
                    <small style="color: #999;">March 10, 2024</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        `
      };
    }
    
    // Default response
    return {
      text: "I understand! Let me create a beautiful website based on your request. Can you tell me more about what type of website you'd like? For example: portfolio, business, blog, e-commerce, or something else?",
      websiteContent: `
        <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); font-family: Arial, sans-serif;">
          <div style="text-align: center; color: white; padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px);">
            <h1 style="font-size: 3rem; margin-bottom: 1rem;">✨ AI Website Builder</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 2rem;">Tell me what kind of website you'd like and I'll create it for you!</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 25px; font-size: 0.9rem;">Portfolio</span>
              <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 25px; font-size: 0.9rem;">Business</span>
              <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 25px; font-size: 0.9rem;">Blog</span>
              <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 25px; font-size: 0.9rem;">E-commerce</span>
            </div>
          </div>
        </div>
      `
    };
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="w-1/2 border-r border-white/10">
        <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
      </div>
      <div className="w-1/2">
        <WebsitePreview content={websiteContent} />
      </div>
    </div>
  );
};

export default Index;
