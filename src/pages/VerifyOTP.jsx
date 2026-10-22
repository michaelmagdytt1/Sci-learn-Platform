import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext'; // 🌟 استيراد القاموس

export default function VerifyOTP() {
  const { t, language } = useLanguage(); // 🌟 استخدام الترجمة
  const [otp, setOtp] = useState(new Array(6).fill(""));
  
  // 🌟 تعديل الـ ref ليكون مصفوفة عشان نقدر نتحكم في الـ 6 مربعات
  const inputRefs = useRef([]); 
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null); // 🌟 حالة البوب أب للأخطاء
  
  const { verifyOtp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // استلام الإيميل والتوكن من صفحة التسجيل
  const email = location.state?.email;
  const tempToken = location.state?.tempToken;

  useEffect(() => {
    // التركيز على أول مربع تلقائياً أول ما الصفحة تفتح
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    // لو مفيش إيميل أو توكن مبعوث، نرجعه لصفحة التسجيل فوراً
    if (!email || !tempToken) navigate('/signup');
  }, [email, tempToken, navigate]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // منع كتابة حروف

    const newOtp = [...otp];
    // أخذ آخر رقم تم إدخاله فقط
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // 🌟 نقل المؤشر للمربع التالي فوراً
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    
    if (errorMsg) setErrorMsg(null);
  };

  const handleKeyDown = (e, index) => {
    // 🌟 الرجوع للمربع السابق عند الضغط على Backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    
    if (otpCode.length < 6) {
      setErrorMsg(language === 'ar' ? "يرجى إدخال الكود المكون من 6 أرقام بالكامل." : "Please enter the complete 6-digit code.");
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    // إرسال الكود والتوكن لدالة التأكيد
    const result = await verifyOtp(otpCode, tempToken);
    
    setIsLoading(false);

    if (result.success) {
      navigate('/courses');
    } else {
      setErrorMsg(result.message);
      setTimeout(() => setErrorMsg(null), 5000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 font-sans relative overflow-hidden text-start">
      
      {/* 🌟 البوب أب الشيك للأخطاء (Toast Notification) */}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 30, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="absolute top-0 start-1/2 z-50 flex items-center gap-3 bg-red-950/80 backdrop-blur-md border border-red-500/50 px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(225,29,72,0.3)] min-w-[320px] max-w-[90%]"
          >
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-red-400 font-bold text-sm mb-0.5">Verification Failed</h4>
              <p className="text-red-200/80 text-xs font-medium">{errorMsg}</p>
            </div>
            <button onClick={() => setErrorMsg(null)} className="text-red-400/50 hover:text-red-400 transition-colors shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* تأثيرات الإضاءة الخلفية */}
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 end-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-gray-900/60 backdrop-blur-2xl p-10 rounded-[2rem] border border-gray-800 shadow-2xl relative z-10 text-center"
      >
        <div className="mx-auto w-20 h-20 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        <h2 className="text-3xl font-extrabold text-white mb-2">{t('verifyTitle')}</h2>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          {t('verifyDesc')} <br />
          <span className="text-cyan-400 font-semibold">{email}</span>
        </p>

        <form onSubmit={handleSubmit}>
          {/* 🌟 جعلنا اتجاه المربعات دائماً من اليسار لليمين ltr عشان الأرقام متتلخبطش في العربي */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-8" dir="ltr">
            {otp.map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)} // 🌟 ربط المربع بالـ Ref
                type="text"
                className="w-12 h-14 sm:w-14 sm:h-16 bg-gray-950/50 border border-gray-700 rounded-xl text-center text-2xl font-bold text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all outline-none"
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex justify-center items-center"
          >
            {isLoading ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : t('verifyBtn')}
          </motion.button>
        </form>

        <p className="text-gray-400 mt-8 text-sm flex justify-center items-center gap-1">
          {t('resendOtp')}
        </p>
      </motion.div>
    </div>
  );
}