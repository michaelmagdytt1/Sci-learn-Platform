import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function ResetPassword() {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    // لو الصفحة اتفتحت مباشر بدون ما الإيميل يتبعت، نرجعه للبروفايل
    if (!email) navigate('/profile');
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length < 6) return alert("Please enter the 6-digit code.");
    
    const result = await resetPassword(email, otp, newPassword);
    if (result.success) {
      alert("Password reset successfully!");
      navigate('/profile'); // نرجعه للبروفايل بعد النجاح
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 font-sans relative overflow-hidden px-4">
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-gray-900/60 backdrop-blur-xl p-10 rounded-3xl border border-gray-800 shadow-2xl relative z-10"
      >
        <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Create New Password</h2>
        <p className="text-gray-400 mb-8 text-center text-sm">
          Code sent to <br/><span className="text-cyan-400 font-semibold">{email}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">6-Digit Code</label>
            <input
              type="text"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              className="w-full px-5 py-3.5 bg-gray-950/50 rounded-xl border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-white tracking-widest text-center text-xl font-bold"
              placeholder="••••••"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-5 py-3.5 bg-gray-950/50 rounded-xl border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-white"
              placeholder="Enter new password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Save Password
          </button>
        </form>
      </motion.div>
    </div>
  );
}