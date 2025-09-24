import apiClient from './apiClient';
import type { ContactPayload, ContactResponse } from '@types/contact';

export const sendContactMessage = async (payload: ContactPayload): Promise<ContactResponse> => {
  const response = await apiClient.post<ContactResponse>('/contact', payload);
  return response.data;
};
