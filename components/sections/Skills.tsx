import {
  Code2,
  Server,
  Database,
  Toolbox,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [".NET Core MVC", "Python", "Java", "Flask"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Toolbox,
    skills: ["Git", "GitHub", "OpenCV", "YOLOv5", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#030712] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.5em] text-blue-400 mb-3">What I know</p>
          <h2 className="text-5xl font-bold">Skills</h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build modern, scalable, and reliable applications.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:border-blue-500/30"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                    <div className="mt-2 h-1 w-16 rounded-full bg-blue-500" />
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center justify-center rounded-full bg-slate-900/80 px-4 py-2 text-sm text-gray-200 transition hover:bg-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
