import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  return (

    <div className={cn("top-[70px] sticky mb-24 sm:mb-40 md:mb-96", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "px-4 text-3xl text-center sm:text-4xl md:text-7xl font-bold",
              "text-foreground"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      <p className="mx-auto line-clamp-4 max-w-3xl px-4 font-normal text-sm text-center text-muted-foreground sm:text-base">
        {desc}
      </p>
    </div>
  )
}
