import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // إذا لم يكن هناك مستخدم مسجل، قم بتحويله لصفحة الدخول فوراً
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // إذا كان مسجلاً، دعه يرى الصفحة (الـ children)
  return children;
}