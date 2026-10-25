"use client";

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050B18] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <p className="text-sm font-bold uppercase tracking-[3px] text-blue-500">
              Get To Know Me
            </p>

            <h2 className="mt-3 text-5xl font-bold text-white">
              About Me
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-blue-500" />

            <div className="mt-10 space-y-8 text-lg leading-9 text-gray-400">

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

              <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-3xl" />

              {/* Card */}

              <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-[32px] border border-white/10 bg-gradient-to-b from-[#111827]/90 to-[#0B1220]/90 backdrop-blur-xl shadow-[0_20px_80px_rgba(37,99,235,.15)]">

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
                  className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-600 to-[#1F2A44] p-8 shadow-[0_0_40px_rgba(59,130,246,.35)]"
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