"use client";

import { motion } from "framer-motion";
import {
  FolderOpen,
  Layers3,
  BadgeCheck,
  CalendarDays,
} from "lucide-react";

const stats = [
  {
    value: "5+",
    label: "Projects",
    icon: FolderOpen,
  },
  {
    value: "15+",
    label: "Technologies",
    icon: Layers3,
  },
  {
    value: "2",
    label: "Certifications",
    icon: BadgeCheck,
  },
  {
    value: "1+",
    label: "Years Experience",
    icon: CalendarDays,
  },
];

export default function Statistics() {
  return (
    <section className="bg-[#030712] py-20 text-white sm:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-14">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's Connect
          </h2>

          <div className="mt-4 h-1 w-12 rounded-full theme-accent-bg"></div>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6 sm:p-8
                  text-center
                  transition-all
                  duration-300
                  theme-accent-hover-border
                  theme-accent-glow-hover
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    theme-accent-border
                    theme-accent-card-gradient
                    theme-accent-glow
                  "
                >
                  <Icon className="h-8 w-8 theme-accent-text-light" />
                </div>

                <h3 className="mt-7 text-5xl font-bold theme-accent-text sm:text-6xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-lg text-gray-300 sm:text-xl">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}