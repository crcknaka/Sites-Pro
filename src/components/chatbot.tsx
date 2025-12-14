'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help you learn more about Sites Pro. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response (replace with actual API call later)
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('service') || lowerInput.includes('what do you do')) {
      return "We offer web development, mobile apps, AI solutions, and automation services. Would you like to know more about any specific service?";
    }

    if (lowerInput.includes('web') || lowerInput.includes('website')) {
      return "We create modern, responsive websites using the latest technologies. Check out our portfolio to see some examples of our work!";
    }

    if (lowerInput.includes('app') || lowerInput.includes('mobile')) {
      return "We develop mobile applications for both iOS and Android platforms. We can help bring your app idea to life!";
    }

    if (lowerInput.includes('ai') || lowerInput.includes('artificial intelligence')) {
      return "We provide AI solutions including chatbots, automation, and custom AI integrations. How can AI help your business?";
    }

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much')) {
      return "Pricing depends on your specific project requirements. Please fill out our contact form or send us a message, and we'll provide a customized quote!";
    }

    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email')) {
      return "You can reach us through the contact form on this page, or connect with us on LinkedIn, Facebook, or Telegram. We'd love to hear from you!";
    }

    if (lowerInput.includes('portfolio') || lowerInput.includes('project') || lowerInput.includes('work')) {
      return "You can view our portfolio projects on this website. Each project showcases our expertise in different technologies and industries.";
    }

    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! Thanks for visiting Sites Pro. How can I help you today?";
    }

    return "That's interesting! For more specific information, I'd recommend checking out our services page or contacting us directly. Is there anything else I can help with?";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-6 right-6
          z-50
          flex h-14 w-14 items-center justify-center
          rounded-full
          bg-[var(--accent-1)]
          text-white
          shadow-lg
          transition-all
          hover:scale-110
          hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:ring-offset-2
        "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              fixed bottom-24 right-6
              z-40
              flex h-[600px] w-[400px] max-w-[calc(100vw-3rem)]
              flex-col
              rounded-2xl
              bg-[var(--surface)]
              backdrop-blur-xl
              border border-[var(--border)]
              shadow-2xl
              overflow-hidden
            "
          >
            {/* Header */}
            <div
              className="
                flex items-center justify-between
                px-6 py-4
                border-b border-[var(--border)]
                bg-[var(--surface-strong)]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    bg-[var(--accent-1)]
                    text-white
                  "
                >
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--fg)]">Sites Pro Assistant</h3>
                  <p className="text-xs text-[var(--text-muted)]">We're here to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              className="
                flex-1
                overflow-y-auto
                px-6 py-4
                space-y-4
                scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent
              "
            >
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full
                      bg-[var(--surface-strong)]
                      border border-[var(--border)]
                    "
                  >
                    <Bot className="h-5 w-5 text-[var(--accent-1)]" />
                  </div>
                  <TypingIndicator />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="
                border-t border-[var(--border)]
                bg-[var(--surface-strong)]
                p-4
              "
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  className="
                    flex-1
                    rounded-lg
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    px-4 py-2
                    text-sm text-[var(--fg)]
                    placeholder:text-[var(--text-subtle)]
                    focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:border-transparent
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    bg-[var(--accent-1)]
                    text-white
                    transition-all
                    hover:bg-[var(--accent-1)]/90
                    disabled:opacity-50 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] focus:ring-offset-2
                  "
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div
        className={`
          flex h-8 w-8 shrink-0 items-center justify-center
          rounded-full
          ${isUser ? 'bg-[var(--accent-2)]' : 'bg-[var(--surface-strong)] border border-[var(--border)]'}
        `}
      >
        {isUser ? (
          <User className="h-4 w-4 text-white" />
        ) : (
          <Bot className="h-4 w-4 text-[var(--accent-1)]" />
        )}
      </div>
      <div
        className={`
          max-w-[80%]
          rounded-2xl px-4 py-2
          ${isUser
            ? 'bg-[var(--accent-2)] text-white'
            : 'bg-[var(--surface-strong)] border border-[var(--border)] text-[var(--fg)]'
          }
        `}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div
      className="
        rounded-2xl
        bg-[var(--surface-strong)]
        border border-[var(--border)]
        px-4 py-2
      "
    >
      <div className="flex gap-1">
        <span
          className="h-2 w-2 rounded-full bg-[var(--text-muted)] animate-pulse"
          style={{ animationDelay: '0ms' }}
        />
        <span
          className="h-2 w-2 rounded-full bg-[var(--text-muted)] animate-pulse"
          style={{ animationDelay: '150ms' }}
        />
        <span
          className="h-2 w-2 rounded-full bg-[var(--text-muted)] animate-pulse"
          style={{ animationDelay: '300ms' }}
        />
      </div>
    </div>
  );
}

