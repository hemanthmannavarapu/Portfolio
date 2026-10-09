"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial theme from html attribute or localStorage
    const currentTheme =
      document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {}
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hemanthmannavarapu@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      className="min-h-screen text-[var(--text)] transition-colors duration-200"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* STICKY NAVIGATION */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md transition-colors"
        style={{
          backgroundColor: "var(--bg)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-medium tracking-tight text-sm uppercase sm:text-base hover:opacity-75 transition-opacity"
            style={{ color: "var(--text)" }}
          >
            Mannavarapu Narasimha Hemanth
          </a>

          <div className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-normal tracking-wide">
            <a
              href="#about"
              className="hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-secondary)" }}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-secondary)" }}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-secondary)" }}
            >
              Experience
            </a>
            <a
              href="#education"
              className="hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-secondary)" }}
            >
              Education
            </a>
            <a
              href="#skills"
              className="hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-secondary)" }}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-secondary)" }}
            >
              Contact
            </a>

            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              id="theme-toggle"
              aria-label="Toggle color theme"
              className="p-2 rounded border transition-colors flex items-center justify-center hover:opacity-80"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text)",
              }}
            >
              {theme === "dark" ? (
                // Sun Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                // Moon Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
          </div>

          {/* MOBILE MENU TOGGLE & THEME */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text)",
              }}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border"
              aria-label="Toggle mobile menu"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-b px-6 py-4 flex flex-col gap-3 text-sm font-medium"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
              style={{ color: "var(--text)" }}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
              style={{ color: "var(--text)" }}
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
              style={{ color: "var(--text)" }}
            >
              Experience
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
              style={{ color: "var(--text)" }}
            >
              Education
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
              style={{ color: "var(--text)" }}
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
              style={{ color: "var(--text)" }}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* HERO SECTION */}
        <section className="py-16 sm:py-24 md:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col justify-center order-2 lg:order-1">
              {/* Factual Tag based on Resume */}
              <div
                className="text-xs uppercase tracking-widest font-semibold mb-6 flex items-center gap-2"
                style={{ color: "var(--accent)" }}
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                COMPUTER SCIENCE ENGINEERING • SOFTWARE DEVELOPMENT
              </div>

              {/* Natural Editorial Heading */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.18] mb-6"
                style={{ color: "var(--text)" }}
              >
                Building web applications, database systems, and AI-driven platforms with engineering discipline.
              </h1>

              {/* Concise sentences derived strictly from resume */}
              <p
                className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light"
                style={{ color: "var(--text-secondary)" }}
              >
                Undergraduate in Computer Science Engineering at NBKR Institute of Science and Technology, Nellore.
                Focused on web application design, MySQL relational database architecture, and AI integration,
                complemented by six months of precision industrial training at TVS Sundram Fasteners.
              </p>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 pb-0.5 border-b hover:gap-3 transition-all"
                  style={{
                    color: "var(--text)",
                    borderColor: "var(--text)",
                  }}
                >
                  View Selected Projects <span>→</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 pb-0.5 border-b hover:gap-3 transition-all"
                  style={{
                    color: "var(--text-secondary)",
                    borderColor: "var(--border)",
                  }}
                >
                  Get in Touch <span>→</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider px-3 py-1.5 rounded border hover:opacity-80 transition-opacity"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                    color: "var(--text)",
                  }}
                >
                  Resume PDF <span className="text-[10px]">↗</span>
                </a>
              </div>

              {/* Quick factual metadata from resume */}
              <div
                className="mt-12 pt-6 border-t grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs"
                style={{ borderColor: "var(--border)" }}
              >
                <div>
                  <span className="block uppercase tracking-wider font-mono text-[10px]" style={{ color: "var(--text-secondary)" }}>
                    Location
                  </span>
                  <span className="font-medium" style={{ color: "var(--text)" }}>
                    Nellore, Andhra Pradesh
                  </span>
                </div>
                <div>
                  <span className="block uppercase tracking-wider font-mono text-[10px]" style={{ color: "var(--text-secondary)" }}>
                    Current Degree
                  </span>
                  <span className="font-medium" style={{ color: "var(--text)" }}>
                    B.Tech CSE (NBKRIST)
                  </span>
                </div>
                <div>
                  <span className="block uppercase tracking-wider font-mono text-[10px]" style={{ color: "var(--text-secondary)" }}>
                    Focus Areas
                  </span>
                  <span className="font-medium" style={{ color: "var(--text)" }}>
                    Web Dev & AI Integration
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Actual Uploaded Profile Photo in Editorial Crop */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[190px] sm:max-w-[210px] md:max-w-[230px] lg:max-w-[250px]">
                <div
                  className="overflow-hidden rounded-xl border relative shadow-xs"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Mannavarapu Narasimha Hemanth"
                      fill
                      priority
                      sizes="(max-width: 640px) 190px, (max-width: 1024px) 230px, 250px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div
                    className="py-2.5 px-3 border-t flex items-center justify-between text-xs"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--surface)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span className="font-mono text-[10px] tracking-wide uppercase">
                      M. N. Hemanth
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider">
                      Nellore, IN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 01 — ABOUT */}
        <section id="about" className="py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="text-xs uppercase font-mono tracking-widest mb-10" style={{ color: "var(--accent)" }}>
            01 — ABOUT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <h2
                className="text-2xl sm:text-3xl font-normal leading-snug tracking-tight"
                style={{ color: "var(--text)" }}
              >
                Grounding software engineering in structured thinking, relational databases, and manufacturing precision.
              </h2>
            </div>

            <div
              className="lg:col-span-7 space-y-5 text-base sm:text-lg font-light leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                I am a Computer Science Engineering student currently pursuing my Bachelor of Technology at NBKR
                Institute of Science and Technology, Nellore. Previously, I completed my Diploma in Computer Science
                Engineering from Geethanjali Institute of Science and Technology with an 85.1% aggregate.
              </p>
              <p>
                My technical practice revolves around building functional, end-to-end web applications with modular
                architecture, robust MySQL schema design, and seamless integration of intelligent AI services like the
                Gemini AI API.
              </p>
              <p>
                In addition to pure software development, I have six months of direct industrial training at TVS Sundram
                Fasteners Ltd., working with CNC/DMC machinery and precision quality inspection instruments. That experience
                instilled a strong appreciation for dimensional tolerances, procedural discipline, and rigorous quality
                standards that directly carry over into writing maintainable, reliable code.
              </p>
            </div>
          </div>
        </section>

        {/* 02 — SELECTED PROJECTS */}
        <section id="projects" className="py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs uppercase font-mono tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                02 — SELECTED PROJECTS
              </div>
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight" style={{ color: "var(--text)" }}>
                Verified Work from Resume
              </h2>
            </div>
            <p className="text-xs sm:text-sm max-w-xs font-light" style={{ color: "var(--text-secondary)" }}>
              Engineered web applications focusing on data integrity, state management, and real-time intelligence.
            </p>
          </div>

          <div className="space-y-12">
            {/* Project 01 */}
            <article
              className="p-6 sm:p-8 rounded-lg border transition-all"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase px-2 py-0.5 rounded border" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)", color: "var(--accent)" }}>
                    01
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                    Web Application • Database Integration
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <a
                    href="https://github.com/hemanthmannavarapu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                    style={{ color: "var(--text)" }}
                  >
                    GitHub Repository ↗
                  </a>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-5">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight mb-3" style={{ color: "var(--text)" }}>
                    Internet Banking System
                  </h3>
                  <p className="text-sm leading-relaxed font-light mb-6" style={{ color: "var(--text-secondary)" }}>
                    Designed and developed a secure, responsive web application for managing core online banking operations,
                    prioritizing user security and financial transaction reliability.
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {["HTML", "CSS", "JavaScript", "MySQL", "Database Integration", "User Auth"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded border"
                        style={{
                          borderColor: "var(--border)",
                          backgroundColor: "var(--bg)",
                          color: "var(--text)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="space-y-3.5 text-sm font-light" style={{ color: "var(--text-secondary)" }}>
                    <div className="flex items-start gap-3">
                      <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                      <p>
                        <strong className="font-medium" style={{ color: "var(--text)" }}>Authentication & Session Security:</strong> Implemented comprehensive user authentication workflows including registration, login, and secure session management.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                      <p>
                        <strong className="font-medium" style={{ color: "var(--text)" }}>Core Banking Modules:</strong> Engineered interactive features for real-time account balance enquiries, fund transfers between accounts, and detailed transaction histories.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                      <p>
                        <strong className="font-medium" style={{ color: "var(--text)" }}>Relational Architecture:</strong> Structured relational database schemas using MySQL to enforce transactional consistency, prevent data race conditions, and support reliable persistent storage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 02 */}
            <article
              className="p-6 sm:p-8 rounded-lg border transition-all"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase px-2 py-0.5 rounded border" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)", color: "var(--accent)" }}>
                    02
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                    Web Application • Generative AI
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <a
                    href="https://github.com/hemanthmannavarapu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                    style={{ color: "var(--text)" }}
                  >
                    GitHub Repository ↗
                  </a>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-5">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight mb-3" style={{ color: "var(--text)" }}>
                    AI Learning Path Generator
                  </h3>
                  <p className="text-sm leading-relaxed font-light mb-6" style={{ color: "var(--text-secondary)" }}>
                    Developed an intelligent educational platform utilizing Anti-gravity and the Gemini AI API to provide
                    tailored educational curricula dynamically adjusted to individual student comprehension.
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {["Gemini AI API", "Anti-gravity Framework", "MySQL", "Web Development", "AI Integration"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded border"
                        style={{
                          borderColor: "var(--border)",
                          backgroundColor: "var(--bg)",
                          color: "var(--text)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="space-y-3.5 text-sm font-light" style={{ color: "var(--text-secondary)" }}>
                    <div className="flex items-start gap-3">
                      <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                      <p>
                        <strong className="font-medium" style={{ color: "var(--text)" }}>Dynamic Diagnostic Logic:</strong> Implemented intelligent evaluation rules that analyze a student’s baseline proficiency level and dynamically construct customized learning trajectories.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                      <p>
                        <strong className="font-medium" style={{ color: "var(--text)" }}>Tracking & Recommendations:</strong> Built automated topic recommendation pipelines and student milestone tracking modules backed by a MySQL database.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                      <p>
                        <strong className="font-medium" style={{ color: "var(--text)" }}>Real-Time AI Adaptation:</strong> Integrated AI model endpoints to deliver real-time adaptivity and continuous curriculum updates as the student progresses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 03 — EXPERIENCE */}
        <section id="experience" className="py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="text-xs uppercase font-mono tracking-widest mb-10" style={{ color: "var(--accent)" }}>
            03 — EXPERIENCE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight mb-3" style={{ color: "var(--text)" }}>
                Industrial Training
              </h2>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Hands-on manufacturing workflow experience reinforcing precision, safety compliance, and structured operational methods.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div
                className="p-6 sm:p-8 rounded-lg border"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-medium" style={{ color: "var(--text)" }}>
                    TVS Sundram Fasteners Ltd.
                  </h3>
                  <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                    Nov 18, 2024 – May 18, 2025
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
                  <span className="font-medium" style={{ color: "var(--text)" }}>Industrial Trainee – Production / CNC Machining</span>
                  <span>•</span>
                  <span>Sri City, Andhra Pradesh</span>
                  <span>•</span>
                  <span>6 Months Duration</span>
                </div>

                <ul className="space-y-3.5 text-sm font-light" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex items-start gap-3">
                    <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                    <span>
                      Completed six months of hands-on industrial training focused on production processes and CNC machining operations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                    <span>
                      Worked directly with CNC and DMC machinery, gaining practical exposure to manufacturing workflows and operational safety standards.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                    <span>
                      Utilized precision measuring instruments including vernier calipers and micrometers for strict dimensional inspection and quality-control.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xs mt-1" style={{ color: "var(--accent)" }}>—</span>
                    <span>
                      Gained foundational exposure to SAP ERP systems within a high-volume manufacturing environment.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — EDUCATION */}
        <section id="education" className="py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="text-xs uppercase font-mono tracking-widest mb-10" style={{ color: "var(--accent)" }}>
            04 — EDUCATION
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight mb-3" style={{ color: "var(--text)" }}>
                Academic Background
              </h2>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Formal education in Computer Science and Engineering, demonstrating consistent progression and rigorous coursework.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {/* Institution 1 */}
              <div
                className="p-6 rounded-lg border flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div>
                  <h3 className="text-base sm:text-lg font-medium" style={{ color: "var(--text)" }}>
                    NBKR Institute of Science and Technology, Nellore
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                    Bachelor of Technology in Computer Science Engineering
                  </p>
                </div>
                <div className="sm:text-right font-mono text-xs whitespace-nowrap">
                  <span className="px-2.5 py-1 rounded border inline-block" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)", color: "var(--accent)" }}>
                    Aug 2025 – Present
                  </span>
                </div>
              </div>

              {/* Institution 2 */}
              <div
                className="p-6 rounded-lg border flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-base sm:text-lg font-medium" style={{ color: "var(--text)" }}>
                      Geethanjali Institute of Science and Technology
                    </h3>
                  </div>
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                    Diploma in Computer Science Engineering
                  </p>
                </div>
                <div className="sm:text-right font-mono text-xs whitespace-nowrap flex flex-row sm:flex-col items-start sm:items-end gap-2">
                  <span className="px-2.5 py-1 rounded border inline-block" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)", color: "var(--text-secondary)" }}>
                    Aug 2022 – May 2025
                  </span>
                  <span className="font-semibold text-xs" style={{ color: "var(--accent)" }}>
                    85.1% Aggregate
                  </span>
                </div>
              </div>

              {/* Institution 3 */}
              <div
                className="p-6 rounded-lg border flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div>
                  <h3 className="text-base sm:text-lg font-medium" style={{ color: "var(--text)" }}>
                    DNR ZP Boys High School
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                    SSC, Class X
                  </p>
                </div>
                <div className="sm:text-right font-mono text-xs whitespace-nowrap flex flex-row sm:flex-col items-start sm:items-end gap-2">
                  <span className="px-2.5 py-1 rounded border inline-block" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)", color: "var(--text-secondary)" }}>
                    Mar 2021 – May 2022
                  </span>
                  <span className="font-semibold text-xs" style={{ color: "var(--accent)" }}>
                    76% Score
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — TECHNICAL SKILLS */}
        <section id="skills" className="py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="text-xs uppercase font-mono tracking-widest mb-10" style={{ color: "var(--accent)" }}>
            05 — TECHNICAL SKILLS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight mb-3" style={{ color: "var(--text)" }}>
                Core Capabilities
              </h2>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Direct skill extraction from resume. Grouped transparently by technical domain without arbitrary ratings.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Category 1 */}
              <div className="p-6 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
                <span className="font-mono text-xs uppercase tracking-wider block mb-3 font-semibold" style={{ color: "var(--accent)" }}>
                  Programming Languages
                </span>
                <div className="flex flex-wrap gap-2">
                  {["C++", "Python", "Java"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded text-xs font-mono border"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="p-6 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
                <span className="font-mono text-xs uppercase tracking-wider block mb-3 font-semibold" style={{ color: "var(--accent)" }}>
                  Web & Database
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Web Development", "Database Integration", "MySQL", "HTML", "CSS", "JavaScript"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded text-xs font-mono border"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="p-6 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
                <span className="font-mono text-xs uppercase tracking-wider block mb-3 font-semibold" style={{ color: "var(--accent)" }}>
                  Frameworks & AI
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Gemini AI API", "Anti-gravity Framework"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded text-xs font-mono border"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4 */}
              <div className="p-6 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
                <span className="font-mono text-xs uppercase tracking-wider block mb-3 font-semibold" style={{ color: "var(--accent)" }}>
                  Core Concepts
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Programming Fundamentals", "OOP (Object-Oriented)", "Data Structures"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded text-xs font-mono border"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 5 */}
              <div className="p-6 rounded-lg border sm:col-span-2" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
                <span className="font-mono text-xs uppercase tracking-wider block mb-3 font-semibold" style={{ color: "var(--accent)" }}>
                  Tools & Systems
                </span>
                <div className="flex flex-wrap gap-2">
                  {["SAP ERP", "CNC / DMC Machines", "Git", "GitHub"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded text-xs font-mono border"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — AREAS OF FOCUS & PRACTICES (FROM RESUME "ADDITIONAL") */}
        <section className="py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="text-xs uppercase font-mono tracking-widest mb-10" style={{ color: "var(--accent)" }}>
            06 — FOCUS & PRACTICES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
              <div className="text-xs uppercase font-mono tracking-wider font-semibold mb-2" style={{ color: "var(--accent)" }}>
                Software Development
              </div>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Web application design, real-time AI API integration, and relational database system architecture.
              </p>
            </div>

            <div className="p-6 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
              <div className="text-xs uppercase font-mono tracking-wider font-semibold mb-2" style={{ color: "var(--accent)" }}>
                Industrial Exposure
              </div>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                CNC/DMC machining operations, precision dimensional measurement (vernier calipers & micrometers), and enterprise SAP ERP.
              </p>
            </div>

            <div className="p-6 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
              <div className="text-xs uppercase font-mono tracking-wider font-semibold mb-2" style={{ color: "var(--accent)" }}>
                Engineering Practices
              </div>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Git-based version control, database schema design, modular programming, and procedural optimization.
              </p>
            </div>
          </div>
        </section>

        {/* 07 — CONTACT */}
        <section id="contact" className="py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="text-xs uppercase font-mono tracking-widest mb-10" style={{ color: "var(--accent)" }}>
            07 — CONTACT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight mb-4" style={{ color: "var(--text)" }}>
                Direct Inquiries & Collaboration
              </h2>
              <p className="text-base font-light leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                Open to discussions regarding software engineering internships, web application development, and technical collaboration.
              </p>

              <div className="text-xs font-mono space-y-2" style={{ color: "var(--text-secondary)" }}>
                <div>Location: Nellore, Andhra Pradesh, India</div>
                <div>Status: B.Tech CSE Student (NBKRIST)</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {/* Email Card */}
              <div
                className="p-5 sm:p-6 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider block text-[11px]" style={{ color: "var(--text-secondary)" }}>
                    Email Address
                  </span>
                  <a
                    href="mailto:hemanthmannavarapu@gmail.com"
                    className="text-base sm:text-lg font-medium hover:underline tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    hemanthmannavarapu@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="px-3 py-1.5 text-xs font-mono rounded border transition-colors hover:opacity-80"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                    }}
                  >
                    {copiedEmail ? "Copied ✓" : "Copy Email"}
                  </button>
                  <a
                    href="mailto:hemanthmannavarapu@gmail.com"
                    className="px-3 py-1.5 text-xs font-mono rounded border transition-colors hover:opacity-80"
                    style={{
                      borderColor: "var(--accent)",
                      backgroundColor: "var(--accent)",
                      color: "var(--bg)",
                    }}
                  >
                    Send Email →
                  </a>
                </div>
              </div>

              {/* GitHub Card */}
              <div
                className="p-5 sm:p-6 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider block text-[11px]" style={{ color: "var(--text-secondary)" }}>
                    Version Control & Code
                  </span>
                  <span className="text-base sm:text-lg font-medium tracking-tight" style={{ color: "var(--text)" }}>
                    github.com/hemanthmannavarapu
                  </span>
                </div>

                <a
                  href="https://github.com/hemanthmannavarapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-mono rounded border inline-flex items-center gap-1.5 hover:opacity-80"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                  }}
                >
                  Visit GitHub ↗
                </a>
              </div>

              {/* LinkedIn Card */}
              <div
                className="p-5 sm:p-6 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider block text-[11px]" style={{ color: "var(--text-secondary)" }}>
                    Professional Network
                  </span>
                  <span className="text-base sm:text-lg font-medium tracking-tight" style={{ color: "var(--text)" }}>
                    linkedin.com/in/narasimha-hemanth-mannavarapu
                  </span>
                </div>

                <a
                  href="https://linkedin.com/in/narasimha-hemanth-mannavarapu-425462379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-mono rounded border inline-flex items-center gap-1.5 hover:opacity-80"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                  }}
                >
                  Visit LinkedIn ↗
                </a>
              </div>

              {/* Deployed Web App Card */}
              <div
                className="p-5 sm:p-6 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider block text-[11px]" style={{ color: "var(--text-secondary)" }}>
                    Live Domain
                  </span>
                  <span className="text-base sm:text-lg font-medium tracking-tight" style={{ color: "var(--text)" }}>
                    hemanthmannavarapu.vercel.app
                  </span>
                </div>

                <a
                  href="https://hemanthmannavarapu.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-mono rounded border inline-flex items-center gap-1.5 hover:opacity-80"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                  }}
                >
                  Open Domain ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light" style={{ color: "var(--text-secondary)" }}>
        <p>
          © 2026 Mannavarapu Narasimha Hemanth. All rights reserved.
        </p>

        <div className="flex items-center gap-6 font-mono text-[11px]">
          <a
            href="https://github.com/hemanthmannavarapu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/narasimha-hemanth-mannavarapu-425462379"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Resume PDF
          </a>
          <a href="#" className="hover:underline">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
