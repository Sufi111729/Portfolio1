"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm Sufi's AI assistant 🤖 How can I help you learn more about Muhammad Sufiyan?",
    "Hi there! Welcome to Sufi's portfolio ✨ What would you like to know?",
    "Greetings! I'm here to answer your questions about Sufi's skills and experience 💼",
    "Hey! 👋 I'm the AI assistant for this portfolio. Ask me anything about Sufi!",
  ],
  skills: [
    "Sufi is a Full Stack Java Developer specializing in:\n\n🔸 Spring Boot (Backend)\n🔸 React (Frontend)\n🔸 MySQL (Database)\n🔸 RESTful APIs\n🔸 Git & Version Control\n\nHe's passionate about creating efficient and scalable web applications! 🚀",
    "Muhammad Sufiyan has expertise in:\n\n💻 Java & Spring Boot\n⚛️ React & JavaScript\n🗄️ MySQL & Database Design\n🔧 Modern Development Tools\n\nHe loves building enterprise-level applications! 💪",
    "Sufi's tech stack includes:\n\n• Backend: Java, Spring Boot, MySQL\n• Frontend: React, JavaScript, HTML/CSS\n• Tools: Git, RESTful APIs, Database Design\n\nHe's always learning new technologies! 📚",
  ],
  experience: [
    "Sufi is a Computer Science graduate 🎓 seeking Graduate Engineer Trainee opportunities. He has hands-on experience with:\n\n📊 Full-stack development\n🏢 Enterprise applications\n🌐 Web technologies\n📍 Based in Bangalore, India",
    "Muhammad Sufiyan has experience in:\n\n🔹 Database management\n🔹 Modern frontend frameworks\n🔹 Backend API development\n🔹 Project architecture\n\nHe's ready to contribute to telecom and network infrastructure projects! 📡",
    "Sufi brings fresh graduate energy with practical skills:\n\n✅ Academic excellence in Computer Science\n✅ Real-world project experience\n✅ Modern development practices\n✅ Team collaboration skills",
  ],
  projects: [
    "You can explore Sufi's projects in the Projects section above! 👆 He has built:\n\n🌐 Web applications using Spring Boot\n⚛️ Interactive React frontends\n🔗 RESTful API integrations\n📱 Responsive designs\n\nCheck out his GitHub for detailed code examples! 💻",
    "Sufi has developed several impressive projects:\n\n🚀 Full-stack web applications\n💾 Database-driven solutions\n🎨 Modern UI/UX designs\n🔧 Well-structured code\n\nHis GitHub profile showcases his coding style and best practices! 📝",
    "Here's what you'll find in Sufi's project portfolio:\n\n• Spring Boot backend services\n• React frontend applications\n• MySQL database integration\n• Clean, maintainable code\n\nEach project demonstrates his full-stack capabilities! 💡",
  ],
  contact: [
    "Ready to connect with Sufi? Here are the ways to reach him:\n\n📧 Email: muhammadsufiyandev01@gmail.com\n💼 LinkedIn: linkedin.com/in/sufiyan2k1\n👨‍💻 GitHub: github.com/Sufi111729\n📄 Resume: Available for download above!\n\nHe's actively seeking opportunities! 🎯",
    "Sufi is open to opportunities and collaborations! 🤝\n\n• Professional discussions\n• Job opportunities\n• Project collaborations\n• Technical mentorship\n\nFeel free to reach out through any of his social links! 📞",
    "Want to hire Sufi or discuss a project? 💼\n\n✉️ Best way: Email him directly\n🔗 Professional: LinkedIn connection\n👀 Code samples: Check his GitHub\n📊 Quick overview: Download his resume\n\nHe responds quickly to opportunities! ⚡",
  ],
  location: [
    "Sufi is currently based in Bangalore, India 🇮🇳\n\n📍 Currently: Bangalore, Karnataka\n✈️ Open to: Relocation worldwide\n🎯 Target: Graduate Engineer positions\n🌍 Flexible: Remote or on-site work\n\nHe's ready for the next adventure! 🚀",
    "Location details for Muhammad Sufiyan:\n\n🏙️ Home base: Bangalore (Silicon Valley of India)\n🚚 Relocation: Absolutely open to it!\n💼 Preference: Exciting opportunities anywhere\n🌐 Remote work: Also comfortable with it\n\nGeography won't limit his career growth! 🗺️",
  ],
  education: [
    "Sufi has a strong educational background:\n\n🎓 Computer Science Graduate\n📚 Strong foundation in programming\n🧮 Data structures & algorithms\n💻 Software engineering principles\n🔬 Problem-solving methodology\n\nAcademic excellence meets practical skills! 📈",
  ],
  personality: [
    "Here's what makes Sufi special:\n\n😊 Passionate about technology\n🧠 Quick learner and adapter\n🤝 Great team collaborator\n💡 Creative problem solver\n🎯 Goal-oriented professional\n\nHe brings positive energy to every project! ⚡",
    "Sufi's professional qualities:\n\n✨ Enthusiastic about coding\n🔍 Detail-oriented approach\n📈 Growth mindset\n🤲 Helpful team player\n🚀 Ready for challenges\n\nHe's the kind of developer teams love working with! 💫",
  ],
  thanks: [
    "You're welcome! 😊 Is there anything else you'd like to know about Sufi?",
    "Happy to help! 🌟 Feel free to ask more questions about Muhammad Sufiyan!",
    "Glad I could assist! 🤖 Any other questions about Sufi's background or skills?",
  ],
  default: [
    "That's an interesting question! 🤔 For more specific information about Sufi's background, you can explore his portfolio sections or reach out to him directly.",
    "I'd recommend checking out the different sections of Sufi's portfolio 📋 or contacting him directly for more detailed information!",
    "For the most up-to-date information about Muhammad Sufiyan's work and experience, feel free to explore his portfolio or get in touch with him! 📞",
    "Great question! 💭 While I have lots of info about Sufi, he'd be the best person to give you detailed answers about that topic!",
  ],
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send welcome message when first opened
      setTimeout(() => {
        addBotMessage(getRandomResponse("greeting"));
      }, 500);
    }
  }, [isOpen, messages.length]);

  const getRandomResponse = (category: keyof typeof predefinedResponses) => {
    const responses = predefinedResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return getRandomResponse("greeting");
    }

    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech") ||
      message.includes("java") ||
      message.includes("react") ||
      message.includes("spring") ||
      message.includes("mysql") ||
      message.includes("database") ||
      message.includes("api")
    ) {
      return getRandomResponse("skills");
    }

    if (
      message.includes("experience") ||
      message.includes("work") ||
      message.includes("job") ||
      message.includes("career") ||
      message.includes("background") ||
      message.includes("professional")
    ) {
      return getRandomResponse("experience");
    }

    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("github") ||
      message.includes("code") ||
      message.includes("development") ||
      message.includes("built")
    ) {
      return getRandomResponse("projects");
    }

    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("reach") ||
      message.includes("hire") ||
      message.includes("linkedin") ||
      message.includes("resume")
    ) {
      return getRandomResponse("contact");
    }

    if (
      message.includes("location") ||
      message.includes("bangalore") ||
      message.includes("where") ||
      message.includes("based") ||
      message.includes("india") ||
      message.includes("relocation")
    ) {
      return getRandomResponse("location");
    }

    if (
      message.includes("education") ||
      message.includes("degree") ||
      message.includes("graduate") ||
      message.includes("university") ||
      message.includes("college") ||
      message.includes("study")
    ) {
      return getRandomResponse("education");
    }

    if (
      message.includes("personality") ||
      message.includes("about") ||
      message.includes("person") ||
      message.includes("character") ||
      message.includes("qualities") ||
      message.includes("team")
    ) {
      return getRandomResponse("personality");
    }

    if (
      message.includes("thank") ||
      message.includes("thanks") ||
      message.includes("appreciate")
    ) {
      return getRandomResponse("thanks");
    }

    return getRandomResponse("default");
  };

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text,
        isUser: false,
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(
      () => {
        setIsTyping(false);
        const response = generateResponse(inputText);
        addBotMessage(response);
      },
      1000 + Math.random() * 1000,
    ); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Focus input when opening
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className="chatbot-toggle"
        aria-label="Open AI Assistant"
      >
        {isOpen ? "✕" : "🤖"}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-avatar">🤖</div>
            <div className="chatbot-info">
              <h3>Sufi AI Assistant</h3>
              <span className="chatbot-status">● Online</span>
            </div>
            <button
              onClick={toggleChatbot}
              className="chatbot-close"
              aria-label="Close chatbot"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isUser ? "user-message" : "bot-message"}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message bot-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Sufi's skills, experience..."
              className="chatbot-input"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="chatbot-send"
              aria-label="Send message"
            >
              📤
            </button>
          </div>

          <div className="chatbot-suggestions">
            <button
              onClick={() => setInputText("What are Sufi's main skills?")}
            >
              Skills
            </button>
            <button onClick={() => setInputText("Tell me about his projects")}>
              Projects
            </button>
            <button onClick={() => setInputText("How can I contact him?")}>
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
