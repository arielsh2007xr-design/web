import { motion } from 'framer-motion'

const cols = [
  {
    title: 'שירותים',
    links: ['אפיון UX/UI', 'עיצוב מותגי', 'פיתוח פרימיום', 'ביצועים ו-SEO'],
  },
  {
    title: 'חברה',
    links: ['אודות', 'תיק עבודות', 'בלוג', 'קריירה'],
  },
  {
    title: 'משאבים',
    links: ['מדריכים', 'FAQ', 'תנאי שימוש', 'פרטיות'],
  },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block text-base font-black tracking-tight mb-5">
              <span className="text-stone-100">NEXUS</span>
              <span className="text-purple-400">.</span>
            </a>
            <p
              className="text-sm text-white/30 leading-relaxed"
              style={{ fontFamily: 'Assistant', fontWeight: 300 }}
            >
              סטודיו בוטיק לפיתוח ועיצוב אתרי פרימיום. בונים נוכחות דיגיטלית שמותגים חולמים עליה.
            </p>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase
                             text-white/30 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/28 hover:text-white/60
                                 transition-colors duration-300"
                      style={{ fontFamily: 'Assistant', fontWeight: 300 }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="neon-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3
                        text-xs text-white/20"
             style={{ fontFamily: 'Assistant', fontWeight: 300 }}>
          <span>© {new Date().getFullYear()} NEXUS Studio. כל הזכויות שמורות.</span>
          <span>עוצב ופותח בישראל</span>
        </div>
      </div>
    </footer>
  )
}
