import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data';
import heroBg from '../assets/portfolio/hero_bg.png';

// Parallax text component
const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="scroller font-serif text-[15vw] uppercase font-black leading-[0.85] tracking-tighter flex whitespace-nowrap"
        style={{ x }}
      >
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
        <span className="block mr-12">{children} </span>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className="w-full bg-black text-white min-h-[300vh] overflow-hidden">
      {/* Kinetic Header */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="rotate-[-5deg] scale-125 mix-blend-difference z-10 pointer-events-none">
          <ParallaxText baseVelocity={-2}>LUMINARY</ParallaxText>
          <ParallaxText baseVelocity={2}>VISUALS</ParallaxText>
        </div>

        {/* Background Image floating */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0 z-0 opacity-40 grayscale contrast-125"
        >
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Skew Scroll Gallery */}
      <div className="py-20 px-4 md:px-12 space-y-32">
        {portfolioItems.map((item, index) => (
          <ProjectItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Footer Kinetic */}
      <div className="h-[50vh] flex items-center justify-center bg-white text-black overflow-hidden relative">
        <Link
          to="/contact"
          className="z-10 text-[10vw] font-black uppercase tracking-tighter hover:scale-110 transition-transform duration-500 font-serif"
        >
          Make Contact
        </Link>
        <div className="absolute w-full top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <ParallaxText baseVelocity={5}>BOOK YOUR SESSION NOW</ParallaxText>
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ item, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 5 : -5, index % 2 === 0 ? -5 : 5]
  );

  return (
    <div
      ref={ref}
      className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
    >
      <div className="relative w-full md:w-[60vw] aspect-[16/9] group">
        <motion.div
          style={{ y, rotate }}
          className="w-full h-full overflow-hidden"
        >
          <img
            src={item.image}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
          />
        </motion.div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            index % 2 === 0 ? '-right-20' : '-left-20'
          } z-20 mix-blend-difference pointer-events-none`}
        >
          <h2 className="text-[5vw] font-black uppercase tracking-tighter text-white">
            {item.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
