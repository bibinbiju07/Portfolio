"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Menu, X } from "lucide-react";

const LINKS = [
  { id: "#about", label: "About" },
  { id: "#skills", label: "Skills" },
  { id: "#projects", label: "Projects" },
  { id: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = "#about";

      LINKS.forEach((link) => {
        const section = document.querySelector(link.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = link.id;
        }
      });

      setActive(current);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    setOpen(false);

    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);

    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 sm:top-6">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`w-full flex items-center justify-between
        rounded-full
        border border-white/10
        ${scrolled
              ? "bg-[#0B1120]/90 shadow-2xl backdrop-blur-2xl"
              : "bg-[#0B1120]/75 backdrop-blur-xl"
            }
        h-20
        px-5 sm:px-12
        transition-all
        duration-300`}
        >
          <div className="w-full flex items-center">
            {/* Logo */}

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              Bibin<span className="text-blue-500">.</span>
            </button>

            {/* Desktop */}

            <nav className="hidden md:flex items-center gap-12 ml-auto">
              {LINKS.map((link) => {
                const isActive = active === link.id;

                return (
                  <div
                    key={link.id}
                    className="relative flex flex-col items-center"
                  >
                    <a
                      href={link.id}
                      onClick={(e) =>
                        handleNavClick(e, link.id)
                      }
                      className={`text-lg transition duration-300 ${isActive
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-white"
                        }`}
                    >
                      {link.label}
                    </a>

                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-3 h-[3px] w-14 rounded-full bg-blue-500"
                      />
                    )}
                  </div>
                );
              })}

              <button
                onClick={toggleTheme}
                className="ml-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-blue-500 hover:bg-white/10"
              >
                <Moon className="h-6 w-6" />
              </button>
            </nav>

            {/* Mobile Button */}

            <button
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white md:hidden"
            >
              {open ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="absolute left-6 right-6 top-full mt-3 rounded-3xl border border-white/10 bg-[#0B1120]/95 shadow-2xl backdrop-blur-2xl md:hidden"
              >
                <div className="space-y-5 px-6 py-6">
                  {LINKS.map((link) => (
                    <a
                      key={link.id}
                      href={link.id}
                      onClick={(e) =>
                        handleNavClick(e, link.id)
                      }
                      className="block text-gray-300 hover:text-blue-400"
                    >
                      {link.label}
                    </a>
                  ))}

                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-white"
                  >
                    <Moon className="h-5 w-5" />
                    Theme
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}