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
      className="min-h-screen bg-[#08111f] flex items-center justify-center text-white"
    >
      <div className="text-center">

        {/* Small Heading */}
        <p className="uppercase tracking-[3px] text-blue-500 text-sm font-semibold">
          Get In Touch
        </p>

        {/* Main Heading */}
        <h2 className="text-5xl font-bold mt-2">
          Contact
        </h2>

        {/* Blue Line */}
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded mt-5 mb-10"></div>

        {/* Contact Details */}
        <div className="mt-10 w-fit mx-auto space-y-6">
          <div className="flex items-center">
            <FiMail className="text-3xl w-8 mr-6 flex-shrink-0" />
            <span className="text-xl text-gray-300">
              bibinbiju9676@gmail.com
            </span>
          </div>

          <div className="flex items-center">
            <FiPhone className="text-3xl w-8 mr-6 flex-shrink-0" />
            <span className="text-xl text-gray-300">
              +91 8921979676
            </span>
          </div>

          <div className="flex items-center">
            <FiMapPin className="text-3xl w-8 mr-6 flex-shrink-0" />
            <span className="text-xl text-gray-300">
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
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:bibinbiju9676@gmail.com"
            className="hover:text-blue-500 transition"
          >
            <FiMail />
          </a>

        </div>

      </div>
    </section>
  );
}