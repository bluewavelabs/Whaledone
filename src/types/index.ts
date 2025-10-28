// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

// Contact Types
export interface Contact {
  id: string;
  name: string;
  role?: string;
  company?: string;
  avatar: string;
  registered: boolean;
  phone?: string;
  group?: string;
}

// Message Types
export interface MessageStats {
  sentiment: 'positive' | 'very_positive';
  keywords: string[];
  length: number;
  category: string;
}

export interface Message {
  id: string;
  preview: string;
  content: string;
  date: string;
  locked: boolean;
  read: boolean;
  stats: MessageStats;
  hasReplied: boolean;
}

// Navigation Types
export type ScreenType = 'login' | 'signup' | 'home' | 'send' | 'write' | 'inbox' | 'sent' | 'thank' | 'stats' | 'settings' | 'notifications';

export interface NavigationData {
  selectedContacts?: Contact[];
  preselectedContact?: Contact;
  messageId?: string;
}

// Translation Types
export type Language = 'ko' | 'en' | 'zh' | 'ja';

export interface TranslationObject {
  nav: Record<string, string>;
  auth: Record<string, string>;
  home: Record<string, string>;
  contact: Record<string, string>;
  write: Record<string, string>;
  inbox: Record<string, string>;
  sent: Record<string, string>;
  thank: Record<string, string>;
  stats: Record<string, string>;
  settings: Record<string, string>;
  notifications: Record<string, string>;
  common: Record<string, string>;
  examples: string[];
}

// Form Validation Types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Component Props Types
export interface ScreenProps {
  onNavigate: (screen: ScreenType, data?: NavigationData) => void;
  t: TranslationObject;
}
