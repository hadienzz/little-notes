"use client";

import { motion } from "framer-motion";

export default function AnimatedBunny() {
  return (
    <div className="relative flex items-center justify-center w-48 h-48">
      {/* Floating hearts around the bunny */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-lg select-none"
          initial={{
            opacity: 0,
            x: (i - 2) * 30,
            y: 20,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [20, -30, -60, -80],
            x: (i - 2) * 30 + Math.sin(i) * 10,
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut",
          }}
        >
          ♥
        </motion.div>
      ))}

      {/* The Bunny SVG */}
      <motion.svg
        width="120"
        height="140"
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Left Ear */}
        <motion.ellipse
          cx="38"
          cy="30"
          rx="12"
          ry="28"
          fill="#FFF0F3"
          stroke="#FBBFC7"
          strokeWidth="2"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "38px 55px" }}
        />
        <ellipse cx="38" cy="28" rx="6" ry="18" fill="#FFD6DE" />

        {/* Right Ear */}
        <motion.ellipse
          cx="82"
          cy="30"
          rx="12"
          ry="28"
          fill="#FFF0F3"
          stroke="#FBBFC7"
          strokeWidth="2"
          animate={{ rotate: [3, -3, 3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          style={{ transformOrigin: "82px 55px" }}
        />
        <ellipse cx="82" cy="28" rx="6" ry="18" fill="#FFD6DE" />

        {/* Head */}
        <circle cx="60" cy="72" r="30" fill="#FFF5F7" stroke="#FBBFC7" strokeWidth="2" />

        {/* Blush left */}
        <motion.ellipse
          cx="42"
          cy="80"
          rx="7"
          ry="4"
          fill="#FFD6DE"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Blush right */}
        <motion.ellipse
          cx="78"
          cy="80"
          rx="7"
          ry="4"
          fill="#FFD6DE"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />

        {/* Left Eye */}
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          style={{ transformOrigin: "48px 68px" }}
        >
          <circle cx="48" cy="68" r="4" fill="#4A4A4A" />
          <circle cx="50" cy="66" r="1.5" fill="white" />
        </motion.g>

        {/* Right Eye */}
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          style={{ transformOrigin: "72px 68px" }}
        >
          <circle cx="72" cy="68" r="4" fill="#4A4A4A" />
          <circle cx="74" cy="66" r="1.5" fill="white" />
        </motion.g>

        {/* Nose */}
        <ellipse cx="60" cy="76" rx="3" ry="2" fill="#FBBFC7" />

        {/* Mouth */}
        <path
          d="M55 80 Q60 86 65 80"
          stroke="#FBBFC7"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Body */}
        <ellipse cx="60" cy="112" rx="24" ry="20" fill="#FFF5F7" stroke="#FBBFC7" strokeWidth="2" />

        {/* Tummy */}
        <ellipse cx="60" cy="114" rx="14" ry="12" fill="#FFF0F3" />

        {/* Left Paw */}
        <motion.ellipse
          cx="42"
          cy="120"
          rx="8"
          ry="6"
          fill="#FFF5F7"
          stroke="#FBBFC7"
          strokeWidth="1.5"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ transformOrigin: "42px 115px" }}
        />

        {/* Right Paw */}
        <motion.ellipse
          cx="78"
          cy="120"
          rx="8"
          ry="6"
          fill="#FFF5F7"
          stroke="#FBBFC7"
          strokeWidth="1.5"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ transformOrigin: "78px 115px" }}
        />

        {/* Holding a tiny letter */}
        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "60px 108px" }}
        >
          <rect x="50" y="100" width="20" height="14" rx="2" fill="#FFE4E9" stroke="#FBBFC7" strokeWidth="1" />
          <path d="M50 100 L60 108 L70 100" stroke="#FBBFC7" strokeWidth="1" fill="none" />
          <motion.text
            x="57"
            y="112"
            fontSize="5"
            fill="#E8869B"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ♥
          </motion.text>
        </motion.g>
      </motion.svg>
    </div>
  );
}
