import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Cursor from './Cursor';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to top on route change
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Cursor />
      <Navbar />
      <main>{children}</main>
      <footer className="py-12 border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 text-center text-white text-sm">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Luminary Photography. All rights
            reserved.
          </p>
          <p className="text-xs uppercase tracking-widest opacity-80">
            Developed by{' '}
            <a
              href="https://gokulkannanganesamoorthy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors border-b border-transparent hover:border-white"
            >
              Gokul Kannan Ganesamoorthy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
