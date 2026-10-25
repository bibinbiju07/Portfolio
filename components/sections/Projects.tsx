"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardList,
  Flame,
  Film,
  Building2,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Confidential Freight Quotation Platform",
    description:
      "Web application for secure and real-time freight quotations.",
    icon: ShieldCheck,
  },
  {
    title: "Internal Auditing Tool",
    description:
      "Tool to streamline internal audit processes and reporting.",
    icon: ClipboardList,
  },
  {
    title: "Fire Detection System",
    description:
      "AI-powered fire detection using computer vision.",
    icon: Flame,
  },
  {
    title: "Movie Recommendation System",
    description:
      "ML-based movie recommender with user preferences.",
    icon: Film,
  },
  {
    title: "Real Estate Management System",
    description:
      "Platform to manage properties, clients and transactions.",
    icon: Building2,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#030712] py-20 text-white sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-14">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <div className="mt-4 w-14 h-1 rounded-full theme-accent-bg"></div>
        </div>

        {/* Grid */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6
                  transition-all
                  duration-300
                  theme-accent-hover-border
                  theme-accent-glow-hover
                "
              >
                <div className="flex items-start gap-5">

                  {/* Icon */}

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      theme-accent-card-gradient
                      border
                      theme-accent-border
                      flex
                      items-center
                      justify-center
                      theme-accent-glow
                      shrink-0
                    "
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}

                  <div>

                    <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-gray-400 leading-7">
                      {project.description}
                    </p>

                    <button
                      className="
                        mt-5
                        theme-accent-text
                        group-hover:translate-x-2
                        transition-transform
                      "
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>

                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}