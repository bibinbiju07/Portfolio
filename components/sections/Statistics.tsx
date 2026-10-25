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
    <section className="bg-[#030712] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-14">
          <h2 className="text-5xl font-bold">
            Let's Connect
          </h2>

          <div className="mt-4 h-1 w-12 rounded-full bg-blue-500"></div>
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
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:border-blue-500/60
                  hover:shadow-[0_0_30px_rgba(37,99,235,.18)]
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
                    border-blue-600/40
                    bg-gradient-to-br
                    from-blue-700
                    to-blue-950
                    shadow-[0_0_30px_rgba(37,99,235,.35)]
                  "
                >
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>

                <h3 className="mt-7 text-6xl font-bold text-blue-500">
                  {item.value}
                </h3>

                <p className="mt-3 text-xl text-gray-300">
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