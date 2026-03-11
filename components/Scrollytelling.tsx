'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollCanvas from './ScrollCanvas';
import { Phone, MapPin, Star, Scissors, Sparkles, Palette } from 'lucide-react';

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Section transformations
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.8]);

  const aboutOpacity = useTransform(smoothProgress, [0.15, 0.25, 0.4], [0, 1, 0]);
  const aboutY = useTransform(smoothProgress, [0.15, 0.25, 0.4], [50, 0, -50]);

  const servicesOpacity = useTransform(smoothProgress, [0.4, 0.5, 0.65], [0, 1, 0]);
  const servicesY = useTransform(smoothProgress, [0.4, 0.5, 0.65], [50, 0, -50]);

  const testimonialsOpacity = useTransform(smoothProgress, [0.65, 0.75, 0.85], [0, 1, 0]);
  const testimonialsY = useTransform(smoothProgress, [0.65, 0.75, 0.85], [100, 0, -50]);

  const contactOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const contactY = useTransform(smoothProgress, [0.85, 0.95], [100, 0]);

  return (
    <div ref={containerRef} className="relative h-[800vh]">
      <ScrollCanvas progress={smoothProgress.get()} />

      {/* Hero Section */}
      <section className="sticky top-0 h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-4 font-serif font-bold tracking-tighter">
            MAGIC <span className="text-gold italic">HAIRH</span>
          </h1>
          <p className="text-lg md:text-xl font-light uppercase tracking-[0.3em] text-white/70">
            Artistry in Every Strand
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <p className="text-xs uppercase tracking-widest mb-2 text-gold">Scroll to Explore</p>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="sticky top-0 h-screen flex items-center justify-center p-6 bg-black/40 backdrop-blur-[2px]">
        <motion.div 
          style={{ opacity: aboutOpacity, y: aboutY }}
          className="max-w-4xl text-center"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm mb-4 block">The Visionary</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Meet <span className="italic">Rania Gkika</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
            With over a decade of experience in European styling, Rania Gkika brings a touch of magic to Corinth. 
            Magic Hairh is not just a salon; it&apos;s a sanctuary of luxury where modern techniques meet timeless elegance.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="sticky top-0 h-screen flex items-center justify-center p-6 bg-black/40">
        <motion.div 
          style={{ opacity: servicesOpacity, y: servicesY }}
          className="max-w-6xl w-full"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-serif">Signature <span className="text-gold italic">Art</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Palette className="w-8 h-8" />, name: "Artisanal Color", desc: "Expertly curated palettes tailored to your skin tone and personality." },
              { icon: <Sparkles className="w-8 h-8" />, name: "Luxe Balayage", desc: "Sun-kissed, hand-painted gradients for a natural yet sophisticated look." },
              { icon: <Scissors className="w-8 h-8" />, name: "Precision Cuts", desc: "Tailored silhouettes designed to frame your face and enhance texture." }
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-2xl group hover:border-gold/50 transition-colors">
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{s.name}</h3>
                <p className="text-white/60 font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials/Status Section */}
      <section className="sticky top-0 h-screen flex items-center justify-center p-6 bg-black/60">
        <motion.div 
          style={{ opacity: testimonialsOpacity, y: testimonialsY }}
          className="text-center"
        >
          <div className="flex justify-center gap-1 mb-6 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-8 h-8" />)}
          </div>
          <h2 className="text-5xl md:text-8xl font-serif mb-8 italic">5-Star Excellence</h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed italic">
            &quot;The best hair salon in Corinth. Rania is a true artist who understands exactly what you need.&quot;
          </p>
          <div className="mt-12 flex justify-center gap-8 text-sm uppercase tracking-widest text-gold">
            <span>Google verified</span>
            <span>Premium salon</span>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="sticky top-0 h-screen flex items-center justify-center p-6 bg-black/80">
        <motion.div 
          style={{ opacity: contactOpacity, y: contactY }}
          className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="text-gold uppercase tracking-[0.2em] text-sm mb-4 block">Visit Us</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Luxury <span className="italic block">Awaits</span></h2>
            
            <div className="space-y-6">
              <a href="tel:2741081401" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Book Appointment</p>
                  <p className="text-2xl">2741 081401</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Our Location</p>
                  <p className="text-xl">Periandrou 41, Corinth</p>
                </div>
              </div>
            </div>

            <button className="mt-12 px-10 py-5 bg-gold text-black font-semibold uppercase tracking-widest text-sm hover:bg-white transition-colors">
              Call Now To Reserve
            </button>
          </div>

          <div className="h-[400px] w-full rounded-2xl overflow-hidden glass relative grayscale hover:grayscale-0 transition-all duration-700">
             {/* Simple Map Placeholder */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.9714856693444!2d22.9324!3d37.9358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135f850f00000001%3A0x0!2sPeriandrou%2041%2C%20Korinthos%20201%2031!5e0!3m2!1sen!2sgr!4v1620000000000!5m2!1sen!2sgr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="opacity-60"
             ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Footer (Static at end) */}
      <footer className="h-[10vh] flex items-center justify-center text-xs uppercase tracking-[0.5em] text-white/30">
        © 2026 MAGIC HAIRH CORINTH
      </footer>
    </div>
  );
}
