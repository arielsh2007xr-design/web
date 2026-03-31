import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const projects = [
  {
    id: 1,
    title:    'LUMINA — E-Commerce',
    category: 'פיתוח ועיצוב',
    desc:     'חנות אופנה לוקס עם חוויית קנייה cinematic ועיצוב סינרגטי.',
    tags:     ['Next.js', 'Framer Motion', 'Stripe'],
    hue:      '#7c3aed',
    span:     'md:col-span-2',
  },
  {
    id: 2,
    title:    'DATACORE — SaaS',
    category: 'ממשק משתמש',
    desc:     'פלטפורמת אנליטיקה עם ויזואליזציות data בזמן אמת.',
    tags:     ['React', 'D3.js', 'TypeScript'],
    hue:      '#6366f1',
    span:     '',
  },
  {
    id: 3,
    title:    'VERDE — Brand',
    category: 'מיתוג ועיצוב',
    desc:     'מיתוג מלא לסטארטאפ פינטק — לוגו, פלטה וגיידליין.',
    tags:     ['Figma', 'Brand', 'Motion'],
    hue:      '#a855f7',
    span:     '',
  },
  {
    id: 4,
    title:    'NEXWAVE — Landing',
    category: 'אפיון ופיתוח',
    desc:     'דף נחיתה לחברת B2B עם אנימציות מתקדמות ו-CVR גבוה.',
    tags:     ['Next.js', 'GSAP', 'Tailwind'],
    hue:      '#c084fc',
    span:     'md:col-span-2',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

function Card({ project }) {
  return (
    <motion.div
      variants={item}
      className={`group rounded-2xl overflow-hidden border border-white/[0.06]
                  bg-white/[0.02] backdrop-blur-sm cursor-pointer
                  transition-all duration-500
                  hover:border-purple-500/[0.22]
                  ${project.span}`}
    >
      {/* Visual placeholder */}
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: project.span ? '42%' : '64%' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 40% 50%, ${project.hue}22 0%, transparent 70%)`,
            backgroundColor: '#0a0018',
          }}
        />
        {/* Minimal grid inside card */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(${project.hue}18 1px, transparent 1px),
              linear-gradient(90deg, ${project.hue}18 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Abstract UI suggestion */}
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="w-full max-w-sm space-y-2.5 opacity-25
                          group-hover:opacity-45 transition-opacity duration-500">
            <div className="h-2.5 rounded-full bg-white/30 w-2/3" />
            <div className="h-2   rounded-full bg-white/15 w-full" />
            <div className="h-2   rounded-full bg-white/15 w-4/5" />
            <div className="mt-5 h-7 w-1/3 rounded-lg"
                 style={{ backgroundColor: `${project.hue}55` }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/25
                        font-medium mb-1.5">
            {project.category}
          </p>
          <h3 className="text-base font-bold text-stone-100 group-hover:text-purple-200
                         transition-colors duration-300 mb-2">
            {project.title}
          </h3>
          <p className="text-xs text-white/35 leading-relaxed"
             style={{ fontFamily: 'Assistant', fontWeight: 300 }}>
            {project.desc}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map(t => (
              <span key={t}
                className="text-[10px] px-2.5 py-0.5 rounded-full
                           border border-white/[0.07] text-white/25">
                {t}
              </span>
            ))}
          </div>
        </div>
        <ArrowLeft
          className="w-4 h-4 text-white/20 group-hover:text-purple-400/70
                     transition-colors duration-300 shrink-0 mb-1"
        />
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" ref={ref} className="relative py-36 overflow-hidden">
      <div
        className="glow-blob w-[400px] h-[400px] bg-indigo-600/[0.07]"
        style={{ bottom: '5%', left: '-5%' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase
                          text-purple-400/70 mb-5">
              עבודות נבחרות
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-stone-100
                           leading-[1.1] tracking-[-0.02em]">
              פרויקטים שאנחנו{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                גאים בהם
              </span>
            </h2>
          </div>

          <a
            href="#contact"
            className="btn-ghost self-start px-5 py-2.5 rounded-xl text-sm
                       flex items-center gap-2 whitespace-nowrap"
          >
            כל הפרויקטים
            <ArrowLeft className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map(p => <Card key={p.id} project={p} />)}
        </motion.div>
      </div>
    </section>
  )
}
