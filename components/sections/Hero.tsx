"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import {
  FiArrowRight,
  FiMail,
  FiGlobe,
} from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050A16]">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1f4fff20,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0ea5e920,transparent_40%)]" />

      {/* Blur */}
      <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-24 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-16">


        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >
            <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-2xl text-blue-400">
              👋 Hello, I'm
            </div>

            <h1 className="mt-8 font-extrabold leading-none text-white text-6xl lg:text-7xl">
              Bibin{" "}
              <span className="text-blue-500">
                Biju
              </span>
            </h1>

            <h2 className="mt-8 text-2xl font-medium text-gray-300">
              Junior Software Engineer
            </h2>

            <p className="mt-8 text-lg leading-9 max-w-lg text-gray-400">
              Building modern web applications using .NET Core MVC,
              React, Next.js, JavaScript, and AI-powered
              solutions. Passionate about creating scalable and
              beautiful software.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-10 py-5 text-lg font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,.4)] transition hover:scale-105"
              >
                View Projects

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="/Resume.pdf"
                download="Bibin_Biju_Resume.pdf"
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-10 py-5 text-lg text-white backdrop-blur hover:border-blue-500"
              >
                <FaDownload />
                Download Resume
              </a>

            </div>

            {/* Social */}

            <div className="mt-12 flex gap-6">

              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/bibinbiju07",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://linkedin.com",
                },
                {
                  icon: <FiGlobe />,
                  link: "#",
                },
                {
                  icon: <FiMail />,
                  link: "mailto:bibinbiju9676@gmail.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition hover:border-blue-500 hover:text-blue-400"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >
            <div className="relative h-[500px] w-[500px]">

              {/* Glow */}

              <motion.div
                className="absolute inset-[60px] rounded-full border border-blue-500 shadow-[0_0_80px_rgba(37,99,235,.8)]" animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-blue-500/15"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Random Galaxy Stars */}

              <div className="absolute inset-0">

                {/* Orbiting dots */}
                {[
                  { angle: 20, duration: 20 },
                  { angle: 200, duration: 20 },
                ].map((dot, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: dot.duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      transform: `rotate(${dot.angle}deg)`,
                    }}
                  >
                    <div className="absolute left-1/2 top-[24px] -translate-x-1/2">
                      <div className="h-4 w-4 rounded-full bg-blue-400 shadow-[0_0_18px_#3b82f6]" />
                    </div>
                  </motion.div>
                ))}

                {/* Twinkling Stars */}
                {[
                  { left: "10%", top: "28%", size: 6 },
                  { left: "24%", top: "14%", size: 10 },
                  { left: "76%", top: "10%", size: 7 },
                  { left: "92%", top: "42%", size: 9 },
                  { left: "84%", top: "78%", size: 7 },
                  { left: "66%", top: "92%", size: 6 },
                  { left: "34%", top: "94%", size: 5 },
                  { left: "6%", top: "70%", size: 8 },
                ].map((star, i) => (
                  <motion.div
                    key={`star-${i}`}
                    className="absolute rounded-full bg-blue-400"
                    style={{
                      left: star.left,
                      top: star.top,
                      width: star.size,
                      height: star.size,
                      boxShadow: "0 0 12px #3b82f6",
                    }}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [0.8, 1.3, 0.8],
                      x: [-2, 2, -2],
                      y: [-3, 3, -3],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  />
                ))}

              </div>

              {/* Avatar */}
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
              <motion.div
                className="absolute left-1/2 top-1/2 flex h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B1220]"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/images/avatar.png"
                  alt="avatar"
                  className="w-[250px] object-contain"
                />

              </motion.div>

            </div>
          </motion.div>

        </div>
      </div >
    </section >
  );
}