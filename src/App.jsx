import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutAmiraSamir from './pages/AboutAmiraSamir';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Courses from './pages/Courses'; 
import Dashboard from './pages/Dashboard';
import VerifyOTP from './pages/VerifyOTP'; 
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Footer from './components/Footer'; 
import { AuthProvider } from './context/AuthContext'; 
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutAmiraSamir />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/verify" element={<VerifyOTP />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* 🌟 تم فتح الكورسات والداشبورد مباشرة بدون تسجيل دخول */}
              <Route path="/courses" element={<Courses />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* صفحة البروفايل فقط محمية (أو يمكنك فتحها بنفس الطريقة إذا أردت) */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;