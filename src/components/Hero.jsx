import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

/* Weightless stagger — pure opacity, no movement */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.5 } },
}

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeInSlow = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, ease: 'easeOut' },
  },
}

export default function Hero() {
  const videoRef   = useRef(null)
  const sectionRef = useRef(null)

  /* Subtle parallax — video drifts up gently */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* ── Video background ─────────────────────────────── */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-[115%] -top-[7%]"
      >
        <video
          ref={videoRef}
          src="/Generate_animated_video_202603311404.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── Overlays: darken heavily so text floats cleanly ── */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b
                      from-space-900/30 via-transparent to-space-900" />

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeIn}
            className="mb-8 text-xs font-semibold tracking-[0.28em] uppercase
                       text-purple-400/80"
          >
            סטודיו בוטיק לפיתוח ועיצוב
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeIn}
            className="text-[clamp(2.6rem,6.5vw,5.5rem)] font-black text-stone-100
                       leading-[1.06] tracking-[-0.03em] mb-8"
          >
            אנחנו בונים את{' '}
            <br className="hidden md:block" />
            <span
              style={{
                background:              'linear-gradient(135deg, #c4b5fd 20%, #a78bfa 60%, #c084fc)',
                WebkitBackgroundClip:    'text',
                WebkitTextFillColor:     'transparent',
                backgroundClip:         'text',
              }}
            >
              הנוכחות הדיגיטלית
            </span>
            <br className="hidden md:block" />
            שמותגים חולמים עליה
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl font-light text-white/50
                       leading-relaxed mb-12 max-w-xl"
            style={{ fontFamily: 'Assistant', fontWeight: 300 }}
          >
            סטודיו בוטיק לאפיון, עיצוב ופיתוח אתרי פרימיום
            בטכנולוגיות המתקדמות בעולם.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap gap-4 items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary px-8 py-3.5 rounded-xl text-sm
                         flex items-center gap-2.5 cursor-pointer"
            >
              התחל פרויקט
              <ArrowLeft className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ borderColor: 'rgba(168,85,247,0.5)', color: 'rgba(168,85,247,0.9)' }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost px-8 py-3.5 rounded-xl text-sm cursor-pointer"
            >
              צפה בעבודות שלנו
            </motion.a>
          </motion.div>

          {/* Tech stack — minimal pill row */}
          <motion.div
            variants={fadeInSlow}
            className="mt-16 flex flex-wrap gap-2.5"
          >
            {['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Node.js'].map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide
                           border border-white/[0.07] text-white/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/20">
          גלול
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-purple-400/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
