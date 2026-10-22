import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 flex-col items-start">
          <h2 className="font-display text-xl md:text-2xl text-left w-full text-accent">
            Frontend Engineer
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I&apos;m a frontend engineer with over 5 years of experience building
            responsive web apps in React and Next.js. I&apos;ve worked in product
            companies and early-stage startups, most recently as a Software
            Engineer III on Walmart Pharmacy, and before that on Myntra&apos;s
            Partner Portal at Moolya, Space Matrix at Spydra, Kitabeli, and
            Rakuten. That work covers secondary authentication, seller
            onboarding with Webpack Module Federation, self-serve banners, and
            ClearTax e-invoicing that cut invoice turnaround from weeks to near
            real time. I studied Computer Science and Engineering at JSS Science
            and Technological University (formerly SJCE), Mysuru, with a
            cumulative GPA of 8.49.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full lg:col-span-4 text-accent">
          <p className="font-display font-semibold w-full text-left text-2xl sm:text-5xl">
            5+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 self-start !p-0"}>
          <img
            className={"w-full h-auto"}
            src="https://github-readme-stats.vercel.app/api/top-langs?username=vishchi&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Vishal Chincholi's most used languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 self-start !p-0"}>
          <img
            className="w-full h-auto"
            src={
              "https://github-readme-streak-stats.herokuapp.com?user=vishchi&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            }
            alt="Vishal Chincholi's GitHub contribution streak"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,nodejs,express,mongodb,mysql,postgres,redux,git,webpack,docker,jest`}
            alt="Skills: HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, MySQL, PostgreSQL, Redux, Git, Webpack, Docker, and Jest"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 md:col-start-4 !p-0"}>
          <Link
            href="https://github.com/vishchi/Emporium-Ecommerce"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=vishchi&repo=Emporium-Ecommerce&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Emporium e-commerce repository"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
