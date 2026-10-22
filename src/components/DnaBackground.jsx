import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DnaBackground() {
  const dnaStrands = Array.from({ length: 22 });

  // Lazy Initialization:
  // تمرير دالة هنا يجعلها تعمل مرة واحدة فقط عند تحميل المكون
  // وهذا يحل مشكلة الـ useEffect ومشاكل الـ Impure Function تماماً
  const [particles] = useState(() => {
    return Array.from({ length: 12 }).map(() => ({
      size: Math.random() * 60 + 20,
      top: Math.random() * 100,
      left: Math.random() * 100,
      xOffset: Math.random() * 40 - 20,
      duration: Math.random() * 10 + 10,
    }));
  });

  return (
    <div className="absolute inset-0 bg-slate-950 overflow-hidden flex items-center justify-center">
      {/* تم إزالة المسافات من كود الألوان لحل تحذير Tailwind */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(49,46,129,0.3),rgba(2,6,23,1))] z-0"></div>
      
      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-cyan-500/10 backdrop-blur-md z-0"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, p.xOffset, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated 3D DNA Helix */}
      <div className="relative z-10 flex flex-col gap-6 transform -rotate-12 scale-125">
        {dnaStrands.map((_, i) => (
          <motion.div
            key={`strand-${i}`}
            className="w-40 h-0.5 bg-indigo-500/40 relative"
            animate={{ rotateY: [0, 360] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.15,
            }}
          >
            {/* Left Node (Cyan) */}
            <div className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]"></div>
            {/* Right Node (Fuchsia) */}
            <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.9)]"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}