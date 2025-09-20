import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}


export default function Chatbot() {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: language === 'en' 
        ? 'Hello! I\'m your agricultural assistant. How can I help you today?' 
        : 'नमस्ते! मैं आपका कृषि सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const chatMutation = useMutation({
    mutationFn: async ({ message, language }: { message: string; language: string }) => {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, language })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Request failed');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    },
    onError: (error) => {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'तकनीकी समस्या के कारण उत्तर नहीं दे सकता। कृपया बाद में प्रयास करें। (Unable to respond due to technical issues. Please try again later.)',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const sendMessage = () => {
    if (!inputMessage.trim() || chatMutation.isPending) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputMessage;
    setInputMessage('');

    // Send message to Gemini AI
    chatMutation.mutate({ message: messageToSend, language });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <section id="chatbot" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2" data-testid="text-chatbot-title">
          {t('chatbot_title')}
        </h2>
        <p className="text-muted-foreground" data-testid="text-chatbot-subtitle">
          {t('chatbot_subtitle')}
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <CardTitle>कृषि सहायक / Agricultural Assistant</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ScrollArea className="h-96 border rounded-lg p-4" data-testid="chatbot-messages">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    data-testid={`message-${message.sender}-${message.id}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === 'bot' && (
                          <Bot className="h-4 w-4 mt-1 flex-shrink-0" />
                        )}
                        {message.sender === 'user' && (
                          <User className="h-4 w-4 mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <div className="text-sm">
                            {message.text.split('\n').map((line, index) => (
                              <div key={index} className="mb-2 last:mb-0">
                                {line.trim() === '' ? <br /> : (
                                  <p className="leading-relaxed">
                                    {line.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/).map((part, partIndex) => {
                                      if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={partIndex} className="font-semibold">{part.slice(2, -2)}</strong>;
                                      } else if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                                        return <em key={partIndex} className="italic">{part.slice(1, -1)}</em>;
                                      } else if (part.startsWith('`') && part.endsWith('`')) {
                                        return <code key={partIndex} className="bg-background/50 text-foreground px-1 py-0.5 rounded text-xs font-mono border">{part.slice(1, -1)}</code>;
                                      } else {
                                        return part;
                                      }
                                    })}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                          <p className="text-xs opacity-70 mt-2">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {chatMutation.isPending && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-lg bg-muted text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Bot className="h-4 w-4 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm">टाइप कर रहा है... / Typing...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="flex gap-2">
              <Input
                type="text"
                placeholder={t('type_message')}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
                data-testid="input-chatbot-message"
              />
              <Button 
                onClick={sendMessage}
                size="icon"
                disabled={!inputMessage.trim() || chatMutation.isPending}
                data-testid="button-send-message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}