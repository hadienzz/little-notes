"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedBunny from "./components/AnimatedBunny";

const floatingElements = ["✿", "♥", "⋆", "˚", "✦", "❀", "°"];

function FloatingParticle({ delay, char }: { delay: number; char: string }) {
  const randomX = Math.random() * 100;
  const randomDuration = 6 + Math.random() * 6;

  return (
    <motion.span
      className="fixed text-pink-200/40 pointer-events-none select-none text-sm"
      style={{ left: `${randomX}%` }}
      initial={{ y: "100vh", opacity: 0, rotate: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 0.7, 0.7, 0],
        rotate: 360,
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
    >
      {char}
    </motion.span>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowLetter(true), 800);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FFFBFC] font-[family-name:var(--font-quicksand)]">
      {/* Floating background particles */}
      {floatingElements.map((char, i) => (
        <FloatingParticle key={i} delay={i * 1.2} char={char} />
      ))}

      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-pink-50/30 via-transparent to-pink-50/20" />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Bunny greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-2"
        >
          <AnimatedBunny />
        </motion.div>

        {/* Greeting text above envelope */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-pink-400/80 text-sm tracking-widest mb-6"
        >
          ✿ hai, ini buat kamu ✿
        </motion.p>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Envelope */
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              onClick={handleOpen}
              className="cursor-pointer group"
            >
              <div className="relative w-72 h-44 sm:w-80 sm:h-48">
                {/* Envelope body */}
                <div className="absolute inset-0 bg-[#FFF5F7] rounded-2xl shadow-lg shadow-pink-100/50 border border-pink-100/60 transition-all group-hover:shadow-xl group-hover:shadow-pink-200/40 group-hover:-translate-y-1" />

                {/* Envelope flap */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-24 origin-top"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ rotateX: -15 }}
                >
                  <svg
                    viewBox="0 0 320 96"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M16 0 L160 80 L304 0 L304 0 Q320 0 320 16 L320 0 L0 0 L0 16 Q0 0 16 0Z"
                      fill="#FFE8ED"
                      stroke="#FBBFC7"
                      strokeWidth="0.5"
                    />
                  </svg>
                </motion.div>

                {/* Heart seal */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-12 h-12 rounded-full bg-pink-200/60 flex items-center justify-center shadow-sm">
                    <span className="text-pink-400 text-xl">💌</span>
                  </div>
                </motion.div>

                {/* Bottom fold lines */}
                <svg
                  viewBox="0 0 320 192"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 192 L160 100 L320 192"
                    fill="none"
                    stroke="#FBBFC7"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                </svg>
              </div>

              <motion.p
                className="text-center mt-4 text-pink-300 text-xs tracking-wider"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                tap to open ♥
              </motion.p>
            </motion.div>
          ) : (
            /* Letter content */
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full max-w-lg mx-auto"
            >
              {/* Letter paper */}
              <motion.div
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-pink-100/30 border border-pink-50 p-8 sm:p-10"
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Decorative top border */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

                {/* Corner decorations */}
                <span className="absolute top-3 left-4 text-pink-200/50 text-xs">
                  ✿
                </span>
                <span className="absolute top-3 right-4 text-pink-200/50 text-xs">
                  ✿
                </span>
                <span className="absolute bottom-3 left-4 text-pink-200/50 text-xs">
                  ❀
                </span>
                <span className="absolute bottom-3 right-4 text-pink-200/50 text-xs">
                  ❀
                </span>

                {/* Date */}
                <motion.p
                  className="text-right text-pink-300/70 text-xs mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  22 Februari 2026
                </motion.p>

                {/* Greeting */}
                <motion.h1
                  className="font-[family-name:var(--font-dancing)] text-3xl sm:text-4xl text-pink-400/90 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  Buat aul calon bidan terhebat poltekkes,
                </motion.h1>

                {/* Divider */}
                <motion.div
                  className="w-16 h-[1px] bg-pink-200/40 mb-6"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                />

                {/* Letter body */}
                <div className="space-y-4">
                  {[
                    "haii, selamat pagi, selamat puasa hari ke 5 juga aul. semoga hari ini semuanya dilancarin ya aul mulai dari keberangkatan ke kampusnya, praktiknya, sampai pulangnya nanti. Aul pasti bisa kok, semangat terus yaa! ",
                    "kalo hari kamu lagi berat, just remember kalo kamu itu kuat, kamu itu hebat, karena sudah sampai sejauh ini. it sounds bullshit tapi entah kenapa baru kali ini aku amazed pas tau ada orang pulang pergi dari cilebut ke jakarta buat kuliah, effort kamu buat belajar ga main main keren banget!",
                    "u can talk to me ya aul kalo emang kamu ngerasa ga kuat buat nahan sendirian, i know it's feel weird but i really mean it, aku bakal dengerin kok, aku ga janji bakal ngasih solusi atau jawaban yang tepat, but i'll always support u!",
                    "katanya minggu ini onlinenya cuma di hari kamis yaa aul? duh semangat yaa pas lagi puasa kaya gini harus desek desekan, tapi gapapa nanti terbayarkan jadi bidan paling hebat paling jago di poltekkes, aamiin!",
                  ].map((paragraph, i) => (
                    <motion.p
                      key={i}
                      className="text-gray-500/90 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 + i * 0.3, duration: 0.6 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Closing */}
                <motion.div
                  className="mt-8 text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 0.8 }}
                >
                  <p className="font-[family-name:var(--font-dancing)] text-2xl text-pink-400/80 mb-1">
                    dari orang keren,
                  </p>
                </motion.div>

                {/* Bottom decoration */}
                <motion.div
                  className="flex justify-center mt-8 gap-2 text-pink-200/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2 }}
                >
                  <span>✿</span>
                  <span>·</span>
                  <span>♥</span>
                  <span>·</span>
                  <span>✿</span>
                </motion.div>
              </motion.div>

              {/* Cute footer message */}
              <motion.p
                className="text-center mt-6 text-pink-300/50 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
              >
                made with a lot of ♥
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
