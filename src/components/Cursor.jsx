import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove);
      document.addEventListener('mouseenter', mEnter);
      document.addEventListener('mouseleave', mLeave);
      document.addEventListener('mousedown', mDown);
      document.addEventListener('mouseup', mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove);
      document.removeEventListener('mouseenter', mEnter);
      document.removeEventListener('mouseleave', mLeave);
      document.removeEventListener('mousedown', mDown);
      document.removeEventListener('mouseup', mUp);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mEnter = () => {
      setHidden(false);
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mDown = () => {
      setClicked(true);
    };

    const mUp = () => {
      setClicked(false);
    };

    // Re-scanning simplified for this demo
    const handleHover = () => setHovered(true);
    const handleUnhover = () => setHovered(false);

    setInterval(() => {
      const triggers = document.querySelectorAll('a, button');
      triggers.forEach((t) => {
        t.addEventListener('mouseenter', handleHover);
        t.addEventListener('mouseleave', handleUnhover);
      });
    }, 1000);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  if (
    typeof navigator !== 'undefined' &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference bg-white"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: hidden ? 0 : 1,
        transform: `translate(-50%, -50%) scale(${
          clicked ? 0.8 : hovered ? 2.5 : 1
        })`,
        transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
      }}
    />
  );
}
