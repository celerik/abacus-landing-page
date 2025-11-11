"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-blue-900/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <Image
              src="/Celerik-logo.png"
              alt="Celerik"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <div className="hidden md:block h-6 w-px bg-blue-800/50" />
            <p className="hidden md:block text-sm text-slate-400 font-light">
              Building the digital future
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <a
              href="#scenes"
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
            >
              Request Demo
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
