import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';
import { ContactProvider } from './contexts/ContactContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ModalProvider>
        <AuthProvider>
          <ContactProvider>
            <App />
          </ContactProvider>
        </AuthProvider>
      </ModalProvider>
    </LanguageProvider>
  </StrictMode>,
);
