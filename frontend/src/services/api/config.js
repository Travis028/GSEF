const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
};

export const ENDPOINTS = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  EVENTS: '/events',
  UPCOMING_EVENTS: '/events/upcoming',
  FEATURED_EVENTS: '/events/featured',
  USER_PROFILE: '/users/me',
};
