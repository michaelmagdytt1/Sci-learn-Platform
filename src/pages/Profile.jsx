import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function Profile() {
  const { user, logout } = useAuth();
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);

  const studentCode = user?.studentCode || '5712';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(studentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const badges = [
    { icon: '🧬', name: isAr ? 'عبقري الـ DNA' : 'DNA Master', desc: isAr ? 'اجتياز اختبارات البيولوجيا الجزيئية بتفوق' : '95%+ in Molecular Biology' },
    { icon: '🔬', name: isAr ? 'باحث العلوم المتكاملة' : 'Lab Explorer', desc: isAr ? 'إتمام 15 تجربة ومحاضرة تفاعلية' : 'Completed 15 Interactive Labs' },
    { icon: '⚡', name: isAr ? 'نجم الالتزام' : 'Fast Learner', desc: isAr ? 'حضور متواصل لمدة أسبوعين' : '14-Day Study Streak' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans pt-32 pb-24 text-start relative overflow-hidden">
      <div className="absolute top-1/4 end-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* 🌟 القسم الأول: بطاقة الهوية الرقمية للطالب (Digital Student ID Pass) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glossy-card rounded-[2.5rem] border border-sky-400/50 p-8 sm:p-10 mb-10 relative overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.15)]"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            {/* الأفاتار ومعلومات الطالب */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-sky-400 via-cyan-300 to-teal-300 text-slate-950 flex items-center justify-center text-4xl font-black shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                  {user?.fullName ? user.fullName.charAt(0).toUpperCase() : 'S'}
                </div>
                <span className="absolute -bottom-2 -end-2 px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-mono text-[10px] font-black">
                  VERIFIED
                </span>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  // SCILEARN OFFICIAL STUDENT PASS
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">
                  {user?.fullName || (isAr ? 'طالب منصة SciLearn' : 'SciLearn Student')}
                </h1>
                <p className="text-gray-400 text-sm font-mono mt-1">
                  ✉️ {user?.email || 'student@scilearn.com'}
                </p>
              </div>
            </div>

            {/* كارت كود الطالب التفاعلي مع زر النسخ */}
            <div className="w-full md:w-auto bg-gray-950/90 border border-sky-400/40 rounded-3xl p-5 text-center">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
                {isAr ? 'كود الدخول الخاص بك' : 'YOUR LOGIN STUDENT CODE'}
              </span>
              <div className="text-4xl font-mono font-black text-sky-400 tracking-[0.25em] my-2">
                {studentCode}
              </div>
              <button
                onClick={handleCopyCode}
                className="w-full px-4 py-2 rounded-xl bg-sky-400/15 hover:bg-sky-400 text-sky-400 hover:text-slate-950 text-xs font-black transition-all"
              >
                {copied
                  ? (isAr ? '✓ تم نسخ الكود!' : '✓ Code Copied!')
                  : (isAr ? '📋 نسخ كود الطالب' : '📋 Copy Student Code')}
              </button>
            </div>

          </div>
        </motion.div>

        {/* 🌟 القسم الثاني: بيانات الحساب + الأوسمة العلمية */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* تفاصيل الحساب */}
          <div className="lg:col-span-7 glossy-card rounded-3xl border border-gray-800 p-7 space-y-6">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <span>⚙️</span> {isAr ? 'بيانات الحساب الأكاديمي' : 'Academic Account Details'}
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gray-950/80 border border-gray-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block">{isAr ? 'الاسم الكامل' : 'Full Name'}</span>
                  <span className="text-base font-bold text-white">{user?.fullName || 'Student Name'}</span>
                </div>
                <span className="text-xs font-mono text-sky-400">ACTIVE</span>
              </div>

              <div className="p-4 rounded-2xl bg-gray-950/80 border border-gray-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block">{isAr ? 'البريد الإلكتروني المسجل' : 'Registered Email'}</span>
                  <span className="text-base font-bold text-white">{user?.email || 'student@example.com'}</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">✓ OTP Verified</span>
              </div>

              <div className="p-4 rounded-2xl bg-gray-950/80 border border-gray-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block">{isAr ? 'حالة العضوية' : 'Role & Access'}</span>
                  <span className="text-base font-bold text-white uppercase">{user?.role || 'Student'}</span>
                </div>
                <span className="text-xs font-mono text-cyan-400">BIO-LAB PASS</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex flex-wrap justify-between items-center gap-4">
              <button
                onClick={() => navigate('/forgot-password')}
                className="px-5 py-3 rounded-2xl bg-gray-950 border border-gray-800 hover:border-sky-400 text-xs font-bold text-gray-300 hover:text-sky-400 transition-all"
              >
                🔒 {isAr ? 'تغيير كلمة المرور' : 'Change Password'}
              </button>

              <button
                onClick={handleLogout}
                className="px-6 py-3 rounded-2xl bg-red-500/15 border border-red-500/40 hover:bg-red-500 text-red-400 hover:text-white text-xs font-black transition-all"
              >
                🚪 {isAr ? 'تسجيل الخروج' : 'Sign Out'}
              </button>
            </div>
          </div>

          {/* الأوسمة العلمية */}
          <div className="lg:col-span-5 glossy-card rounded-3xl border border-gray-800 p-7 space-y-5">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <span>🏅</span> {isAr ? 'الأوسمة والإنجازات العلمية' : 'Scientific Achievements'}
            </h2>

            <div className="space-y-4">
              {badges.map((b, i) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={i}
                  className="p-4 rounded-2xl bg-gray-950/80 border border-gray-800 hover:border-sky-400/50 flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-400/15 border border-sky-400/30 flex items-center justify-center text-2xl shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">{b.name}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}