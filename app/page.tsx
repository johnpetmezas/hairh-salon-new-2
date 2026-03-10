'use client';

import GsapScrollCanvas from '@/components/GsapScrollCanvas';
import { Phone, MapPin, Palette, Scissors, Sparkles, Facebook, Instagram, PenTool } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!servicesRef.current) return;

    gsap.from(servicesRef.current.querySelectorAll('.service-card'), {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: servicesRef });

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#111827]">
      {/* GSAP Hero Section */}
      <GsapScrollCanvas />

      {/* Main Content Wrapper */}
      <div className="relative z-10 bg-[#FAF9F6]">
        
        {/* 1. The Art of Hair Section */}
        <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
            <div className="flex-1 max-w-xl">
              <h2 className="heading-main mb-2">The Art of Hair</h2>
              <div className="heading-underline-left"></div>
              
              <div className="text-content space-y-8">
                <p>
                  Welcome to <strong>Magic Hairh</strong>, where beauty meets expertise. Founded and led by <strong>Rania Gkika</strong>, our salon is a sanctuary for those who seek more than just a haircut. We believe in the transformative power of professional styling.
                </p>
                <p>
                  Located at <strong>Periandrou 41, Corinth</strong>, we combine European trends with personalized service to ensure every client leaves feeling like their most beautiful self. From intricate balayage to modern precision cuts, our passion is your reflection.
                </p>
              </div>
              
              <div className="mt-12">
                <a href="#contact" className="btn-luxury">Visit Us</a>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="image-wrapper max-w-[500px] w-full">
                <div className="image-offset-bg"></div>
                <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-sm">
                  <Image 
                    src="/hair_art.png" 
                    alt="The Art of Hair" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Art of Nails Section */}
        <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-white/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
            <div className="flex-1 order-2 md:order-1 flex justify-center lg:justify-start">
              <div className="image-wrapper max-w-[500px] w-full">
                <div className="image-offset-bg-left"></div>
                <div className="relative aspect-square w-full rounded-sm overflow-hidden shadow-sm">
                  <Image 
                    src="/nails_art.png" 
                    alt="The Art of Nails" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 order-1 md:order-2 max-w-xl">
              <h2 className="heading-main mb-2">The Art of Nails</h2>
              <div className="heading-underline-left"></div>
              
              <div className="text-content space-y-8">
                <p>
                  Complete your look with our luxurious nail services at <strong>Magic Hairh</strong>. Our dedicated nail artists specialize in creating stunning designs tailored to your unique style.
                </p>
                <p>
                  From elegant manicures to intricate, glitter-infused nail art, we use only premium products to ensure your nails remain healthy, strong, and exceptionally beautiful.
                </p>
              </div>
              
              <div className="mt-12">
                <button className="btn-luxury">Discover Nails</button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Premium Services Section */}
        <section className="py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="heading-main font-serif">Signature Services</h2>
              <div className="heading-underline"></div>
              <p className="text-sm uppercase tracking-[0.4em] text-gold font-medium">Elevate Your Presence</p>
            </div>
            
            <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="service-card">
                <div className="absolute top-8 right-8 text-gold/20 font-serif text-4xl italic">01</div>
                <Palette className="service-icon" />
                <h3 className="font-serif font-medium">Hair Coloring</h3>
                <p>
                  Advanced coloring techniques using premium professional products for vibrant, lasting results.
                </p>
              </div>

              {/* Service 2 */}
              <div className="service-card">
                <div className="absolute top-8 right-8 text-gold/20 font-serif text-4xl italic">02</div>
                <PenTool className="service-icon" />
                <h3 className="font-serif font-medium">Balayage & Highlights</h3>
                <p>
                  Our signature service. Masterfully blended sun-kissed looks tailored to your hair's movement.
                </p>
              </div>

              {/* Service 3 */}
              <div className="service-card">
                <div className="absolute top-8 right-8 text-gold/20 font-serif text-4xl italic">03</div>
                <Scissors className="service-icon" />
                <h3 className="font-serif font-medium">Haircuts & Styling</h3>
                <p>
                  Modern, trendy, and classic cuts designed to complement your face shape and lifestyle.
                </p>
              </div>

              {/* Service 4 */}
              <div className="service-card">
                <div className="absolute top-8 right-8 text-gold/20 font-serif text-4xl italic">04</div>
                <Sparkles className="service-icon" />
                <h3 className="font-serif font-medium">Special Occasions</h3>
                <p>
                  Exquisite styling for weddings, galas, and your most important life events.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Unified Contact section */}
        <section id="contact" className="py-32 px-6 border-t border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-main mb-12">Get In Touch</h2>
            <div className="flex flex-col md:flex-row justify-center gap-16 items-center mb-20 text-[18px]">
               <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gold" />
                  <span className="font-medium">2741 081401</span>
               </div>
               <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="font-medium">Periandrou 41, Corinth</span>
               </div>
            </div>
            
            <div className="flex justify-center gap-8">
              <a href="#" className="w-14 h-14 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        <footer className="py-16 bg-[#F9FAFB] text-center border-t border-[#E5E7EB]">
           <p className="text-[11px] uppercase tracking-[0.5em] text-[#9CA3AF]">
             © 2026 MAGIC HAIRH CORINTH · ALL RIGHTS RESERVED
           </p>
        </footer>
      </div>
    </main>
  );
}
