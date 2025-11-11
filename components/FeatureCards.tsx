"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, FileCheck, TrendingUp, Settings, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Complete visibility into every transaction, from origination to settlement. Real-time data and audit trails ensure nothing is hidden.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description:
      "Automated calculations and validations eliminate manual errors. Every accrual, payment, and reconciliation is precise to the cent.",
  },
  {
    icon: FileCheck,
    title: "Auditability",
    description:
      "Full audit trails track every action and modification. Complete compliance with regulatory requirements and internal controls.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Enterprise-grade security protects your sensitive financial data. Role-based access controls and encryption ensure data integrity and confidentiality.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Built to handle portfolios of any size. From dozens to thousands of loans, Abacus scales seamlessly with your growth.",
  },
  {
    icon: Settings,
    title: "Control",
    description:
      "Granular permissions and workflows give teams complete control. Customize processes to match your operational standards.",
  },
];

export default function FeatureCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for Excellence
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Six pillars that define Abacus — precision, reliability, and
            performance in every feature.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative bg-dark-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-blue-900/30 ${
                  index === features.length - 1 && features.length % 3 !== 0
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-950/40 to-purple-950/40 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-800/30">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
