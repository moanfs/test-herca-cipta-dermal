import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Web from './routes/web.jsx'
import axios from 'axios';

const authToken = localStorage.getItem('authToken');
if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

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
