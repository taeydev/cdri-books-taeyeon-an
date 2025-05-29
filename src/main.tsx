import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// 로딩 엘리먼트 제거
const loader = document.getElementById('loading-screen');
if (loader) loader.remove();
