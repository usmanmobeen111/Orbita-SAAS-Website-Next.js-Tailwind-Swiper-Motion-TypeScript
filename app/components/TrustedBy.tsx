"use client";

import React, { useState } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

interface ToolIntegration {
  name: string;
  src: string;
  category: "Engineering" | "Design" | "Collaboration" | "Cloud";
  description: string;
  highlight: string;
}

const tools: ToolIntegration[] = [
  {
    name: "GitHub",
    src: "/logos/github.svg",
    category: "Engineering",
    description: "Sync PRs, commits & issue trackers automatically",
    highlight: "Real-time webhook sync",
  },
  {
    name: "Figma",
    src: "/logos/figma.svg",
    category: "Design",
    description: "Embed live design canvases and inspect tokens",
    highlight: "Live preview frames",
  },
  {
    name: "Slack",
    src: "/logos/slack.svg",
    category: "Collaboration",
    description: "Broadcast milestone updates and task threads",
    highlight: "Smart digest alerts",
  },
  {
    name: "Google",
    src: "/logos/google.svg",
    category: "Collaboration",
    description: "SSO authentication, Docs embed & Calendar sync",
    highlight: "Enterprise SAML SSO",
  },
  {
    name: "GitLab",
    src: "/logos/gitlab.svg",
    category: "Engineering",
    description: "Trigger pipelines and observe merge requests",
    highlight: "CI/CD auto-triggers",
  },
  {
    name: "Grafana",
    src: "/logos/grafana.svg",
    category: "Cloud",
    description: "Real-time telemetry and project velocity charts",
    highlight: "Live metric widgets",
  },
  {
    name: "Consul",
    src: "/logos/consul.svg",
    category: "Cloud",
    description: "Service mesh routing and configuration state",
    highlight: "Zero-trust network",
  },
  {
    name: "LinkedIn",
    src: "/logos/linkedin.svg",
    category: "Collaboration",
    description: "Talent pipeline tracking and team onboarding",
    highlight: "Unified profiles",
  },
];

const categories = ["All", "Engineering", "Design", "Collaboration", "Cloud"] as const;

const TrustedBy = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTools =
    selectedCategory === "All"
      ? tools
      : tools.filter((t) => t.category === selectedCategory);

  return (
    <section id="integrations" className="relative pt-20 pb-20 px-4 sm:px-6 overflow-hidden scroll-mt-12">


      {/* Header section */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Modern Supertitle Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-primary text-[10px] md:text-sm font-semibold tracking-wider uppercase mb-5 shadow-xs">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          Integrations & Ecosystem
        </div>

        {/* User's Original Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.15] px-4">
          Everything works{" "}
          <span className="text-primary font-dm-serif-display italic font-normal">
            better
          </span>{" "}
          together.
        </h2>

        {/* Persuasive Subheading */}
        <p className="text- sm:text-lg text-slate-600 max-w-2xl mx-auto mt-5 px-4 font-normal leading-relaxed">
          Connect Orbita with your everyday engineering, design, and team
          communication platforms. Keep everyone aligned without switching tabs.
        </p>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${isActive
                    ? "bg-navy text-white shadow-sm scale-105"
                    : "bg-white text-slate-600 hover:text-navy border border-slate-200/80 hover:border-slate-300"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Tool Grid (Filtered View) */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 px-4">
        {filteredTools.map((tool) => (
          <div
            key={tool.name}
            className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
          >
            <div>
              {/* Header with Icon + Category badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5 group-hover:bg-blue-50/70 group-hover:border-blue-200/80 transition-colors duration-300">
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="w-7 h-7 object-contain sm:grayscale  sm:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-primary transition-colors">
                  {tool.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {tool.description}
              </p>
            </div>

            {/* Footer with feature highlight */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <FaCheckCircle className="text-accent-green text-xs" />
                {tool.highlight}
              </span>
              <span className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-0.5">
                Connect <FaArrowRight className="text-[10px]" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Scrolling Marquee Banner with Gradient Edge Masks */}
      <div className="relative mt-16 max-w-6xl mx-auto overflow-hidden py-4">
        {/* Left gradient fade mask */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-linear-to-r from-white via-white/80 to-transparent z-10"
          aria-hidden="true"
        />
        {/* Right gradient fade mask */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-linear-to-l from-white via-white/80 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Marquee Track (Double array for seamless looping) */}
        <div className="animate-marquee flex items-center gap-6">
          {[...tools, ...tools].map((tool, idx) => (
            <div
              key={`${tool.name}-marquee-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-200 shrink-0 cursor-pointer group"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="w-5 h-5 object-contain sm:grayscale sm:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-200"
              />
              <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors">
                {tool.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                • {tool.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Trust Bar / Value Props */}
      <div className="mt-14 max-w-3xl mx-auto pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-accent-green" />
          <span>Bi-directional sync with sub-second latency</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-slate-300">•</span>
          <a
            href="#all-integrations"
            className="font-medium text-primary hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
          >
            Explore all 50+ integrations
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;