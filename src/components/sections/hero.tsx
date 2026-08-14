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

const HeroSection = () => {
  return (
    <SectionWrapper
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <style>{`\n        @media (prefers-reduced-motion: no-preference) {\n          @keyframes about-text-wobble {\n            0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }\n            25% { transform: translate3d(-2px, 1px, 0) rotate(-0.75deg); }\n            55% { transform: translate3d(2px, -1px, 0) rotate(0.75deg); }\n            78% { transform: translate3d(-1px, 0, 0) rotate(-0.3deg); }\n          }\n          .about-wobble { display: inline-block; transform-origin: center bottom; }\n          .about-wobble:hover { animation: about-text-wobble 420ms ease-in-out both; }\n        }\n      `}</style>\n\n      <div className="pointer-events-none absolute left-[35%] top-[48%] h-[32rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/20 blur-[130px]" />

      <div className="relative mx-auto min-h-screen w-full max-w-[1500px] px-6 pb-16 pt-28 sm:px-10 md:px-14 md:pb-24 lg:px-20">
        {/* The large words intentionally retain a wide middle gap for the portrait. */}
        <div className="absolute inset-x-5 top-24 z-0 flex items-start justify-center gap-[clamp(3.5rem,11vw,13rem)] font-display text-[clamp(4.2rem,12.5vw,12.5rem)] font-extrabold leading-[0.72] tracking-[-0.08em] text-red-700/90 sm:inset-x-10 md:inset-x-16 md:top-28 lg:inset-x-20">
          <span>ABOUT</span>
          <span>ME</span>
        </div>

        {/* The right half is intentionally empty: it is the portrait canvas. */}
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 pt-24 md:grid-cols-[minmax(520px,0.92fr)_minmax(380px,1.08fr)] md:pt-0">
          <section className="relative z-10 grid max-w-[860px] grid-cols-1 content-end gap-8 self-end md:grid-cols-[minmax(235px,0.85fr)_minmax(230px,0.72fr)] md:gap-12">
            {/* Identity + working actions */}
            <div>
              <p className="about-wobble mb-3 font-serif text-3xl italic leading-[0.85] text-foreground sm:text-4xl">
                Hello,
                <br />I&apos;m
              </p>
              <h1 className="about-wobble font-display text-[clamp(4.5rem,7vw,7.6rem)] font-extrabold leading-[0.78] tracking-[-0.09em] text-foreground">
                KEDAR
                <br />
                DIXIT
              </h1>
              <p className="about-wobble mt-7 text-lg font-bold text-foreground sm:text-xl">
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
            </div>

            {/* Every remaining text element is kept on the left with the identity. */}
            <div className="flex flex-col justify-end">
              <p className="about-wobble mb-3 text-xl font-bold leading-none text-red-500">
                GRAPHIC
                <br />
                DESIGNER
              </p>
              <p className="about-wobble text-sm leading-[1.4] text-foreground/90 sm:text-base">
                I create bold, visually engaging designs that combine creativity
                with purpose. Passionate about strong visual identities, thoughtful
                composition, and details that turn ideas into impactful designs.
              </p>
              <p className="about-wobble mt-6 flex items-center gap-2 text-sm font-extrabold uppercase text-foreground">
                <span className="size-3 rounded-full bg-red-700 shadow-[0_0_18px_rgba(220,38,38,0.9)]" />
                Exploring possibilities
              </p>

              <div className="mt-8 flex items-start gap-3">
                <span className="mt-1 size-10 shrink-0 rounded-full border-2 border-red-700/80 shadow-[0_0_24px_rgba(220,38,38,0.35)]" />
                <p className="about-wobble max-w-[15rem] text-base leading-[1.35] text-foreground sm:text-lg">
                  Creating visuals that speak before words do.
                </p>
              </div>

              <div className="mt-6 divide-y divide-border/50 border-y border-border/50">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3 py-2">
                    <span className="about-wobble font-display text-3xl font-extrabold tracking-[-0.08em] text-red-600">
                      {stat.value}
                    </span>
                    <span className="about-wobble text-[10px] font-medium uppercase leading-[1.2] tracking-wide text-foreground/90">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div aria-hidden="true" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
