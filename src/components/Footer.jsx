import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-10 font-sans relative overflow-hidden">
      {/* إضاءة خلفية هادئة */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          
          {/* 🌟 معلومات المنصة واللوجو */}
          <div className="md:col-span-5 space-y-4 text-start">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-full bg-gray-900 border border-sky-400 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                <span className="text-sky-400 font-black text-sm">🧬</span>
              </div>
              <span className="text-2xl font-black text-white tracking-wide">
                Sci<span className="text-sky-400">Learn</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t('footerDesc')}
            </p>
          </div>

          {/* 🌟 التواصل المباشر */}
          <div className="md:col-span-4 text-start space-y-4">
            <h3 className="text-sky-400 font-mono font-bold tracking-widest text-xs uppercase">
              // {t('contact')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/201286972148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition-colors w-fit"
                >
                  <span className="w-8 h-8 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-emerald-400">
                    💬
                  </span>
                  <span className="ltr:tracking-wider font-mono">+20 128 697 2148</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Beni+Suef,+Egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition-colors w-fit"
                >
                  <span className="w-8 h-8 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-sky-400">
                    📍
                  </span>
                  <span>Beni Suef, Egypt</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 🌟 السوشيال ميديا */}
          <div className="md:col-span-3 text-start space-y-4">
            <h3 className="text-sky-400 font-mono font-bold tracking-widest text-xs uppercase">
              // {t('followUs')}
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/mora.magdy.585"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl glossy-card border border-gray-800 hover:border-sky-400 flex items-center justify-center text-gray-300 hover:text-sky-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/moramagdy32/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl glossy-card border border-gray-800 hover:border-sky-400 flex items-center justify-center text-gray-300 hover:text-sky-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
              </a>
            </div>
            <div className="flex gap-4 pt-2 text-xs text-gray-400">
              <Link to="#" className="hover:text-sky-400">{t('terms')}</Link>
              <span>•</span>
              <Link to="#" className="hover:text-sky-400">{t('privacy')}</Link>
            </div>
          </div>

        </div>

        {/* 🌟 الشريط السفلي + إمضاء Michael Magdy الاحترافي */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-xs sm:text-sm">
            {t('rights')}
          </p>

          {/* كارت التوقيع الحي */}
          <a
            href="https://wa.me/201554815484"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 px-5 py-2.5 rounded-2xl glossy-card border border-gray-800 hover:border-sky-400/60 transition-all"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-sky-400 transition-colors">
              {t('poweredBy')}
            </span>

            <div className="relative flex flex-col items-center">
              {/* الاسم بخط الإمضاء اليدوي المائل */}
              <span
                className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-400 group-hover:from-white group-hover:to-sky-300 transition-all duration-500 select-none pe-2 -rotate-3"
                style={{
                  fontFamily: "'Alex Brush', 'Great Vibes', cursive",
                  filter: "drop-shadow(0 0 10px rgba(56,189,248,0.45))"
                }}
              >
                Michael Magdy
              </span>

              {/* قوس الإمضاء المرسوم تحت الاسم (Signature Flourish SVG) */}
              <svg
                viewBox="0 0 180 18"
                fill="none"
                className="w-36 h-3.5 -mt-2 text-sky-400 group-hover:scale-105 transition-transform"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  d="M4 12 C50 2, 130 2, 174 10 C140 14, 80 15, 35 14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}