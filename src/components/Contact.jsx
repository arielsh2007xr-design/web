import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form,      setForm]      = useState({ name: '', email: '', project: '', msg: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <section id="contact" ref={ref} className="relative py-36 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-60" />
      <div
        className="glow-blob w-[500px] h-[500px] bg-purple-700/[0.08]"
        style={{ bottom: '-15%', left: '50%', transform: 'translateX(-50%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <p className="text-xs font-semibold tracking-[0.28em] uppercase
                          text-purple-400/70 mb-5">
              בואו נדבר
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-stone-100
                           leading-[1.1] tracking-[-0.02em] mb-7">
              מוכן לקחת את הדיגיטל שלך
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                לרמה הבאה?
              </span>
            </h2>
            <p
              className="text-base text-white/40 leading-relaxed max-w-sm"
              style={{ fontFamily: 'Assistant', fontWeight: 300 }}
            >
              ספר לנו על הפרויקט. נחזור אליך תוך 24 שעות עם תוכנית פעולה ראשונית — בחינם.
            </p>

            <div className="mt-12 space-y-5">
              {[
                'מענה תוך 24 שעות',
                'שיחת ייעוץ ראשונית ללא עלות',
                'הצעת מחיר מפורטת ושקופה',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60 shrink-0" />
                  <span className="text-sm text-white/38"
                        style={{ fontFamily: 'Assistant', fontWeight: 300 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          >
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-12 h-12 rounded-full border border-purple-500/30
                                bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
                  <ArrowLeft className="w-5 h-5 text-purple-400 rotate-90" />
                </div>
                <h3 className="text-xl font-bold text-stone-100 mb-2">ההודעה נשלחה!</h3>
                <p className="text-sm text-white/38"
                   style={{ fontFamily: 'Assistant', fontWeight: 300 }}>
                  נחזור אליך בהקדם האפשרי. תודה שפנית.
                </p>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
                className="space-y-5"
              >
                {[
                  { name: 'name',    type: 'text',  label: 'שם מלא',        placeholder: 'השם שלך'                          },
                  { name: 'email',   type: 'email', label: 'כתובת מייל',    placeholder: 'your@email.com'                   },
                  { name: 'project', type: 'text',  label: 'סוג הפרויקט',   placeholder: 'אתר, SaaS, Landing page...'       },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-xs text-white/30 font-medium mb-2
                                      tracking-wide"
                           style={{ fontFamily: 'Assistant' }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      required
                      className="field-input"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs text-white/30 font-medium mb-2
                                    tracking-wide"
                         style={{ fontFamily: 'Assistant' }}>
                    פרטים נוספים
                  </label>
                  <textarea
                    name="msg"
                    value={form.msg}
                    onChange={handleChange}
                    placeholder="ספר לנו על הפרויקט, התקציב ולוח הזמנים..."
                    rows={4}
                    className="field-input resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ opacity: 0.85 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full btn-primary py-4 rounded-xl text-sm font-semibold
                             flex items-center justify-center gap-2.5 mt-2"
                >
                  שלח פנייה
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
