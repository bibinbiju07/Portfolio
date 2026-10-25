"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const certificates = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
  },
  {
    title: "TCS CodeVita",
    issuer: "Rank 6704",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-[#030712] pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-14">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Certifications
          </h2>

          <div className="mt-4 h-1 w-12 rounded-full theme-accent-bg"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
                flex
                items-center
                gap-6
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-5 sm:p-8
                transition-all
                duration-300
                theme-accent-hover-border
                theme-accent-glow-hover
              "
            >
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  theme-accent-border
                  theme-accent-card-gradient
                  theme-accent-glow
                  shrink-0
                "
              >
                <ShieldCheck className="h-10 w-10 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold leading-tight sm:text-3xl">
                  {certificate.title}
                </h3>

                <p className="mt-4 text-base text-gray-400 sm:text-xl">
                  {certificate.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}