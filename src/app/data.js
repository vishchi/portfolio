/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Walmart Pharmacy",
    description:
      "SE III · PIN auth, in-store account finish, and bulk HIPAA family authorization",
    period: "Oct 2025 — Present",
  },
  {
    id: 2,
    name: "Myntra Partner Portal",
    description:
      "Seller onboarding microfrontend, live banners, and ClearTax e-invoicing",
    period: "Mar 2024 — Oct 2025",
  },
  {
    id: 3,
    name: "Space Matrix",
    description:
      "Next.js site with multilingual support, GSAP, and Framer Motion",
    period: "Oct 2023 — Jan 2024",
    demoLink: "https://spacematrix.com",
  },
  {
    id: 4,
    name: "Kitabeli Inventory",
    description:
      "React and Material UI app for purchase orders and kiosk transfers",
    period: "Aug 2022 — Oct 2023",
  },
  {
    id: 5,
    name: "Rakuten Energy Tracker",
    description: "React UI and charts for energy use across Rakuten offices",
    period: "Jul 2021 — Jun 2022",
  },
  {
    id: 6,
    name: "Athena",
    description:
      "Intern project · React views of team activity, with charts and end-to-end tests",
    period: "Feb 2021 — Jul 2021",
  },
  {
    id: 7,
    name: "Emporium",
    description:
      "E-commerce app using Next.js 13, TypeScript, and Redux Toolkit",
    period: "Side project",
    demoLink: "https://emporium-ecommerce.vercel.app",
  },
  {
    id: 8,
    name: "ChatSplit",
    description: "Real-time messaging web app built with Next.js 13",
    period: "Side project",
    demoLink: "https://chat-split.vercel.app",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Work Experience", link: "/workexp", icon: "projects", newTab: false },
  {
    label: "Github",
    link: "https://github.com/vishchi",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/vishchi/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
