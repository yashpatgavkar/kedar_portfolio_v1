import Link from "next/link";
import { File } from "lucide-react";
import { SiBehance, SiLinkedin } from "react-icons/si";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const resumeUrl =
  "https://drive.google.com/file/d/1cuxoc455ehGvto8NZV_hEPjrfSNdRQhq/view?usp=sharing";

const stats = [
  { value: "1.5", label: "Years experience" },
  { value: "40+", label: "Projects completed" },
  { value: "20+", label: "Happy clients" },
];

/**
 * Hero / About section rebuilt from the supplied layout as native website
 * elements. The universe canvas remains supplied by the existing page shell.
 */
const HeroSection = () => {
  return (
    <SectionWrapper
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="pointer-events-none absolute left-1/2 top-[43%] h-[34rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/20 blur-[130px]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-1 gap-y-10 px-6 pb-16 pt-28 sm:px-10 md:grid-cols-[minmax(250px,0.8fr)_minmax(350px,1.25fr)_minmax(180px,0.55fr)] md:items-end md:gap-x-8 md:px-14 md:pb-24 lg:px-20">
        {/* Oversized editorial title */}
        <div className="pointer-events-none absolute inset-x-5 top-24 z-0 flex items-start justify-between font-display text-[clamp(4.5rem,15vw,15rem)] font-extrabold leading-[0.72] tracking-[-0.1em] text-red-700/90 sm:inset-x-10 md:inset-x-16 md:top-28 lg:inset-x-20">
          <span>ABOUT</span>
          <span>ME</span>
        </div>

        {/* Left identity + actions */}
        <section className="relative z-10 self-end pt-24 md:pt-0">
          <p className="mb-3 font-serif text-3xl italic leading-[0.85] text-foreground sm:text-4xl">
            Hello,
            <br />I&apos;m
          </p>
          <h1 className="font-display text-[clamp(4.5rem,8vw,8.7rem)] font-extrabold leading-[0.78] tracking-[-0.09em] text-foreground">
            KEDAR
            <br />
            DIXIT
          </h1>
          <p className="mt-7 text-lg font-bold text-foreground sm:text-xl">
            Visual Graphics Designer
          </p>

          <div className="mt-6 flex w-fit flex-col gap-3">
            <Link href={resumeUrl} target="_blank" className="cursor-can-hover">
              <Button className="h-16 min-w-60 rounded-none bg-foreground px-8 text-xl font-extrabold text-background transition-transform hover:-translate-y-1 hover:bg-foreground/90">
                <File className="mr-2 size-5" />
                Resume
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="#contact" className="cursor-can-hover">
                <Button
                  variant="outline"
                  className="h-12 rounded-md border-border/70 bg-background/65 px-5 text-base font-bold transition-transform hover:-translate-y-1"
                >
                  Hire Me
                </Button>
              </Link>
              <Link
                href={config.social.behance}
                target="_blank"
                aria-label="Behance"
                className="cursor-can-hover"
              >
                <Button
                  variant="outline"
                  className="size-12 rounded-md border-border/70 bg-background/65 p-0 transition-transform hover:-translate-y-1"
                >
                  <SiBehance className="size-6" />
                </Button>
              </Link>
              <Link
                href={config.social.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                className="cursor-can-hover"
              >
                <Button
                  variant="outline"
                  className="size-12 rounded-md border-border/70 bg-background/65 p-0 transition-transform hover:-translate-y-1"
                >
                  <SiLinkedin className="size-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main description */}
        <section className="relative z-10 mx-auto w-full max-w-xs self-end pb-1 md:pb-10">
          <p className="mb-3 text-xl font-bold leading-none text-red-500">
            GRAPHIC
            <br />
            DESIGNER
          </p>
          <p className="text-sm leading-[1.4] text-foreground/90 sm:text-base">
            I create bold, visually engaging designs that combine creativity
            with purpose. Passionate about strong visual identities, thoughtful
            composition, and details that turn ideas into impactful designs.
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm font-extrabold uppercase text-foreground">
            <span className="size-3 rounded-full bg-red-700 shadow-[0_0_18px_rgba(220,38,38,0.9)]" />
            Exploring possibilities
          </p>
        </section>

        {/* Right message + facts */}
        <aside className="relative z-10 flex flex-col justify-end self-stretch pt-4 md:pt-0">
          <div className="mb-8 flex items-start gap-4 md:mb-auto md:pt-[46vh]">
            <span className="mt-1 size-12 shrink-0 rounded-full border-2 border-red-700/80 shadow-[0_0_24px_rgba(220,38,38,0.35)]" />
            <p className="max-w-[12rem] text-lg leading-[1.35] text-foreground sm:text-xl">
              Creating visuals that speak before words do.
            </p>
          </div>

          <div className="divide-y divide-border/50 border-y border-border/50">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 py-3">
                <span className="font-display text-4xl font-extrabold tracking-[-0.08em] text-red-600">
                  {stat.value}
                </span>
                <span className="max-w-20 text-xs font-medium uppercase leading-[1.2] tracking-wide text-foreground/90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
