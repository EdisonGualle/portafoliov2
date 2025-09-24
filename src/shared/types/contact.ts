export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
