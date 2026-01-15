import React from 'react';
import { motion } from 'framer-motion';
import portraitImage from '../assets/portfolio/portrait_2.png';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-40 px-4 md:px-12 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-40">
        <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mix-blend-exclusion z-10">
          Raw <br /> & Real
        </h1>
        <div className="md:w-1/3 mb-4 z-10">
          <p className="font-serif text-2xl leading-relaxed text-gray-300">
            Stripping away the unnecessary to reveal the core truth. Photography
            is an act of rebellion against the fleeting nature of time.
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-video grayscale contrast-125 overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={portraitImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            className="text-[20vw] font-black text-transparent stroke-text opacity-20"
            style={{ WebkitTextStroke: '2px white' }}
          >
            ELENA
          </h2>
        </div>
      </div>

      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-8">
            The Philosophy
          </h3>
          <p className="text-xl md:text-3xl font-light leading-tight">
            We don't take photos. We create evidence of existence. Every shutter
            click is a violent act of preservation.
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-8">
            Select Clients
          </h3>
          <ul className="text-xl md:text-3xl font-serif space-y-4">
            <li>Vogue Italia</li>
            <li>Dazed & Confused</li>
            <li>Saint Laurent</li>
            <li>Numéro Tokyo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
