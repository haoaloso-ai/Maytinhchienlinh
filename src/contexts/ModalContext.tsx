import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isContactModalOpen: boolean;
  setIsContactModalOpen: (open: boolean) => void;
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  isInboxModalOpen: boolean;
  setIsInboxModalOpen: (open: boolean) => void;
  isAdminLoginModalOpen: boolean;
  setIsAdminLoginModalOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isInboxModalOpen, setIsInboxModalOpen] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);

  return (
    <ModalContext.Provider 
      value={{ 
        isContactModalOpen, 
        setIsContactModalOpen,
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        isInboxModalOpen,
        setIsInboxModalOpen,
        isAdminLoginModalOpen,
        setIsAdminLoginModalOpen
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
