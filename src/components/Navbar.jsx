import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: t('home'), path: '/', icon: '⚡' },
    { name: t('courses'), path: '/courses', icon: '🧬' },
    { name: t('dashboard'), path: '/dashboard', icon: '🔬' },
    { name: t('about'), path: '/about', icon: '👩‍🔬' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 inset-x-0 z-50 px-4 sm:px-8 pointer-events-none font-sans"
      >
        <div
          className={`max-w-7xl mx-auto pointer-events-auto rounded-full transition-all duration-500 px-6 py-3 flex justify-between items-center border glossy-card ${
            isScrolled
              ? 'border-sky-400/50 shadow-[0_0_35px_rgba(56,189,248,0.2)]'
              : 'border-gray-800'
          }`}
        >
          {/* 🌟 اللوجو مع أيقونة شريط الـ DNA المزدوج الحقيقي */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full bg-gray-950 border border-sky-400/60 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.4)] overflow-hidden">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 text-sky-400"
              >
                <path d="M4 4C8 4 16 20 20 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M20 4C16 4 8 20 4 20" stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="7" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="6" y1="12" x2="18" y2="12" stroke="#22d3ee" strokeWidth="1.5" />
                <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              </motion.svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl font-black tracking-wider text-white">Sci</span>
                <span className="text-xl font-black tracking-wider text-sky-400">Learn</span>
              </div>
              <span className="text-[9px] text-sky-400 font-mono tracking-[0.2em] uppercase">
                DNA • BIO LAB
              </span>
            </div>
          </Link>

          {/* 🌟 الكبسولة التفاعلية للروابط (Interactive Pill Navigation) */}
          <div className="hidden md:flex items-center gap-1.5 bg-gray-950/90 p-1.5 rounded-full border border-gray-800 shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-xs sm:text-sm font-extrabold rounded-full transition-all flex items-center gap-1.5 z-10 ${
                    isActive ? 'text-slate-950' : 'text-gray-300 hover:text-sky-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="dna-nav-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      className="absolute inset-0 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 rounded-full -z-10 shadow-[0_0_20px_rgba(56,189,248,0.7)]"
                    />
                  )}
                  <span className="text-xs">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* 🌟 أزرار السيم واللغة والحساب */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={toggleLanguage}
              className="px-3.5 py-2 rounded-full border border-gray-800 bg-gray-950 hover:border-sky-400 text-xs font-black text-sky-400 tracking-wider transition-all"
            >
              🌐 {t('langToggle')}
            </button>

            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/profile"
                  className="px-4 py-2 rounded-full bg-gray-950 border border-sky-400/40 text-xs font-bold text-white hover:border-sky-400 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  {t('myProfile')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-xs font-black text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:scale-105 transition-transform"
                >
                  {t('signOut')}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="px-4 py-2 text-xs font-extrabold text-gray-300 hover:text-sky-400">
                  {t('signIn')}
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2.5 text-xs font-black text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:scale-105 transition-transform"
                >
                  {t('getStarted')}
                </Link>
              </div>
            )}
          </div>

          {/* 🌟 أزرار الموبايل */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={toggleLanguage} className="px-2.5 py-1.5 rounded-full bg-gray-950 border border-gray-800 text-sky-400 text-xs font-bold">
              {t('langToggle')}
            </button>
            <button
              className="p-2 rounded-full bg-gray-950 border border-gray-800 text-sky-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 inset-x-4 glossy-card border border-sky-400/40 rounded-3xl z-40 md:hidden flex flex-col p-6 gap-3 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 ${
                  location.pathname === link.path
                    ? 'bg-sky-400 text-slate-950'
                    : 'text-gray-300'
                }`}
              >
                <span>{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}