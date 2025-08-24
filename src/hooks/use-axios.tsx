import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU1MzY2NDQ4LCJpYXQiOjE3NTUxMDcyNDgsImp0aSI6ImY3NjMwNjMxNDdiZDQwMTI5NjBjYTUwYzA3MWE2NmM0IiwidXNlcl9pZCI6NH0.1bpzKMRcZm7UvXnYdTn_9NsAmrYtBBv2jF8KyehJHqc"
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AUTH_TOKEN}`
  },
});

export default api;
