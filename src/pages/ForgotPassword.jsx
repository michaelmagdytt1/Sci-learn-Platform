import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await forgotPassword(email);
    if (result.success) {
      // تحويل الطالب لصفحة تغيير الباسورد مع إرسال إيميله في الخلفية
      navigate('/reset-password', { state: { email } });
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 font-sans relative overflow-hidden px-4">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gray-900/60 backdrop-blur-xl p-10 rounded-3xl border border-gray-800 shadow-2xl relative z-10"
      >
        <h2 className="text-3xl font-extrabold text-white mb-4 text-center">Reset Password</h2>
        <p className="text-gray-400 mb-8 text-center text-sm">
          Enter your email address and we'll send you a 6-digit code to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3.5 bg-gray-950/50 rounded-xl border border-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all outline-none text-white"
              placeholder="student@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)]"
          >
            Send Code
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <Link to="/login" className="text-gray-400 hover:text-white transition-colors text-sm">
            Back to Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}