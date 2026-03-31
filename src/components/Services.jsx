import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Paintbrush, Code2, Gauge } from 'lucide-react'

const services = [
  {
    icon:  Layers,
    title: 'אפיון UX/UI',
    desc:  'מחקר משתמשים עמוק, ארכיטקטורת מידע ואב-טיפוס אינטראקטיבי שמנחה כל החלטת עיצוב.',
    label: 'Strategy',
  },
  {
    icon:  Paintbrush,
    title: 'עיצוב מותגי',
    desc:  'זהות ויזואלית חדה, מערכת עיצוב מקיפה ושפה ויזואלית שמבדלת את המותג שלך.',
    label: 'Design',
  },
  {
    icon:  Code2,
    title: 'פיתוח פרימיום',
    desc:  'קוד נקי ומדרגי, ביצועים מירביים וחוויית משתמש חלקה בכל מכשיר ורשת.',
    label: 'Development',
  },
  {
    icon:  Gauge,
    title: 'ביצועים ו-SEO',
    desc:  'אופטימיזציה מלאה — Core Web Vitals, מהירות טעינה ודירוג גבוה במנועי חיפוש.',
    label: 'Performance',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="services" ref={ref} className="relative py-36 overflow-hidden">
      {/* Very faint grid */}
      <div className="absolute inset-0 cyber-grid-bg" />

      {/* Ambient blob */}
      <div
        className="glow-blob w-[500px] h-[320px] bg-purple-700/[0.07]"
        style={{ top: '-60px', right: '-80px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-14">

        {/* Section label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.28em] uppercase
                        text-purple-400/70 mb-5">
            מה אנחנו עושים
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-stone-100
                         leading-[1.1] tracking-[-0.02em]">
            שירותים שמניעים
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              תוצאות אמיתיות
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map(({ icon: Icon, title, desc, label }) => (
            <motion.div
              key={title}
              variants={item}
              className="service-card group p-8 rounded-2xl
                         bg-white/[0.02] border border-white/[0.07]
                         backdrop-blur-sm cursor-default"
            >
              {/* Icon */}
              <div className="mb-7 w-10 h-10 rounded-lg bg-purple-500/10
                              border border-purple-500/[0.15] flex items-center justify-center">
                <Icon className="w-5 h-5 text-purple-400/80" />
              </div>

              {/* Text */}
              <p className="text-[10px] tracking-[0.22em] uppercase text-white/25
                            font-medium mb-3">
                {label}
              </p>
              <h3 className="text-lg font-bold text-stone-100 mb-3">
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed text-white/40"
                style={{ fontFamily: 'Assistant', fontWeight: 300 }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
