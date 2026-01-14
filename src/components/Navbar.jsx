import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <>
      {/* Top Left - Brand */}
      <Link
        to="/"
        className="fixed top-8 left-8 z-50 text-xl font-bold tracking-widest mix-blend-difference text-white uppercase font-sans"
      >
        Luminary
      </Link>

      {/* Top Right - Menu Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-50 mix-blend-difference text-white uppercase tracking-widest text-sm font-bold hover:scale-110 transition-transform"
      >
        Menu [+]
      </button>

      {/* Bottom Left - Current Page */}
      <div className="fixed bottom-8 left-8 z-40 mix-blend-difference text-white text-xs uppercase tracking-widest rotate-180 [writing-mode:vertical-rl]">
        {isHome ? 'Index' : location.pathname.replace('/', '')}
      </div>

      {/* Bottom Right - CTA */}
      <Link
        to="/contact"
        className="fixed bottom-8 right-8 z-40 mix-blend-difference text-white uppercase tracking-widest text-sm font-bold border-b border-white pb-1 hover:border-transparent transition-colors"
      >
        Book Session
      </Link>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-red-600/90 backdrop-blur-3xl z-[60] flex items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white uppercase text-sm font-bold tracking-widest hover:scale-110 transition-transform"
            >
              Close [-]
            </button>

            <nav className="flex flex-col gap-4 text-center">
              {['Home', 'Portfolio', 'About', 'Pricing', 'Blog', 'Contact'].map(
                (item, i) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent stroke-text hover:text-white transition-all duration-300 font-serif"
                    style={{ WebkitTextStroke: '1px white' }}
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
