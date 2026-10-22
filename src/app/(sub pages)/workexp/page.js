import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Work Experience | Vishal Chincholi",
};

export default function WorkExperience() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <header className="relative z-10 mb-10 flex flex-col items-center text-center">
        <p className="font-display text-[0.7rem] tracking-[0.45em] uppercase text-foreground/70">
          A chronicle of craft
        </p>
        <h1 className="font-display mt-3 text-4xl sm:text-5xl md:text-6xl text-accent">
          Work Experience
        </h1>
        <div className="gold-rule mt-5" />
      </header>
      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
