import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Search, Sparkles, Monitor } from 'lucide-react'

const cards = [
  {
    icon:     Zap,
    en:       'Edge Performance',
    he:       'ביצועי קצה',
    desc:     'הגשת תוכן גלובלית דרך CDN מבוזר. זמן טעינה מתחת לשנייה בכל מקום בעולם.',
    metric:   '< 100ms',
    metricLabel: 'Time to First Byte',
    delay:    0,
    floatDelay: 0,
  },
  {
    icon:     Search,
    en:       'SEO Engine',
    he:       'אופטימיזציה למנועי חיפוש',
    desc:     'ארכיטקטורת SSR/SSG, מטא-דאטה דינמי ו-Core Web Vitals מושלמים לדירוג גבוה בגוגל.',
    metric:   '100',
    metricLabel: 'Lighthouse Score',
    delay:    0.15,
    floatDelay: 0.8,
  },
  {
    icon:     Sparkles,
    en:       'Cinematic Motion',
    he:       'חוויית תנועה',
    desc:     'אנימציות מבוססות Framer Motion עם עקרונות תנועה קולנועיים — כל מעבר מרגיש כמו פרימיום.',
    metric:   '60fps',
    metricLabel: 'Fluid Animations',
    delay:    0.3,
    floatDelay: 1.6,
  },
  {
    icon:     Monitor,
    en:       'Responsive First',
    he:       'רספונסיביות מלאה',
    desc:     'פיקסל-perfect על כל מכשיר — מובייל, טאבלט ודסקטופ. בנוי mobile-first מהיסוד.',
    metric:   '∞',
    metricLabel: 'Device Support',
    delay:    0.45,
    floatDelay: 2.4,
  },
]

/* Entrance variant — fade + lift */
const cardEntrance = {
  hidden:  { opacity: 0, y: 32 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Architecture() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section
      id="architecture"
      ref={ref}
      className="relative py-36 overflow-hidden"
    >
      {/* ── Background: dark mesh gradient ───────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(88,28,135,0.09) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(99,102,241,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-14">

        {/* ── Section header ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.28em] uppercase
                        text-purple-400/70 mb-5">
            תשתית טכנולוגית
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-stone-100
                         leading-[1.1] tracking-[-0.02em]">
            ארכיטקטורה
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #c4b5fd 20%, #a78bfa 60%, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor:  'transparent',
                backgroundClip:       'text',
              }}
            >
              של ביצועים
            </span>
          </h2>
          <p
            className="mt-5 text-base text-white/38 max-w-lg leading-relaxed"
            style={{ fontFamily: 'Assistant', fontWeight: 300 }}
          >
            כל אתר שאנחנו בונים מתוכנן מהיסוד לביצועים, נגישות ודירוג — לא כתכונה נוספת, אלא כבסיס.
          </p>
        </motion.div>

        {/* ── Cards grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ icon: Icon, en, he, desc, metric, metricLabel, delay, floatDelay }) => (
            <motion.div
              key={en}
              custom={delay}
              variants={cardEntrance}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {/* Floating wrapper — continuous y oscillation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration:   5,
                  delay:      floatDelay,
                  repeat:     Infinity,
                  ease:       'easeInOut',
                  repeatType: 'loop',
                }}
                whileHover={{
                  scale:     1.02,
                  boxShadow: '0 0 28px rgba(168,85,247,0.38), 0 8px 32px rgba(0,0,0,0.4)',
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="h-full rounded-2xl border border-white/[0.08]
                           bg-white/[0.025] backdrop-blur-md
                           p-7 flex flex-col gap-6 cursor-default
                           transition-colors duration-300
                           hover:border-purple-500/[0.2]"
                style={{ willChange: 'transform' }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center
                              bg-purple-500/[0.1] border border-purple-500/[0.15]"
                >
                  <Icon className="w-5 h-5 text-purple-300/80" strokeWidth={1.5} />
                </div>

                {/* Titles */}
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase
                                text-white/22 font-medium mb-2">
                    {en}
                  </p>
                  <h3
                    className="text-lg font-bold text-stone-100 leading-snug"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {he}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="text-sm text-white/38 leading-relaxed flex-1"
                  style={{ fontFamily: 'Assistant', fontWeight: 300 }}
                >
                  {desc}
                </p>

                {/* Metric badge */}
                <div
                  className="mt-auto pt-5 border-t border-white/[0.05]
                              flex items-baseline gap-2"
                >
                  <span
                    className="text-2xl font-black"
                    style={{
                      background:              'linear-gradient(135deg, #c4b5fd, #a78bfa)',
                      WebkitBackgroundClip:    'text',
                      WebkitTextFillColor:     'transparent',
                      backgroundClip:         'text',
                    }}
                  >
                    {metric}
                  </span>
                  <span
                    className="text-[10px] text-white/25 font-medium tracking-wide"
                    style={{ fontFamily: 'Assistant' }}
                  >
                    {metricLabel}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
