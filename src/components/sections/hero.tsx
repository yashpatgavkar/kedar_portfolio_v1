import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiBehance, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "px-5 pt-24 pb-16 sm:px-8 sm:pt-28 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none text-transparent text-slate-800 text-left",
                          "font-bold text-5xl min-[380px]:text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display "
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hiidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Visual Graphics designer
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link
                  href={
                    "https://drive.google.com/file/d/1cuxoc455ehGvto8NZV_hEPjrfSNdRQhq/view?usp=sharing"
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    <Link
                      href={config.social.behance}
                      target="_blank"
                      aria-label="Behance"
                    >
                      <Button variant={"outline"}>
                        <SiBehance size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                      aria-label="LinkedIn"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative col-span-1 hidden h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden md:flex">
          {/* Soft colour and vignette layers blend the poster into the existing
              dark starfield instead of presenting it as a separate card. */}
          <div className="absolute inset-y-[15%] left-[8%] right-[3%] rounded-full bg-red-700/20 blur-[90px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/40" />
          <img
            src="/assets/about-poster.webp"
            alt="Kedar Dixit — graphic designer"
            className="relative z-10 w-[min(84%,620px)] select-none object-contain opacity-90"
            style={{
              filter: "drop-shadow(0 30px 55px rgba(120, 0, 0, 0.32))",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 14%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 13%, black 84%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 14%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 13%, black 84%, transparent 100%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_38%,hsl(var(--background))_86%)]" />
        </div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
