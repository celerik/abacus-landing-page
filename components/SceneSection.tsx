"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import {
  Monitor,
  Search,
  Globe,
  Settings,
  Edit3,
  FileText,
  BarChart3,
  Database,
  Layers,
  ShieldCheck,
  Folder,
  CheckCircle,
  Maximize2,
  X,
} from "lucide-react";

interface Scene {
  id: number;
  title: string;
  narration: string;
  image: string | null;
  category: string;
}

interface SceneSectionProps {
  scene: Scene;
  isReversed: boolean;
}

const getIconForCategory = (category: string) => {
  const iconClass = "w-8 h-8 text-blue-400";
  
  switch (category) {
    case "overview":
      return <Monitor className={iconClass} />;
    case "setup":
      return <Settings className={iconClass} />;
    case "form":
      return <Edit3 className={iconClass} />;
    case "summary":
      return <BarChart3 className={iconClass} />;
    case "compliance":
      return <ShieldCheck className={iconClass} />;
    case "closing":
      return <CheckCircle className={iconClass} />;
    default:
      return <FileText className={iconClass} />;
  }
};

export default function SceneSection({ scene, isReversed }: SceneSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Block scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: isReversed ? 40 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isReversed ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id={`scene-${scene.id}`}
      className="py-20 md:py-32 px-6 bg-gradient-to-br from-black via-blue-950 to-black"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            isReversed ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image Section */}
          {scene.image && (
            <motion.div
              variants={imageVariants}
              className={`relative group ${isReversed ? "lg:col-start-2" : ""}`}
            >
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src={scene.image}
                  alt={scene.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority={scene.id === 0}
                />
                {/* Expand indicator overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="absolute top-4 right-4 bg-blue-600 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90 shadow-lg">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-600 px-4 py-2 rounded-lg">
                    Click to enlarge
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl opacity-30 blur-2xl" />
            </motion.div>
          )}

          {/* Text Section */}
          <motion.div
            variants={textVariants}
            className={`space-y-6 ${isReversed ? "lg:col-start-1 lg:row-start-1" : ""} ${
              !scene.image ? "lg:col-span-2 max-w-4xl mx-auto text-center" : ""
            }`}
          >
            {/* Icon */}
            <div className={`inline-flex p-3 bg-blue-950/40 rounded-xl border border-blue-800/30 ${!scene.image ? "mx-auto" : ""}`}>
              {getIconForCategory(scene.category)}
            </div>

            {/* Scene title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {scene.title}
              </h2>
            </div>

            {/* Narration */}
            <div className="prose prose-lg prose-slate max-w-none prose-p:text-secondary prose-p:leading-relaxed prose-strong:text-foreground prose-strong:font-semibold">
              <ReactMarkdown>{scene.narration}</ReactMarkdown>
            </div>

            {/* Decorative line */}
            <div className="pt-6">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {isModalOpen && scene.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 group"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  width={2400}
                  height={1600}
                  className="w-full h-auto"
                  quality={100}
                />
              </div>
              {/* Image title */}
              <div className="mt-4 text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {scene.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Click outside or press ESC to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
