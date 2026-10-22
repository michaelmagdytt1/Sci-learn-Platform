import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function SignUp() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    const result = await signup(formData.fullName, formData.email, formData.password);
    setIsLoading(false);

    if (result.success) {
      navigate('/verify', { state: { email: formData.email, tempToken: result.tempToken } });
    } else {
      setErrorMsg(result.message);
      setTimeout(() => setErrorMsg(null), 5000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gray-950 text-start text-white relative overflow-hidden pt-20 lg:pt-0">
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-[130px] pointer-events-none"></div>

      <AnimatePresence>
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 24 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 inset-x-0 mx-auto w-fit z-50 flex items-center gap-3 bg-gray-900/95 backdrop-blur-xl border border-red-500/50 px-6 py-4 rounded-2xl shadow-2xl"
          >
            <div className="w-9 h-9 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 font-bold">!</div>
            <p className="text-gray-200 text-xs font-medium">{errorMsg}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌟 النصف الأول: خلفية المختبر العلمي */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=85"
          alt="Microscope Biology Lab"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-950/70 to-cyan-950/40"></div>

        <div className="relative z-10 max-w-lg space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-400 text-xs font-bold">
            ✨ {language === 'ar' ? 'انضم لنخبة طلاب المستقبل' : 'Join Future Scientists Today'}
          </span>
          <h2 className="text-4xl font-black text-white leading-tight">
            {language === 'ar' ? (
              <>ابدأ رحلتك العلمية <br /><span className="text-sky-400">واحصل على كود الطالب الخاص بك</span></>
            ) : (
              <>Start Your Scientific Journey <br /><span className="text-sky-400">& Get Your Student ID</span></>
            )}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            {language === 'ar'
              ? 'بمجرد تسجيلك وتأكيد بريدك الإلكتروني، سيقوم النظام بتوليد كود طالب مكون من 4 أرقام خاص بك لتسجيل الدخول ومتابعة دروسك.'
              : 'Once you register and verify your email, you will receive a unique 4-digit Student Code to access all interactive biology & science courses.'}
          </p>
        </div>
      </div>

      {/* 🌟 النصف الثاني: فورم التسجيل */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-gray-900/70 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-sky-500/20 shadow-[0_0_50px_rgba(14,165,233,0.1)]"
        >
          <h1 className="text-3xl font-black mb-2 text-white">{t('createAccountAuth')}</h1>
          <p className="text-gray-400 text-sm mb-8">{t('signupDesc')}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                {t('fullNameAuth')}
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-5 py-3.5 bg-gray-950/80 rounded-2xl border border-gray-800 focus:ring-2 focus:ring-sky-400 outline-none text-white"
                placeholder={language === 'ar' ? 'الاسم الثلاثي' : 'Enter your full name'}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                {t('emailAuth')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3.5 bg-gray-950/80 rounded-2xl border border-gray-800 focus:ring-2 focus:ring-sky-400 outline-none text-white"
                placeholder="student@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                {t('passwordAuth')}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 pe-12 bg-gray-950/80 rounded-2xl border border-gray-800 focus:ring-2 focus:ring-sky-400 outline-none text-white"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-e-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-400"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <p className="text-[11px] text-gray-400 mt-1.5">
                {language === 'ar' ? '* على الأقل 8 أحرف تشمل حرف كبير ورقم ورمز (@#$)' : '* Min 8 chars with uppercase, number & symbol (@#$)'}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-gray-950 font-black py-4 rounded-2xl transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] mt-4 flex justify-center items-center"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-gray-950 border-t-transparent rounded-full animate-spin"></span>
              ) : (
                t('signupBtn')
              )}
            </motion.button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            {t('haveAccount')}{' '}
            <Link to="/login" className="text-sky-400 font-bold hover:underline">
              {t('signIn')}
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}