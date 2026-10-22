import { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const [openFAQ, setOpenFAQ] = useState(0);

  // 🌟 مسار السكرول للـ Hero Section
  const heroScrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroScrollRef,
    offset: ['start start', 'end end'],
  });

  // تنعيم الحركة عشان تبقى سينمائية ومش حادة
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // 🌟 1. أنيميشن تكبير الكبسولة والصورة (Cinematic Scroll Zoom)
  const cardScale = useTransform(smoothProgress, [0, 0.85], [1, 1.22]);
  const innerPhotoScale = useTransform(smoothProgress, [0, 1], [1, 1.18]);
  const cardY = useTransform(smoothProgress, [0, 1], [0, -30]);

  // 🌟 2. أنيميشن شريط الـ DNA في الخلفية مع السكرول (تكبير + دوران + حركة)
  const dnaRotate = useTransform(smoothProgress, [0, 1], [0, 140]);
  const dnaScale = useTransform(smoothProgress, [0, 1], [0.85, 1.65]);
  const dnaY = useTransform(smoothProgress, [0, 1], [40, -120]);
  const dnaOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.22, 0.45, 0.1]);

  // 🌟 3. اختفاء تدريجي للنصوص والأزرار أثناء السكرول
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.55], [1, 0]);
  const heroTextY = useTransform(smoothProgress, [0, 0.6], [0, -80]);
  const heroTextScale = useTransform(smoothProgress, [0, 0.6], [1, 0.94]);

  // 🌟 4. أنيميشن Fade Up للكروت والأقسام السفلية
  const revealVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  };

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.14 },
    },
  };

  const steps = [
    {
      id: '01',
      icon: '🎬',
      title: t('step1Title'),
      desc: t('step1Desc'),
      tag: '4K LAB VIDEO',
    },
    {
      id: '02',
      icon: '🧬',
      title: t('step2Title'),
      desc: t('step2Desc'),
      tag: 'SMART QUIZ',
    },
    {
      id: '03',
      icon: '📑',
      title: t('step3Title'),
      desc: t('step3Desc'),
      tag: 'MIND MAPS',
    },
    {
      id: '04',
      icon: '🏆',
      title: t('step4Title'),
      desc: t('step4Desc'),
      tag: 'FULL MARK',
    },
  ];

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
  ];

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className="bg-gray-950 text-white font-sans text-start overflow-x-clip"
    >
      {/* =======================================================
          1. HERO SECTION — STICKY CINEMATIC SCROLL & DNA HELIX
      ======================================================== */}
      <div ref={heroScrollRef} className="relative h-[165vh]">
        <section className="sticky top-0 h-screen flex items-center pt-24 pb-10 overflow-hidden">
          
          {/* شبكة المختبر الخلفية */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* 🌟 شريط الـ DNA التفاعلي العملاق الذي يتحرك ويلف مع السكرول */}
          <motion.div
            style={{
              rotate: dnaRotate,
              scale: dnaScale,
              y: dnaY,
              opacity: dnaOpacity,
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          >
            <svg
              viewBox="0 0 800 800"
              fill="none"
              className="w-150 h-150 sm:w-212.5 sm:h-212.5 text-sky-400"
            >
              {/* الشريط الأول للـ DNA */}
              <path
                d="M150,100 C350,250 450,250 650,100 C450,350 350,450 150,700"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="12 8"
              />
              {/* الشريط المزدوج المعاكس للـ DNA */}
              <path
                d="M650,700 C450,550 350,550 150,700 C350,450 450,350 650,100"
                stroke="#22d3ee"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* الروابط الجينية المضيئة بين الشريطين */}
              <line x1="260" y1="200" x2="540" y2="200" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 6" />
              <line x1="310" y1="300" x2="490" y2="300" stroke="#22d3ee" strokeWidth="2.5" />
              <line x1="350" y1="400" x2="450" y2="400" stroke="#38bdf8" strokeWidth="3" />
              <line x1="310" y1="500" x2="490" y2="500" stroke="#22d3ee" strokeWidth="2.5" />
              <line x1="260" y1="600" x2="540" y2="600" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 6" />
              {/* العقد الجزيئية */}
              <circle cx="260" cy="200" r="8" fill="#38bdf8" />
              <circle cx="540" cy="200" r="8" fill="#22d3ee" />
              <circle cx="310" cy="300" r="7" fill="#22d3ee" />
              <circle cx="490" cy="300" r="7" fill="#38bdf8" />
              <circle cx="400" cy="400" r="10" fill="#38bdf8" />
              <circle cx="310" cy="500" r="7" fill="#38bdf8" />
              <circle cx="490" cy="500" r="7" fill="#22d3ee" />
              <circle cx="260" cy="600" r="8" fill="#22d3ee" />
              <circle cx="540" cy="600" r="8" fill="#38bdf8" />
            </svg>
          </motion.div>

          {/* إضاءة نيون سماوي خلفية */}
          <motion.div
            style={{ scale: cardScale }}
            className="absolute top-1/4 inset-s-1/4 w-112.5 h-112.5 bg-sky-500/15 rounded-full blur-[150px] pointer-events-none"
          />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* العمود الأول: النصوص والأزرار (تتلاشى وتصعد للأعلى مع السكرول) */}
              <motion.div
                style={{
                  opacity: heroTextOpacity,
                  y: heroTextY,
                  scale: heroTextScale,
                }}
                className="lg:col-span-7 space-y-6 will-change-transform"
              >
                {/* Top laboratory badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glossy-card border border-sky-400/40">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                    BIO-TECH
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-sky-400">
                    {t('badge')}
                  </span>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl sm:text-6xl xl:text-[4.25rem] font-black leading-[1.12] tracking-tight text-white">
                  {t('heroTitle1')}{' '}
                  <span className="text-gray-400">{t('heroTitle2')}</span>{' '}
                  <span className="mt-2 inline-block px-5 py-1 rounded-2xl bg-sky-500/10 border border-sky-400/40 text-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                    {t('heroTitleHighlight')}
                  </span>{' '}
                  <span>{t('heroTitle3')}</span>
                </h1>

                {/* Hero description */}
                <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                  {t('heroDesc')}
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to={user ? '/courses' : '/signup'}
                    className="px-8 py-4 rounded-2xl bg-linear-to-r from-sky-400 via-cyan-300 to-sky-400 text-slate-950 font-black text-base shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-105 transition-transform flex items-center gap-3"
                  >
                    <span>
                      {user ? t('continueLearning') : t('browseCourses')}
                    </span>
                    <span className="text-lg">⚡</span>
                  </Link>

                  {!user && (
                    <Link
                      to="/courses"
                      className="px-7 py-4 rounded-2xl glossy-card border border-gray-800 hover:border-sky-400 text-white font-bold text-base transition-all flex items-center gap-2"
                    >
                      <span>🔬</span>
                      <span>{t('tryFree')}</span>
                    </Link>
                  )}
                </div>

                {/* Interactive feature cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { icon: '🧬', label: t('feature1') },
                    { icon: '🧪', label: t('feature2') },
                    { icon: '⚡', label: t('feature3') },
                    { icon: '🎯', label: t('feature4') },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      className="glossy-card border border-gray-800 hover:border-sky-400/60 p-3.5 rounded-2xl flex items-center gap-2.5"
                    >
                      <span className="text-xl">{feature.icon}</span>
                      <span className="text-xs font-extrabold text-white">
                        {feature.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Scroll indicator */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="flex items-center gap-3 pt-2 text-sky-400"
                >
                  <span className="w-8 h-px bg-sky-400" />
                  <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase">
                    Scroll to Zoom & Explore DNA
                  </span>
                  <span aria-hidden="true">↓</span>
                </motion.div>
              </motion.div>

              {/* العمود الثاني: كبسولة العرض البيولوجية لصورة مس أميرة (تكبر سينمائياً مع السكرول) */}
              <motion.div
                style={{
                  scale: cardScale,
                  y: cardY,
                }}
                className="lg:col-span-5 relative flex justify-center will-change-transform"
              >
                {/* الحلقة المدارية المتحركة حول الكبسولة */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -inset-4 rounded-[3rem] border border-dashed border-sky-400/40 pointer-events-none"
                />

                <div className="relative w-full max-w-md glossy-card rounded-[2.5rem] p-4 border border-sky-400/40 shadow-[0_0_50px_rgba(56,189,248,0.2)]">
                  {/* Laboratory header */}
                  <div className="flex items-center justify-between px-3 pb-3 mb-2 border-b border-gray-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>

                    <span className="text-[10px] font-mono text-sky-400 tracking-widest uppercase">
                      BIO-INSTRUCTOR // LIVE
                    </span>
                  </div>

                  {/* Instructor photo with Inner Scroll Zoom */}
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/4.6] bg-gray-900">
                    <motion.img
                      style={{ scale: innerPhotoScale }}
                      src="/Mrs Amira.png"
                      alt="Mrs. Amira Samir"
                      loading="eager"
                      className="w-full h-full object-cover object-top origin-top will-change-transform"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent pointer-events-none" />

                    {/* Instructor name badge */}
                    <div className="absolute bottom-4 inset-x-4 glossy-card border border-sky-400/40 rounded-2xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-mono text-sky-400 uppercase tracking-widest">
                          SUPERVISED BY
                        </p>
                        <h3 className="text-base font-black text-white">
                          {t('withTeacher')}
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black text-lg">
                        🧬
                      </div>
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-2 pt-4 text-center">
                    <div className="p-2.5 rounded-2xl bg-gray-950/70 border border-gray-800">
                      <div className="text-xl font-black text-sky-400">250+</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase">
                        {t('lessons')}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-gray-950/70 border border-gray-800">
                      <div className="text-xl font-black text-cyan-300">98%</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase">
                        {t('successRate')}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-gray-950/70 border border-gray-800">
                      <div className="text-xl font-black text-emerald-400">
                        1000+
                      </div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase">
                        {t('students')}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </div>

      {/* =========================================
          2. SCIENTIFIC TERMINOLOGY STRIP
      ========================================== */}
      <div className="py-4 bg-gray-900 border-y border-gray-800 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-6 text-xs font-mono font-bold text-sky-400 tracking-widest uppercase">
          <span>🧬 MOLECULAR BIOLOGY</span>
          <span>•</span>
          <span>🔬 GENETICS & DNA</span>
          <span>•</span>
          <span>🧪 INTERACTIVE CHEMISTRY</span>
          <span>•</span>
          <span>🧠 SMART ASSESSMENT SYSTEM</span>
        </div>
      </div>

      {/* =========================================
          3. LEARNING JOURNEY — STAGGER REVEAL
      ========================================== */}
      <section className="py-24 relative z-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                // {t('journeyTag')}
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
                {t('journeyTitle')}
              </h2>
            </div>

            <p className="text-gray-400 max-w-md text-sm sm:text-base">
              {t('journeyDesc')}
            </p>
          </motion.div>

          {/* Staggered cards */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={revealVariants}
                whileHover={{ y: -10 }}
                className="glossy-card rounded-3xl p-7 border border-gray-800 hover:border-sky-400 transition-colors relative group"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-400 font-mono text-[10px] font-bold">
                    {step.tag}
                  </span>

                  <span className="text-2xl font-mono font-black text-sky-400">
                    {step.id}
                  </span>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gray-950 border border-gray-800 group-hover:border-sky-400 flex items-center justify-center text-3xl mb-6 shadow-inner transition-colors">
                  {step.icon}
                </div>

                <h3 className="text-xl font-black text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. FREQUENTLY ASKED QUESTIONS
      ========================================== */}
      <section className="py-24 border-t border-gray-800/80 relative z-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
              // {t('faqTag')}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">
              {t('faqTitle')}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;

              return (
                <motion.div
                  key={index}
                  variants={revealVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className={`glossy-card rounded-2xl border transition-colors ${
                    isOpen ? 'border-sky-400' : 'border-gray-800'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full text-start px-6 py-5 flex justify-between items-center gap-4"
                  >
                    <span className="font-black text-base text-white">
                      {faq.q}
                    </span>

                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-transform ${
                        isOpen
                          ? 'bg-sky-400 text-slate-950 rotate-45'
                          : 'bg-gray-950 text-sky-400 border border-gray-800'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-2 text-gray-300 text-sm leading-relaxed border-t border-gray-800">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          5. FINAL CALL TO ACTION
      ========================================== */}
      <section className="py-20 px-6 relative z-20 bg-gray-950">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto glossy-card rounded-[2.5rem] border border-sky-400/40 p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              {t('ctaTitle')}
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              {t('ctaDesc')}
            </p>

            <Link
              to={user ? '/courses' : '/signup'}
              className="inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-sky-400 to-cyan-300 text-slate-950 rounded-full font-black shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-105 transition-transform"
            >
              <span>
                {user ? t('continueLearning') : t('ctaButton')}
              </span>
              <span>🚀</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}