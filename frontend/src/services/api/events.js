import apiClient from './client';
import { ENDPOINTS } from './config';

export const eventsAPI = {
  getAll: (params) => apiClient.get(ENDPOINTS.EVENTS, { params }),
  getUpcoming: () => apiClient.get(ENDPOINTS.UPCOMING_EVENTS),
  getFeatured: () => apiClient.get(ENDPOINTS.FEATURED_EVENTS),
  getById: (id) => apiClient.get(ENDPOINTS.EVENT_DETAILS(id)),
};
