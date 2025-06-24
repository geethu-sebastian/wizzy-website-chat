
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
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #ffffff; font-family: Arial, sans-serif;">
      <div style="text-align: center; color: #000000; padding: 2rem;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Welcome</h1>
        <p style="font-size: 1.2rem; opacity: 0.7;">Start chatting to create your custom website!</p>
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
          <div style="min-height: 100vh; background: #000000; font-family: Arial, sans-serif; color: #ffffff;">
            <nav style="padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; background: #ffffff; color: #000000; border-bottom: 2px solid #000000;">
              <h2 style="margin: 0;">John Doe</h2>
              <div style="display: flex; gap: 2rem;">
                <a href="#" style="color: #000000; text-decoration: none;">About</a>
                <a href="#" style="color: #000000; text-decoration: none;">Projects</a>
                <a href="#" style="color: #000000; text-decoration: none;">Contact</a>
              </div>
            </nav>
            <div style="padding: 4rem 2rem; text-align: center;">
              <h1 style="font-size: 3.5rem; margin-bottom: 1rem;">Creative Developer</h1>
              <p style="font-size: 1.3rem; opacity: 0.8; max-width: 600px; margin: 0 auto 2rem;">I create beautiful and functional web experiences that bring ideas to life.</p>
              <button style="background: #ffffff; color: #000000; border: 2px solid #ffffff; padding: 1rem 2rem; border-radius: 0; font-size: 1.1rem; cursor: pointer;">View My Work</button>
            </div>
            <div style="padding: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto;">
              <div style="background: #ffffff; color: #000000; padding: 2rem; border: 2px solid #000000;">
                <h3>Project One</h3>
                <p>Amazing web application built with modern technologies.</p>
              </div>
              <div style="background: #ffffff; color: #000000; padding: 2rem; border: 2px solid #000000;">
                <h3>Project Two</h3>
                <p>Beautiful mobile-first design with great user experience.</p>
              </div>
              <div style="background: #ffffff; color: #000000; padding: 2rem; border: 2px solid #000000;">
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
          <div style="min-height: 100vh; background: #ffffff; font-family: Arial, sans-serif; color: #000000;">
            <nav style="padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; background: #000000; color: #ffffff;">
              <h2 style="margin: 0;">TechCorp</h2>
              <div style="display: flex; gap: 2rem;">
                <a href="#" style="color: #ffffff; text-decoration: none;">Services</a>
                <a href="#" style="color: #ffffff; text-decoration: none;">About</a>
                <a href="#" style="color: #ffffff; text-decoration: none;">Contact</a>
              </div>
            </nav>
            <div style="background: #000000; color: #ffffff; padding: 4rem 2rem; text-align: center;">
              <h1 style="font-size: 3rem; margin-bottom: 1rem;">Innovating the Future</h1>
              <p style="font-size: 1.3rem; opacity: 0.8; max-width: 600px; margin: 0 auto 2rem;">We provide cutting-edge solutions for modern businesses.</p>
              <button style="background: #ffffff; color: #000000; border: 2px solid #ffffff; padding: 1rem 2rem; border-radius: 0; font-size: 1.1rem; cursor: pointer; margin-right: 1rem;">Get Started</button>
              <button style="background: transparent; color: #ffffff; border: 2px solid #ffffff; padding: 1rem 2rem; border-radius: 0; font-size: 1.1rem; cursor: pointer;">Learn More</button>
            </div>
            <div style="padding: 4rem 2rem; text-align: center;">
              <h2 style="margin-bottom: 3rem;">Our Services</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto;">
                <div style="padding: 2rem; border: 2px solid #000000;">
                  <h3>Web Development</h3>
                  <p>Custom websites and applications built for your needs.</p>
                </div>
                <div style="padding: 2rem; border: 2px solid #000000;">
                  <h3>Digital Marketing</h3>
                  <p>Grow your online presence with our marketing expertise.</p>
                </div>
                <div style="padding: 2rem; border: 2px solid #000000;">
                  <h3>Consulting</h3>
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
          <div style="min-height: 100vh; background: #ffffff; font-family: Georgia, serif; color: #000000;">
            <nav style="padding: 1rem 2rem; background: #000000; color: #ffffff; display: flex; justify-content: space-between; align-items: center;">
              <h2 style="margin: 0;">The Daily Blog</h2>
              <div style="display: flex; gap: 2rem;">
                <a href="#" style="color: #ffffff; text-decoration: none;">Home</a>
                <a href="#" style="color: #ffffff; text-decoration: none;">Categories</a>
                <a href="#" style="color: #ffffff; text-decoration: none;">About</a>
              </div>
            </nav>
            <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
              <div style="background: #000000; color: #ffffff; padding: 3rem; margin-bottom: 3rem; text-align: center;">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Welcome to Our Blog</h1>
                <p style="font-size: 1.2rem; opacity: 0.8;">Discover amazing stories and insights from our community</p>
              </div>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
                <article style="background: #ffffff; border: 2px solid #000000; overflow: hidden;">
                  <div style="height: 200px; background: #000000; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 1.2rem;">Featured Image</div>
                  <div style="padding: 1.5rem;">
                    <h3 style="margin-bottom: 0.5rem;">The Future of Web Development</h3>
                    <p style="color: #666; margin-bottom: 1rem;">Exploring the latest trends and technologies shaping the web development landscape...</p>
                    <small style="color: #999;">March 15, 2024</small>
                  </div>
                </article>
                <article style="background: #ffffff; border: 2px solid #000000; overflow: hidden;">
                  <div style="height: 200px; background: #000000; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 1.2rem;">Featured Image</div>
                  <div style="padding: 1.5rem;">
                    <h3 style="margin-bottom: 0.5rem;">Design Trends for 2024</h3>
                    <p style="color: #666; margin-bottom: 1rem;">Discover the design patterns and aesthetics that will dominate this year...</p>
                    <small style="color: #999;">March 12, 2024</small>
                  </div>
                </article>
                <article style="background: #ffffff; border: 2px solid #000000; overflow: hidden;">
                  <div style="height: 200px; background: #000000; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 1.2rem;">Featured Image</div>
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
        <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #ffffff; font-family: Arial, sans-serif;">
          <div style="text-align: center; color: #000000; padding: 2rem; background: #ffffff; border: 3px solid #000000;">
            <h1 style="font-size: 3rem; margin-bottom: 1rem;">✨ AI Website Builder</h1>
            <p style="font-size: 1.2rem; opacity: 0.7; margin-bottom: 2rem;">Tell me what kind of website you'd like and I'll create it for you!</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <span style="background: #000000; color: #ffffff; padding: 0.5rem 1rem; font-size: 0.9rem;">Portfolio</span>
              <span style="background: #000000; color: #ffffff; padding: 0.5rem 1rem; font-size: 0.9rem;">Business</span>
              <span style="background: #000000; color: #ffffff; padding: 0.5rem 1rem; font-size: 0.9rem;">Blog</span>
              <span style="background: #000000; color: #ffffff; padding: 0.5rem 1rem; font-size: 0.9rem;">E-commerce</span>
            </div>
          </div>
        </div>
      `
    };
  };

  return (
    <div className="h-screen flex bg-white">
      <div className="w-1/2 border-r-2 border-black">
        <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
      </div>
      <div className="w-1/2">
        <WebsitePreview content={websiteContent} />
      </div>
    </div>
  );
};

export default Index;
