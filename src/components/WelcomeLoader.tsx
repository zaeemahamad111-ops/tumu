import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WelcomeLoader.css';

export function WelcomeLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fill the progress bar over ~2.8 seconds so it feels complete before fading out at 3s
    const startTime = Date.now();
    const duration = 2700; // 2.7 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(100, (elapsed / duration) * 100);
      
      setProgress(calculatedProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
      }
    }, 16); // ~60fps update rate

    // Complete loader and hide after exactly 3 seconds
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="welcome-loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="welcome-loader-content">
            <motion.img
              src="/logo.png"
              alt="TUMU"
              className="welcome-loader-logo"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <div className="welcome-loader-bar-wrap">
              <div 
                className="welcome-loader-bar-fill" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <span className="welcome-loader-text font-display">LOADING EXPERIENCE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
