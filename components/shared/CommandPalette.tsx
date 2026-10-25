"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  FileDown,
  Search,
  UserRound,
  Wrench,
  BriefcaseBusiness,
  FolderKanban,
  ChartNoAxesCombined,
  Award,
  Mail,
  House,
} from "lucide-react";

const ACTIONS = [
  { id: "home", label: "Home", keywords: "top hero", icon: House, section: null },
  { id: "about", label: "About", keywords: "profile bio", icon: UserRound, section: "about" },
  { id: "skills", label: "Skills", keywords: "technologies", icon: Wrench, section: "skills" },
  { id: "experience", label: "Experience", keywords: "work career", icon: BriefcaseBusiness, section: "experience" },
  { id: "projects", label: "Projects", keywords: "portfolio work", icon: FolderKanban, section: "projects" },
  { id: "statistics", label: "Statistics", keywords: "stats", icon: ChartNoAxesCombined, section: "statistics" },
  { id: "certificates", label: "Certificates", keywords: "certifications awards", icon: Award, section: "certificates" },
  { id: "contact", label: "Contact", keywords: "email message", icon: Mail, section: "contact" },
  { id: "resume", label: "Download Resume", keywords: "cv pdf", icon: FileDown, section: null },
] as const;

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return ACTIONS;
    return ACTIONS.filter((action) =>
      `${action.label} ${action.keywords}`.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "k") return;

      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target instanceof HTMLSelectElement)
      ) {
        return;
      }

      event.preventDefault();
      openerRef.current = target instanceof HTMLElement ? target : null;
      setQuery("");
      setActiveIndex(0);
      setOpen(true);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openPalette = () => {
    openerRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      requestAnimationFrame(() => openerRef.current?.focus());
    }
  };

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const runAction = (actionId: (typeof ACTIONS)[number]["id"]) => {
    handleOpenChange(false);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    if (actionId === "home") {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    if (actionId === "resume") {
      const downloadLink = document.createElement("a");
      downloadLink.href = "/Resume.pdf";
      downloadLink.download = "Bibin_Biju_Resume.pdf";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      return;
    }

    const action = ACTIONS.find((item) => item.id === actionId);
    const section = action?.section
      ? document.getElementById(action.section)
      : null;
    section?.scrollIntoView({ behavior });
  };

  const handleInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(results.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + results.length) % Math.max(results.length, 1));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      runAction(results[activeIndex].id);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        aria-label="Open command palette"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0B1120]/90 px-3 py-2 text-xs text-gray-300 shadow-lg backdrop-blur transition hover:border-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        <kbd>Ctrl/⌘ K</kbd>
      </button>

      <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
        <DialogPrimitive.Portal>
          <AnimatePresence>
            {open && (
              <>
                <DialogPrimitive.Backdrop
                  render={
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.15 }}
                      className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
                    />
                  }
                />
                <DialogPrimitive.Popup
                  render={
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: reduceMotion ? 0 : 0.16 }}
                      className="fixed left-1/2 top-[15vh] z-[81] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120] text-white shadow-2xl outline-none"
                    />
                  }
                >
                  <DialogPrimitive.Title className="sr-only">
                    Command palette
                  </DialogPrimitive.Title>
                  <div className="flex items-center gap-3 border-b border-white/10 px-4">
                    <Search className="h-5 w-5 shrink-0 text-gray-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      role="combobox"
                      aria-label="Search commands"
                      aria-autocomplete="list"
                      aria-expanded="true"
                      aria-controls="command-results"
                      aria-activedescendant={results[activeIndex] ? `command-${results[activeIndex].id}` : undefined}
                      placeholder="Search sections and actions..."
                      value={query}
                      onChange={(event) => {
                        setQuery(event.target.value);
                        setActiveIndex(0);
                      }}
                      onKeyDown={handleInputKeyDown}
                      className="h-14 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-gray-500"
                    />
                    <kbd className="hidden rounded-md border border-white/10 px-2 py-1 text-xs text-gray-500 sm:inline">
                      ESC
                    </kbd>
                  </div>

                  <div id="command-results" role="listbox" className="max-h-[55vh] overflow-y-auto p-2">
                    {results.length === 0 ? (
                      <p className="px-3 py-8 text-center text-sm text-gray-400">
                        No matching actions.
                      </p>
                    ) : (
                      results.map((action, index) => {
                        const Icon = action.icon;
                        return (
                          <button
                            key={action.id}
                            id={`command-${action.id}`}
                            type="button"
                            role="option"
                            aria-selected={activeIndex === index}
                            onMouseMove={() => setActiveIndex(index)}
                            onClick={() => runAction(action.id)}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-blue-400 ${
                              activeIndex === index
                                ? "theme-accent-bg-soft theme-accent-text-light"
                                : "text-gray-200 hover:bg-white/5"
                            }`}
                          >
                            <Icon className="h-4 w-4 shrink-0" />
                            <span className="flex-1">{action.label}</span>
                            <ArrowUpRight className="h-4 w-4 opacity-40" />
                          </button>
                        );
                      })
                    )}
                  </div>
                  <div className="flex gap-4 border-t border-white/10 px-4 py-3 text-xs text-gray-500">
                    <span>↑↓ to navigate</span>
                    <span>Enter to select</span>
                    <span>Esc to close</span>
                  </div>
                </DialogPrimitive.Popup>
              </>
            )}
          </AnimatePresence>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
