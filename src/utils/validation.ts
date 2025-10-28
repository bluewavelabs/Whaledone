import { FormErrors } from '../types/index';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (Korean format)
const PHONE_REGEX = /^01[0-9]-\d{3,4}-\d{4}$/;

// Code validation regex
const CODE_REGEX = /^[A-Z0-9]{8}$/;

export const validateEmail = (email: string): string | null => {
  if (!email) return '이메일을 입력해주세요';
  if (!EMAIL_REGEX.test(email)) return '유효한 이메일 형식이 아닙니다';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return '비밀번호를 입력해주세요';
  if (password.length < 6) return '비밀번호는 6자 이상이어야 합니다';
  return null;
};

export const validatePasswordMatch = (password: string, confirmPassword: string): string | null => {
  if (password !== confirmPassword) return '비밀번호가 일치하지 않습니다';
  return null;
};

export const validatePhoneNumber = (phone: string): string | null => {
  if (!phone) return '휴대폰 번호를 입력해주세요';
  if (!PHONE_REGEX.test(phone)) return '올바른 휴대폰 번호 형식이 아닙니다 (010-0000-0000)';
  return null;
};

export const validateName = (name: string): string | null => {
  if (!name) return '이름을 입력해주세요';
  if (name.trim().length < 2) return '이름은 2자 이상이어야 합니다';
  return null;
};

export const validateCode = (code: string): string | null => {
  if (!code) return '코드를 입력해주세요';
  if (!CODE_REGEX.test(code)) return '유효하지 않은 코드 형식입니다';
  return null;
};

export const validateMessage = (message: string, maxChars: number = 300): string | null => {
  if (!message.trim()) return '메시지를 입력해주세요';
  if (message.length > maxChars) return `메시지는 ${maxChars}자 이하여야 합니다`;
  return null;
};

export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value || !value.trim()) return `${fieldName}을(를) 입력해주세요`;
  return null;
};

// Combine multiple validations
export const validateForm = (
  validations: Array<() => string | null>
): FormErrors => {
  const errors: FormErrors = {};
  validations.forEach((validation, index) => {
    const error = validation();
    if (error) {
      errors[`field_${index}`] = error;
    }
  });
  return errors;
};

// Check if form has errors
export const hasFormErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0;
};

// Sanitize input to prevent XSS
export const sanitizeInput = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

// Format phone number while typing
export const formatPhoneNumber = (input: string): string => {
  const cleaned = input.replace(/\D/g, '');
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 7) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
};
