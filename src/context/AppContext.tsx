import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { User, Language, Message } from '../types/index';

interface AppContextType {
  // User State
  user: User | null;
  setUser: (user: User | null) => void;

  // Language State
  language: Language;
  setLanguage: (language: Language) => void;

  // Points State
  points: number;
  setPoints: (points: number) => void;

  // Notifications
  notificationCount: number;
  setNotificationCount: (count: number) => void;

  // Messages Cache
  messages: Message[];
  setMessages: (messages: Message[]) => void;

  // Loading State
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // Error State
  error: string | null;
  setError: (error: string | null) => void;

  // Utility Functions
  clearError: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('whaledone_language');
    return (saved as Language) || 'ko';
  });
  const [points, setPoints] = useState(1200);
  const [notificationCount, setNotificationCount] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const logout = useCallback(() => {
    setUser(null);
    setMessages([]);
    setPoints(1200);
    setNotificationCount(0);
    setError(null);
  }, []);

  // Persist language preference
  React.useEffect(() => {
    localStorage.setItem('whaledone_language', language);
  }, [language]);

  const value: AppContextType = {
    user,
    setUser,
    language,
    setLanguage,
    points,
    setPoints,
    notificationCount,
    setNotificationCount,
    messages,
    setMessages,
    isLoading,
    setIsLoading,
    error,
    setError,
    clearError,
    logout,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
