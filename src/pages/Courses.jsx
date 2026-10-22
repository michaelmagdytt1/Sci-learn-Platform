import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Courses() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  // 🌟 حالات التنقل الذكي: المسار المختار -> السنة الدراسية -> التاب المفتوح
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [activeTab, setActiveTab] = useState('lessons'); // 'lessons' | 'quizzes' | 'homework'

  // 🌟 هيكل البيانات الكامل للمراحل والصفوف
  const tracksData = [
    {
      id: 'primary',
      badge: isAr ? 'المرحلة الابتدائية' : 'PRIMARY STAGE',
      title: isAr ? 'الساينس للمرحلة الابتدائية' : 'Primary Stage Science',
      desc: isAr
        ? 'تأسيس علمي ممتع وتفاعلي لطلاب الصف الرابع والخامس والسادس الابتدائي.'
        : 'Interactive visual science foundation for Grade 4, Grade 5, and Grade 6 students.',
      levelBadge: 'Grade 4 • 5 • 6',
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
      hasMultipleGrades: true,
      grades: [
        {
          id: 'g4',
          code: 'GRADE 04',
          name: isAr ? 'الصف الرابع الابتدائي (Grade 4)' : 'Grade 4 Primary',
          subtitle: isAr ? 'الأنظمة الحية، التكيف، والطاقة والحركة' : 'Living Systems, Adaptation & Energy',
          lessonsCount: 18,
          quizzesCount: 9,
          hwCount: 12,
        },
        {
          id: 'g5',
          code: 'GRADE 05',
          name: isAr ? 'الصف الخامس الابتدائي (Grade 5)' : 'Grade 5 Primary',
          subtitle: isAr ? 'العلاقات الغذائية، المادة، والغلاف المائي' : 'Food Webs, Matter & Hydrosphere',
          lessonsCount: 20,
          quizzesCount: 10,
          hwCount: 14,
        },
        {
          id: 'g6',
          code: 'GRADE 06',
          name: isAr ? 'الصف السادس الابتدائي (Grade 6)' : 'Grade 6 Primary',
          subtitle: isAr ? 'الخلية كنظام، الطاقة الحرارية، والطقس' : 'Cell as a System, Thermal Energy & Weather',
          lessonsCount: 22,
          quizzesCount: 12,
          hwCount: 15,
        },
      ],
    },
    {
      id: 'prep',
      badge: isAr ? 'المرحلة الإعدادية' : 'PREPARATORY STAGE',
      title: isAr ? 'الساينس للمرحلة الإعدادية' : 'Preparatory Stage Science',
      desc: isAr
        ? 'شرح عميق وتجارب معملية تغطي مناهج أولى وتانية وتالتة إعدادي بالكامل.'
        : 'Comprehensive laboratory science covering Prep 1, Prep 2, and Prep 3 curricula.',
      levelBadge: 'Prep 1 • 2 • 3',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80',
      hasMultipleGrades: true,
      grades: [
        {
          id: 'p1',
          code: 'PREP 01',
          name: isAr ? 'الصف الأول الإعدادي (Prep 1)' : '1st Preparatory (Prep 1)',
          subtitle: isAr ? 'تركيب المادة، الذرة، والتنوع البيولوجي' : 'Atomic Structure, Matter & Diversity',
          lessonsCount: 24,
          quizzesCount: 12,
          hwCount: 16,
        },
        {
          id: 'p2',
          code: 'PREP 02',
          name: isAr ? 'الصف الثاني الإعدادي (Prep 2)' : '2nd Preparatory (Prep 2)',
          subtitle: isAr ? 'الجدول الدوري، الموجات، والتكاثر' : 'Periodic Table, Waves & Reproduction',
          lessonsCount: 26,
          quizzesCount: 14,
          hwCount: 18,
        },
        {
          id: 'p3',
          code: 'PREP 03',
          name: isAr ? 'الصف الثالث الإعدادي (Prep 3)' : '3rd Preparatory (Prep 3)',
          subtitle: isAr ? 'التفاعلات الكيميائية، الجينات، والهرمونات' : 'Chemical Reactions, Genetics & Hormones',
          lessonsCount: 30,
          quizzesCount: 18,
          hwCount: 20,
        },
      ],
    },
    {
      id: 'sec1',
      badge: isAr ? 'الصف الأول الثانوي فقط' : '1ST SECONDARY ONLY',
      title: isAr ? 'العلوم المتكاملة (Integrated Science)' : 'Integrated Science (Sec 1)',
      desc: isAr
        ? 'منهج العلوم المتكاملة الجديد للصف الأول الثانوي بربط البيولوجي والكيمياء والفيزياء والبيئة.'
        : 'Complete 1st Secondary Integrated Science linking Biology, Chemistry, Physics, and Ecosystem.',
      levelBadge: 'Sec 1 Only',
      icon: '🧪',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80',
      hasMultipleGrades: false,
      grades: [
        {
          id: 's1',
          code: 'SEC 01 • INTEGRATED SCIENCE',
          name: isAr ? 'أولى ثانوي - العلوم المتكاملة (Integrated Science)' : 'Sec 1 - Integrated Science',
          subtitle: isAr ? 'النظام البيئي المائي، الغلاف الجوي، والتربة والطاقة' : 'Aquatic Ecosystem, Atmosphere & Bio-Energy',
          lessonsCount: 32,
          quizzesCount: 16,
          hwCount: 22,
        },
      ],
    },
    {
      id: 'sec3',
      badge: isAr ? 'الصف الثالث الثانوي فقط' : '3RD SECONDARY ONLY',
      title: isAr ? 'الأحياء والبيولوجي (3rd Sec Biology)' : 'Biology & Molecular DNA (Sec 3)',
      desc: isAr
        ? 'منهج الأحياء والبيولوجي كاملاً لتالتة ثانوي مع البيولوجيا الجزيئية والـ DNA والمناعة.'
        : 'Full 3rd Secondary Biology mastering Support, Hormones, Immunity, and Molecular DNA.',
      levelBadge: 'Sec 3 Only',
      icon: '🧬',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80',
      hasMultipleGrades: false,
      grades: [
        {
          id: 's3',
          code: 'SEC 03 • BIOLOGY',
          name: isAr ? 'تالتة ثانوي - الأحياء والبيولوجيا الجزيئية (Biology)' : 'Sec 3 - Biology & Molecular Genetics',
          subtitle: isAr ? 'الدعامة والحركة، الهرمونات، التكاثر، المناعة، والـ DNA' : 'Support, Hormones, Reproduction, Immunity & DNA',
          lessonsCount: 45,
          quizzesCount: 30,
          hwCount: 35,
        },
      ],
    },
  ];

  // 🌟 دالة توليد المحتوى الديناميكي (Lessons & PDFs / Quizzes / Homework) لأي سنة مختارة
  const getGradeMaterials = (gradeName) => ({
    lessons: [
      {
        id: 101,
        unit: isAr ? 'الوحدة الأولى • الدرس 01' : 'UNIT 01 • LESSON 01',
        title: isAr ? `مقدمة شاملة وتأسيس المنهج - ${gradeName}` : `Core Foundation & Concept Map - ${gradeName}`,
        duration: '45 Min',
        pdfName: 'Lecture_01_MindMap_Notes.pdf',
        pdfSize: '4.2 MB',
        isFree: true,
      },
      {
        id: 102,
        unit: isAr ? 'الوحدة الأولى • الدرس 02' : 'UNIT 01 • LESSON 02',
        title: isAr ? 'الشرح التفصيلي والتطبيقات العملية بالرسوم ثلاثية الأبعاد' : 'Deep Visual Lab & 3D Biological Mechanisms',
        duration: '55 Min',
        pdfName: 'Lecture_02_Full_Summary.pdf',
        pdfSize: '5.8 MB',
        isFree: false,
      },
      {
        id: 103,
        unit: isAr ? 'الوحدة الأولى • الدرس 03' : 'UNIT 01 • LESSON 03',
        title: isAr ? 'ورشة حل أسئلة المستويات العليا والربط العلمي' : 'Higher-Order Thinking & Analytical Problem Solving',
        duration: '50 Min',
        pdfName: 'Lecture_03_VIP_Workbook.pdf',
        pdfSize: '6.1 MB',
        isFree: false,
      },
    ],
    quizzes: [
      {
        id: 201,
        code: 'QUIZ-01',
        title: isAr ? 'اختبار تفاعلي سريع على الدرس الأول' : 'Quick Interactive Concept Quiz 01',
        questions: 15,
        time: '20 Min',
        difficulty: isAr ? 'متوسط' : 'Medium',
        score: '15 / 15',
      },
      {
        id: 202,
        code: 'QUIZ-02',
        title: isAr ? 'امتحان شامل على الوحدة الأولى بنظام التابلت' : 'Comprehensive Unit 01 Lab Assessment',
        questions: 25,
        time: '40 Min',
        difficulty: isAr ? 'مستويات عليا' : 'Advanced',
        score: null,
      },
      {
        id: 203,
        code: 'QUIZ-03',
        title: isAr ? 'اختبار تراكمي لقياس الفهم والاستنتاج' : 'Cumulative Analytical Challenge',
        questions: 20,
        time: '30 Min',
        difficulty: isAr ? 'متقدم' : 'High',
        score: null,
      },
    ],
    homework: [
      {
        id: 301,
        code: 'HW-01',
        title: isAr ? 'واجب الدرس الأول: تدريبات الملزمة صـ 12 إلى صـ 18' : 'Assignment 01: Workbook Questions p.12 - p.18',
        deadline: isAr ? 'متاح للتسليم' : 'Open Submission',
        status: 'completed',
        questionsCount: 20,
      },
      {
        id: 302,
        code: 'HW-02',
        title: isAr ? 'واجب الدرس الثاني: أسئلة المقال والرسومات التوضيحية' : 'Assignment 02: Diagrams & Scientific Essay Questions',
        deadline: isAr ? 'ينتهي خلال يومين' : 'Due in 2 Days',
        status: 'pending',
        questionsCount: 15,
      },
      {
        id: 303,
        code: 'HW-03',
        title: isAr ? 'واجب المراجعة: بنك الأسئلة الاستنتاجية' : 'Assignment 03: Analytical Question Bank',
        deadline: isAr ? 'جديد' : 'New Task',
        status: 'pending',
        questionsCount: 30,
      },
    ],
  });

  // 🌟 عند الضغط على "Start Learning" في الكارت الرئيسي
  const handleSelectTrack = (track) => {
    setSelectedTrack(track);
    setActiveTab('lessons');
    // لو المرحلة فيها سنة واحدة بس (أولى ثانوي علوم متكاملة أو 3 ثانوي أحياء) افتح المحتوى مباشرة
    if (!track.hasMultipleGrades) {
      setSelectedGrade(track.grades[0]);
    } else {
      setSelectedGrade(null);
    }
  };

  // 🌟 للرجوع خطوة للخلف
  const handleBack = () => {
    if (selectedGrade && selectedTrack?.hasMultipleGrades) {
      setSelectedGrade(null);
    } else {
      setSelectedTrack(null);
      setSelectedGrade(null);
    }
  };

  const currentMaterials = selectedGrade ? getGradeMaterials(selectedGrade.name) : null;

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans pt-32 pb-24 text-start relative overflow-hidden">
      {/* إضاءات خلفية */}
      <div className="absolute top-12 start-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-12 end-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 🌟 شريط المسار العلوي (Interactive Breadcrumb Bar) يظهر عند الدخول لأي مرحلة */}
        {selectedTrack && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glossy-card rounded-2xl border border-sky-400/40 px-5 py-3.5 mb-8 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold">
              <button
                onClick={() => {
                  setSelectedTrack(null);
                  setSelectedGrade(null);
                }}
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                {isAr ? 'جميع المراحل' : 'All Courses'}
              </button>

              <span className="text-gray-600">/</span>

              <button
                onClick={() => {
                  if (selectedTrack.hasMultipleGrades) setSelectedGrade(null);
                }}
                className={`${
                  selectedGrade ? 'text-gray-300 hover:text-sky-400' : 'text-sky-400'
                } transition-colors`}
              >
                {selectedTrack.title}
              </button>

              {selectedGrade && selectedTrack.hasMultipleGrades && (
                <>
                  <span className="text-gray-600">/</span>
                  <span className="text-sky-400">{selectedGrade.name}</span>
                </>
              )}
            </div>

            <button
              onClick={handleBack}
              className="px-4 py-1.5 rounded-xl bg-gray-950 border border-gray-800 hover:border-sky-400 text-sky-400 text-xs font-black flex items-center gap-1.5 transition-all"
            >
              <span>{isAr ? '→ رجوع للخلف' : '← Back'}</span>
            </button>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          
          {/* =====================================================================
              🌟 المستوى الأول: عرض الـ 4 مراحل الرئيسية (Tracks View)
          ===================================================================== */}
          {!selectedTrack && (
            <motion.div
              key="tracks-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glossy-card border border-sky-400/40 text-sky-400 text-xs font-mono font-bold uppercase mb-4">
                  🧬 {isAr ? 'الأكاديمية العلمية التفاعلية' : 'SCILEARN ACADEMIC PORTAL'}
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  {isAr ? (
                    <>اختر مرحلتك الدراسية وابدأ <span className="text-sky-400">التفوق العلمي</span></>
                  ) : (
                    <>Select Your Academic Stage & <span className="text-sky-400">Start Learning</span></>
                  )}
                </h1>
                <p className="text-gray-400 text-base">
                  {isAr
                    ? 'مناهج مصممة بأحدث طرق الشرح البصري ومقسمة بذكاء إلى محاضرات وملازم PDF، اختبارات تفاعلية، وواجبات.'
                    : 'Every stage includes structured Video Lessons & PDFs, Interactive Quizzes, and Guided Homework.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tracksData.map((track) => (
                  <motion.div
                    key={track.id}
                    whileHover={{ y: -8 }}
                    className="glossy-card rounded-[2rem] border border-gray-800 hover:border-sky-400/60 overflow-hidden flex flex-col sm:flex-row group transition-all shadow-2xl"
                  >
                    {/* صورة المرحلة */}
                    <div className="sm:w-2/5 relative overflow-hidden min-h-[240px]">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent"></div>
                      <span className="absolute top-4 start-4 px-3 py-1 rounded-xl bg-gray-950/90 border border-sky-400/50 text-sky-400 text-xs font-mono font-black">
                        {track.levelBadge}
                      </span>
                      <div className="absolute bottom-4 start-4 w-12 h-12 rounded-2xl bg-gray-950/90 border border-gray-800 flex items-center justify-center text-2xl">
                        {track.icon}
                      </div>
                    </div>

                    {/* تفاصيل المرحلة */}
                    <div className="sm:w-3/5 p-7 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                          // {track.badge}
                        </span>
                        <h2 className="text-2xl font-black text-white mt-1 mb-3 group-hover:text-sky-400 transition-colors">
                          {track.title}
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                          {track.desc}
                        </p>
                      </div>

                      <div>
                        {/* شريط يوضح محتويات المرحلة */}
                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-gray-300 border-t border-gray-800 pt-4 mb-5">
                          <span className="px-2.5 py-1 rounded-lg bg-gray-950 border border-gray-800">
                            🎬 Lessons & PDFs
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-gray-950 border border-gray-800">
                            🧪 Quizzes
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-gray-950 border border-gray-800">
                            📝 Homework
                          </span>
                        </div>

                        <button
                          onClick={() => handleSelectTrack(track)}
                          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 font-black text-sm shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                        >
                          <span>{isAr ? 'ابدأ التعلم الآن' : 'Start Learning'}</span>
                          <span>{isAr ? '←' : '→'}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* =====================================================================
              🌟 المستوى الثاني: اختيار السنة الدراسية (للابتدائي والإعدادي)
              Grade 4, 5, 6 أو Prep 1, 2, 3
          ===================================================================== */}
          {selectedTrack && !selectedGrade && (
            <motion.div
              key="grades-view"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="px-4 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-400 text-xs font-mono font-bold uppercase">
                  {selectedTrack.badge}
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-3">
                  {isAr ? 'اختر سنتك الدراسية' : 'Choose Your Academic Grade'}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  {isAr
                    ? 'اضغط على صفك الدراسي لفتح المحاضرات وملازم الـ PDF والاختبارات والواجبات الخاصة بك.'
                    : 'Select your grade below to unlock your dedicated Lessons & PDFs, Quizzes, and Homework.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {selectedTrack.grades.map((grade, index) => (
                  <motion.div
                    key={grade.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() => {
                      setSelectedGrade(grade);
                      setActiveTab('lessons');
                    }}
                    className="cursor-pointer glossy-card rounded-[2rem] border border-gray-800 hover:border-sky-400 p-8 flex flex-col justify-between group transition-all relative overflow-hidden"
                  >
                    <div className="absolute -top-12 -end-12 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl group-hover:bg-sky-400/25 transition-all"></div>

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="px-3.5 py-1.5 rounded-xl bg-sky-400 text-slate-950 font-mono text-xs font-black shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                          {grade.code}
                        </span>
                        <span className="w-10 h-10 rounded-full bg-gray-950 border border-gray-800 group-hover:border-sky-400 flex items-center justify-center text-sky-400 font-bold">
                          {isAr ? '←' : '→'}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-white mb-2 group-hover:text-sky-400 transition-colors">
                        {grade.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {grade.subtitle}
                      </p>
                    </div>

                    <div>
                      {/* إحصائيات الأقسام الـ 3 داخل كل سنة */}
                      <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-gray-950/90 border border-gray-800 text-center mb-6">
                        <div>
                          <div className="text-base font-black text-sky-400">{grade.lessonsCount}</div>
                          <div className="text-[10px] text-gray-400 font-bold">Lessons/PDF</div>
                        </div>
                        <div className="border-x border-gray-800">
                          <div className="text-base font-black text-cyan-300">{grade.quizzesCount}</div>
                          <div className="text-[10px] text-gray-400 font-bold">Quizzes</div>
                        </div>
                        <div>
                          <div className="text-base font-black text-emerald-400">{grade.hwCount}</div>
                          <div className="text-[10px] text-gray-400 font-bold">Homework</div>
                        </div>
                      </div>

                      <button className="w-full py-3.5 rounded-2xl bg-gray-950 border border-sky-400/50 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-cyan-300 text-sky-400 group-hover:text-slate-950 font-black text-sm transition-all">
                        {isAr ? 'فتح محتوى الصف الدراسي' : 'Open Grade Portal'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* =====================================================================
              🌟 المستوى الثالث: بوابة المحتوى المقسمة لـ 3 أقسام
              1. Lessons & PDFs | 2. Quizzes | 3. Homework
          ===================================================================== */}
          {selectedGrade && currentMaterials && (
            <motion.div
              key="materials-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              {/* هيدر الصف الدراسي المختار */}
              <div className="glossy-card rounded-[2.2rem] border border-sky-400/40 p-7 sm:p-10 mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <span className="px-3.5 py-1 rounded-full bg-sky-400 text-slate-950 font-mono text-xs font-black uppercase">
                    {selectedGrade.code}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">
                    {selectedGrade.name}
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base mt-1">
                    {selectedGrade.subtitle}
                  </p>
                </div>

                {/* 🌟 التابات الـ 3 المطلوبة (Lessons & PDFs | Quizzes | Homework) */}
                <div className="flex flex-wrap items-center gap-2 bg-gray-950 p-2 rounded-2xl border border-gray-800 w-full lg:w-auto">
                  {[
                    { id: 'lessons', icon: '🎬', label: isAr ? "المحاضرات والـ PDF (Lessons & PDF's)" : "Lessons & PDF's" },
                    { id: 'quizzes', icon: '🧪', label: isAr ? 'الاختبارات (Quizzes)' : 'Quizzes' },
                    { id: 'homework', icon: '📝', label: isAr ? 'الواجبات (Homework)' : 'Homework' },
                  ].map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex-1 lg:flex-initial px-5 py-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 z-10 ${
                          isActive ? 'text-slate-950' : 'text-gray-300 hover:text-sky-400'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="course-portal-tab"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl -z-10 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                          />
                        )}
                        <span>{tab.icon}</span>
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* محتوى التاب المفتوح */}
              <AnimatePresence mode="wait">
                
                {/* 1️⃣ تاب المحاضرات وملازم الـ PDF */}
                {activeTab === 'lessons' && (
                  <motion.div
                    key="tab-lessons"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="grid grid-cols-1 gap-5"
                  >
                    {currentMaterials.lessons.map((lesson, idx) => (
                      <div
                        key={lesson.id}
                        className="glossy-card rounded-3xl border border-gray-800 hover:border-sky-400/60 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-sky-400/15 border border-sky-400/40 text-sky-400 font-mono font-black text-xl flex items-center justify-center shrink-0">
                            0{idx + 1}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-mono font-bold text-sky-400">
                                {lesson.unit}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-full bg-gray-950 border border-gray-800 text-[11px] text-gray-300 font-mono">
                                ⏱️ {lesson.duration}
                              </span>
                              {lesson.isFree && (
                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 text-[10px] font-black">
                                  FREE PREVIEW
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-white mt-1.5">
                              {lesson.title}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1 font-mono">
                              📄 {lesson.pdfName} ({lesson.pdfSize})
                            </p>
                          </div>
                        </div>

                        {/* أزرار مشاهدة الفيديو وتحميل الـ PDF */}
                        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                          <button className="flex-1 md:flex-initial px-5 py-3 rounded-2xl bg-gray-950 border border-gray-800 hover:border-sky-400 text-sky-400 text-xs font-black flex items-center justify-center gap-2 transition-all">
                            <span>📥</span>
                            <span>{isAr ? 'تحميل الـ PDF' : 'Download PDF'}</span>
                          </button>
                          <button className="flex-1 md:flex-initial px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 text-xs font-black shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-105 transition-transform flex items-center justify-center gap-2">
                            <span>▶️</span>
                            <span>{isAr ? 'مشاهدة المحاضرة' : 'Watch Lesson'}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* 2️⃣ تاب الكويزات والاختبارات (Quizzes) */}
                {activeTab === 'quizzes' && (
                  <motion.div
                    key="tab-quizzes"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {currentMaterials.quizzes.map((quiz) => (
                      <div
                        key={quiz.id}
                        className="glossy-card rounded-3xl border border-gray-800 hover:border-sky-400/60 p-7 flex flex-col justify-between transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 rounded-xl bg-sky-400/15 border border-sky-400/30 font-mono text-xs font-black text-sky-400">
                              {quiz.code}
                            </span>
                            <span className="text-xs font-bold text-cyan-300">
                              ⏱️ {quiz.time}
                            </span>
                          </div>

                          <h3 className="text-xl font-black text-white mb-4">
                            {quiz.title}
                          </h3>

                          <div className="space-y-2 text-xs text-gray-300 bg-gray-950/80 p-4 rounded-2xl border border-gray-800 mb-6">
                            <div className="flex justify-between">
                              <span className="text-gray-400">{isAr ? 'عدد الأسئلة:' : 'Questions:'}</span>
                              <span className="font-black text-white">{quiz.questions} Qs</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">{isAr ? 'المستوى:' : 'Difficulty:'}</span>
                              <span className="font-black text-sky-400">{quiz.difficulty}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">{isAr ? 'الدرجة السابقة:' : 'Previous Score:'}</span>
                              <span className="font-mono font-black text-emerald-400">
                                {quiz.score || (isAr ? 'لم يختبر بعد' : 'Not Taken')}
                              </span>
                            </div>
                          </div>
                        </div>

                        <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 font-black text-xs shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:scale-[1.02] transition-transform">
                          {isAr ? 'ابدأ الاختبار الآن 🧪' : 'Start Quiz Now 🧪'}
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* 3️⃣ تاب الواجبات (Homework) */}
                {activeTab === 'homework' && (
                  <motion.div
                    key="tab-homework"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {currentMaterials.homework.map((hw) => (
                      <div
                        key={hw.id}
                        className="glossy-card rounded-3xl border border-gray-800 hover:border-sky-400/60 p-7 flex flex-col justify-between transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 rounded-xl bg-gray-950 border border-gray-800 font-mono text-xs font-black text-sky-400">
                              {hw.code}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                                hw.status === 'completed'
                                  ? 'bg-emerald-400/15 text-emerald-400 border border-emerald-400/30'
                                  : 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                              }`}
                            >
                              {hw.status === 'completed'
                                ? isAr ? '✓ تم التسليم' : '✓ Submitted'
                                : hw.deadline}
                            </span>
                          </div>

                          <h3 className="text-xl font-black text-white mb-3">
                            {hw.title}
                          </h3>

                          <p className="text-xs text-gray-400 mb-6">
                            📝 {isAr ? `يحتوي على ${hw.questionsCount} سؤال تطبيقي ومقالي` : `Contains ${hw.questionsCount} structured homework questions`}
                          </p>
                        </div>

                        <button
                          className={`w-full py-3.5 rounded-2xl font-black text-xs transition-all ${
                            hw.status === 'completed'
                              ? 'bg-gray-950 border border-emerald-400/50 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950'
                              : 'bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.35)]'
                          }`}
                        >
                          {hw.status === 'completed'
                            ? isAr ? 'مراجعة نموذج الإجابة ✓' : 'View Model Answer ✓'
                            : isAr ? 'حل وتسليم الواجب 📝' : 'Solve & Submit Homework 📝'}
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}