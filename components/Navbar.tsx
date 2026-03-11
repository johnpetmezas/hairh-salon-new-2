'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-2xl tracking-tighter transition-colors duration-500 ${
            scrolled ? 'text-[#111827]' : 'text-white'
          }`}>
            MAGIC <span className="italic text-gold">HAIRH</span>
          </span>
          {!scrolled && (
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Corinth</span>
          )}
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          {[
            { name: 'Styling', href: '#styling' },
            { name: 'Nails', href: '#nails' },
            { name: 'Services', href: '#services' },
            { name: 'Reviews', href: '#reviews' },
            { name: 'Contact', href: '#contact' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 hover:text-gold ${
                scrolled ? 'text-[#111827]' : 'text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="tel:2741081401"
            className="flex items-center gap-2 px-6 py-2.5 bg-gold text-black rounded-full hover:bg-white hover:text-gold transition-all duration-300 font-bold"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </a>
        </div>

        <div className="md:hidden">
            <a
                href="tel:2741081401"
                className="w-10 h-10 flex items-center justify-center bg-gold text-black rounded-full"
            >
                <Phone className="w-4 h-4" />
            </a>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
