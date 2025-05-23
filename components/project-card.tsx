import { ArrowRight } from "lucide-react"
import Image from "next/image"
import TopicBadge from "@/components/topic-badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  topics: string[]
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md border-none">
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <Image 
          src={project.image || "/placeholder.svg"} 
          alt={project.title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <CardContent className="flex-grow p-5">
        <h3 className="text-xl font-semibold text-[#333333] dark:text-[#E0E0E0] mb-2">{project.title}</h3>
        <p className="text-[#333333]/80 dark:text-[#E0E0E0]/80 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.topics.map((topic) => (
            <TopicBadge key={topic} topic={topic} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <a href={project.link} className="flex items-center text-[#2c4dd5] dark:text-[#60a5fa] font-medium hover:underline dark:hover:text-[#93c5fd] transition-colors">
          View Project <ArrowRight size={16} className="ml-1" />
        </a>
      </CardFooter>
    </Card>
  )
}
