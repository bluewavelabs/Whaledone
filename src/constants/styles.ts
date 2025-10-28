// Color Constants
export const COLORS = {
  primary: '#2563EB',
  primary_dark: '#1D4ED8',
  primary_light: '#3B82F6',
  destructive: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
  muted: '#6B7280',
};

// Common Button Classes
export const BUTTON_CLASSES = {
  primary: 'w-full h-12 rounded-xl bg-primary hover:bg-primary_dark text-primary-foreground transition-colors',
  outline: 'w-full h-12 rounded-xl border-2 border-border hover:bg-muted transition-colors',
  ghost: 'h-auto p-0 text-primary hover:text-primary-foreground transition-colors',
  small: 'h-auto px-3 py-1.5 rounded-full text-sm',
};

// Common Input Classes
export const INPUT_CLASSES = {
  base: 'rounded-xl border-border bg-input-background',
  error: 'border-destructive focus:border-destructive focus:ring-destructive',
};

// Common Card Classes
export const CARD_CLASSES = {
  base: 'p-4 rounded-xl border border-border',
  hover: 'hover:shadow-md transition-shadow cursor-pointer',
  interactive: 'p-4 rounded-xl border-2 border-border cursor-pointer transition-all',
};

// Spacing Constants
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
};

// Border Radius
export const BORDER_RADIUS = {
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

// Animation Classes
export const ANIMATIONS = {
  fadeIn: 'animate-in fade-in',
  slideUp: 'animate-in slide-in-from-bottom-4',
  pulse: 'animate-pulse',
};

// Mobile Constants
export const MOBILE = {
  maxWidth: '375px',
  containerClass: 'max-w-[375px] mx-auto relative bg-background min-h-screen shadow-xl',
};

// Z-Index
export const Z_INDEX = {
  dropdown: 10,
  sticky: 20,
  modal: 50,
  toast: 100,
};
