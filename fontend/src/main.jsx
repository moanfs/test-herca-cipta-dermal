import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Web from './routes/web.jsx'
// import axios from 'axios';


// axios.interceptors.request.use(
//   config => {
//     const authToken = localStorage.getItem('authToken');
//     if (authToken) {
//       config.headers.Authorization = `Bearer ${authToken}`;
//       console.log('Token:', authToken);
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

const midtransClientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;

const scriptElement = document.createElement('script');
scriptElement.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
scriptElement.setAttribute('data-client-key', midtransClientKey);

document.head.appendChild(scriptElement);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web />
  </StrictMode>,
)
