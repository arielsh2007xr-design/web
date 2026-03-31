import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num:      '01',
    title:    'גילוי',
    desc:     'שיחה מעמיקה להבנת החזון, קהל היעד, המתחרים והמטרות העסקיות.',
    duration: '1–2 ימים',
  },
  {
    num:      '02',
    title:    'אסטרטגיה',
    desc:     'בניית תפיסה עיצובית, ארכיטקטורת מידע ו-wireframes שמגדירים את המוצר.',
    duration: '3–5 ימים',
  },
  {
    num:      '03',
    title:    'עיצוב',
    desc:     'עיצוב High-Fidelity מלא — כולל מערכת צבעים, טיפוגרפיה ואנימציות.',
    duration: '5–10 ימים',
  },
  {
    num:      '04',
    title:    'פיתוח',
    desc:     'קידוד פיקסל-perfect עם React/Next.js, ביצועים מרביים ו-Accessibility מלאה.',
    duration: '10–20 ימים',
  },
  {
    num:      '05',
    title:    'השקה',
    desc:     'בדיקות, deployment, ניטור ביצועים ותמיכה לאחר השקה.',
    duration: '2–3 ימים',
  },
]

export default function Process() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" ref={ref} className="relative py-36 overflow-hidden">
      <div
        className="glow-blob w-[500px] h-[300px] bg-purple-700/[0.07]"
        style={{ top: '20%', right: '-8%' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.28em] uppercase
                        text-purple-400/70 mb-5">
            איך עובדים
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-stone-100
                         leading-[1.1] tracking-[-0.02em]">
            תהליך מדויק —
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ושקוף לחלוטין
            </span>
          </h2>
        </motion.div>

        {/* Steps — clean table-like layout */}
        <div className="flex flex-col">
          {steps.map(({ num, title, desc, duration }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
              className="group grid grid-cols-[56px_1fr_auto] md:grid-cols-[80px_1fr_140px]
                         items-start gap-6 py-9
                         border-b border-white/[0.05] last:border-0
                         hover:bg-white/[0.015] transition-colors duration-400
                         rounded-xl px-4 -mx-4"
            >
              {/* Number */}
              <span className="text-[11px] font-black tracking-[0.18em]
                               text-purple-500/50 pt-1">
                {num}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-stone-100 mb-2
                               group-hover:text-purple-200 transition-colors duration-300">
                  {title}
                </h3>
                <p
                  className="text-sm text-white/38 leading-relaxed"
                  style={{ fontFamily: 'Assistant', fontWeight: 300 }}
                >
                  {desc}
                </p>
              </div>

              {/* Duration */}
              <span
                className="text-[11px] text-white/25 font-medium pt-1
                           whitespace-nowrap tracking-wide"
                style={{ fontFamily: 'Assistant' }}
              >
                {duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
