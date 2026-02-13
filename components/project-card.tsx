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
    <Card className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/75 bg-card/95 transition-colors duration-200 hover:border-primary/45">
      <div className="aspect-[16/10] border-b border-border/70 bg-muted/25 px-6 py-5">
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
