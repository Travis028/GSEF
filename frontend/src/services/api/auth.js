import apiClient from './client';
import { ENDPOINTS } from './config';

export const authAPI = {
  register: (data) => apiClient.post(ENDPOINTS.REGISTER, data),
  login: (data) => apiClient.post(ENDPOINTS.LOGIN, data),
  logout: () => { localStorage.removeItem('access_token'); },
  getCurrentUser: () => apiClient.get(ENDPOINTS.USER_PROFILE),
};
