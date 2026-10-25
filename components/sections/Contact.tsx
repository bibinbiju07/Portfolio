import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#08111f] flex items-center justify-center px-6 py-24 text-white sm:px-0 sm:py-0"
    >
      <div className="w-full max-w-2xl text-center">

        {/* Small Heading */}
        <p className="uppercase tracking-[3px] theme-accent-text text-sm font-semibold">
          Get In Touch
        </p>

        {/* Main Heading */}
        <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
          Contact
        </h2>

        {/* Blue Line */}
        <div className="w-16 h-1 theme-accent-bg mx-auto rounded mt-5 mb-10"></div>

        {/* Contact Details */}
        <div className="mx-auto mt-10 w-full max-w-xl space-y-6 text-left sm:w-fit">
          <div className="flex min-w-0 items-center">
            <FiMail className="mr-4 w-8 flex-shrink-0 text-2xl sm:mr-6 sm:text-3xl" />
            <span className="break-all text-base text-gray-300 sm:text-xl">
              bibinbiju9676@gmail.com
            </span>
          </div>

          <div className="flex min-w-0 items-center">
            <FiPhone className="mr-4 w-8 flex-shrink-0 text-2xl sm:mr-6 sm:text-3xl" />
            <span className="text-base text-gray-300 sm:text-xl">
              +91 8921979676
            </span>
          </div>

          <div className="flex min-w-0 items-center">
            <FiMapPin className="mr-4 w-8 flex-shrink-0 text-2xl sm:mr-6 sm:text-3xl" />
            <span className="text-base text-gray-300 sm:text-xl">
              Adimali, Idukki, Kerala, India
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-10 mt-12 text-4xl">

          <a
            href="https://github.com/bibinbiju07"
            target="_blank"
            rel="noreferrer"
            className="theme-accent-hover-text transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="theme-accent-hover-text transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:bibinbiju9676@gmail.com"
            className="theme-accent-hover-text transition"
          >
            <FiMail />
          </a>

        </div>

      </div>
    </section>
  );
}