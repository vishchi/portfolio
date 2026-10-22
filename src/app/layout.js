import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FirefliesBackground from "@/components/FirefliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});

export const metadata = {
  title: "Vishal Chincholi | Frontend Engineer",
  description:
    "Portfolio of Vishal Chincholi, a frontend engineer in Bengaluru building React and Next.js products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          cinzel.variable,
          "font-inter bg-background text-foreground"
        )}
      >
        {children}

        <FirefliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
