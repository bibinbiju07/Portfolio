"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Menu, Moon, Palette, RotateCw, Sun, X } from "lucide-react";

const THEMES = [
  { id: "blue", label: "Blue", color: "#3b82f6" },
  { id: "green", label: "Green", color: "#22c55e" },
  { id: "red", label: "Red", color: "#ef4444" },
  { id: "purple", label: "Purple", color: "#a855f7" },
  { id: "orange", label: "Orange", color: "#f97316" },
  { id: "cyan", label: "Cyan", color: "#06b6d4" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

function isThemeId(value: string | null): value is ThemeId {
  return THEMES.some((theme) => theme.id === value);
}

const LINKS = [
  { id: "#about", label: "About" },
  { id: "#skills", label: "Skills" },
  { id: "#projects", label: "Projects" },
  { id: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>("blue");
  const [autoRotate, setAutoRotate] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const savedAutoRotate = window.localStorage.getItem("portfolio-auto-rotate");
    const savedMode = window.localStorage.getItem("portfolio-mode");

    if (isThemeId(savedTheme)) {
      setSelectedTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }

    setAutoRotate(savedAutoRotate === "true");
    const useLightMode = savedMode === "light";
    setLightMode(useLightMode);
    document.documentElement.dataset.mode = useLightMode ? "light" : "dark";
  }, []);

  useEffect(() => {
    if (!autoRotate) return;

    const intervalId = window.setInterval(() => {
      setSelectedTheme((currentTheme) => {
        const currentIndex = THEMES.findIndex((theme) => theme.id === currentTheme);
        const nextTheme = THEMES[(currentIndex + 1) % THEMES.length];
        document.documentElement.dataset.theme = nextTheme.id;
        window.localStorage.setItem("portfolio-theme", nextTheme.id);
        return nextTheme.id;
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [autoRotate]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = "#about";

      LINKS.forEach((link) => {
        const section = document.querySelector(link.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120) {
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

  const selectTheme = (theme: ThemeId) => {
    setSelectedTheme(theme);
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
    setThemePickerOpen(false);
  };

  const toggleAutoRotate = () => {
    setAutoRotate((enabled) => {
      const nextEnabled = !enabled;
      window.localStorage.setItem("portfolio-auto-rotate", String(nextEnabled));
      return nextEnabled;
    });
  };

  const toggleMode = () => {
    setLightMode((isLight) => {
      const nextLightMode = !isLight;
      const nextMode = nextLightMode ? "light" : "dark";
      document.documentElement.dataset.mode = nextMode;
      window.localStorage.setItem("portfolio-mode", nextMode);
      return nextLightMode;
    });
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
          <div className="flex w-full items-center justify-between">
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
              Bibin<span className="theme-accent-text">.</span>
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
                          ? "theme-accent-text-light"
                          : "text-gray-300 hover:text-white"
                        }`}
                    >
                      {link.label}
                    </a>

                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-3 h-[3px] w-14 rounded-full theme-accent-bg"
                      />
                    )}
                  </div>
                );
              })}

              <div className="relative ml-4">
                <button
                  onClick={() => setThemePickerOpen(!themePickerOpen)}
                  aria-label="Choose accent theme"
                  aria-expanded={themePickerOpen}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition theme-accent-hover-border hover:bg-white/10"
                >
                  <Palette className="h-6 w-6" />
                </button>
                <AnimatePresence>
                  {themePickerOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute right-0 top-full mt-3 w-48 rounded-2xl border border-white/10 bg-[#0B1120]/95 p-2 shadow-2xl backdrop-blur-2xl"
                    >
                      {THEMES.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => selectTheme(theme.id)}
                          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-gray-200 transition hover:bg-white/5"
                        >
                          <span
                            className="h-4 w-4 rounded-full"
                            style={{ backgroundColor: theme.color }}
                          />
                          <span className="flex-1">{theme.label}</span>
                          {!autoRotate && selectedTheme === theme.id && (
                            <Check className="h-4 w-4 theme-accent-text" />
                          )}
                        </button>
                      ))}
                      <div className="my-1 border-t border-white/10" />
                      <button
                        onClick={toggleAutoRotate}
                        aria-pressed={autoRotate}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-gray-200 transition hover:bg-white/5"
                      >
                        <RotateCw className={`h-4 w-4 ${autoRotate ? "theme-accent-text" : ""}`} />
                        <span className="flex-1">Auto rotate</span>
                        <span
                          className={`h-2 w-2 rounded-full ${autoRotate ? "theme-accent-bg" : "bg-gray-500"}`}
                        />
                      </button>
                      <button
                        onClick={toggleMode}
                        aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}
                        aria-pressed={lightMode}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-gray-200 transition hover:bg-white/5"
                      >
                        {lightMode ? <Sun className="h-4 w-4 theme-accent-text" /> : <Moon className="h-4 w-4" />}
                        <span className="flex-1">{lightMode ? "Light mode" : "Dark mode"}</span>
                        <span
                          aria-hidden="true"
                          className={`relative h-6 w-11 rounded-full p-0.5 transition-colors ${lightMode ? "theme-accent-bg" : "bg-gray-600"}`}
                        >
                          <span
                            className={`block h-5 w-5 rounded-full bg-white shadow transition-transform ${lightMode ? "translate-x-5" : "translate-x-0"}`}
                          />
                        </span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
                      className="block text-gray-300 transition theme-accent-hover-text"
                    >
                      {link.label}
                    </a>
                  ))}

                  <div className="border-t border-white/10 pt-5">
                    <p className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-300">
                      <Palette className="h-4 w-4" />
                      Accent theme
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {THEMES.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => selectTheme(theme.id)}
                          className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${
                            selectedTheme === theme.id
                              ? "border-white/20 bg-white/10 text-white"
                              : "border-transparent text-gray-300 hover:bg-white/5"
                          }`}
                        >
                          <span
                            className="h-3.5 w-3.5 rounded-full"
                            style={{ backgroundColor: theme.color }}
                          />
                          {theme.label}
                          {!autoRotate && selectedTheme === theme.id && (
                            <Check className="ml-auto h-4 w-4 theme-accent-text" />
                          )}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={toggleAutoRotate}
                      aria-pressed={autoRotate}
                      className="mt-3 flex w-full items-center gap-3 rounded-xl border border-white/10 px-3 py-2 text-sm text-gray-200 transition hover:bg-white/5"
                    >
                      <RotateCw className={`h-4 w-4 ${autoRotate ? "theme-accent-text" : ""}`} />
                      <span className="flex-1 text-left">Auto rotate</span>
                      <span className={autoRotate ? "theme-accent-text" : "text-gray-500"}>
                        {autoRotate ? "On" : "Off"}
                      </span>
                    </button>
                    <button
                      onClick={toggleMode}
                      aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}
                      aria-pressed={lightMode}
                      className="mt-2 flex w-full items-center gap-3 rounded-xl border border-white/10 px-3 py-2 text-sm text-gray-200 transition hover:bg-white/5"
                    >
                      {lightMode ? <Sun className="h-4 w-4 theme-accent-text" /> : <Moon className="h-4 w-4" />}
                      <span className="flex-1 text-left">{lightMode ? "Light mode" : "Dark mode"}</span>
                      <span
                        aria-hidden="true"
                        className={`relative h-6 w-11 rounded-full p-0.5 transition-colors ${lightMode ? "theme-accent-bg" : "bg-gray-600"}`}
                      >
                        <span
                          className={`block h-5 w-5 rounded-full bg-white shadow transition-transform ${lightMode ? "translate-x-5" : "translate-x-0"}`}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}