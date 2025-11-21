"use client";

import { motion } from "framer-motion";

export function AnimatedBee() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 15, 0, -15, 0],
          rotateX: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Bee SVG with glass morphism effect */}
        <motion.div
          className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-orange-500/20 blur-3xl rounded-full" />

          {/* Glass bee container */}
          <motion.div
            className="relative w-full h-full"
            animate={{
              rotateZ: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(251, 191, 36, 0.3))",
              }}
            >
              {/* Bee body with glass effect */}
              <defs>
                <linearGradient id="beeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="stripeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1F2937" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#111827" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Left Wing */}
              <motion.ellipse
                cx="70"
                cy="70"
                rx="35"
                ry="50"
                fill="url(#wingGradient)"
                stroke="#93C5FD"
                strokeWidth="1.5"
                opacity="0.6"
                animate={{
                  rotate: [0, -15, 0, -10, 0],
                  scaleY: [1, 1.1, 1, 1.05, 1],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "70px 90px" }}
              />

              {/* Right Wing */}
              <motion.ellipse
                cx="130"
                cy="70"
                rx="35"
                ry="50"
                fill="url(#wingGradient)"
                stroke="#93C5FD"
                strokeWidth="1.5"
                opacity="0.6"
                animate={{
                  rotate: [0, 15, 0, 10, 0],
                  scaleY: [1, 1.1, 1, 1.05, 1],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "130px 90px" }}
              />

              {/* Bee Body */}
              <ellipse
                cx="100"
                cy="100"
                rx="40"
                ry="55"
                fill="url(#beeGradient)"
                filter="url(#glow)"
              />

              {/* Black Stripes */}
              <ellipse cx="100" cy="80" rx="38" ry="8" fill="url(#stripeGradient)" />
              <ellipse cx="100" cy="100" rx="38" ry="8" fill="url(#stripeGradient)" />
              <ellipse cx="100" cy="120" rx="38" ry="8" fill="url(#stripeGradient)" />

              {/* Head */}
              <circle cx="100" cy="55" r="25" fill="url(#beeGradient)" filter="url(#glow)" />

              {/* Eyes */}
              <circle cx="92" cy="52" r="5" fill="#1F2937" />
              <circle cx="108" cy="52" r="5" fill="#1F2937" />
              <circle cx="94" cy="51" r="2" fill="#FFFFFF" />
              <circle cx="110" cy="51" r="2" fill="#FFFFFF" />

              {/* Antennae */}
              <line x1="90" y1="35" x2="85" y2="25" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
              <line x1="110" y1="35" x2="115" y2="25" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
              <circle cx="85" cy="25" r="3" fill="#1F2937" />
              <circle cx="115" cy="25" r="3" fill="#1F2937" />

              {/* Smile */}
              <path d="M 92 60 Q 100 65 108 60" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Stinger */}
              <path d="M 100 155 L 100 170" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
              <path d="M 100 170 L 95 175 L 100 168 L 105 175 Z" fill="#1F2937" />
            </svg>
          </motion.div>

          {/* Floating sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
