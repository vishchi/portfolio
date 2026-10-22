import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0 },
};

const NavLink = motion(Link);

const ProjectLayout = ({ name, description, date, period, demoLink, index = 0 }) => {
  const label = period || (date ? new Date(date).toDateString() : "");
  const className =
    "group relative w-full text-left rounded-2xl p-5 md:p-7 custom-bg transition-transform duration-300 hover:-translate-y-1";
  const content = (
    <div className="flex gap-4 md:gap-6">
      <span className="font-display text-lg md:text-xl text-accent/60 pt-1 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h2 className="font-display text-xl md:text-2xl text-accent">
            {name}
          </h2>
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-muted whitespace-nowrap">
            {label}
          </p>
        </div>
        <p className="mt-2 text-sm md:text-base leading-relaxed text-foreground/85">
          {description}
        </p>
        {demoLink ? (
          <p className="mt-3 text-[0.68rem] tracking-[0.28em] uppercase text-accent">
            Open portal
          </p>
        ) : null}
      </div>
    </div>
  );

  if (!demoLink) {
    return (
      <motion.div variants={item} className={className}>
        {content}
      </motion.div>
    );
  }

  return (
    <NavLink
      variants={item}
      href={demoLink}
      target="_blank"
      className={className}
    >
      {content}
    </NavLink>
  );
};

export default ProjectLayout;
