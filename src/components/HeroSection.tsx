import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const FRAME_COUNT = 120;

// Globally store preloaded Image elements
const desktopFrames: HTMLImageElement[] = [];
const mobileFrames: HTMLImageElement[] = [];

// Track if sets have started loading
let desktopLoaded = false;
let mobileLoaded = false;

function preloadDesktop() {
  if (desktopLoaded) return;
  desktopLoaded = true;
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const num = String(i).padStart(4, '0');
    const img = new Image();
    img.src = `/frames/frame_${num}.jpg`;
    desktopFrames[i - 1] = img;
  }
}

function preloadMobile() {
  if (mobileLoaded) return;
  mobileLoaded = true;
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const num = String(i).padStart(4, '0');
    const img = new Image();
    img.src = `/mobile_frames/frame_${num}.jpg`;
    mobileFrames[i - 1] = img;
  }
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Track which set of frames has finished initial preloading trigger
  const [loadedSet, setLoadedSet] = useState<'none' | 'desktop' | 'mobile'>('none');

  // Scroll stage state
  const [scrollStage, setScrollStage] = useState(0);

  // Draw the canvas frame
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Switch between desktop or mobile frames based on screen width
    const isMobileViewport = window.innerWidth <= 768;
    const frameSet = isMobileViewport ? mobileFrames : desktopFrames;

    const img = frameSet[index];
    if (!img) return;

    // If image is not loaded yet, register an onload handler to draw it once complete
    if (!img.complete || img.naturalWidth === 0) {
      img.onload = () => {
        if (frameIndexRef.current === index) {
          drawFrame(index);
        }
      };
      return;
    }

    const { width, height } = canvas;
    const imgAR = img.naturalWidth / img.naturalHeight;
    const canvasAR = width / height;

    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (imgAR > canvasAR) {
      // image is wider — crop sides
      sw = img.naturalHeight * canvasAR;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      // image is taller — crop top/bottom
      sh = img.naturalWidth / canvasAR;
      sy = (img.naturalHeight - sh) / 2;
    }
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
  }, []);

  // Resize canvas to match device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = canvas.offsetWidth  * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    drawFrame(frameIndexRef.current);
  }, [drawFrame]);

  // Lazy Preloading sequence (delays starting load to prioritize WelcomeLoader and main styles)
  useEffect(() => {
    const startPreloading = () => {
      const isMobileViewport = window.innerWidth <= 768;
      if (isMobileViewport) {
        preloadMobile();
        setLoadedSet('mobile');
      } else {
        preloadDesktop();
        setLoadedSet('desktop');
      }
    };

    const timer = setTimeout(startPreloading, 300);

    const handleResize = () => {
      const isMobileViewport = window.innerWidth <= 768;
      if (isMobileViewport) {
        if (!mobileLoaded) {
          preloadMobile();
          setLoadedSet('mobile');
        }
      } else {
        if (!desktopLoaded) {
          preloadDesktop();
          setLoadedSet('desktop');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /*
    DEBUGGING DIAGNOSIS:
    The root cause of the blank white space and premature/incomplete 3D animation unpinning was a calculation mismatch:
    1. The container's pinned distance was previously calculated using `window.innerHeight` (which dynamically fluctuates on mobile
       as browser toolbars hide/show, and differs from CSS 100vh/100dvh values).
    2. `.hero-sticky` had `height: 100vh`, while mobile viewports require dynamic viewport units (`100dvh`) to adapt seamlessly.
    3. When `window.innerHeight` deviated from the physical sticky container height, `pinnedDistance = container.offsetHeight - sticky.offsetHeight`
       caused progress mapping to hit 1.0 either too late or too early relative to when `.hero-sticky` actually unpinned.
    4. By deriving the exact pinned scroll distance from `container.offsetHeight - sticky.offsetHeight` using dynamic viewport CSS units
       (`250dvh` container / `100dvh` sticky), the animation progress maps 0.0 -> 1.0 (frames 0 -> 119) with 100% precision across all viewport sizes
       and mobile address bar states, ensuring Section 2 follows immediately without white space or extra scroll gaps.
  */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const stickyHeight = stickyRef.current ? stickyRef.current.offsetHeight : window.innerHeight;
      const pinnedDistance = section.offsetHeight - stickyHeight;

      if (pinnedDistance <= 0) return;

      // Calculate progress strictly bounded [0, 1] while pinned
      const scrollOffset = -rect.top;
      const progress = Math.max(0, Math.min(1, scrollOffset / pinnedDistance));

      // Scroll stage state
      if (progress < 0.12) {
        setScrollStage(0);
      } else if (progress < 0.35) {
        setScrollStage(1);
      } else if (progress < 0.78) {
        setScrollStage(2);
      } else {
        setScrollStage(3);
      }

      // Map progress to frame 0 -> 119
      const targetIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT)
      );

      if (targetIndex !== frameIndexRef.current) {
        frameIndexRef.current = targetIndex;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          drawFrame(targetIndex);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  // Handle canvas sizing resize events
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // Draw frame 0 when preloading starts/completes
  useEffect(() => {
    if (loadedSet === 'none') return;
    const isMobileViewport = window.innerWidth <= 768;
    const firstImg = isMobileViewport ? mobileFrames[0] : desktopFrames[0];
    if (firstImg) {
      if (firstImg.complete) {
        drawFrame(0);
      } else {
        firstImg.onload = () => drawFrame(0);
      }
    }
  }, [loadedSet, drawFrame]);

  return (
    <div ref={sectionRef} className="hero-scroll-container">
      <section ref={stickyRef} className="hero-sticky">


        {/* ── CANVAS FRAME LAYER ── */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* ── SCROLL TO START INDICATOR ── */}
        <AnimatePresence>
          {scrollStage === 0 && (
            <motion.div
              className="scroll-indicator-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ChevronDown size={28} color="var(--color-pink)" />
              </motion.div>
              <span className="scroll-label font-body text-pink">SCROLL TO EXPERIENCE</span>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </div>
  );
}
