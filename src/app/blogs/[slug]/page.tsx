import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import ScrollProgress from "@/components/ui/scroll-progress";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return {
    title: `${post.metadata.title} | Kedar Dixit`,
    description: post.metadata.summary,
  };
}

function estimateReadTime(content: string) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function ArticleContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <article className="max-w-none">
      {blocks.map((block, index) => {
        if (block.startsWith("# ")) return null;

        if (block.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="font-display mt-12 mb-4 text-xl leading-[1.2] text-foreground md:text-2xl"
            >
              {block.slice(3)}
            </h2>
          );
        }

        const lines = block.split("\n");
        if (lines.every((line) => line.startsWith("- "))) {
          return (
            <ul
              key={index}
              className="mb-7 space-y-3 pl-5 text-[17px] leading-[1.8] text-muted-foreground"
            >
              {lines.map((line) => (
                <li key={line} className="list-disc pl-1">
                  {line.slice(2).replace(/\*\*/g, "")}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={index}
            className="mb-7 text-[17px] leading-[1.8] text-muted-foreground"
          >
            {block.replace(/\*\*/g, "")}
          </p>
        );
      })}
    </article>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const readTime = estimateReadTime(post.content);

  return (
    <div className="relative min-h-screen font-sans">
      <ScrollProgress className="bg-gradient-to-r from-[hsl(20,100%,70%)] to-[hsl(30,100%,65%)]" />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[hsl(20,100%,70%)]/[0.03] blur-[100px]" />
      </div>

      <main className="container mx-auto max-w-[720px] px-4 pb-24 pt-32">
        <Link
          href="/blogs"
          className="group mb-12 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-[hsl(20,100%,70%)]"
        >
          <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
          All posts
        </Link>

        <header className="mb-12">
          <div className="mb-6 flex flex-wrap gap-2">
            {post.metadata.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full border-[hsl(20,100%,70%)]/20 bg-[hsl(20,100%,70%)]/5 px-3 text-xs text-[hsl(20,100%,70%)]"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mb-8 font-display text-3xl leading-[1.1] tracking-tight md:text-4xl">
            {post.metadata.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-border/50 pb-8 text-sm text-muted-foreground">
            {post.metadata.author && (
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-[hsl(20,100%,70%)]/10">
                  <User className="size-3 text-[hsl(20,100%,70%)]" />
                </span>
                {post.metadata.author}
              </div>
            )}
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {formatDate(post.metadata.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {readTime} min read
            </span>
          </div>
        </header>

        <ArticleContent content={post.content} />

        <div className="mt-20 border-t border-border/50 pt-8">
          <Link
            href="/blogs"
            className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-[hsl(20,100%,70%)]"
          >
            <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
            Back to all posts
          </Link>
        </div>
      </main>
    </div>
  );
}
