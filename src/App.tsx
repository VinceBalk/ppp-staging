import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DashboardStats from '@/components/dashboard/DashboardStats';
import Login from '@/pages/Login';
import ResetPassword from '@/pages/ResetPassword';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Card>
              <DashboardStats />
              <Button>Click</Button>
            </Card>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
