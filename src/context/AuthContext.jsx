import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // استرجاع بيانات المستخدم من المتصفح لو موجودة
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // 🌟 دالة تسجيل الدخول المحدثة (تم تحويلها لـ fetch لتوحيد الكود مع باقي الدوال)
  const login = async (studentCode, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentCode, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Invalid Student Code or Password' };
      }
    } catch (error) {
      console.error("Login Context Error:", error);
      return { success: false, message: 'Server error, please try again.' };
    }
  };

  const signup = async (fullName, email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        return { success: true, email: email, tempToken: data.tempToken };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error("Signup Error:", error);
      return { success: false, message: 'Server error, please try again.' };
    }
  };

  const verifyOtp = async (otp, tempToken) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, tempToken }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error("Verify Error:", error);
      return { success: false, message: 'Server error, please try again.' };
    }
  };

  // 🌟 دالة إرسال الإيميل الخاص بتغيير الباسورد
  const forgotPassword = async (email) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      return response.ok ? { success: true } : { success: false, message: data.message };
    } catch (error) {
      console.error("Forgot Password Error:", error);
      return { success: false, message: 'Server error, please try again.' };
    }
  };

  // 🌟 دالة تأكيد الباسورد الجديد
  const resetPassword = async (email, otp, newPassword) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await response.json();
      return response.ok ? { success: true } : { success: false, message: data.message };
    } catch (error) {
      console.error("Reset Password Error:", error);
      return { success: false, message: 'Server error, please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    // 🌟 السطر ده مهم جداً: تأكدنا إننا ضفنا كل الدوال هنا
    <AuthContext.Provider value={{ user, login, signup, verifyOtp, forgotPassword, resetPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);