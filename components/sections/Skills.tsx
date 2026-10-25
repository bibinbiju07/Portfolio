"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects, skillGroups, type PortfolioSkill } from "@/lib/portfolio-data";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<PortfolioSkill | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="bg-[#030712] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.5em] theme-accent-text-light">
            What I know
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Skills</h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build modern applications. Select a skill to see more.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition theme-accent-hover-border sm:p-8"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full theme-accent-bg-subtle blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl theme-accent-bg-soft theme-accent-text-light">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">{group.title}</h3>
                      <div className="mt-2 h-1 w-16 rounded-full theme-accent-bg" />
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <button
                        key={skill.name}
                        type="button"
                        aria-pressed={selectedSkill?.name === skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                          selectedSkill?.name === skill.name
                            ? "theme-accent-border theme-accent-bg-soft theme-accent-text-light"
                            : "border-white/10 bg-slate-900/80 text-gray-200 hover:bg-white/10"
                        }`}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selectedSkill && (
            <motion.aside
              key={selectedSkill.name}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
              aria-live="polite"
              className="mt-6 rounded-2xl border theme-accent-border-soft bg-white/[0.03] p-5 sm:p-6"
            >
              <h3 className="font-semibold theme-accent-text-light">{selectedSkill.name}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{selectedSkill.description}</p>
              {selectedSkill.projectIds.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Related projects
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {selectedSkill.projectIds.map((projectId) => {
                      const project = projects.find((item) => item.id === projectId);
                      if (!project) return null;

                      return (
                        <a
                          key={project.id}
                          href="#projects"
                          onClick={() => {
                            window.dispatchEvent(
                              new CustomEvent("portfolio:open-project", {
                                detail: project.id,
                              }),
                            );
                          }}
                          className="inline-flex items-center gap-1 text-sm theme-accent-text-light transition hover:gap-2"
                        >
                          {project.title}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
