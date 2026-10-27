"use client";

import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaQuoteLeft } from "react-icons/fa";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  status: string;
  statusColor: string;
  metric: string;
  src: string;
  alt: string;
  bio: string;
  className: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "elena",
    name: "Elena Vance",
    role: "Head of Product Design",
    department: "Design Systems",
    status: "Designing in Figma",
    statusColor: "bg-emerald-500",
    metric: "48 Core UI Kits",
    src: "/team/1.jpg",
    alt: "Elena Vance, Head of Product Design at Orbita",
    bio: "Pioneering fluid design systems and intuitive workspace interactions that teams love daily.",
    className: "md:mt-0",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "marcus",
    name: "Marcus Thorne",
    role: "Principal Systems Architect",
    department: "Cloud & Runtime",
    status: "Reviewing PR #512",
    statusColor: "bg-blue-500",
    metric: "99.99% Core Uptime",
    src: "/team/2.jpg",
    alt: "Marcus Thorne collaborating with colleagues on systems architecture",
    bio: "Architecting real-time synchronization pipelines with millisecond global convergence.",
    className: "md:mt-10",
    socials: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "VP of Engineering",
    department: "Delivery & DevOps",
    status: "Planning Sprint Orbit",
    statusColor: "bg-indigo-500",
    metric: "3.4x Team Velocity",
    src: "/team/3.jpg",
    alt: "Sarah Chen reviewing sprint roadmaps and priorities",
    bio: "Championing async-first delivery loops and frictionless cross-functional handoffs.",
    className: "md:mt-0",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
];

const stats = [
  {
    value: "5K+",
    label: "Projects completed",
  },
  {
    value: "1M+",
    label: "Tasks managed",
  },
  {
    value: "500+",
    label: "Happy customers",
  },
];

const TeamSection = () => {
  const [activeMember, setActiveMember] = useState<string | null>(null);

  return (
    <section
      id="people"
      className="relative overflow-hidden py-20 bg-linear-to-b from-white via-slate-50/50 to-white scroll-mt-12"
    >
      {/* Subtle background ambient blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -z-10 h-125 w-full max-w-6xl opacity-30 blur-3xl bg-linear-to-tr from-blue-200 via-sky-100 to-indigo-100"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-primary text-xs font-semibold tracking-wider uppercase mb-5 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            People & Culture
          </div>

          <div className="flex flex-col items-center gap-6">
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Great work happens when{" "}
              <span className="font-dm-serif-display font-normal italic text-primary">
                people move together.
              </span>
            </h2>

            <p className="max-w-md text-base sm:text-lg text-slate-600 leading-relaxed">
              Orbita brings designers, engineers, and product leaders into a single,
              harmonious cadence—where every contribution connects to the bigger mission.
            </p>
          </div>
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {teamMembers.map((person) => {
            return (
              <div
                key={person.id}
                onMouseEnter={() => setActiveMember(person.id)}
                onMouseLeave={() => setActiveMember(null)}
                className={`group relative flex flex-col rounded-3xl p-2.5 transition-all duration-500 ease-out ${person.className}  bg-white/70 backdrop-blur-sm border border-slate-200/80 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10`}
              >
                {/* Photo container */}
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
                  <img
                    src={person.src}
                    alt={person.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out"
                  />

                  {/* Gradient shade at top & bottom for legibility */}
                  <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Top Live Status Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-medium text-slate-700 shadow-sm border border-white/60">
                      <span className={`size-2 rounded-full ${person.statusColor} animate-pulse`} />
                      {person.status}
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-navy/70 backdrop-blur-md text-[11px] font-semibold text-white/90 border border-white/20">
                      {person.metric}
                    </span>
                  </div>

                  {/* Bottom details inside photo */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <div className="inline-block px-2.5 py-0.5 mb-2 rounded-md bg-blue-500/80 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-white">
                      {person.department}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5 font-medium">
                      {person.role}
                    </p>

                    {/* Bio snippet */}
                    <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-2 opacity-90 transition-opacity">
                      {person.bio}
                    </p>

                    <div className="mt-3.5 flex items-center gap-2 pt-2.5 border-t border-white/15">
                      {person.socials.linkedin && (
                        <a
                          href={person.socials.linkedin}
                          aria-label={`${person.name} on LinkedIn`}
                          className="flex size-7 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white hover:text-navy"
                        >
                          <FaLinkedinIn className="text-xs" />
                        </a>
                      )}
                      {person.socials.github && (
                        <a
                          href={person.socials.github}
                          aria-label={`${person.name} on GitHub`}
                          className="flex size-7 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white hover:text-navy"
                        >
                          <FaGithub className="text-xs" />
                        </a>
                      )}
                      {person.socials.twitter && (
                        <a
                          href={person.socials.twitter}
                          aria-label={`${person.name} on Twitter`}
                          className="flex size-7 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white hover:text-navy"
                        >
                          <FaTwitter className="text-xs" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Laurel Wreath Badges & Manifesto Endorsement Card */}
        <div className="mx-auto mt-16 sm:mt-24 lg:mt-28 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-linear-to-b from-blue-50/70 via-white to-slate-50/80 p-6 sm:p-10 lg:p-12 shadow-sm">
            {/* Ambient decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 size-60 rounded-full bg-blue-100/50 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -left-20 -bottom-20 size-60 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none"
            />

            <div className="relative flex items-center justify-between gap-4 sm:gap-8 lg:gap-12">
              {/* Left Laurel Badge */}
              <div className="shrink-0 flex items-center justify-center">
                <img
                  src="/team/badge_left.svg"
                  alt="Quality recognition badge left laurel"
                  className="h-16 w-auto sm:h-24 lg:h-28 object-contain opacity-80 transition-transform duration-300 hover:scale-105 select-none"
                />
              </div>

              {/* Central Manifesto / Endorsement Copy */}
              <div className="flex-1 text-center px-2 sm:px-6">
                <div className="mx-auto mb-4 flex size-9 items-center justify-center rounded-full bg-blue-100/80 text-primary">
                  <FaQuoteLeft className="text-sm" />
                </div>

                <p className="font-outfit text-base sm:text-xl lg:text-2xl font-medium leading-relaxed sm:leading-snug text-navy tracking-tight">
                  “Every successful project is built on clear communication,
                  shared ownership, and a team that knows what matters. Orbita
                  brings the moving pieces together so people spend less time
                  coordinating and more time creating meaningful work.”
                </p>

                <div className="mt-5 flex items-center justify-center gap-2">
                  <span className="h-px w-6 bg-blue-300" />
                  <p className="text-xs sm:text-sm font-semibold tracking-wide text-primary uppercase">
                    The Orbita Philosophy
                  </p>
                  <span className="h-px w-6 bg-blue-300" />
                </div>
              </div>

              {/* Right Laurel Badge */}
              <div className="shrink-0 flex items-center justify-center">
                <img
                  src="/team/badge_right.svg"
                  alt="Quality recognition badge right laurel"
                  className="h-16 w-auto sm:h-24 lg:h-28 object-contain opacity-80 transition-transform duration-300 hover:scale-105 select-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Clean Divider */}
        <div className="mt-16 sm:mt-24 lg:mt-28 border-t border-slate-200" />

        {/* Refined & Clean Stats Section (Matching Design) */}
        <div className="grid justify-items-center grid-cols-1 gap-8 py-10 sm:grid-cols-3 sm:gap-6 sm:py-14 lg:py-16">
          {stats.map((stat) => (
            <div key={stat.label} className="group cursor-default">
              <p className="text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl transition-colors duration-300 group-hover:text-primary">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-slate-500 sm:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
