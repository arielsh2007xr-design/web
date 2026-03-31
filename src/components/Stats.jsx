import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '120+', label: 'פרויקטים הושלמו'    },
  { value: '98%',  label: 'שביעות רצון לקוחות' },
  { value: '4.9★', label: 'דירוג ממוצע'         },
  { value: '8+',   label: 'שנות ניסיון'          },
]

export default function Stats() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14">
        <div className="neon-divider mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: i * 0.12, ease: 'easeOut' }}
            >
              <div className="stat-number text-4xl md:text-5xl font-black mb-2">
                {value}
              </div>
              <p
                className="text-xs text-white/35 tracking-wide"
                style={{ fontFamily: 'Assistant', fontWeight: 300 }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="neon-divider mt-16" />
      </div>
    </section>
  )
}
