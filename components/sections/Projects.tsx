"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { projects, type ProjectCategory, type PortfolioProject } from "@/lib/portfolio-data";

const FILTERS: Array<"All" | ProjectCategory> = [
  "All",
  "Web Development",
  "Machine Learning",
  "Backend",
];

function ProjectPreview({ project }: { project: PortfolioProject }) {
  const Icon = project.icon;

  return (
    <div
      aria-hidden="true"
      className="project-preview relative flex h-44 items-center justify-center overflow-hidden border-b border-white/10 sm:h-48"
    >
      <div className="project-preview-grid absolute inset-0 opacity-40" />
      <div className="absolute left-[15%] top-[20%] h-20 w-20 rounded-full theme-accent-bg-soft blur-2xl" />
      <div className="absolute bottom-[12%] right-[12%] h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
      <div className="project-preview-window relative w-[68%] rounded-2xl border border-white/10 bg-[#0b1120]/80 p-4 shadow-xl transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-auto h-2 w-12 rounded-full bg-white/10" />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl theme-accent-card-gradient theme-accent-text-light">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-white/30" />
            <div className="h-2 w-1/2 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-8 rounded-lg bg-white/5" />
          <div className="h-8 rounded-lg bg-white/5" />
          <div className="h-8 rounded-lg bg-white/5" />
        </div>
      </div>
    </div>
  );
}

function ProjectDetails({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  const Icon = project.icon;

  return (
    <DialogPrimitive.Root open onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <DialogPrimitive.Popup className="fixed left-1/2 top-1/2 z-[71] max-h-[88dvh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-white/10 bg-[#0B1120] p-6 text-white shadow-2xl outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 sm:p-8">
          <div className="flex items-start gap-4 pr-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl theme-accent-card-gradient theme-accent-text-light">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <DialogPrimitive.Title className="text-2xl font-bold leading-tight sm:text-3xl">
                {project.title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-2 text-sm text-gray-400">
                {project.category}
              </DialogPrimitive.Description>
            </div>
          </div>
          <DialogPrimitive.Close
            render={
              <button
                type="button"
                aria-label="Close project details"
                className="absolute right-4 top-4 rounded-xl border border-white/10 p-2 text-gray-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              />
            }
          >
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>

          <div className="mt-7 space-y-6">
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-widest theme-accent-text-light">
                Overview
              </h3>
              <p className="mt-2 leading-7 text-gray-300">{project.overview}</p>
            </section>
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-widest theme-accent-text-light">
                Role and contributions
              </h3>
              <p className="mt-2 leading-7 text-gray-300">{project.role}</p>
            </section>
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-widest theme-accent-text-light">
                Technologies
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-widest theme-accent-text-light">
                Challenges and solutions
              </h3>
              <p className="mt-2 leading-7 text-gray-300">{project.challenges}</p>
            </section>
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-widest theme-accent-text-light">
                Results and learnings
              </h3>
              <p className="mt-2 leading-7 text-gray-300">{project.results}</p>
            </section>
            {project.confidential && (
              <p className="flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-gray-400">
                <ExternalLink className="h-4 w-4 shrink-0" />
                Confidential project — no demo or source link is available.
              </p>
            )}
          </div>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const projectTriggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const visibleProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const openProject = (event: Event) => {
      const projectId = (event as CustomEvent<string>).detail;
      const project = projects.find((item) => item.id === projectId);
      if (!project) return;

      projectTriggerRef.current = null;
      setFilter(project.category);
      setSelectedProject(project);
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("portfolio:open-project", openProject);
    return () => window.removeEventListener("portfolio:open-project", openProject);
  }, []);

  const closeProjectDetails = () => {
    setSelectedProject(null);
    requestAnimationFrame(() => projectTriggerRef.current?.focus());
  };

  return (
    <section id="projects" className="bg-[#030712] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-7 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] theme-accent-text-light">
              Selected work
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl">Featured Projects</h2>
            <div className="mt-4 h-1 w-14 rounded-full theme-accent-bg" />
          </div>
          <div aria-label="Filter projects" className="flex flex-wrap gap-2" role="group">
            {FILTERS.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
                className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                  filter === category
                    ? "theme-accent-border theme-accent-bg-soft theme-accent-text-light"
                    : "border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.id}
                  id={`project-${project.id}`}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                  transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : index * 0.04 }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors theme-accent-hover-border theme-accent-glow-hover"
                >
                  <ProjectPreview project={project} />
                  <div className="p-5 sm:p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider theme-accent-text-light">
                      <Icon className="h-4 w-4" />
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
                    <p className="mt-3 min-h-14 leading-7 text-gray-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-gray-300"
                        >
                          {technology}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-gray-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      ref={projectTriggerRef}
                      onClick={(event) => {
                        projectTriggerRef.current = event.currentTarget;
                        setSelectedProject(project);
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-lg text-sm font-semibold theme-accent-text-light transition hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                    >
                      View Details
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )}
    </section>
  );
}
