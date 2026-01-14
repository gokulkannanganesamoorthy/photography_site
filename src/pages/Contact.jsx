import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-40 px-4 md:px-12 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between items-start mb-20">
        <h1 className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-exclusion">
          Let's <br /> Talk
        </h1>
        <div className="md:w-1/3 mt-12 md:mt-0 font-serif text-2xl leading-relaxed text-gray-400">
          Based in New York. <br />
          Available Worldwide. <br />
          <a
            href="mailto:hello@luminary.com"
            className="text-white border-b border-white hover:border-transparent transition-colors mt-8 inline-block"
          >
            hello@luminary.com
          </a>
        </div>
      </div>

      <form className="w-full max-w-4xl self-end mb-20 space-y-0">
        <div className="group relative border-t border-white/20 hover:border-white transition-colors py-8">
          <label className="text-xs uppercase tracking-widest text-gray-500 absolute top-4 left-0 group-hover:text-white transition-colors">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-transparent text-4xl md:text-6xl font-serif text-white placeholder-zinc-800 focus:outline-none pt-6"
          />
        </div>
        <div className="group relative border-t border-white/20 hover:border-white transition-colors py-8">
          <label className="text-xs uppercase tracking-widest text-gray-500 absolute top-4 left-0 group-hover:text-white transition-colors">
            Email
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-transparent text-4xl md:text-6xl font-serif text-white placeholder-zinc-800 focus:outline-none pt-6"
          />
        </div>
        <div className="group relative border-t border-white/20 hover:border-white transition-colors py-8">
          <label className="text-xs uppercase tracking-widest text-gray-500 absolute top-4 left-0 group-hover:text-white transition-colors">
            Vision
          </label>
          <textarea
            rows="1"
            placeholder="Describe your project"
            className="w-full bg-transparent text-4xl md:text-6xl font-serif text-white placeholder-zinc-800 focus:outline-none pt-6 resize-none"
          />
        </div>

        <button className="w-full py-12 bg-white text-black text-2xl font-black uppercase tracking-widest flex justify-between px-8 hover:bg-gray-200 transition-colors mt-12 group">
          <span>Send Request</span>
          <span className="group-hover:translate-x-4 transition-transform">
            →
          </span>
        </button>
      </form>
    </div>
  );
}
