import { ArrowRight } from "lucide-react"
import TopicBadge from "@/components/topic-badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface Project {
  id: number
  title: string
  description: string
  link: string
  topics: string[]
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.link.startsWith("http")

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35">
      <div className="relative aspect-[16/10] border-b border-border/70 bg-gradient-to-br from-secondary/65 via-secondary/20 to-transparent px-6 py-5">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative space-y-3">
          <Skeleton className="h-4 w-3/5 bg-muted-foreground/20" />
          <Skeleton className="h-3 w-full bg-muted-foreground/15" />
          <Skeleton className="h-3 w-4/5 bg-muted-foreground/15" />
          <div className="pt-2 space-y-2">
            <Skeleton className="h-2.5 w-2/3 bg-muted-foreground/15" />
            <Skeleton className="h-2.5 w-1/2 bg-muted-foreground/15" />
          </div>
        </div>
      </div>
      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="text-[1.45rem] font-semibold leading-tight text-foreground">
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
        <a
          href={project.link}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          View Project <ArrowRight size={16} className="mt-px" />
        </a>
      </CardFooter>
    </Card>
  )
}
