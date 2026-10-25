"use client";

import { BriefcaseBusiness, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "QCVerify Pvt Ltd",
    duration: "Jul 2025 – Present",
    description:
      "Developing enterprise web applications using .NET Core MVC, JavaScript and HTML while collaborating with cross-functional teams.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Data Science Intern",
    company: "Tecacs IT Group Pvt Ltd",
    duration: "",
    description:
      "Worked on data preprocessing, machine learning, Python and real-world analytics.",
    icon: Building2,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#030712] py-20 text-white sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">Experience</h2>

          <div className="mt-4 w-14 h-1 rounded-full theme-accent-bg"></div>
        </div>

        <div className="relative">
          {/* Vertical Timeline */}
          <div className="absolute left-2 top-8 h-[260px] w-[2px] theme-accent-bg-soft"></div>

          <div className="space-y-20">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-5 sm:gap-8"
                >
                  {/* Timeline Dot */}
                  <div
                    className="
                      absolute
                      left-0
                      top-8
                      w-4
                      h-4
                      rounded-full
                      theme-accent-bg
                      z-20
                    "
                    style={{ boxShadow: "0 0 20px rgba(var(--theme-accent-rgb), .9)" }}
                  ></div>

                  {/* Icon */}
                  <div
                    className="
                      ml-8 sm:ml-10
                      w-20
                      h-20
                      rounded-2xl
                      theme-accent-card-gradient
                      border
                      theme-accent-border
                      theme-accent-glow
                      flex
                      items-center
                      justify-center
                      shrink-0
                      z-10
                    "
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="pt-1 max-w-2xl">
                    <h3 className="text-2xl font-bold sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-base theme-accent-text-light font-semibold sm:text-lg">
                      {item.company}
                      {item.duration && (
                        <>
                          {" "}
                          • {item.duration}
                        </>
                      )}
                    </p>

                    <p className="mt-5 text-base text-gray-400 leading-8 sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}