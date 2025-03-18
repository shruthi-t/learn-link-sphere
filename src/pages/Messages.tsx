
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Send, Paperclip, ChevronLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Messages: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [message, setMessage] = useState('');
  const [showConversations, setShowConversations] = useState(!isMobile);
  
  // Mock data for conversations
  const conversations = [
    {
      id: 1,
      name: 'David Miller',
      role: 'UX Designer',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
      lastMessage: 'Looking forward to our meeting tomorrow!',
      time: '10:30 AM',
      unread: 1,
      online: true
    },
    {
      id: 2,
      name: 'Emily Zhang',
      role: 'Data Scientist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
      lastMessage: 'Let me know if you have questions about the project plan',
      time: 'Yesterday',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'James Williams',
      role: 'Startup Advisor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      lastMessage: 'I reviewed your business plan. Let\'s discuss it next week.',
      time: 'Yesterday',
      unread: 0,
      online: true
    }
  ];
  
  // Mock data for current conversation
  const currentChatMessages = [
    { id: 1, sender: 'mentor', text: 'Hi John, how are you doing today?', time: '10:15 AM' },
    { id: 2, sender: 'user', text: 'Hi David, I\'m doing well! How about you?', time: '10:18 AM' },
    { id: 3, sender: 'mentor', text: 'I\'m great, thanks for asking. Have you made progress on the UI design we discussed last time?', time: '10:20 AM' },
    { id: 4, sender: 'user', text: 'Yes, I\'ve been working on the wireframes. I\'ve completed about 70% of them and I\'m hoping to finish by tomorrow.', time: '10:25 AM' },
    { id: 5, sender: 'mentor', text: 'That sounds great! I\'m looking forward to our meeting tomorrow where we can review them together.', time: '10:30 AM' }
  ];
  
  const getCurrentChat = () => {
    return conversations.find(c => c.id === activeChat);
  };
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    // In a real app, we would send the message to the API
    // For this demo, we'll just clear the input
    setMessage('');
  };
  
  const toggleConversationView = () => {
    setShowConversations(!showConversations);
  };
  
  const handleConversationClick = (id: number) => {
    setActiveChat(id);
    if (isMobile) {
      setShowConversations(false);
    }
  };

  return (
    <Layout>
      <div className="animate-fade-in max-w-7xl mx-auto h-[calc(100vh-12rem)]">
        <div className="mb-4">
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground mt-1">Stay connected with your mentors</p>
        </div>
        
        <div className="glass-card rounded-xl shadow-lg overflow-hidden h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* Conversation sidebar */}
          {(showConversations || !isMobile) && (
            <div className="md:col-span-1 border-r">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder="Search conversations..." 
                    className="pl-9"
                  />
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(100%-70px)]">
                {conversations.map((conversation) => (
                  <div 
                    key={conversation.id}
                    className={`p-4 border-b cursor-pointer transition-colors hover:bg-muted/50 ${activeChat === conversation.id ? 'bg-muted/50' : ''}`}
                    onClick={() => handleConversationClick(conversation.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={conversation.avatar} 
                          alt={conversation.name} 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <p className="font-medium truncate">{conversation.name}</p>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{conversation.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{conversation.role}</p>
                        <p className="text-sm truncate mt-1">
                          {conversation.lastMessage}
                        </p>
                      </div>
                      {conversation.unread > 0 && (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-xs text-white">{conversation.unread}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Chat view */}
          {(!showConversations || !isMobile) && activeChat && (
            <div className="md:col-span-2 lg:col-span-3 flex flex-col h-full">
              {/* Chat header */}
              <div className="p-4 border-b flex items-center gap-3">
                {isMobile && (
                  <Button variant="ghost" size="icon" onClick={toggleConversationView} className="md:hidden">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                )}
                <div className="relative flex-shrink-0">
                  <img 
                    src={getCurrentChat()?.avatar} 
                    alt={getCurrentChat()?.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {getCurrentChat()?.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div>
                  <p className="font-medium">{getCurrentChat()?.name}</p>
                  <p className="text-xs text-muted-foreground">{getCurrentChat()?.role}</p>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentChatMessages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`
                        max-w-xs md:max-w-md lg:max-w-lg rounded-2xl p-3 
                        ${msg.sender === 'user' 
                          ? 'bg-primary text-primary-foreground rounded-tr-none' 
                          : 'bg-muted rounded-tl-none'
                        }
                      `}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-foreground/75' : 'text-muted-foreground'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message input */}
              <div className="p-4 border-t mt-auto">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
