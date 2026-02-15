/*
 * DESIGN: British Editorial Classicism — "The Barrister's Study"
 * Palette: Navy #1B2A4A / Ivory #FAF7F2 / Gold #C4A265 / Charcoal #3A3A3A
 * Fonts: Playfair Display (headings), Source Serif 4 (body), JetBrains Mono (stats)
 * Layout: Asymmetric editorial grid, generous margins, magazine-style
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/jih3NnDgJ5wrqrC0o81vAq/sandbox/sISrImNa8hjlQcvlaJk95J-img-1_1771070219000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvamloM05uRGdKNXdycXJDMG84MXZBcS9zYW5kYm94L3NJU3JJbU5hOGhqbFFjdmxhSms5NUotaW1nLTFfMTc3MTA3MDIxOTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KSfgP18N4pERa8oPDNtU~ngBEleUrq8kBTATkdk5RtCFd7MlSJijv6ttghbF3om9XjZyxnZo1vIU2Ur3UKYqd~9pL8FbYUf26o9t2he0U4N4CB3RwICx9JFOnO~vwFlyO9d7ZGZWRVGxrCTvMtmNAC5zbxNLxJUawgykCKyHia8pvgW5GXY0v8I1URBHU8ntoBSeexyfLnvJzYdN7fHSOTx9iJDAb5NsJB0h5jNFCp6DtY2LyZtJox7leXpj2SHf74xcW04zv-gp615EXxXaqD5SteKoDFs8aNh3wUA6hUQBEeXk0RPIiFxQLnKYVA01iR4u7qwDg1yip0c~1jT1mg__";
const COACHING_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/jih3NnDgJ5wrqrC0o81vAq/sandbox/sISrImNa8hjlQcvlaJk95J-img-2_1771070197000_na1fn_Y29hY2hpbmctc2VjdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvamloM05uRGdKNXdycXJDMG84MXZBcS9zYW5kYm94L3NJU3JJbU5hOGhqbFFjdmxhSms5NUotaW1nLTJfMTc3MTA3MDE5NzAwMF9uYTFmbl9ZMjloWTJocGJtY3RjMlZqZEdsdmJnLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=u0Wrq4LhOjEh2urCDNj0k9VSakDomSfHGOkrFznkXz4JAqXg5CO5FHdtQulGoZxaeEY08frtJRx79Jr9ssOYokfpPlBH5jZBeW5Mknx2Idaqu6cf12OAVLP66kQJXNCU7Z~pYSVNY0A4IxdI1jmsnWp9w5jVup93ZCEyt64urEddgcq11syr0aEUtTIA3w1m54z8aWIzUFlusY60XiBD7pl6yLh2-IYRXPqrj7nGnJZzeTRC7vH-v-fsGJepxLCcidapgdXoKxMgzsT9rqqFJGtX3HgHIUiO3CJJxvflwLaNg2AwtuYTAQyp39WK7WIp9HtEkYtyo5ttrM309S1MoQ__";
const TRAINING_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/jih3NnDgJ5wrqrC0o81vAq/sandbox/sISrImNa8hjlQcvlaJk95J-img-3_1771070209000_na1fn_dHJhaW5pbmctc2VjdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvamloM05uRGdKNXdycXJDMG84MXZBcS9zYW5kYm94L3NJU3JJbU5hOGhqbFFjdmxhSms5NUotaW1nLTNfMTc3MTA3MDIwOTAwMF9uYTFmbl9kSEpoYVc1cGJtY3RjMlZqZEdsdmJnLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N8JlqPUSDy~OHVYsDIXbQNBPILfhuA17pCw2SFBStMmSZIgraynIMMSh1G3GEgQy8KcdMaKDO0rbWR4cB6F3sDEZnTy0NAhqlTGOYJGgun5Mt-0oj3rd6G1fJf~XbvXv-fCb~VvKNN7xW6KeRCWM21JH4jTxPJeCnPCoTweVNvDgkubstbuePMj6Soc8eVxBxcOgmDYjiHSITKR1niFmxv7-xdmovleJy5fDMh06nwt39af0XLG1XPF6pveyYE1BW0TsFv9JiiMXGQvKVhDQvfQJNdF56XFkJzkETrQeP3vFZPgmG--fYUqULdtKbq-rGKHvCxFLXVMRcHx9Pt5mFg__";
const AI_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/jih3NnDgJ5wrqrC0o81vAq/sandbox/sISrImNa8hjlQcvlaJk95J-img-4_1771070204000_na1fn_YWktaW5ub3ZhdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvamloM05uRGdKNXdycXJDMG84MXZBcS9zYW5kYm94L3NJU3JJbU5hOGhqbFFjdmxhSms5NUotaW1nLTRfMTc3MTA3MDIwNDAwMF9uYTFmbl9ZV2t0YVc1dWIzWmhkR2x2YmcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qno9WiAoYZhx~lHGFjnPjrgViAvTInrMf4WLzNrLtTUzQZXAVXviumIT~Va4sslI20X0tkKcSTEw-yDeSFqW2bquupg1r27z39NR67N0saUfhiIbLfdS1kspsN9CJCD0VmHEYVimaNcw6-tR~4w1aIfQ-~kA8KHvIQIjXh67iMkVWkBhaAkQJXBcmVkLkRnaR-IhE3JNGIUKWHiTI3OGcyqQRZ0k~69GwNAmP4XKy4fwqFjY49yADibxpZF65CZU~NF8yNewJrWKCgZLCgT0po4b26BJ1mUjUaXI4NuDhWLMgZQ5bQQ63~mSxmKLDdDQE-om9~EYXhscIN6cL5Z6ZQ__";
const PORTRAIT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/jih3NnDgJ5wrqrC0o81vAq/sandbox/sISrImNa8hjlQcvlaJk95J-img-5_1771070215000_na1fn_YWJvdXQtcG9ydHJhaXQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvamloM05uRGdKNXdycXJDMG84MXZBcS9zYW5kYm94L3NJU3JJbU5hOGhqbFFjdmxhSms5NUotaW1nLTVfMTc3MTA3MDIxNTAwMF9uYTFmbl9ZV0p2ZFhRdGNHOXlkSEpoYVhRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FcUCKKAexyjaSbeub7QJVNJBEjj5zUC8RJ5wAem37rjJYsjcCy1y37Q-VRfRs-WTV59j05WJ5znOjdFvdycGpX3pmtqpv50TEwBBg0k~m6Mn0d11xdZMrFJfXLR804qXBRAsDU4Zsp4PDmbtc~uqTeKBBhb24sYi~6uWimsaAYzApD0QbJ-l2l73KrKyOrE9f0AiTLJfFPOhOAUIMDhnC8FcYjZP6iDuZ4Eb27zLgYx4RGzrDzWio5WcW4O2n7Dsh3aYa~7~TdtRpjrdkB2yAmoCrUsNS275DMvFAnh7YdkHyHvTOzP3SBgCj1Dvc59rlOe7yS~WjiZ1mNT21ooqHA__";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <span className="block text-3xl md:text-4xl font-semibold text-gold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {number}
      </span>
      <span className="block mt-1 text-sm uppercase tracking-[0.15em] text-ivory/70" style={{ fontFamily: "'Source Serif 4', serif" }}>
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation scrolled={scrolled} />

      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
        </div>
        <div className="relative z-10 container pb-16 md:pb-24 pt-32">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-gold" />
                <span className="text-gold text-sm uppercase tracking-[0.2em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Est. 1994
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-[1.1] mb-6">
                Transforming How<br />
                <span className="text-gold">Professionals Grow</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-ivory/80 max-w-xl leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Coaching, training and consulting for lawyers and professional services firms.
                Over thirty years of experience. Powered by the latest in AI.
              </p>
            </FadeIn>
            <FadeIn delay={0.45}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-block px-8 py-3.5 bg-gold text-navy font-semibold text-sm uppercase tracking-[0.1em] hover:bg-gold-light transition-colors duration-300"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  Explore Services
                </a>
                <a
                  href="#about"
                  className="inline-block px-8 py-3.5 border border-ivory/40 text-ivory font-medium text-sm uppercase tracking-[0.1em] hover:bg-ivory/10 transition-colors duration-300"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  About Jamie
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-navy py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeIn><StatItem number="30+" label="Years Experience" /></FadeIn>
            <FadeIn delay={0.1}><StatItem number="50+" label="Firms Served" /></FadeIn>
            <FadeIn delay={0.2}><StatItem number="1000+" label="Professionals Coached" /></FadeIn>
            <FadeIn delay={0.3}><StatItem number="7" label="Step BD Process" /></FadeIn>
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    The Practice
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                  A Different Kind of<br />Consultancy
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay={0.15}>
                <div className="border-l-2 border-gold pl-8">
                  <p className="text-lg md:text-xl text-charcoal leading-relaxed italic mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "It's rarely the content of training material that is the most difficult part. It's cultural resistance."
                  </p>
                </div>
                <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mt-8" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Pennington Hennessy works at the intersection of coaching, training and consulting, with a clear focus on the legal sector and professional services. We don't deliver generic programmes. Every engagement is built around the specific challenges, culture and ambitions of the firm and the individuals within it. Our approach combines deep sector experience with structured frameworks and cutting-edge AI technology to produce lasting behavioural change, not just theoretical knowledge.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 md:py-28 bg-navy">
        <div className="container">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                What We Do
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ivory leading-tight mb-16">
              Three Pillars of<br />Professional Growth
            </h2>
          </FadeIn>

          {/* Service 1: Coaching */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center">
            <FadeIn className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={COACHING_IMG} alt="One-on-one coaching session" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-7">
              <div className="lg:pl-4">
                <span className="text-gold text-xs uppercase tracking-[0.2em] mb-3 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>01</span>
                <h3 className="text-2xl md:text-3xl font-bold text-ivory mb-4">Coaching</h3>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="text-ivory/75 leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Bespoke coaching for individuals and groups, focusing on leadership development, practice growth and career transition. Our distinctive "Take Counsel" methodology goes beyond surface-level psychometrics to explore the underlying patterns of behaviour and motivation that shape a professional's approach to their work and relationships.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Leadership & Practice Development", "Business Development", "Career Transition", "The 'Take Counsel' Method"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span className="text-ivory/60 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Service 2: Training */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center">
            <FadeIn className="lg:col-span-7 lg:order-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={TRAINING_IMG} alt="Professional training workshop" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-5 lg:order-1">
              <div className="lg:pr-4">
                <span className="text-gold text-xs uppercase tracking-[0.2em] mb-3 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>02</span>
                <h3 className="text-2xl md:text-3xl font-bold text-ivory mb-4">Training</h3>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="text-ivory/75 leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Highly practical training programmes tailored to the specific needs of law firms and professional services. Our programmes integrate AI-powered role-play scenarios to provide realistic, scalable skills practice in a psychologically safe environment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Delegation & Supervision", "Business Development Skills", "Commercial Awareness", "AI-Enhanced Scenarios"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span className="text-ivory/60 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Service 3: Consulting */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <FadeIn className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden bg-navy-light flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-gold/20 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>"</div>
                  <p className="text-ivory/90 text-lg italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                    This is excellent Jamie and I think it would work very well here.
                  </p>
                  <p className="text-ivory/50 text-sm mt-4" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    — Performance & Development Manager, Potter Clarkson
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-7">
              <div className="lg:pl-4">
                <span className="text-gold text-xs uppercase tracking-[0.2em] mb-3 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>03</span>
                <h3 className="text-2xl md:text-3xl font-bold text-ivory mb-4">Consulting</h3>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="text-ivory/75 leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Strategic advice on brand positioning, business development frameworks and change management. We help firms define their unique value proposition, design firm-wide systems for winning new business, and navigate the cultural shifts that underpin lasting transformation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Brand Positioning & Messaging", "BD Frameworks", "Change Management", "Cultural Transformation"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span className="text-ivory/60 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== AI INNOVATION ===== */}
      <section id="innovation" className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Innovation
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
                AI-Powered Learning<br />for the Legal Profession
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', serif" }}>
                We have pioneered the use of AI-driven role-play scenarios for professional development. These bespoke simulations allow lawyers and professionals to practise difficult conversations, client interactions and business development skills in a realistic, psychologically safe environment.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Unlike traditional role-plays, our AI scenarios are infinitely scalable, consistently challenging, and available on demand. They enable professionals to demonstrate competency through practice, not just acquire knowledge through instruction.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
                <div>
                  <span className="block text-2xl font-semibold text-navy" style={{ fontFamily: "'JetBrains Mono', monospace" }}>24/7</span>
                  <span className="text-xs text-charcoal/60 uppercase tracking-wider">Availability</span>
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-navy" style={{ fontFamily: "'JetBrains Mono', monospace" }}>100%</span>
                  <span className="text-xs text-charcoal/60 uppercase tracking-wider">Bespoke</span>
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-navy" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Safe</span>
                  <span className="text-xs text-charcoal/60 uppercase tracking-wider">Environment</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src={AI_IMG} alt="AI-powered learning technology" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== METHODOLOGY ===== */}
      <section className="py-20 md:py-28 bg-ivory-dark">
        <div className="container">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-16">
              Proven Frameworks,<br />Lasting Results
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "The 7-Step BD Process",
                desc: "A structured, systematic approach to business development that takes professionals from identifying opportunities through to winning and retaining clients. Each step builds on the last, creating a repeatable process that becomes second nature."
              },
              {
                num: "02",
                title: "The 'Take Counsel' Method",
                desc: "Our distinctive coaching methodology goes beyond traditional psychometrics. Through a deep exploration of a client's life history, we uncover the underlying patterns of behaviour and motivation that shape their professional identity and effectiveness."
              },
              {
                num: "03",
                title: "The 'Talking Money' Protocol",
                desc: "A four-stage process for scoping work, agreeing estimates, working within budgets and managing cash flow. Designed to help lawyers have more effective and confident financial conversations with their clients."
              }
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.1}>
                <div className="bg-white p-8 md:p-10 border border-border h-full">
                  <span className="text-gold text-xs tracking-[0.2em] mb-4 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.num}</span>
                  <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <p className="text-charcoal/70 leading-relaxed text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <FadeIn className="lg:col-span-4">
              <div className="aspect-[3/4] overflow-hidden rounded-sm sticky top-28">
                <img src={PORTRAIT_IMG} alt="Jamie Pennington" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  About
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
                Jamie Pennington
              </h2>
              <p className="text-sm uppercase tracking-[0.15em] text-charcoal/60 mb-8" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Director &middot; Visiting Professor, University of Law
              </p>

              <div className="space-y-6 text-charcoal/80 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                <p className="text-lg">
                  <span className="text-4xl font-bold text-navy float-left mr-3 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>J</span>
                  amie Pennington has spent over thirty years working with lawyers and other professionals, helping them develop the skills, confidence and commercial awareness they need to thrive. His career began in sales and marketing before moving into professional development, giving him a rare combination of commercial acumen and coaching expertise.
                </p>
                <p>
                  As Director of Pennington Hennessy and a Visiting Professor at the University of Law, Jamie brings both practical experience and academic rigour to his work. He has designed and delivered programmes for firms ranging from international practices such as Reed Smith and Latham & Watkins to specialist firms like Stewarts and Potter Clarkson.
                </p>
                <p>
                  Jamie is a pioneer in the use of AI for professional development, having developed a suite of AI-powered role-play scenarios that allow professionals to practise and refine their skills in realistic, bespoke simulations. He describes himself as an "AI scenario evangelist" — continually exploring what's possible as the technology advances, and then applying it with his clients.
                </p>
                <p>
                  His approach is grounded in a belief that lasting change comes not from instruction alone, but from understanding the deeper systems — cultural, behavioural and motivational — that shape how professionals work and grow.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="text-sm uppercase tracking-[0.15em] text-navy font-semibold mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Selected Clients
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal/60" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  {["Reed Smith", "Latham & Watkins", "Stewarts", "Potter Clarkson", "Keystone Law", "Roythornes", "Kingsley Napley", "Ankura", "Edge Health", "Schroders"].map((client) => (
                    <span key={client}>{client}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl text-gold/30 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>"</div>
              <p className="text-xl md:text-2xl text-ivory/90 italic leading-relaxed mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                I think it's a great idea. I'd be interested in talking about developing it and how we could "own it" — but keep you working on the project.
              </p>
              <div className="w-12 h-px bg-gold mx-auto mb-6" />
              <p className="text-ivory/60 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Gillian Nash-Kennell, HR Director — Roythornes LLP
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Get in Touch
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
                Let's Start a<br />Conversation
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Whether you're looking to develop your team's business development capabilities, explore AI-enhanced training, or discuss a bespoke coaching programme, I'd welcome the opportunity to talk.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60 mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email</p>
                    <a href="mailto:jamie@penningtonhennessy.com" className="text-navy hover:text-gold transition-colors" style={{ fontFamily: "'Source Serif 4', serif" }}>
                      jamie@penningtonhennessy.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60 mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Telephone</p>
                    <a href="tel:07887536309" className="text-navy hover:text-gold transition-colors" style={{ fontFamily: "'Source Serif 4', serif" }}>
                      07887 536309
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60 mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Web</p>
                    <span className="text-navy" style={{ fontFamily: "'Source Serif 4', serif" }}>
                      www.penningtonhennessy.com
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 border border-border">
                <h3 className="text-xl font-bold text-navy mb-6">Send a Message</h3>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you for your message. Jamie will be in touch shortly."); }}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-border bg-ivory text-navy text-sm focus:outline-none focus:border-gold transition-colors" style={{ fontFamily: "'Source Serif 4', serif" }} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Organisation</label>
                      <input type="text" className="w-full px-4 py-3 border border-border bg-ivory text-navy text-sm focus:outline-none focus:border-gold transition-colors" style={{ fontFamily: "'Source Serif 4', serif" }} placeholder="Your firm or company" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-border bg-ivory text-navy text-sm focus:outline-none focus:border-gold transition-colors" style={{ fontFamily: "'Source Serif 4', serif" }} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/60 mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 border border-border bg-ivory text-navy text-sm focus:outline-none focus:border-gold transition-colors resize-none" style={{ fontFamily: "'Source Serif 4', serif" }} placeholder="How can I help?" />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-navy text-ivory font-semibold text-sm uppercase tracking-[0.1em] hover:bg-gold hover:text-navy transition-colors duration-300"
                    style={{ fontFamily: "'Source Serif 4', serif" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
