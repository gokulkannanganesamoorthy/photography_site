import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { packages } from '../data';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white pt-40 px-4 md:px-12 pb-20">
      <h1 className="text-[10vw] font-black uppercase tracking-tighter mb-20 text-center md:text-left">
        Rates
      </h1>

      <div className="space-y-0 border-t border-white">
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className="group relative border-b border-white py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white hover:text-black transition-colors duration-500 cursor-none"
          >
            <div className="md:w-1/3">
              <span className="block text-xs uppercase tracking-widest mb-2 opacity-50 group-hover:opacity-100">
                0{index + 1}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif">{pkg.name}</h2>
            </div>

            <div className="md:w-1/3 my-8 md:my-0">
              <ul className="space-y-2 font-mono text-sm uppercase opacity-70 group-hover:opacity-100">
                {pkg.features.slice(0, 3).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/3 text-right">
              <span className="text-4xl md:text-6xl font-light tracking-tight">
                {pkg.price}
              </span>
            </div>

            <Link to="/contact" className="absolute inset-0 z-10" />
          </div>
        ))}
      </div>

      <div className="mt-40 text-center">
        <p className="text-xl md:text-2xl font-serif text-gray-400 mb-8">
          Need something specific?
        </p>
        <Link
          to="/contact"
          className="text-lg uppercase tracking-widest border-b border-white hover:text-gray-300 transition-colors"
        >
          Request Custom Quote
        </Link>
      </div>
    </div>
  );
}
