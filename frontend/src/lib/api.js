// import axios from 'axios';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API_BASE = `${BACKEND_URL}/api`;

// const api = axios.create({
//   // baseURL: API_BASE,
//   baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Work Entries API
// export const entriesApi = {
//   getAll: (year, month) => {
//     const params = {};
//     if (year && month) {
//       params.year = year;
//       params.month = month;
//     }
//     return api.get('/entries', { params });
//   },
  
//   getOne: (id) => api.get(`/entries/${id}`),
  
//   create: (data) => api.post('/entries', data),
  
//   update: (id, data) => api.put(`/entries/${id}`, data),
  
//   delete: (id) => api.delete(`/entries/${id}`),
// };

// // Monthly Summary API
// export const summaryApi = {
//   get: (year, month) => api.get(`/summary/${year}/${month}`),
// };

// // Settings API
// export const settingsApi = {
//   get: () => api.get('/settings'),
//   update: (data) => api.put('/settings', data),
// };

// // Upload API
// export const uploadApi = {
//   parse: (file) => {
//     const formData = new FormData();
//     formData.append('file', file);
//     return api.post('/upload', formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//   },
  
//   save: (entries) => api.post('/upload/save', entries),
// };

// // Export API
// export const exportApi = {
//   excel: (year, month) => 
//     api.get(`/export/${year}/${month}/excel`, { responseType: 'blob' }),
  
//   pdf: (year, month) => 
//     api.get(`/payslip/${year}/${month}/pdf`, { responseType: 'blob' }),
// };

// // Email API
// export const emailApi = {
//   send: (data) => api.post('/email/send', data),
// };

// // Vacation API
// export const vacationApi = {
//   getEntries:   (year, month) => api.get('/vacation', { params: { year, month } }),
//   addEntry:     (data)        => api.post('/vacation', data),
//   deleteEntry:  (id)          => api.delete(`/vacation/${id}`),
//   getBalances:  ()            => api.get('/vacation/balance'),
//   setBalance:   (year, days)  => api.put(`/vacation/balance/${year}`, null, { params: { total_entitlement: days } }),
// };

// // Sick Days API
// export const sickDaysApi = {
//   getAll:   (year, month) => api.get('/sick-days', { params: { year, month } }),
//   add:      (data)        => api.post('/sick-days', data),
//   delete:   (id)          => api.delete(`/sick-days/${id}`),
//   summary:  (year)        => api.get('/sick-days/summary', { params: { year } }),
// };

// // Public Holidays API
// export const publicHolidaysApi = {
//   get: (year, country = 'NL') => api.get(`/public-holidays/${year}`, { params: { country } }),
// };

// // Annual PDF
// export const annualApi = {
//   pdf: (year) => api.get(`/export/${year}/annual-pdf`, { responseType: 'blob' }),
// };

// // Auto email
// export const autoEmailApi = {
//   trigger: () => api.post('/email/auto-send'),
// };

// export default api;

import axios from 'axios';

// Works both locally and on Vercel
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,  // 30s timeout for Render free tier cold start
  headers: {
    'Content-Type': 'application/json',
  },
});

// Work Entries API
export const entriesApi = {
  getAll: (year, month) => {
    const params = {};
    if (year && month) {
      params.year = year;
      params.month = month;
    }
    return api.get('/entries', { params });
  },
  
  getOne: (id) => api.get(`/entries/${id}`),
  
  create: (data) => api.post('/entries', data),
  
  update: (id, data) => api.put(`/entries/${id}`, data),
  
  delete: (id) => api.delete(`/entries/${id}`),
};

// Monthly Summary API
export const summaryApi = {
  get: (year, month) => api.get(`/summary/${year}/${month}`),
};

// Settings API
export const settingsApi = {
  get: () => api.get('/settings'),
  update: (data) => api.put('/settings', data),
};

// Upload API
export const uploadApi = {
  parse: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  save: (entries) => api.post('/upload/save', entries),
};

// Export API
export const exportApi = {
  excel: (year, month) => 
    api.get(`/export/${year}/${month}/excel`, { responseType: 'blob' }),
  
  pdf: (year, month) => 
    api.get(`/payslip/${year}/${month}/pdf`, { responseType: 'blob' }),
};

// Email API
export const emailApi = {
  send: (data) => api.post('/email/send', data),
};

// Vacation API
export const vacationApi = {
  getEntries:   (year, month) => api.get('/vacation', { params: { year, month } }),
  addEntry:     (data)        => api.post('/vacation', data),
  deleteEntry:  (id)          => api.delete(`/vacation/${id}`),
  getBalances:  ()            => api.get('/vacation/balance'),
  setBalance:   (year, days)  => api.put(`/vacation/balance/${year}`, null, { params: { total_entitlement: days } }),
};

// Sick Days API
export const sickDaysApi = {
  getAll:   (year, month) => api.get('/sick-days', { params: { year, month } }),
  add:      (data)        => api.post('/sick-days', data),
  delete:   (id)          => api.delete(`/sick-days/${id}`),
  summary:  (year)        => api.get('/sick-days/summary', { params: { year } }),
};

// Public Holidays API
export const publicHolidaysApi = {
  get: (year, country = 'NL') => api.get(`/public-holidays/${year}`, { params: { country } }),
};

// Annual PDF
export const annualApi = {
  pdf: (year) => api.get(`/export/${year}/annual-pdf`, { responseType: 'blob' }),
};

// Auto email
export const autoEmailApi = {
  trigger: () => api.post('/email/auto-send'),
};

export default api;