"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import TopicBadge from "@/components/topic-badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"

interface Project {
  id: number
  title: string
  description: string
  link: string
  topics: string[]
  image?: string
  imageFit?: "cover" | "contain"
}

interface ProjectCardProps {
  project: Project
}

function getYouTubeEmbedUrl(link: string): string | null {
  try {
    const url = new URL(link)
    const host = url.hostname.toLowerCase()

    if (host === "youtu.be" || host.endsWith(".youtu.be")) {
      const videoId = url.pathname.split("/").filter(Boolean)[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }

    if (host === "youtube.com" || host.endsWith(".youtube.com")) {
      const videoId = url.searchParams.get("v")
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`
      }

      const parts = url.pathname.split("/").filter(Boolean)
      if (parts[0] === "shorts" && parts[1]) {
        return `https://www.youtube.com/embed/${parts[1]}`
      }
    }

    return null
  } catch {
    return null
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.link.startsWith("http")
  const youtubeEmbedUrl = getYouTubeEmbedUrl(project.link)
  const hasVideoModal = Boolean(youtubeEmbedUrl)
  const imageFitClass =
    project.imageFit === "contain" ? "object-contain p-2" : "object-cover"
  const imageMotionClass =
    project.imageFit === "contain"
      ? ""
      : "transition-transform duration-300 group-hover:scale-[1.02]"

  return (
    <Card className="group flex h-full w-full max-w-[21.5rem] flex-col overflow-hidden rounded-xl border border-border/75 bg-card/95 transition-colors duration-200 hover:border-primary/45">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-muted/25">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) calc(100vw - 2rem), 21.5rem"
            quality={70}
            loading="lazy"
            className={`${imageFitClass} ${imageMotionClass}`}
          />
        ) : (
          <div className="px-6 py-5">
            <div className="space-y-3">
              <Skeleton className="h-4 w-3/5 bg-muted-foreground/20" />
              <Skeleton className="h-3 w-full bg-muted-foreground/15" />
              <Skeleton className="h-3 w-4/5 bg-muted-foreground/15" />
              <div className="space-y-2 pt-2">
                <Skeleton className="h-2.5 w-2/3 bg-muted-foreground/15" />
                <Skeleton className="h-2.5 w-1/2 bg-muted-foreground/15" />
              </div>
            </div>
          </div>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="text-[1.4rem] font-semibold leading-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.topics.map((topic) => (
            <TopicBadge key={topic} topic={topic} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {hasVideoModal && youtubeEmbedUrl ? (
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                View Project <ArrowRight size={16} className="mt-px" />
              </button>
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-1rem)] max-w-6xl overflow-hidden p-0">
              <DialogTitle className="sr-only">{project.title} Video Demo</DialogTitle>
              <div className="aspect-video bg-black">
                <iframe
                  src={`${youtubeEmbedUrl}?rel=0`}
                  title={`${project.title} video demo`}
                  loading="lazy"
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <p className="text-sm font-medium text-foreground">{project.title} Demo</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Open on YouTube
                </a>
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <a
            href={project.link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View Project <ArrowRight size={16} className="mt-px" />
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
