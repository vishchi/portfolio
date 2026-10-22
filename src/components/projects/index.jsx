"use client";
import ProjectLayout from "./ProjectLayout";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative w-full xl:max-w-4xl mx-auto flex flex-col gap-4 md:gap-5 pl-6 sm:pl-8"
    >
      <div className="pointer-events-none absolute left-2 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent" />
      {projects.map((project, index) => {
        return <ProjectLayout key={project.id} index={index} {...project} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
