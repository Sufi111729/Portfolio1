"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isFallback?: boolean;
}

interface ChatResponse {
  success: boolean;
  data?: {
    response: string;
    sessionId: string;
    conversationLength: number;
    timestamp: string;
    isFallback?: boolean;
  };
  error?: {
    message: string;
    details?: string;
  };
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // API Configuration
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize session and check API health
  useEffect(() => {
    if (isOpen && !sessionId) {
      initializeSession();
    }
  }, [isOpen, sessionId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Check if dark mode is enabled
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Initialize Web Speech API
  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const initializeSession = useCallback(async () => {
    try {
      // Check API health first with shorter timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

      const healthResponse = await fetch(`${API_BASE_URL}/api/chat/health`, {
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
        },
      });

      clearTimeout(timeoutId);

      if (healthResponse.ok) {
        setIsConnected(true);
        setConnectionError(null);

        // Generate a session ID (simple UUID v4 alternative)
        const newSessionId =
          "sess_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
        setSessionId(newSessionId);

        // Send welcome message
        setTimeout(() => {
          addBotMessage(
            "Hello! I'm Sufi's AI assistant powered by GPT-4. I can answer questions about Muhammad Sufiyan's skills, experience, projects, and more. How can I help you today? 🤖",
          );
        }, 500);
      } else {
        throw new Error(`API health check failed: ${healthResponse.status}`);
      }
    } catch (error) {
      console.warn("Backend not available, switching to offline mode:", error);

      // Set offline mode immediately
      setIsConnected(false);
      setConnectionError(null); // Don't show error since offline mode is expected

      // Generate offline session ID
      const offlineSessionId =
        "offline_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
      setSessionId(offlineSessionId);

      // Fallback to local responses
      setTimeout(() => {
        addBotMessage(
          "Hello! I'm Sufi's AI assistant. I'm currently in offline mode with pre-programmed responses about Muhammad Sufiyan's background, skills, and experience. How can I help you? 🤖",
        );
      }, 500);
    }
  }, [API_BASE_URL]);

  const addBotMessage = (text: string, isFallback = false) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text,
        isUser: false,
        timestamp: new Date(),
        isFallback,
      },
    ]);
  };

  const sendMessageToAPI = async (message: string): Promise<string> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          sessionId: sessionId,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data: ChatResponse = await response.json();

      if (!data.success) {
        throw new Error(data.error?.message || "API request failed");
      }

      return data.data?.response || "Sorry, I couldn't generate a response.";
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  };

  const generateFallbackResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech")
    ) {
      return "Sufi is a Full Stack Java Developer specializing in Spring Boot, React, and MySQL. He has experience with RESTful APIs, database design, and modern web development practices. For detailed technical information, please contact him directly!";
    }

    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("reach")
    ) {
      return "You can reach Muhammad Sufiyan at muhammadsufiyandev01@gmail.com or connect with him on LinkedIn at linkedin.com/in/sufiyan2k1. He's also available on GitHub as Sufi111729.";
    }

    if (
      message.includes("experience") ||
      message.includes("work") ||
      message.includes("job")
    ) {
      return "Sufi is a Computer Science graduate seeking Graduate Engineer Trainee opportunities. He has hands-on experience with full-stack development and is based in Bangalore, India, open to relocation.";
    }

    if (message.includes("project") || message.includes("portfolio")) {
      return "You can explore Sufi's projects in the Projects section above. He has built various web applications using Spring Boot and React, showcasing his full-stack capabilities. Check out his GitHub for detailed code examples!";
    }

    return "I'm currently in offline mode and have limited responses. For the most up-to-date information about Muhammad Sufiyan, please contact him directly or try again when the connection is restored.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = inputText;
    setInputText("");
    setIsTyping(true);

    try {
      let response: string;
      let isFallback = false;

      if (isConnected) {
        try {
          response = await sendMessageToAPI(currentMessage);
        } catch (apiError) {
          console.warn("API call failed, using fallback:", apiError);
          response = generateFallbackResponse(currentMessage);
          isFallback = true;
          setConnectionError("AI service temporarily unavailable");
          setIsConnected(false); // Switch to offline mode
        }
      } else {
        response = generateFallbackResponse(currentMessage);
        isFallback = true;
      }

      // Simulate typing delay
      setTimeout(
        () => {
          setIsTyping(false);
          addBotMessage(response, isFallback);
        },
        1000 + Math.random() * 1000,
      );
    } catch (error) {
      console.error("Failed to send message:", error);
      setIsTyping(false);
      addBotMessage(
        "I apologize, but I'm having trouble processing your request. Please try again or contact Sufi directly for assistance.",
        true,
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  const clearConversation = async () => {
    if (sessionId && isConnected) {
      try {
        await fetch(`${API_BASE_URL}/api/chat/${sessionId}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.error("Failed to clear server conversation:", error);
      }
    }

    setMessages([]);
    setTimeout(() => {
      addBotMessage(
        "Conversation cleared! How can I help you learn about Muhammad Sufiyan? 🤖",
      );
    }, 300);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
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
        className={`ai-assistant-toggle ${isOpen ? "open" : ""}`}
        aria-label="Open AI Assistant"
      >
        {isOpen ? "✕" : "🤖"}
        {!isConnected && (
          <span className="connection-indicator offline" title="Offline mode">
            ⚠️
          </span>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className={`ai-assistant-container ${isDarkMode ? "dark" : "light"}`}
        >
          <div className="ai-assistant-header">
            <div className="ai-assistant-avatar">
              🤖
              <span
                className={`status-dot ${isConnected ? "online" : "offline"}`}
              ></span>
            </div>
            <div className="ai-assistant-info">
              <h3>Sufi&apos;s AI Assistant</h3>
              <span className="ai-assistant-status">
                {isConnected ? "● GPT-4 Powered" : "⚠️ Offline Mode"}
              </span>
            </div>
            <div className="ai-assistant-controls">
              <button
                onClick={clearConversation}
                className="control-btn"
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                🗑️
              </button>
              <button
                onClick={toggleChatbot}
                className="control-btn close-btn"
                aria-label="Close chatbot"
              >
                ✕
              </button>
            </div>
          </div>

          {connectionError && (
            <div className="connection-error">⚠️ {connectionError}</div>
          )}

          <div className="ai-assistant-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isUser ? "user-message" : "bot-message"} ${
                  message.isFallback ? "fallback-message" : ""
                }`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    {message.isFallback && (
                      <span
                        className="fallback-indicator"
                        title="Offline response"
                      >
                        ⚠️
                      </span>
                    )}
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
                  <span className="typing-text">AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="ai-assistant-input-area">
            <div className="input-controls">
              {recognitionRef.current && (
                <button
                  onClick={toggleVoiceInput}
                  className={`voice-btn ${isListening ? "listening" : ""}`}
                  aria-label="Voice input"
                  title="Voice input"
                  disabled={isTyping}
                >
                  {isListening ? "⏹️" : "🎤"}
                </button>
              )}
            </div>
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isListening
                  ? "Listening..."
                  : "Ask me about Sufi's skills, experience..."
              }
              className="ai-assistant-input"
              disabled={isTyping || isListening}
              maxLength={2000}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping || isListening}
              className="ai-assistant-send"
              aria-label="Send message"
            >
              {isTyping ? "⏳" : "📤"}
            </button>
          </div>

          <div className="ai-assistant-suggestions">
            <button
              onClick={() =>
                setInputText("What are Sufi's main technical skills?")
              }
              disabled={isTyping}
            >
              💻 Skills
            </button>
            <button
              onClick={() =>
                setInputText("Tell me about his project experience")
              }
              disabled={isTyping}
            >
              🚀 Projects
            </button>
            <button
              onClick={() =>
                setInputText("How can I contact Muhammad Sufiyan?")
              }
              disabled={isTyping}
            >
              📞 Contact
            </button>
          </div>

          <div className="ai-assistant-footer">
            <span className="powered-by">
              {isConnected ? "Powered by OpenAI GPT-4" : "Offline Mode"}
            </span>
            <span className="session-info">
              Session: {messages.length} messages
            </span>
          </div>
        </div>
      )}
    </>
  );
}
