import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css';
import AppRouter from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
