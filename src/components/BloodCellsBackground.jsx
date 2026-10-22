import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BloodCellsBackground() {
  // Lazy Initialization: توليد الخلايا مرة واحدة لتجنب مشاكل الـ Re-render
  const [cells] = useState(() => {
    return Array.from({ length: 35 }).map((_, i) => {
      // نجعل 1 من كل 6 خلايا عبارة عن كرة دم بيضاء (لأن الحمراء أكثر في الدم)
      const isWhiteCell = i % 6 === 0; 
      return {
        id: i,
        type: isWhiteCell ? 'white' : 'red',
        size: isWhiteCell ? Math.random() * 50 + 60 : Math.random() * 35 + 25,
        top: Math.random() * 100,
        left: Math.random() * 100,
        xOffset: Math.random() * 120 - 60,
        yOffset: Math.random() * 120 - 60,
        rotation: Math.random() * 360,
        duration: Math.random() * 20 + 15,
      };
    });
  });

  return (
    <div className="absolute inset-0 bg-gray-950 overflow-hidden flex items-center justify-center">
      {/* خلفية بتدرج داكن مائل للأحمر الغامق ليعطي إحساس التواجد داخل وعاء دموي */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(136,19,55,0.15),rgba(3,7,18,1))] z-0"></div>

      {cells.map((cell) => (
        <motion.div
          key={`cell-${cell.id}`}
          className={`absolute rounded-full z-0 ${
            cell.type === 'red'
              ? 'bg-[radial-gradient(circle_at_30%_30%,#ef4444,#b91c1c,#450a0a)] shadow-[inset_0_0_10px_rgba(0,0,0,0.6),0_4px_10px_rgba(0,0,0,0.3)]'
              : 'bg-[radial-gradient(circle_at_30%_30%,#ffffff,#e2e8f0,#94a3b8)] opacity-90 blur-[1px] shadow-[0_0_20px_rgba(255,255,255,0.3)]'
          }`}
          style={{
            width: `${cell.size}px`,
            height: `${cell.size}px`,
            top: `${cell.top}%`,
            left: `${cell.left}%`,
            // إضافة حافة خفيفة جداً للخلايا الحمراء لزيادة الواقعية
            border: cell.type === 'red' ? '1px solid rgba(220,38,38,0.3)' : 'none',
          }}
          animate={{
            y: [0, cell.yOffset, 0],
            x: [0, cell.xOffset, 0],
            rotate: [0, cell.rotation, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: cell.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* تأثير التقعر الداخلي (الظل) الخاص بكرات الدم الحمراء فقط */}
          {cell.type === 'red' && (
            <div className="absolute inset-0 m-auto w-1/2 h-1/2 rounded-full bg-black/25 blur-[2px]"></div>
          )}
        </motion.div>
      ))}
    </div>
  );
}