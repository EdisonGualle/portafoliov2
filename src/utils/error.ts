import { isAxiosError } from 'axios';

interface ErrorWithMessage {
  message: string;
}

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return typeof error === 'object' && error !== null && 'message' in error;
};

export const getErrorMessage = (error: unknown): string => {
  if (isAxiosError(error)) {
    const apiMessage = error.response?.data?.message;
    if (typeof apiMessage === 'string') {
      return apiMessage;
    }
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  if (isErrorWithMessage(error) && typeof error.message === 'string') {
    return error.message;
  }

  return 'Ha ocurrido un error inesperado. Inténtalo nuevamente.';
};
