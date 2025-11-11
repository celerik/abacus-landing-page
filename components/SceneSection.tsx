"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
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
  const iconClass = "w-8 h-8 text-blue-600";
  
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
      className="py-20 md:py-32 px-6 bg-background"
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
              className={`relative ${isReversed ? "lg:col-start-2" : ""}`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority={scene.id === 0}
                />
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
            <div className={`inline-flex p-3 bg-blue-50 rounded-xl ${!scene.image ? "mx-auto" : ""}`}>
              {getIconForCategory(scene.category)}
            </div>

            {/* Scene number and title */}
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-2">
                Scene {scene.id}
              </p>
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
    </motion.section>
  );
}
