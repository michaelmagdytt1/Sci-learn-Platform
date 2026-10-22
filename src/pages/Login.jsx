import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function Login() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ studentCode: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    const result = await login(formData.studentCode, formData.password);
    setIsLoading(false);

    if (result.success) {
      navigate('/courses');
    } else {
      setErrorMsg(result.message);
      setTimeout(() => setErrorMsg(null), 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gray-950 text-start text-white relative overflow-hidden pt-20 lg:pt-0">
      {/* إضاءات بيولوجية خلفية */}
      <div className="absolute -top-32 -start-32 w-96 h-96 bg-sky-500/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 end-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* تنبيه الأخطاء */}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 24 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 inset-x-0 mx-auto w-fit z-50 flex items-center gap-3 bg-gray-900/95 backdrop-blur-xl border border-red-500/50 px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(239,68,68,0.25)]"
          >
            <div className="w-9 h-9 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 font-bold">!</div>
            <div>
              <h4 className="text-red-400 font-bold text-sm">{language === 'ar' ? 'خطأ في الدخول' : 'Authentication Failed'}</h4>
              <p className="text-gray-300 text-xs">{errorMsg}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌟 النصف الأول: الفورم */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-gray-900/70 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-sky-500/20 shadow-[0_0_50px_rgba(14,165,233,0.1)]"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold mb-6">
            <span>🧬</span> {language === 'ar' ? 'بوابة طلاب الساينس والأحياء' : 'Bio & Science Student Portal'}
          </div>

          <h1 className="text-3xl sm:text-4xl font-black mb-2 text-white">{t('welcomeBackAuth')}</h1>
          <p className="text-gray-400 text-sm mb-8">{t('loginDesc')}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                {t('studentCodeAuth')}
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="studentCode"
                  value={formData.studentCode}
                  onChange={handleChange}
                  maxLength="4"
                  className="w-full px-5 py-4 bg-gray-950/80 rounded-2xl border border-gray-800 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all outline-none text-lg tracking-[0.4em] font-mono text-center text-white"
                  placeholder="••••"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-sky-400">
                  {t('passwordAuth')}
                </label>
                <Link to="/forgot-password" className="text-xs font-semibold text-gray-400 hover:text-sky-400 transition-colors">
                  {t('forgotPassAuth')}
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-5 py-4 pe-12 bg-gray-950/80 rounded-2xl border border-gray-800 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all outline-none text-white"
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
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-gray-950 font-black py-4 rounded-2xl transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] mt-4 flex justify-center items-center"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-gray-950 border-t-transparent rounded-full animate-spin"></span>
              ) : (
                t('loginBtn')
              )}
            </motion.button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-8">
            {t('noAccount')}{' '}
            <Link to="/signup" className="text-sky-400 font-bold hover:underline">
              {t('signUpNow')}
            </Link>
          </p>
        </motion.div>
      </div>

      {/* 🌟 النصف الثاني: خلفية البيولوجي والـ DNA */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1400&q=85"
          alt="DNA Biology Background"
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-sky-950/40"></div>

        <div className="relative z-10 max-w-lg">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gray-900/80 backdrop-blur-xl border border-sky-400/30 p-6 rounded-3xl shadow-2xl mb-6"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-400/20 flex items-center justify-center text-2xl">🔬</div>
              <div>
                <h3 className="font-black text-white text-lg">
                  {language === 'ar' ? 'استكشف أسرار الحياة' : 'Explore the Secrets of Life'}
                </h3>
                <p className="text-sky-400 text-xs font-bold">Molecular Biology & Modern Science</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {language === 'ar'
                ? 'تعلم الأحياء والساينس بطريقة تفاعلية حديثة تعتمد على الفهم العميق والتجارب البصرية مع مس أميرة سمير.'
                : 'Master Biology and Science through interactive visual learning, deep conceptual understanding, and smart quizzes.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 p-4 rounded-2xl">
              <span className="text-2xl">🧬</span>
              <h4 className="font-bold text-white text-sm mt-2">{language === 'ar' ? 'فهم وليس حفظ' : 'Visual Genetics'}</h4>
              <p className="text-gray-400 text-xs mt-1">{language === 'ar' ? 'شرح مبسط بالرسوم ثلاثية الأبعاد' : '3D concepts & interactive models'}</p>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 p-4 rounded-2xl">
              <span className="text-2xl">🧪</span>
              <h4 className="font-bold text-white text-sm mt-2">{language === 'ar' ? 'اختبارات ذكية' : 'Smart Lab Quizzes'}</h4>
              <p className="text-gray-400 text-xs mt-1">{language === 'ar' ? 'تقييم مستمر لمستواك العلمي' : 'Instant feedback & tracking'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}