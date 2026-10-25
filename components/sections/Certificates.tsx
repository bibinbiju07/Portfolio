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
    <section className="bg-[#030712] pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-14">
          <h2 className="text-5xl font-bold">
            Certifications
          </h2>

          <div className="mt-4 h-1 w-12 rounded-full bg-blue-500"></div>
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
                p-8
                transition-all
                duration-300
                hover:border-blue-500/60
                hover:shadow-[0_0_30px_rgba(37,99,235,.18)]
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
                  border-blue-600/40
                  bg-gradient-to-br
                  from-blue-700
                  to-blue-950
                  shadow-[0_0_30px_rgba(37,99,235,.35)]
                  shrink-0
                "
              >
                <ShieldCheck className="h-10 w-10 text-white" />
              </div>

              <div>
                <h3 className="text-3xl font-bold leading-tight">
                  {certificate.title}
                </h3>

                <p className="mt-4 text-xl text-gray-400">
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