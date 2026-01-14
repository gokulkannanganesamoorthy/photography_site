import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioItems } from '../data';

// Random positioning generator for "scattered" feel
const getRandomPos = (i) => {
  const angle = i * 137.5 * (Math.PI / 180); // Golden angle
  const radius = 20 * i;
  return {
    left: `${50 + Math.cos(angle) * 30}%`,
    top: `${i * 80}vh`,
    rotate: (Math.random() - 0.5) * 20,
  };
};

export default function Portfolio() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="w-full bg-black text-white min-h-[400vh] relative pt-[50vh] pb-[50vh] overflow-hidden"
    >
      {/* Fixed Title Background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[20vw] font-serif font-black text-zinc-900 leading-none tracking-tighter opacity-50">
          ARCHIVE
        </h1>
      </div>

      {/* Scattered Cards */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {portfolioItems.map((item, index) => {
          const pos = getRandomPos(index);
          return (
            <ProjectCard key={item.id} item={item} index={index} pos={pos} />
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({ item, index, pos }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        marginTop: index === 0 ? 0 : '-20vh',
        marginLeft: index % 2 === 0 ? '10vw' : '50vw',
        scale,
        opacity,
        rotate: pos.rotate,
      }}
      className="w-[80vw] md:w-[40vw] aspect-[3/4] relative group grayscale hover:grayscale-0 transition-all duration-500 z-10"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover shadow-2xl shadow-black"
      />

      <div className="absolute -bottom-12 -left-12 z-20">
        <h2
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent stroke-text"
          style={{ WebkitTextStroke: '1px white' }}
        >
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </h2>
      </div>

      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
        <div className="text-center">
          <h3 className="text-4xl font-serif mb-2">{item.title}</h3>
          <p className="uppercase tracking-widest text-sm text-gray-400">
            {item.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
