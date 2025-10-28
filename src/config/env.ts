/**
 * Environment Configuration
 * Centralized access to environment variables
 */

export const ENV = {
  // App Configuration
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Whaledone',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '0.1.0',

  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),

  // Authentication Keys
  AUTH_TOKEN_KEY: import.meta.env.VITE_AUTH_TOKEN_KEY || 'whaledone_token',
  AUTH_REFRESH_TOKEN_KEY: import.meta.env.VITE_AUTH_REFRESH_TOKEN_KEY || 'whaledone_refresh_token',

  // Social Login
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  KAKAO_CLIENT_ID: import.meta.env.VITE_KAKAO_CLIENT_ID || '',
  APPLE_CLIENT_ID: import.meta.env.VITE_APPLE_CLIENT_ID || '',

  // Feature Flags
  ENABLE_DEBUG: import.meta.env.VITE_ENABLE_DEBUG === 'true',
  ENABLE_MOCK_DATA: import.meta.env.VITE_ENABLE_MOCK_DATA === 'true',
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',

  // Storage Keys
  STORAGE_PREFIX: import.meta.env.VITE_STORAGE_PREFIX || 'whaledone_',
  LANGUAGE_STORAGE_KEY: import.meta.env.VITE_LANGUAGE_STORAGE_KEY || 'whaledone_language',
  VISITED_STORAGE_KEY: import.meta.env.VITE_VISITED_STORAGE_KEY || 'whaledone_visited',

  // Derived Values
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

// Type-safe environment variables accessor
export const getEnvVar = (key: keyof typeof ENV): string | number | boolean => {
  const value = ENV[key];
  if (value === undefined) {
    console.warn(`Environment variable ${key} is not defined`);
  }
  return value;
};
