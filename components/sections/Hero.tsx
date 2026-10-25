"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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

const entrance = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const section = heroRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!section || !finePointer.matches || reducedMotion.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect();
      section.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
      section.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
    };

    section.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => section.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <section ref={heroRef} className="hero-section relative min-h-screen overflow-hidden bg-[#050A16]">

      {/* Background */}
      <div className="absolute inset-0 theme-hero-background" />
      <div aria-hidden="true" className="hero-grid absolute inset-0 pointer-events-none" />
      <div aria-hidden="true" className="hero-pointer-glow absolute inset-0 pointer-events-none" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-28 hidden h-64 w-64 rounded-full theme-accent-bg-soft blur-[100px] md:block"
        animate={reduceMotion ? undefined : { x: [0, 22, 0], y: [0, -16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-[8%] hidden h-72 w-72 rounded-full bg-violet-500/10 blur-[110px] md:block"
        animate={reduceMotion ? undefined : { x: [0, -18, 0], y: [0, 14, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-16 sm:pt-36">


        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}
            className="min-w-0"
          >
            <motion.div variants={entrance} className="inline-flex items-center gap-3 rounded-2xl border theme-accent-border-soft theme-accent-bg-soft px-5 py-3 text-xl theme-accent-text-light sm:px-6 sm:text-2xl">
              👋 Hello, I&apos;m
            </motion.div>

            <motion.h1 variants={entrance} className="mt-8 text-5xl font-extrabold leading-none text-white sm:text-6xl lg:text-7xl">
              Bibin{" "}
              <span className="theme-accent-text">
                Biju
              </span>
            </motion.h1>

            <motion.h2 variants={entrance} className="mt-6 text-xl font-medium text-gray-300 sm:mt-8 sm:text-2xl">
              Junior Software Engineer
            </motion.h2>

            <motion.p variants={entrance} className="mt-6 max-w-lg text-base leading-8 text-gray-400 sm:mt-8 sm:text-lg sm:leading-9">
              Building modern web applications using .NET Core MVC,
              React, Next.js, JavaScript, and AI-powered
              solutions. Passionate about creating scalable and
              beautiful software.
            </motion.p>

            {/* Buttons */}

            <motion.div variants={entrance} className="mt-10 flex flex-wrap gap-4 sm:mt-12 sm:gap-5">

              <a
                href="#projects"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl theme-accent-gradient px-6 py-4 text-base font-semibold text-white theme-accent-button-shadow transition hover:scale-105 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                View Projects

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="/Resume.pdf"
                download="Bibin_Biju_Resume.pdf"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base text-white backdrop-blur theme-accent-hover-border sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                <FaDownload />
                Download Resume
              </a>

            </motion.div>

            {/* Social */}

            <motion.div variants={entrance} className="mt-10 flex gap-4 sm:mt-12 sm:gap-6">

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
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-white transition theme-accent-hover-border theme-accent-hover-text sm:h-16 sm:w-16 sm:text-2xl"
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.25 }}
            className="flex min-w-0 justify-center"
          >
            <div className="relative aspect-square w-full max-w-[500px]">

              {/* Glow */}

              <motion.div
                className="absolute inset-[60px] rounded-full border theme-accent-border theme-accent-glow-strong"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border theme-accent-border-soft"
                animate={reduceMotion ? undefined : { rotate: -360 }}
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
                  { angle: 20, duration: 28 },
                  { angle: 200, duration: 28 },
                ].map((dot, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    animate={reduceMotion ? undefined : { rotate: 360 }}
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
                      <div className="h-4 w-4 rounded-full theme-accent-bg" style={{ boxShadow: "0 0 18px var(--theme-accent)" }} />
                    </div>
                  </motion.div>
                ))}

                {/* Twinkling Stars */}
                {[
                  { left: "10%", top: "28%", size: 6 },
                  { left: "24%", top: "14%", size: 10 },
                  { left: "76%", top: "10%", size: 7 },
                  { left: "92%", top: "42%", size: 9 },
                ].map((star, i) => (
                  <motion.div
                    key={`star-${i}`}
                    className="absolute rounded-full theme-accent-bg"
                    style={{
                      left: star.left,
                      top: star.top,
                      width: star.size,
                      height: star.size,
                      boxShadow: "0 0 12px var(--theme-accent)",
                    }}
                    animate={reduceMotion ? undefined : {
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
              <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full theme-accent-bg-soft blur-3xl" />
              <motion.div
                className="theme-avatar-backdrop absolute left-1/2 top-1/2 flex h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
                animate={reduceMotion ? undefined : {
                  y: [-10, 10, -10],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/avatar.png"
                  alt="Illustrated portrait of Bibin working at a laptop"
                  width={512}
                  height={512}
                  className="w-[96%] object-contain"
                  priority
                />

              </motion.div>

            </div>
          </motion.div>

        </div>
      </div >
    </section >
  );
}