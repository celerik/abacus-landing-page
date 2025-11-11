"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a1a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Abacus Promise
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg md:text-xl text-blue-100 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Thank you for exploring <span className="font-semibold text-white">Abacus</span> — where technology and
              precision redefine institutional loan management.
            </p>
            <p>
              Every feature you've seen reflects one vision: to give financial
              teams <span className="font-semibold text-white">clarity, control, and confidence</span> in every
              transaction.
            </p>
            <p>
              Abacus isn't just a system — it's a foundation for smarter
              operations, stronger compliance, and faster decisions.
            </p>
            <p className="text-2xl font-light text-white">
              Built for scale. Designed for performance. Trusted by
              professionals.
            </p>
          </motion.div>

          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-12">
              Abacus — because precision is power.
            </p>
          </motion.div>

          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Request a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
