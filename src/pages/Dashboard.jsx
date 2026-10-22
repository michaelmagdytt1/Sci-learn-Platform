import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function Dashboard() {
  const { user } = useAuth();
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const stats = [
    { icon: '🧬', label: isAr ? 'الكورسات النشطة' : 'Active Courses', value: '2', sub: 'Integrated Science & Bio' },
    { icon: '🎬', label: isAr ? 'المحاضرات المكتملة' : 'Completed Lessons', value: '18 / 24', sub: '75% Progress' },
    { icon: '🧪', label: isAr ? 'متوسط درجات الاختبارات' : 'Quiz Score Avg.', value: '96%', sub: 'Top 5% Rank' },
    { icon: '🔥', label: isAr ? 'أيام الالتزام المتتالية' : 'Study Streak', value: '14 Days', sub: 'Keep it up!' },
  ];

  const enrolledCourses = [
    {
      id: 1,
      tag: 'SEC 1 • INTEGRATED SCIENCE',
      title: isAr ? 'العلوم المتكاملة - الصف الأول الثانوي' : 'Integrated Science: Ecosystem & Bio-Energy',
      nextLesson: isAr ? 'المحاضرة 12: التوازن البيئي والطاقة الحيوية' : 'Lesson 12: Ecological Balance & Bio-Energy',
      progress: 78,
      quizzesPassed: '9/10',
    },
    {
      id: 2,
      tag: 'SEC 3 • BIOLOGY',
      title: isAr ? 'الأحياء والبيولوجيا الجزيئية (DNA & Immunity)' : '3rd Sec Biology: Molecular DNA & Immunity',
      nextLesson: isAr ? 'المحاضرة 19: تضاعف الـ DNA وتخليق البروتين' : 'Lesson 19: DNA Replication & Protein Synthesis',
      progress: 64,
      quizzesPassed: '14/16',
    },
  ];

  const recentQuizzes = [
    { title: isAr ? 'اختبار الفصل الأول: الدعامة والحركة' : 'Quiz 01: Support & Movement', score: '20 / 20', status: 'Full Mark 🏆', date: '2 days ago' },
    { title: isAr ? 'اختبار العلوم المتكاملة: الغلاف الحيوي' : 'Quiz 02: Biosphere & Energy', score: '19 / 20', status: 'Excellent ⭐', date: '5 days ago' },
    { title: isAr ? 'اختبار المناعة في الكائنات الحية' : 'Quiz 03: Human Immunity Lab', score: '29 / 30', status: 'Excellent ⭐', date: '1 week ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans pt-32 pb-20 text-start relative overflow-hidden">
      <div className="absolute top-20 start-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 🌟 الهيدر الترحيبي بالطالب وكوده */}
        <div className="glossy-card rounded-[2rem] border border-sky-400/40 p-6 sm:p-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-400 to-cyan-300 text-slate-950 flex items-center justify-center font-black text-2xl shadow-[0_0_25px_rgba(56,189,248,0.5)]">
              {user?.fullName ? user.fullName.charAt(0).toUpperCase() : '🧬'}
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                // STUDENT COMMAND CENTER
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                {isAr ? `أهلاً بك يا ${user?.fullName || 'بطل الساينس'} 👋` : `Welcome back, ${user?.fullName || 'Future Scientist'} 👋`}
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {isAr ? 'تابع تقدمك في المحاضرات ودرجات اختباراتك أولاً بأول' : 'Track your lectures, lab quizzes, and academic performance.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-end bg-gray-950/90 border border-gray-800 px-5 py-3.5 rounded-2xl">
            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase block">
                {isAr ? 'كود الطالب' : 'STUDENT CODE'}
              </span>
              <span className="text-2xl font-mono font-black text-sky-400 tracking-widest">
                #{user?.studentCode || '5712'}
              </span>
            </div>
            <Link
              to="/profile"
              className="px-4 py-2 rounded-xl bg-sky-400/15 border border-sky-400/40 text-sky-400 text-xs font-black hover:bg-sky-400 hover:text-slate-950 transition-all"
            >
              {isAr ? 'ملفي' : 'Profile'}
            </Link>
          </div>
        </div>

        {/* 🌟 الإحصائيات الـ 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((st, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glossy-card rounded-3xl p-6 border border-gray-800 hover:border-sky-400/60 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="w-12 h-12 rounded-2xl bg-gray-950 border border-gray-800 flex items-center justify-center text-2xl">
                  {st.icon}
                </span>
                <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded-full">
                  {st.sub}
                </span>
              </div>
              <div className="text-3xl font-black text-white">{st.value}</div>
              <div className="text-xs font-bold text-gray-400 mt-1">{st.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 🌟 القسم الرئيسي: الكورسات الجارية + نتائج الاختبارات */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* الكورسات ونسبة الإنجاز */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <span>📚</span> {isAr ? 'تقدمك في الكورسات المسجلة' : 'Your Enrolled Courses'}
              </h2>
              <Link to="/courses" className="text-xs font-bold text-sky-400 hover:underline">
                {isAr ? 'تصفح الكل ←' : 'View All →'}
              </Link>
            </div>

            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="glossy-card rounded-3xl p-6 border border-gray-800 hover:border-sky-400/50 transition-all space-y-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest">
                      {course.tag}
                    </span>
                    <h3 className="text-lg font-black text-white mt-1">{course.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">▶️ {course.nextLesson}</p>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-gray-950 border border-sky-400/40 font-mono text-sm font-black text-sky-400">
                    {course.progress}%
                  </span>
                </div>

                {/* شريط التقدم المضيء */}
                <div className="w-full h-2.5 bg-gray-950 rounded-full overflow-hidden border border-gray-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold text-gray-400">
                    🧪 {isAr ? 'الاختبارات المجتازة:' : 'Quizzes Passed:'} <strong className="text-white">{course.quizzesPassed}</strong>
                  </span>
                  <Link
                    to="/courses"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 font-black text-xs shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:scale-105 transition-transform"
                  >
                    {isAr ? 'استكمال المحاضرة' : 'Resume Lesson'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* سجل درجات الامتحانات */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <span>🧪</span> {isAr ? 'أحدث نتائج الاختبارات' : 'Recent Quiz Results'}
            </h2>

            <div className="glossy-card rounded-3xl p-6 border border-gray-800 space-y-4">
              {recentQuizzes.map((qz, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-gray-950/80 border border-gray-800 hover:border-sky-400/40 flex items-center justify-between gap-4 transition-all"
                >
                  <div>
                    <h4 className="text-sm font-black text-white">{qz.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] font-bold text-emerald-400">{qz.status}</span>
                      <span className="text-[10px] text-gray-400">• {qz.date}</span>
                    </div>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-sky-400/10 border border-sky-400/30 font-mono text-sm font-black text-sky-400 shrink-0">
                    {qz.score}
                  </div>
                </div>
              ))}

              {/* نصيحة مس أميرة التحفيزية */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 to-cyan-400/10 border border-sky-400/30 mt-4">
                <p className="text-xs font-bold text-sky-400 mb-1">
                  💡 {isAr ? 'رسالة تحفيزية من مس أميرة:' : 'Mentor Note from Mrs. Amira:'}
                </p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {isAr
                    ? 'مستواك في تصاعد ممتاز! ركز على مراجعة الخرائط الذهنية لدرس الـ DNA قبل اختبار الأسبوع القادم.'
                    : 'Great consistency! Review the DNA replication mind-map before unlocking next week’s assessment.'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}