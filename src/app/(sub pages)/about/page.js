import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const Hat = dynamic(() => import("@/components/models/Hat"), {
  ssr: false,
});

export default function About() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 w-[90vw] -translate-y-1/2 -translate-x-1/2">
          <p className="font-display text-[0.68rem] sm:text-xs tracking-[0.42em] uppercase text-foreground/75 mb-4">
            Software Engineer III · Bengaluru
          </p>
          <h1 className="font-display font-semibold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl leading-[0.9] name-shimmer">
            Vishal
            <span className="block">Chincholi</span>
          </h1>
          <div className="gold-rule my-5" />
          <p className="font-light tracking-wide text-foreground text-base sm:text-lg">
            Frontend · React & Next.js
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
