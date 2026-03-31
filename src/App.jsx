import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import Services         from './components/Services'
import Stats            from './components/Stats'
import Architecture     from './components/Architecture'
import Process          from './components/Process'
import Contact          from './components/Contact'
import Footer           from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div dir="rtl" className="font-heebo bg-space-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Architecture />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
