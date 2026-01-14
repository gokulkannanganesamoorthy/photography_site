import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'The Art of Shadow: Mastering Contrast in Portraits',
    date: 'October 12, 2025',
    category: 'Tutorial',
    image:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Shooting Film in a Digital World',
    date: 'September 28, 2025',
    category: 'Opinion',
    image:
      'https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Behind the Scenes: Vogue Italia',
    date: 'August 15, 2025',
    category: 'Journal',
    image:
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Brutalist Architecture in Modern Photography',
    date: 'July 02, 2025',
    category: 'Essay',
    image:
      'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white pt-40 px-4 md:px-12 pb-20">
      <div className="flex justify-between items-end mb-20 border-b border-white pb-8">
        <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mix-blend-exclusion">
          Notes
        </h1>
        <span className="text-xl font-serif hidden md:block">(Journal)</span>
      </div>

      <div className="space-y-0">
        {blogs.map((post, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            key={post.id}
            className="group border-b border-white/20 py-12 flex flex-col md:flex-row gap-8 items-start cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 hover:px-8 -mx-8 px-8"
          >
            <div className="w-full md:w-1/4">
              <span className="text-xs uppercase tracking-widest opacity-60 block mb-2">
                {post.date}
              </span>
              <span className="text-xs uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full group-hover:border-black/20">
                {post.category}
              </span>
            </div>

            <div className="w-full md:w-3/4 flex justify-between items-start">
              <h2 className="text-3xl md:text-5xl font-serif leading-tight group-hover:italic transition-all">
                {post.title}
              </h2>
              <ArrowUpRight className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
