"use client";

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050B18] py-20 sm:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full theme-accent-bg-soft blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full theme-accent-bg-soft blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <p className="text-sm font-bold uppercase tracking-[3px] theme-accent-text">
              Get To Know Me
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              About Me
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full theme-accent-bg" />

            <div className="mt-8 space-y-6 text-base leading-8 text-gray-400 sm:mt-10 sm:space-y-8 sm:text-lg sm:leading-9">

              <p>
                I am a <span className="text-white">Junior Software Engineer</span> currently
                working at <span className="text-white">QCVerify Pvt Ltd</span> with
                experience in .NET Core MVC, React, Next.js,
                JavaScript and backend development.
              </p>

              <p>
                I enjoy building scalable applications and solving
                real-world problems through clean architecture and
                modern technologies.
              </p>

              <p>
                I also have experience in Artificial Intelligence,
                Machine Learning and Computer Vision using
                YOLOv5.
              </p>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-10 rounded-full theme-accent-bg-soft blur-3xl" />

              {/* Card */}

              <div className="relative flex h-[82vw] max-h-[340px] w-[82vw] max-w-[340px] items-center justify-center rounded-[32px] border border-white/10 bg-gradient-to-b from-[#111827]/90 to-[#0B1220]/90 backdrop-blur-xl theme-accent-glow-soft">

                {/* Inner Icon Card */}

                <motion.div
                  animate={{
                    y: [-6, 6, -6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-3xl border theme-accent-border theme-accent-card-gradient p-8 theme-accent-glow"
                >

                  <FiUser
                    className="text-white"
                    size={80}
                  />

                  <div className="mt-6 space-y-3">

                    <div className="h-2 w-20 rounded-full bg-white/80" />

                    <div className="h-2 w-16 rounded-full bg-white/50" />

                    <div className="h-2 w-12 rounded-full bg-white/30" />

                  </div>

                </motion.div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}