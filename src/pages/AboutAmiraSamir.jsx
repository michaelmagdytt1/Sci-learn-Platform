import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function AboutAmiraSamir() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [activeStep, setActiveStep] = useState(0);

  const credentials = [
    { code: 'EXP-25', value: '25+ Years', label: isAr ? 'خبرة في تدريس العلوم والأحياء' : 'Teaching Science & Biology' },
    { code: 'DEG-PM', value: 'Pre-Master', label: isAr ? 'دراسات عليا متخصصة' : 'Postgraduate Academic Depth' },
    { code: 'CRT-TOT', value: 'TOT Certified', label: isAr ? 'مدرب دولي معتمد' : 'Certified Master Trainer' },
    { code: 'STD-10K', value: '10,000+', label: isAr ? 'طالب حققوا الدرجة النهائية' : 'Top-Scoring Students' },
  ];

  const milestones = [
    {
      step: '01',
      year: '1999',
      icon: '🔬',
      tag: isAr ? 'نقطة الانطلاق' : 'FOUNDATION',
      title: isAr ? 'تأسيس منهج الفهم البصري في الأحياء والساينس' : 'Pioneering Visual Biology & Science Education',
      desc: isAr
        ? 'بداية رحلة تغيير طريقة دراسة الأحياء والساينس من التلقين التقليدي إلى الاستنتاج والتحليل العلمي وربط الدروس بالحياة العملية.'
        : 'Transforming how students perceive biology and science by turning complex theories into interactive visual stories.',
      highlights: isAr
        ? ['تبسيط المفاهيم المعقدة بالرسوم التوضيحية', 'بناء شغف البحث العلمي لدى الطلاب', 'تأسيس آلاف الطلاب في المراحل التأسيسية']
        : ['Visualizing complex biological concepts', 'Building scientific curiosity', 'Mentoring thousands of foundation students'],
      impact: '99%',
      impactLabel: isAr ? 'نسبة تفاعل وفهم الطلاب' : 'Student Engagement Rate',
    },
    {
      step: '02',
      year: '2010',
      icon: '🧬',
      tag: isAr ? 'البحث الأكاديمي' : 'ACADEMIC DEPTH',
      title: isAr ? 'الدراسات العليا وتمهيدي الماجستير (Pre-Master)' : "Pre-Master's Scientific & Academic Research",
      desc: isAr
        ? 'التعمق الأكاديمي في علوم البيولوجيا الجزيئية والوراثة لتقديم محتوى علمي دقيق يواكب أحدث النظم التعليمية.'
        : 'Deepening scientific mastery in molecular biology and genetics to bridge school curricula with academic research.',
      highlights: isAr
        ? ['تطوير طرق شرح الـ DNA والبيولوجيا الجزيئية', 'تدريب الطلاب على أسئلة المستويات العليا', 'ربط المناهج بالتطبيقات الطبية والعلمية']
        : ['Advanced DNA & Genetics teaching models', 'Higher-order thinking question banks', 'Real-world medical & lab correlations'],
      impact: '100%',
      impactLabel: isAr ? 'دقة المادة العلمية والمنهجية' : 'Curriculum Accuracy & Depth',
    },
    {
      step: '03',
      year: '2018',
      icon: '🧠',
      tag: isAr ? 'التأهيل النفسي' : 'COACHING & TOT',
      title: isAr ? 'اعتماد TOT وخبير التنمية البشرية والتحفيز' : 'TOT Certified & Student Mindset Coaching',
      desc: isAr
        ? 'دمج الإرشاد النفسي والتربوي مع التدريس للقضاء على رهبة الامتحانات وبناء ثقة الطالب بنفسه خلال العام الدراسي.'
        : 'Empowering students mentally and academically with certified coaching methodologies to conquer exam anxiety.',
      highlights: isAr
        ? ['جلسات تحفيز وإدارة وقت للمراحل النهائية', 'كسر حاجز الخوف من أسئلة النظام الجديد', 'متابعة فردية لمستوى كل طالب نفسياً وعلمياً']
        : ['Time-management & focus bootcamps', 'Overcoming new-system exam stress', 'Personalized mentorship & tracking'],
      impact: '98%',
      impactLabel: isAr ? 'تحسن الثقة والأداء في الاختبارات' : 'Exam Confidence Boost',
    },
    {
      step: '04',
      year: '2026',
      icon: '🚀',
      tag: isAr ? 'الجيل الذكي' : 'DIGITAL BIO-LAB',
      title: isAr ? 'إطلاق منصة SciLearn الرقمية المتكاملة' : 'Launching SciLearn Interactive Bio-Platform',
      desc: isAr
        ? 'بناء بيئة تعليمية ذكية تجمع بين محاضرات الـ 4K، اختبارات العلوم المتكاملة والأحياء، والمتابعة اللحظية بالذكاء التفاعلي.'
        : 'Creating a next-generation digital academy for Primary, Prep, Integrated Science (Sec 1) & Biology (Sec 3).',
      highlights: isAr
        ? ['كود طالب ذكي ولوحة تحكم لمتابعة الدرجات', 'امتحانات تفاعلية بتصحيح فوري بعد كل درس', 'مكتبة ملازم PDF وخرائط ذهنية شاملة']
        : ['Smart 4-digit Student ID & Analytics Dashboard', 'Instant-grading interactive lab quizzes', 'Comprehensive Mind-Maps & PDF library'],
      impact: '24/7',
      impactLabel: isAr ? 'دعم وتعلم ذكي بدون حدود' : 'Smart Learning Access',
    },
  ];

  const current = milestones[activeStep];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans pt-32 pb-24 text-start relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 🌟 القسم الأول (ثابت كما طلبت): بطاقة الهوية العلمية (Scientific Profile Deck) */}
        <div className="glossy-card rounded-[2.5rem] border border-sky-400/30 p-8 md:p-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden border-2 border-sky-400/50 aspect-[4/4.5] bg-gray-900 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
                <img
                  src="Mrs Amira.png"
                  alt="Mrs. Amira Samir"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 inset-x-4 bg-gray-950/90 backdrop-blur-md border border-sky-400/40 rounded-2xl p-4">
                  <span className="text-[10px] font-mono text-sky-400 tracking-widest uppercase block">
                    LEAD INSTRUCTOR
                  </span>
                  <h2 className="text-xl font-black text-white">Mrs. Amira Samir</h2>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-400 text-xs font-mono font-bold">
                <span>🧬</span> {isAr ? 'ملف الخبرة الأكاديمية الموثق' : 'VERIFIED ACADEMIC DOSSIER'}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white">
                {isAr
                  ? 'أكثر من ربع قرن في صناعة المتفوقين في الساينس والأحياء'
                  : '25+ Years of Crafting Top Achievers in Science & Biology'}
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {isAr
                  ? 'نؤمن أن علم الأحياء ليس مجرد مصطلحات للحفظ، بل هو رحلة لاكتشاف أسرار الكون والحياة. من خلال المزج بين الخبرة الأكاديمية (Pre-Master) والتدريب المعتمد (TOT)، نقدم لكل طالب خارطة طريق واضحة نحو التفوق.'
                  : 'Biology is not about memorizing terms—it is about decoding life itself. Combining Pre-Master academic depth with TOT coaching to unlock every student’s full potential.'}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {credentials.map((cred, i) => (
                  <div key={i} className="bg-gray-950/80 border border-gray-800 hover:border-sky-400 rounded-2xl p-4 transition-all">
                    <span className="text-[10px] font-mono text-sky-400 block mb-1">{cred.code}</span>
                    <div className="text-xl font-black text-white">{cred.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{cred.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 🌟 القسم الثاني الجديد: CAREER EVOLUTION التفاعلي بالأنيميشن */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full glossy-card border border-sky-400/40 text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
              // INTERACTIVE CAREER EVOLUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4">
              {isAr ? 'رحلة التطور العلمي التفاعلية' : 'Interactive Journey of Excellence'}
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              {isAr ? 'اضغط على أي محطة زمنية لاستكشاف تفاصيل الإنجاز' : 'Click on any milestone node to explore the scientific journey'}
            </p>
          </div>

          {/* 1. شريط العقد الزمنية المضيء (Interactive DNA Nodes Bar) */}
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* خط الخلفية */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeStep + 1) / milestones.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-4 gap-2">
              {milestones.map((item, idx) => {
                const isActive = activeStep === idx;
                const isPassed = idx <= activeStep;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl transition-all border-2 ${
                        isActive
                          ? 'bg-gradient-to-tr from-sky-400 to-cyan-300 text-slate-950 border-white shadow-[0_0_30px_rgba(56,189,248,0.9)] scale-110'
                          : isPassed
                          ? 'bg-gray-900 border-sky-400 text-sky-400'
                          : 'bg-gray-950 border-gray-800 text-gray-400 hover:border-sky-400/50'
                      }`}
                    >
                      {item.icon}
                    </motion.div>
                    <span className={`mt-3 font-mono text-xs sm:text-sm font-black transition-colors ${
                      isActive ? 'text-sky-400' : 'text-gray-400'
                    }`}>
                      {item.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. شاشة العرض الهولوجرامية المتحركة (Animated Hologram Showcase) */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glossy-card rounded-[2.5rem] border border-sky-400/50 p-8 sm:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.15)]"
              >
                {/* رقم خلفية عملاق شفاف */}
                <div className="absolute -bottom-6 end-6 text-[8rem] sm:text-[11rem] font-mono font-black text-sky-400/10 select-none pointer-events-none leading-none">
                  {current.year}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full bg-sky-400 text-slate-950 font-mono text-xs font-black">
                        PHASE {current.step} // {current.year}
                      </span>
                      <span className="px-3.5 py-1 rounded-full bg-sky-400/10 border border-sky-400/40 text-sky-400 font-mono text-xs font-bold">
                        {current.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-black text-white leading-snug">
                      {current.title}
                    </h3>

                    <p className="text-gray-300 text-base leading-relaxed">
                      {current.desc}
                    </p>

                    {/* نقاط التميز داخل المحطة */}
                    <div className="space-y-2.5 pt-2">
                      {current.highlights.map((h, i) => (
                        <motion.div
                          initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.12 }}
                          key={i}
                          className="flex items-center gap-3 bg-gray-950/70 border border-gray-800 px-4 py-3 rounded-2xl"
                        >
                          <span className="w-6 h-6 rounded-full bg-sky-400/20 text-sky-400 flex items-center justify-center text-xs font-black">
                            ✓
                          </span>
                          <span className="text-sm font-bold text-white">{h}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* عداد التأثير العلمي الدائري */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ rotate: -10, scale: 0.9 }}
                      animate={{ rotate: 0, scale: 1 }}
                      className="w-48 h-48 rounded-full bg-gray-950 border-4 border-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.35)] flex flex-col items-center justify-center text-center p-4 relative"
                    >
                      <span className="text-3xl mb-1">{current.icon}</span>
                      <span className="text-4xl font-mono font-black text-sky-400">
                        {current.impact}
                      </span>
                      <span className="text-[11px] font-bold text-gray-300 mt-1">
                        {current.impactLabel}
                      </span>
                    </motion.div>

                    {/* أزرار التنقل السريع بين المحطات */}
                    <div className="flex items-center gap-3 mt-6">
                      <button
                        onClick={() => setActiveStep((prev) => (prev === 0 ? milestones.length - 1 : prev - 1))}
                        className="px-4 py-2 rounded-xl bg-gray-950 border border-gray-800 hover:border-sky-400 text-xs font-bold text-sky-400"
                      >
                        {isAr ? '→ السابق' : '← Prev'}
                      </button>
                      <button
                        onClick={() => setActiveStep((prev) => (prev === milestones.length - 1 ? 0 : prev + 1))}
                        className="px-4 py-2 rounded-xl bg-sky-400 text-slate-950 text-xs font-black"
                      >
                        {isAr ? 'التالي ←' : 'Next →'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* دعوة للانضمام */}
        <div className="text-center pt-4">
          <Link
            to="/courses"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 font-black shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-105 transition-transform"
          >
            <span>{isAr ? 'ابدأ رحلتك العلمية الآن' : 'Start Your Scientific Journey'}</span>
            <span>🧬</span>
          </Link>
        </div>

      </div>
    </div>
  );
}