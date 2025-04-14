import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/App.tsx';
import NotFoundPage from '@/pages/404.tsx';

export default function AppRouter(): ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
