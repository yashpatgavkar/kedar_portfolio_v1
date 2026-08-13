import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  previewSrc?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "storekit",
    category: "poster design",
    title: "Protect Wildlife",
    src: "/assets/projects-screenshots/storekit/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        
      ],
      backend: [
       
      ],
    },
    live: "https://www.behance.net/gallery/241433967/PROTECT-WILDLIFE",
    // Private repo (commercial product) — intentionally no public source link
    get content() {
  return (
    <div className="my-6">
      <Image
          src="/assets/projects-screenshots/storekit/landing.png"
          alt="Protect Wildlife"
          width={1200}
          height={700}
          className="w-full rounded-lg object-cover"
      />
    </div>
  );
}
  },
  {
    id: "codingducks",
    category: "Symbol Logos",
    title: "IIT Department Logos",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        
      ],
      backend: [
        
      ],
    },
    live: "https://www.behance.net/gallery/253912767/IIT-Department-Logo",
    github: "https://github.com/Naresh-Khatri/Coding-Ducks",
    get content() {
  return (
    <div className="my-6">
      <Image
          src="/assets/projects-screenshots/codingducks/landing.png"
          alt="IIT Department Logos"
          width={1200}
          height={700}
          className="w-full rounded-lg object-cover"
      />
    </div>
  );
}
  },
  {
    id: "praveen-masale",
    category: "Branding",
    title: "Praveen Masale",
    src: "/assets/projects-screenshots/praveen-masale/landing.jpg",
    previewSrc: "/assets/projects-screenshots/praveen-masale/preview.webp",
    screenshots: ["landing.jpg"],
    skills: { frontend: [], backend: [] },
    live: "#",
    get content() {
      return (
        <div className="my-6">
          <Image
            src="/assets/projects-screenshots/praveen-masale/landing.jpg"
            alt="Praveen Masale branding"
            width={827}
            height={12000}
            className="w-full rounded-lg"
          />
        </div>
      );
    },
  },
  {
    id: "chitle",
    category: "Packaging",
    title: "Chitle",
    src: "/assets/projects-screenshots/chitle/landing.jpg",
    previewSrc: "/assets/projects-screenshots/chitle/preview.webp",
    screenshots: ["landing.jpg"],
    skills: { frontend: [], backend: [] },
    live: "#",
    get content() {
      return (
        <div className="my-6">
          <Image
            src="/assets/projects-screenshots/chitle/landing.jpg"
            alt="Chitle packaging"
            width={735}
            height={6389}
            className="w-full rounded-lg"
          />
        </div>
      );
    },
  },
  {
    id: "logos",
    category: "logo design",
    title: "Logos",
    src: "/assets/projects-screenshots/logos/landing.jpg",
    screenshots: ["landing.jpg"],
    skills: { frontend: [], backend: [] },
    live: "#",
    get content() {
      return (
        <div className="my-6">
          <Image
            src="/assets/projects-screenshots/logos/landing.png"
            alt="Logo design collection"
            width={900}
            height={6434}
            className="w-full rounded-lg"
          />
        </div>
      );
    },
  },
  {
    id: "kanbi",
    category: "Realtime project tracker",
    title: "Kanbi",
    src: "/assets/projects-screenshots/kanbi/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.expo,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.mcp,
        PROJECT_SKILLS.cloudflare,
        PROJECT_SKILLS.turborepo,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://kanbi.nareshkhatri.dev",
    github: "https://github.com/naresh-Khatri/kanbi",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A keyboard-first, realtime Kanban tracker — &quot;Linear, but small
            enough to own.&quot;
          </TypographyP>
          <TypographyP className="font-mono ">
            A full-stack TypeScript monorepo (pnpm + Turborepo) spanning three
            deployable surfaces — a Next.js 15 web app, an OAuth-secured MCP
            server for AI agents, and an Expo mobile companion — with end-to-end
            type safety from Postgres → Drizzle → tRPC v11 → React, so a schema
            change ripples to compile errors in the UI with zero codegen. ~21K
            lines of TypeScript, 16 domain tRPC routers, a 25-table schema, and 8
            scoped MCP agent tools.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Realtime collaboration &amp; fractional ordering
          </TypographyH3>
          <p className="font-mono mb-2">
            Drag-and-drop boards with optimistic UI and live multi-user updates,
            powered by tRPC subscriptions over Server-Sent Events. An in-process
            event bus broadcasts <code>boardId</code>-scoped invalidation signals
            that carry <em>no payload</em> — clients simply refetch through React
            Query, keeping the realtime layer cheap and consistent. Mutations
            snapshot-and-rollback (<code>onMutate</code>/<code>onError</code>/
            <code>onSettled</code>) and deletes are undoable (6-second deferred
            server call + toast). Columns and cards order via fractional indexing
            — new items insert at the midpoint between neighbors, so a reorder
            touches one row instead of re-sequencing the whole list, with collapse
            detection and rebalancing.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/kanbi/board.png`,
              `${BASE_PATH}/kanbi/dashboard.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            One auth model, three clients &amp; an MCP server for AI agents
          </TypographyH3>
          <p className="font-mono mb-2">
            A layered, type-safe authorization model encodes access control at the
            procedure level — <code>protectedProcedure</code> →{" "}
            <code>projectProcedure</code> → <code>boardProcedure</code> →{" "}
            <code>publicBoardProcedure</code> (share token, no auth) — with role
            checks gating every mutation. The same model is reused across three
            entry points so ACLs can&apos;t drift: browser cookies, hashed
            per-device bearer tokens for mobile (SHA-256 at rest), and OAuth-2.1
            JWTs for AI agents. The spec-compliant MCP server (Streamable HTTP)
            exposes 8 read/write tools through a full OAuth 2.1 flow — dynamic
            client registration, a consent screen, JWKS-verified JWTs — each tool a
            thin wrapper over the existing tRPC procedures via a JWT→session
            bridge, so permissions, validation, ordering, and the realtime bus are
            all reused; agent-authored HTML is server-side sanitized.
          </p>
          <SlideShow images={[`${BASE_PATH}/kanbi/profile.png`]} />

          <TypographyH3 className="my-4 mt-8">
            Native Android dock dashboard &amp; AI task drafting
          </TypographyH3>
          <p className="font-mono mb-2">
            A custom native Android Expo module written in Kotlin implements
            Android&apos;s <code>DreamService</code> (the system daydream): dock
            the phone and the OS launches a React Native root view rendering the
            active task and a Pomodoro timer — a genuine focus dashboard, with{" "}
            <code>showWhenLocked</code>, screen-on, and keyguard dismissal handled
            natively. Devices pair by QR with secure token storage
            (<code>expo-secure-store</code>). On the web, paste a raw client
            message and a Groq-backed LLM extracts structured, actionable issues
            (title, description, label, priority); rich-text descriptions use Tiptap
            with <code>@mention</code> and <code>#ticket</code> cross-reference
            extensions.
          </p>
          <SlideShow images={[`${BASE_PATH}/kanbi/ai-draft.png`]} />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "http://nareshkhatri.vercel.app",
    github: "https://github.com/Naresh-Khatri/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;
