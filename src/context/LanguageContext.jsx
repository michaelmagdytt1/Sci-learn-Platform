import { createContext, useContext, useState, useEffect } from 'react';

const dictionary = {
  en: {
    // 🌟 Navbar
    home: "Home",
    courses: "Courses",
    dashboard: "Dashboard",
    about: "About Amira Samir",
    signIn: "Sign In",
    getStarted: "Get Started",
    myProfile: "My Profile",
    signOut: "Sign Out",
    langToggle: "AR",

    // 🌟 Hero Section
    badge: "Primary, Preparatory & Secondary",
    heroTitle1: "Science isn't about memorizing —",
    heroTitle2: "Learning through",
    heroTitleHighlight: "discovery",
    heroTitle3: "is.",
    heroDesc: "Your complete platform for truly understanding science and biology, designed for ambitious students with the latest interactive technologies.",
    withTeacher: "With Mrs. Amira Samir",
    browseCourses: "Browse Courses",
    tryFree: "Try Free",
    continueLearning: "Continue Learning",
    lessons: "Lessons",
    successRate: "Success Rate",
    students: "Students",
    feature1: "Smart Study Tools",
    feature2: "Practice Until Mastery",
    feature3: "Points = Real Prizes",
    feature4: "Compete for #1",

    // 🌟 How it works Section
    journeyTag: "The Learning Journey",
    journeyTitle: "Beyond Traditional Learning",
    journeyDesc: "A complete ecosystem designed to turn complex scientific concepts into lasting knowledge.",
    step1Title: "Watch & Absorb",
    step1Desc: "Engage with high-definition visual modules and interactive explanations.",
    step2Title: "Test Your Grasp",
    step2Desc: "Challenge yourself with smart quizzes instantly graded to pinpoint weak spots.",
    step3Title: "Master the Details",
    step3Desc: "Access comprehensive study notes, summaries, and homework assignments.",
    step4Title: "Earn & Celebrate",
    step4Desc: "Collect points for your hard work and redeem them for real-world rewards.",

    // 🌟 About Section (Top)
    meetInstructor: "Meet Your Instructor",
    empowering: "Empowering students to excel in",
    aboutDesc: "With over 25 years of teaching excellence, Mrs. Amira Samir is an Expert Teacher holding a Pre-Master's degree. As a certified Trainer of Trainers (TOT) and Human Development Expert, she goes beyond traditional teaching to build confident, well-rounded students in Science and Biology.",
    card1Title: "25+ Years",
    card1Desc: "As an Expert Teacher",
    card2Title: "Pre-Master's",
    card2Desc: "Degree Holder",
    card3Title: "TOT Certified",
    card3Desc: "Trainer of Trainers",
    card4Title: "Human Dev",
    card4Desc: "Certified Trainer",

    // 🌟 Philosophy Section
    philTag: "Teaching Philosophy",
    philTitle: "More Than Just Science",
    phil1Title: "Confidence Before Knowledge",
    phil1Desc: "As a human development expert, I believe a confident student is a successful student. Mental well-being comes first.",
    phil2Title: "Discovery, Not Memorization",
    phil2Desc: "Science is the study of life. We don't memorize facts; we understand how the world around us works.",
    phil3Title: "Psychological Support",
    phil3Desc: "Exams can be stressful. I provide continuous psychological support to help students overcome their fears.",

    // 🌟 Timeline Section
    timelineTag: "Experience Timeline",
    timelineTitle: "A Journey of Excellence",
    time1Date: "2000 - Present",
    time1Title: "The Journey Begins",
    time1Desc: "Started a lifelong mission of teaching Science and Biology, igniting passion in thousands of students over 25+ years.",
    time2Date: "2008 - 2009",
    time2Title: "Academic Depth",
    time2Desc: "Achieved a Pre-Master's degree, deepening the academic and scientific knowledge required to deliver top-tier education.",
    time3Date: "2010",
    time3Title: "TOT & Human Development",
    time3Desc: "Certified as a Trainer of Trainers (TOT) and a Human Development Coach to support students both academically and psychologically.",
    time4Date: "2026",
    time4Title: "Digital Transformation",
    time4Desc: "Launching the Bio SciLearn platform to break geographical boundaries and provide an immersive learning experience.",

    // 🌟 Personal Letter
    letterTag: "A Message from the Heart",
    letterText: "My dear students and respected parents, teaching has never been just a job for me; it is a profound message. For over two decades, I have seen generations grow, struggle, and ultimately succeed. My goal with this platform is not just to help you pass an exam, but to make you love learning, trust your abilities, and realize that you are capable of achieving greatness. Remember, I am always here for you, as a teacher and as a guide.",
    letterSignature: "Mrs. Amira Samir",

    // 🌟 Courses Page
    student: "Student",
    scienceTitle: "Science",
    scienceDesc: "Primary (4-6) & Preparatory (1-3) Stages",
    primaryStage: "Primary Stage",
    primary4: "Primary 4",
    primary5: "Primary 5",
    primary6: "Primary 6",
    preparatoryStage: "Preparatory Stage",
    prep1: "Prep 1",
    prep2: "Prep 2",
    prep3: "Prep 3",
    integratedTitle: "Integrated Science",
    integratedDesc: "Secondary Stage (Grade 1)",
    secondaryStage: "Secondary Stage",
    sec1: "Secondary 1",
    biologyTitle: "Biology",
    biologyDesc: "Secondary Stage (Grade 3)",
    sec3: "Secondary 3",
    videos: "Videos",
    tests: "Tests",
    homework: "Homework",
    welcomeBack: "Welcome Back,",
    selectPath: "Select your path to continue learning.",
    backToSubjects: "Back to Subjects",
    exploreCourse: "Explore Course",

    // 🌟 Dashboard
    studentId: "Student ID:",
    activeMember: "Active Member",
    pendingExams: "Pending Exams",
    recentGrades: "Recent Grades",
    completedVideos: "Completed Videos",
    startExam: "Start Exam",
    due: "Due:",

    // 🌟 Footer
    footerDesc: "Your complete platform for truly understanding Science & Biology, designed for high school students with the latest interactive technologies.",
    contact: "Contact",
    followUs: "Follow Us",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    rights: "Mrs. Amira Samir © 2026 — All rights reserved",
    poweredBy: "POWERED BY",

    // 🌟 FAQ Section
    faqTag: "Got Questions?",
    faqTitle: "Frequently Asked Questions",
    q1: "How can I subscribe to the platform?",
    a1: "You can easily subscribe by creating a free account, selecting your grade, and choosing the course you want to enroll in using our secure payment methods.",
    q2: "Are the videos available all year round?",
    a2: "Yes, once you enroll in a course, you have unlimited access to its videos and materials until the end of the academic year.",
    q3: "Is there a follow-up system for parents?",
    a3: "Absolutely! We provide detailed progress reports and grades that parents can monitor through a dedicated dashboard.",
    q4: "Can I ask questions if I don't understand a lesson?",
    a4: "Yes, each lesson has a dedicated Q&A section where you can drop your questions, and Mrs. Amira will answer them directly.",

    // 🌟 CTA Section
    ctaTitle: "Ready to start your journey to excellence?",
    ctaDesc: "Join thousands of students who have transformed their learning experience in Science and Biology.",
    ctaButton: "Create Free Account",

    // 🌟 Auth Pages (Login, SignUp, Verify)
    welcomeBackAuth: "Welcome Back!",
    loginDesc: "Sign in using your Student Code to continue learning.",
    studentCodeAuth: "Student Code",
    enterStudentCode: "e.g., 1234",
    passwordAuth: "Password",
    enterPassword: "Enter your password",
    forgotPassAuth: "Forgot Password?",
    loginBtn: "Sign In",
    noAccount: "Don't have an account?",
    signUpNow: "Sign up now",
    createAccount: "Create Account",
    signUpDesc: "Join thousands of students and start your journey today.",
    fullName: "Full Name",
    enterFullName: "Enter your full name",
    emailAuth: "Email Address",
    enterEmail: "Enter your email address",
    signUpBtn: "Create Account",
    haveAccount: "Already have an account?",
    signInNow: "Sign in",
    verifyTitle: "Verify Your Account",
    verifyDesc: "We've sent a 6-digit code to your email. Enter it below.",
    otpLabel: "Verification Code",
    enterOtp: "Enter 6-digit code",
    verifyBtn: "Verify Code",
    resendOtp: "Didn't receive the code? Resend"
  },
  
  ar: {
    // 🌟 Navbar
    home: "الرئيسية",
    courses: "الكورسات",
    dashboard: "لوحة التحكم",
    about: "عن أ. أميرة سمير",
    signIn: "تسجيل الدخول",
    getStarted: "ابدأ الآن",
    myProfile: "حسابي الشخصي",
    signOut: "تسجيل الخروج",
    langToggle: "EN",

    // 🌟 Hero Section
    badge: "ابتدائي، إعدادي وثانوي",
    heroTitle1: "الساينس مش مجرد حفظ —",
    heroTitle2: "التعلم من خلال",
    heroTitleHighlight: "الاستكشاف",
    heroTitle3: "هو الأساس.",
    heroDesc: "منصتك المتكاملة للفهم الحقيقي للساينس والأحياء، مصممة للطلاب الطموحين بأحدث التقنيات التفاعلية.",
    withTeacher: "مع أ. أميرة سمير",
    browseCourses: "تصفح الكورسات",
    tryFree: "جرب مجاناً",
    continueLearning: "استكمل التعلم",
    lessons: "درس",
    successRate: "نسبة نجاح",
    students: "طالب",
    feature1: "أدوات دراسة ذكية",
    feature2: "تدريب حتى الإتقان",
    feature3: "نقاط = جوائز حقيقية",
    feature4: "نافس على المركز الأول",

    // 🌟 How it works Section
    journeyTag: "رحلة التعلم",
    journeyTitle: "أبعد من مجرد تلقين",
    journeyDesc: "نظام متكامل مصمم لتحويل المفاهيم العلمية المعقدة إلى معرفة راسخة.",
    step1Title: "شاهد واستوعب",
    step1Desc: "تفاعل مع شروحات بصرية عالية الجودة تقرب لك الفهم بطريقة مبسطة.",
    step2Title: "اختبر فهمك",
    step2Desc: "تحدى نفسك باختبارات ذكية تصحح تلقائياً لتحديد نقاط ضعفك وتقويتها.",
    step3Title: "أتقن التفاصيل",
    step3Desc: "احصل على مذكرات شاملة، وملخصات ذكية وواجبات لضمان تثبيت المعلومة.",
    step4Title: "تفوق واربح",
    step4Desc: "اجمع النقاط مقابل مجهودك واستبدلها بجوائز حقيقية ومكافآت قيمة.",

    // 🌟 About Section (Top)
    meetInstructor: "تعرف على معلمتك",
    empowering: "تمكين الطلاب للتفوق في",
    aboutDesc: "بخبرة تتجاوز 25 عاماً، تعتبر أ. أميرة سمير «معلماً خبيراً» وحاصلة على تمهيدي الماجستير. إلى جانب كونها مدرب مدربين (TOT) ومدرب تنمية بشرية معتمد، فهي تكرس مسيرتها لتبسيط العلوم والأحياء وبناء شخصية الطالب علمياً ونفسياً.",
    card1Title: "+25 عام",
    card1Desc: "خبرة كمعلم خبير",
    card2Title: "تمهيدي ماجستير",
    card2Desc: "حاصلة على الدرجة",
    card3Title: "TOT",
    card3Desc: "مدرب المدربين",
    card4Title: "تنمية بشرية",
    card4Desc: "مدرب معتمد",

    // 🌟 Philosophy Section
    philTag: "فلسفتي في التدريس",
    philTitle: "أكثر من مجرد منهج علمي",
    phil1Title: "بناء الثقة قبل المعلومة",
    phil1Desc: "كمدربة تنمية بشرية، أؤمن أن الطالب الواثق هو طالب ناجح. الدعم النفسي والتشجيع هو الأساس قبل البدء في أي شرح.",
    phil2Title: "الفهم بالاستكشاف وليس الحفظ",
    phil2Desc: "الساينس والأحياء هي دراسة للحياة من حولنا. نحن لا نحفظ مناهج؛ بل نستكشف كيف يعمل هذا الكون لنفهمه بعمق.",
    phil3Title: "الدعم النفسي وقت الضغط",
    phil3Desc: "الامتحانات مرحلة ضغط عصبي. دوري لا يقتصر على الشرح، بل توفير بيئة آمنة للطلاب لتجاوز مخاوفهم وتحقيق أحلامهم.",

    // 🌟 Timeline Section
    timelineTag: "الشريط الزمني للخبرات",
    timelineTitle: "مسيرة من التفوق والعطاء",
    time1Date: "2000 - حتى الآن",
    time1Title: "بداية الرحلة",
    time1Desc: "بدأت مسيرتي كمعلمة لمواد العلوم والأحياء، وخلال أكثر من 25 عاماً ساهمت في تخريج آلاف الطلاب وتأسيسهم علمياً.",
    time2Date: "2008 - 2009",
    time2Title: "التعمق الأكاديمي",
    time2Desc: "الحصول على درجة (تمهيدي الماجستير)، لتعميق المعرفة الأكاديمية والعلمية اللازمة لتقديم مستوى تعليمي استثنائي.",
    time3Date: "2010",
    time3Title: "الـ TOT والتنمية البشرية",
    time3Desc: "الحصول على اعتماد كمدرب مدربين (TOT) ومدرب تنمية بشرية معتمد، لدمج الجانب الأكاديمي مع الجانب النفسي للطالب.",
    time4Date: "2026",
    time4Title: "التحول الرقمي",
    time4Desc: "إطلاق منصة Bio SciLearn التفاعلية لكسر حواجز المكان وتقديم تجربة تعليمية رقمية حديثة لآلاف الطلاب.",

    // 🌟 Personal Letter
    letterTag: "رسالة من القلب",
    letterText: "أبنائي الطلاب وأولياء الأمور الكرام، لم يكن التدريس يوماً بالنسبة لي مجرد وظيفة، بل هو رسالة وعشق. على مدار أكثر من عِقدين، رأيت أجيالاً تكبر وتتحدى وتنجح. هدفي من هذه المنصة ليس فقط مساعدتكم على اجتياز الامتحانات، بل أن تحبوا التعلم، وتثقوا في قدراتكم، وتدركوا أنكم قادرون على صنع المعجزات. تذكروا دائماً، أنا هنا من أجلكم كمعلمة، وكأم، وكداعم نفسي لكم في كل خطوة.",
    letterSignature: "أ. أميرة سمير",

    // 🌟 Courses Page
    student: "طالب",
    scienceTitle: "العلوم (Science)",
    scienceDesc: "المرحلة الابتدائية (4-6) والإعدادية (1-3)",
    primaryStage: "المرحلة الابتدائية",
    primary4: "الصف الرابع",
    primary5: "الصف الخامس",
    primary6: "الصف السادس",
    preparatoryStage: "المرحلة الإعدادية",
    prep1: "الصف الأول",
    prep2: "الصف الثاني",
    prep3: "الصف الثالث",
    integratedTitle: "العلوم المتكاملة",
    integratedDesc: "المرحلة الثانوية (الصف الأول)",
    secondaryStage: "المرحلة الثانوية",
    sec1: "الصف الأول الثانوي",
    biologyTitle: "الأحياء (Biology)",
    biologyDesc: "المرحلة الثانوية (الصف الثالث)",
    sec3: "الصف الثالث الثانوي",
    videos: "الفيديوهات",
    tests: "الامتحانات",
    homework: "الواجبات",
    welcomeBack: "مرحباً بك،",
    selectPath: "اختر المادة لاستكمال التعلم.",
    backToSubjects: "العودة للمواد",
    exploreCourse: "تصفح الكورس",

    // 🌟 Dashboard
    studentId: "كود الطالب:",
    activeMember: "طالب نشط",
    pendingExams: "الامتحانات القادمة",
    recentGrades: "أحدث الدرجات",
    completedVideos: "فيديوهات مكتملة",
    startExam: "ابدأ الامتحان",
    due: "ميعاد التسليم:",

    // 🌟 Footer
    footerDesc: "منصتك المتكاملة للفهم الحقيقي للساينس والأحياء، مصممة لطلاب المدارس بأحدث التقنيات التفاعلية.",
    contact: "تواصل معنا",
    followUs: "تابعنا",
    terms: "شروط الخدمة",
    privacy: "سياسة الخصوصية",
    rights: "أ. أميرة سمير © 2026 — جميع الحقوق محفوظة",
    poweredBy: "تطوير بواسطة",

    // 🌟 FAQ Section
    faqTag: "عندك أسئلة؟",
    faqTitle: "الأسئلة الشائعة",
    q1: "إزاي أقدر أشترك في المنصة؟",
    a1: "تقدر تشترك بسهولة عن طريق إنشاء حساب مجاني، تختار السنة الدراسية بتاعتك، وتدفع الكورس اللي محتاجه بطرق دفع آمنة.",
    q2: "هل الفيديوهات بتفضل موجودة طول السنة؟",
    a2: "أيوة، بمجرد اشتراكك في الكورس، بتقدر ترجع للفيديوهات والملازم في أي وقت لحد نهاية السنة الدراسية.",
    q3: "هل في نظام متابعة مع ولي الأمر؟",
    a3: "أكيد! بنوفر تقارير تفصيلية بمستوى الطالب ودرجاته في الامتحانات يقدر ولي الأمر يتابعها باستمرار من حسابه.",
    q4: "لو مش فاهم جزء معين في الدرس، أقدر أسأل؟",
    a4: "طبعاً، كل درس فيه قسم خاص للأسئلة تقدر تكتب فيه سؤالك، وميس أميرة هترد عليك بنفسها.",

    // 🌟 CTA Section
    ctaTitle: "جاهز تبدأ رحلتك في التفوق؟",
    ctaDesc: "انضم لآلاف الطلاب اللي غيروا طريقتهم في مذاكرة الساينس والأحياء.",
    ctaButton: "أنشئ حساب مجاني",

    // 🌟 Auth Pages (Login, SignUp, Verify)
    welcomeBackAuth: "مرحباً بعودتك!",
    loginDesc: "سجل دخولك باستخدام كود الطالب لاستكمال التعلم.",
    studentCodeAuth: "كود الطالب",
    enterStudentCode: "مثال: 1234",
    passwordAuth: "كلمة المرور",
    enterPassword: "أدخل كلمة المرور",
    forgotPassAuth: "نسيت كلمة المرور؟",
    loginBtn: "تسجيل الدخول",
    noAccount: "ليس لديك حساب؟",
    signUpNow: "سجل الآن",
    createAccount: "إنشاء حساب جديد",
    signUpDesc: "انضم لآلاف الطلاب وابدأ رحلتك نحو التفوق اليوم.",
    fullName: "الاسم الرباعي",
    enterFullName: "أدخل اسمك بالكامل",
    emailAuth: "البريد الإلكتروني",
    enterEmail: "أدخل بريدك الإلكتروني",
    signUpBtn: "إنشاء الحساب",
    haveAccount: "لديك حساب بالفعل؟",
    signInNow: "تسجيل الدخول",
    verifyTitle: "تأكيد حسابك",
    verifyDesc: "بعتنالك كود من 6 أرقام على الإيميل، اكتبه هنا.",
    otpLabel: "كود التأكيد",
    enterOtp: "أدخل الكود المكون من 6 أرقام",
    verifyBtn: "تأكيد الحساب",
    resendOtp: "موصَلَكش الكود؟ إعادة إرسال"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('appLang') || 'en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('appLang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key) => {
    return dictionary[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);