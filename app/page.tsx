'use client';

import GsapScrollCanvas from '@/components/GsapScrollCanvas';
import Navbar from '@/components/Navbar';
import { Phone, MapPin, Palette, Scissors, Sparkles, Facebook, Instagram, PenTool, Star, Crown, Droplet } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const hairRef = useRef<HTMLDivElement>(null);
  const nailsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Services stagger
    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'), 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Hair section animation
    if (hairRef.current) {
      const q = gsap.utils.selector(hairRef.current);
      gsap.from(q('.heading-main, .heading-underline-left, .text-content, .btn-luxury'), {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: hairRef.current,
          start: 'top 70%',
        }
      });
      gsap.from(q('.image-wrapper'), {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: hairRef.current,
          start: 'top 70%',
        }
      });
    }

    // Nails section animation
    if (nailsRef.current) {
      const q = gsap.utils.selector(nailsRef.current);
      gsap.from(q('.heading-main, .heading-underline-left, .text-content, .btn-luxury'), {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: nailsRef.current,
          start: 'top 70%',
        }
      });
      gsap.from(q('.image-wrapper'), {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: nailsRef.current,
          start: 'top 70%',
        }
      });
    }
  }, []); // Removing scoped refs to avoid issues, using global selectors is fine within useEffect/useGSAP if qualified manually

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#111827]">
      <Navbar />
      {/* GSAP Hero Section */}
      <GsapScrollCanvas />

      {/* Main Content Wrapper */}
      <div className="relative z-10 bg-[#FAF9F6]">
        {/* Smooth fade-in from Hero Sequence */}
        <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#FAF9F6] pointer-events-none" />

        {/* Gradient transition from Hero (Sequence) to Marble */}
        <div className="h-32 md:h-48" style={{ background: 'linear-gradient(to bottom, #FAF9F6, #f4f1ee)' }} />

        {/* 1. The Art of Hair & Nails Section Complex (Grouped for continuous background) */}
        <div className="bg-marble">
          <section id="styling" ref={hairRef} className="py-16 md:py-32 px-6 max-w-full mx-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-16">
            <div className="flex-1 max-w-xl w-full glass-box">
              <h2 className="heading-main mb-2">The Art of Hair</h2>
              <div className="heading-underline-left"></div>
              
              <div className="text-content space-y-8 !text-[#111827]">
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
            
            <div className="flex-1 flex justify-center w-full">
              <div className="image-wrapper max-w-[500px] w-[calc(100%-20px)] md:w-full mr-[20px] md:mr-0">
                <div className="image-offset-bg"></div>
                <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-sm">
                  <Image 
                    src="/klomallo ena.jpg" 
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
          <section id="nails" ref={nailsRef} className="py-16 md:py-32 px-6 max-w-full mx-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-16">
            <div className="flex-1 order-2 md:order-1 flex justify-center w-full">
              <div className="image-wrapper max-w-[500px] w-[calc(100%-20px)] md:w-full ml-[20px] md:ml-0">
                <div className="image-offset-bg-left"></div>
                <div className="relative aspect-square w-full rounded-sm overflow-hidden shadow-sm">
                  <Image 
                    src="/kolonuxi ena.jpg" 
                    alt="The Art of Nails" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 order-1 md:order-2 max-w-xl w-full glass-box">
              <h2 className="heading-main mb-2">The Art of Nails</h2>
              <div className="heading-underline-left"></div>
              
              <div className="text-content space-y-8 !text-[#111827]">
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
        </div>

        {/* Gradient: marble → white */}
        <div className="h-32 md:h-48" style={{ background: 'linear-gradient(to bottom, #f4f1ee, #ffffff)' }} />

        {/* 3. Our Premium Services Section */}
        <section id="services" ref={servicesRef} className="py-24 md:py-32 px-6 bg-[#FAF9F6] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="heading-main font-serif !text-[42px] md:!text-[52px]">Our Premium Services</h2>
              <div className="w-16 h-[1.5px] bg-gold mx-auto my-6"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto">
              {/* Card 1 */}
              <div className="service-card w-full md:w-[calc(33.33%-1.5rem)] !shadow-lg">
                <Palette className="service-icon" />
                <h3>Hair Coloring</h3>
                <p>
                  Advanced coloring techniques using premium professional products for vibrant, lasting results.
                </p>
              </div>

              {/* Card 2 */}
              <div className="service-card w-full md:w-[calc(33.33%-1.5rem)] !shadow-lg">
                <PenTool className="service-icon" />
                <h3>Balayage & Highlights</h3>
                <p>
                  Our signature service. Masterfully blended sun-kissed looks tailored to your hair&apos;s movement.
                </p>
              </div>

              {/* Card 3 */}
              <div className="service-card w-full md:w-[calc(33.33%-1.5rem)] !shadow-lg">
                <Scissors className="service-icon" />
                <h3>Haircuts & Styling</h3>
                <p>
                  Modern, trendy, and classic cuts designed to complement your face shape and lifestyle.
                </p>
              </div>

              {/* Card 4 */}
              <div className="service-card w-full md:w-[calc(33.33%-1.5rem)] lg:max-w-[360px] !shadow-lg">
                <Droplet className="service-icon" />
                <h3>Hair Treatments</h3>
                <p>
                  Deep conditioning and restorative treatments to bring back shine, health, and vitality.
                </p>
              </div>

              {/* Card 5 */}
              <div className="service-card w-full md:w-[calc(33.33%-1.5rem)] lg:max-w-[360px] !shadow-lg">
                <Crown className="service-icon" />
                <h3>Special Occasions</h3>
                <p>
                  Exquisite styling for weddings, galas, and your most important life events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient: white → white (since gallery is gone, blending into testimonials which is also white) */}
        <div className="h-24 bg-white" />

        {/* 5. Testimonials Section */}
        <section id="reviews" ref={reviewsRef} className="py-24 md:py-40 bg-white overflow-hidden text-[#111827]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <div className="flex justify-center gap-1 mb-10 text-gold scale-125">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" stroke="none" className="w-5 h-5 shadow-gold" />)}
            </div>
            <h2 className="heading-main font-serif text-center mb-16 italic">5-Star Excellence</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
              {[
                { name: "Maria P.", text: "The most talented colorists in the region. Rania truly understands what suits each face.", role: "Balayage Client" },
                { name: "Eleni G.", text: "Magic Hairh is my sanctuary. The results are always better than I imagined.", role: "Regular Customer" },
                { name: "Sofia T.", text: "Precision cuts that keep their shape for weeks. I can't recommend them enough.", role: "Styling Client" }
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-[#FAF9F6] rounded-sm border border-[#E5E7EB] transition-all duration-500 hover:shadow-lg">
                  <div className="w-12 h-[1px] bg-gold/50 mb-8" />
                  <p className="text-[18px] leading-relaxed font-serif italic text-gray-700 mb-8">
                    &quot;{t.text}&quot;
                  </p>
                  <p className="text-[12px] font-medium tracking-widest uppercase mb-1">{t.name}</p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium">{t.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6 font-medium">Google Verified Reviews</span>
              <a href="https://www.google.com/search?q=Magic+Hairh+Corinth+reviews" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-10 py-4 border border-gold/30 rounded-full group cursor-pointer hover:bg-gold hover:text-white transition-all duration-500 tracking-widest text-[11px] uppercase font-bold">
                Read all 200+ reviews
              </a>
            </div>
          </div>
        </section>

        {/* Gradient: white → cream */}
        <div className="h-24 md:h-32" style={{ background: 'linear-gradient(to bottom, #ffffff, #FAF9F6)' }} />

        <section id="contact" className="py-16 md:py-32 px-6 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 text-left">
              <h2 className="heading-main mb-8">Get In Touch</h2>
              <p className="text-content mb-12 max-w-md">
                Ready for your transformation? Visit us in the heart of Corinth for a personalized beauty experience that blends European trends with artisanal expertise.
              </p>
              
              <div className="space-y-8 mb-16 text-[18px]">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#9CA3AF] mb-1 font-medium">Appointment</p>
                    <span className="font-serif text-2xl">27410 81401</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#9CA3AF] mb-1 font-medium">Location</p>
                    <span className="font-serif text-2xl">Periandrou 41, Corinth</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 h-[500px] rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.9714856693444!2d22.9324!3d37.9358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135f850f00000001%3A0x0!2sPeriandrou%2041%2C%20Korinthos%20201%2031!5e0!3m2!1sen!2sgr!4v1620000000000!5m2!1sen!2sgr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Magic Hairh Location"
                className="transition-all duration-1000"
              ></iframe>
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
