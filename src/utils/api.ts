import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const registerEmail = async (email: string) => {
  try {
    const response = await api.post('/auth/register-email/', { email });
    return response.data;
  } catch (error) {
    console.error('Error registering email:', error);
    throw error;
  }
};
export default api;
