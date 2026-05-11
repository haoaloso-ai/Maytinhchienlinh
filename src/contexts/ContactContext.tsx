import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  content: string;
  createdAt: string;
  read: boolean;
}

interface ContactContextType {
  messages: ContactMessage[];
  addMessage: (name: string, phone: string, content: string) => void;
  markAllAsRead: () => void;
  hasUnread: boolean;
  deleteMessage: (id: string) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('contact_messages');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('contact_messages', JSON.stringify(messages));
  }, [messages]);

  const addMessage = (name: string, phone: string, content: string) => {
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name,
      phone,
      content,
      createdAt: new Date().toISOString(),
      read: false,
    };
    setMessages((prev) => [newMessage, ...prev]);
  };

  const markAllAsRead = () => {
    setMessages((prev) => prev.map((msg) => ({ ...msg, read: true })));
  };

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const hasUnread = messages.some((msg) => !msg.read);

  return (
    <ContactContext.Provider 
      value={{ 
        messages, 
        addMessage, 
        markAllAsRead, 
        hasUnread,
        deleteMessage
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContacts must be used within a ContactProvider');
  }
  return context;
}
