import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShopPage from './pages/ShopPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
