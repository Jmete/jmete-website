import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SocialIcons } from "@/components/social-icons"

export default function ProfileSection() {
  return (
    <div className="sticky top-8 space-y-6">
      <div className="flex flex-col items-center md:items-start">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#2c4dd5] mb-4">
          <Image src="/placeholder.svg?height=128&width=128" alt="James Mete" fill className="object-cover" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333] dark:text-[#E0E0E0] mb-1">James Mete</h1>
        <h2 className="text-xl font-medium tracking-tight text-[#2c4dd5]">Data Driven Decisions</h2>
      </div>

      <div className="mt-6">
        <p className="text-[#333333] dark:text-[#E0E0E0] leading-relaxed">
          Hello, I'm a Canadian data scientist with international business experience that solves challenging problems
          with data-driven insights.
        </p>
        <p className="text-[#333333] dark:text-[#E0E0E0] leading-relaxed mt-3">
          I'm interested in data science, machine learning, AI, full-stack dev, management consulting, marketing, and
          design.
        </p>
        <p className="text-[#333333] dark:text-[#E0E0E0] leading-relaxed mt-3">
          Have a look at some of my projects, and let's make things better together.
        </p>
      </div>

      <div className="flex flex-col space-y-3 mt-6">
        <Button className="w-full bg-[#2c4dd5] hover:bg-[#2c4dd5]/90">Contact Me</Button>
        <Button
          variant="outline"
          className="w-full border-[#2c4dd5] text-[#2c4dd5] hover:bg-[#2c4dd5]/10 dark:text-[#2c4dd5] dark:border-[#2c4dd5]"
        >
          Resume
        </Button>
      </div>

      <div className="flex justify-center md:justify-start mt-6">
        <SocialIcons />
      </div>
    </div>
  )
}

