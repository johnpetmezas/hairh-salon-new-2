'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 116; // Adjusted to match the detected 116 frames
const FRAME_PATH = (index: number) => 
  `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.041s.jpg`;

export default function GsapScrollCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Frame object for GSAP to animate
  const airbnb = useRef({ frame: 0 });

  // Preload Images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const sequence = [...Array(TOTAL_FRAMES)].map((_, i) => FRAME_PATH(i));
    let errorCount = 0;

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    const checkComplete = () => {
      if (loadedCount + errorCount === TOTAL_FRAMES) {
        clearTimeout(fallbackTimer);
        // Only keep successfully loaded images
        setImages(loadedImages.filter(img => img && img.naturalWidth > 0));
        setIsLoaded(true);
      }
    };

    sequence.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        loadedImages[index] = img;
        checkComplete();
      };
      img.onerror = () => {
        errorCount++;
        checkComplete();
      };
    });

    return () => clearTimeout(fallbackTimer);
  }, []);

  const render = useCallback(() => {
    if (!canvasRef.current || images.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentFrame = Math.round(airbnb.current.frame);
    const img = images[currentFrame];

    if (img) {
      // Responsive "object-fit: cover" logic
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  }, [images]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        render();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [render]);

  // GSAP Animation Loop
  useGSAP(() => {
    if (!isLoaded || !containerRef.current) return;

    gsap.to(airbnb.current, {
      frame: TOTAL_FRAMES - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
      onUpdate: render, // Using onUpdate to sync with GSAP's rendering
    });
  }, [isLoaded, render]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div 
        className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: images.length === 0 ? 'url(/hair_art.png)' : 'none' }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        
        {images.length === 0 && (
          <div className="absolute inset-0 bg-[#111827]/40 backdrop-blur-sm z-0" />
        )}
        
        {/* Loading State Overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#FAF9F6] z-50">
            <div className="text-gold flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
              <p className="text-sm uppercase tracking-[0.3em] font-light text-[#111827]">Loading Experience</p>
            </div>
          </div>
        )}

        {/* Content Overlays */}
        <div className="relative z-10 pointer-events-none h-full flex flex-col items-center justify-center text-center p-6 bg-black/5">
           <div className="pointer-events-none">
              <h1 className="text-5xl md:text-8xl lg:text-9xl mb-4 font-serif font-bold tracking-tighter text-white drop-shadow-2xl">
                MAGIC <span className="italic text-gold">HAIRH</span>
              </h1>
              <p className="text-lg md:text-xl font-light uppercase tracking-[0.3em] text-white/95 drop-shadow-xl">
                Experience the Transformation
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
