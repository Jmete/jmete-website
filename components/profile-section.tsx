import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SocialIcons } from "@/components/social-icons";
import { ContactModal } from "@/components/contact-modal";
import Link from "next/link";

export default function ProfileSection() {
  return (
    <div className="sticky top-8 space-y-6">
      <div className="flex flex-col items-center md:items-start">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#2c4dd5] dark:border-[#60a5fa] mb-4">
          <Image
            src="/images/profile/james-mete.jpg"
            alt="James Mete"
            fill
            sizes="160px"
            priority
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333] dark:text-[#E0E0E0] mb-1">
          James Mete
        </h1>
        <h2 className="text-xl font-medium tracking-tight text-[#2c4dd5] dark:text-[#60a5fa]">
          Data Driven Decisions
        </h2>
      </div>

      <div className="mt-6">
        <p className="text-[#333333] dark:text-[#E0E0E0] leading-relaxed">
          Hello, I'm a Canadian data scientist with 10+ years of experience
          leading digital transformation initiatives and implementing AI/ML
          solutions.
        </p>
        <p className="text-[#333333] dark:text-[#E0E0E0] leading-relaxed mt-3">
          I manage cross-functional teams to build scalable data pipelines,
          automated LLM systems, and interactive dashboards to transform data
          into strategic business intelligence.
        </p>
        <p className="text-[#333333] dark:text-[#E0E0E0] leading-relaxed mt-3">
          Have a look at some of my projects, and let's make things better
          together.
        </p>
      </div>

      <div className="flex flex-col space-y-3 mt-6">
        <ContactModal
          triggerClassName="w-full bg-[#2c4dd5] hover:bg-[#2c4dd5]/90 dark:bg-[#3b82f6] dark:hover:bg-[#2563eb]"
          buttonText="Contact Me"
        />
        <Link
          href="/documents/James%20Mete%20Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="w-full border-[#2c4dd5] text-[#2c4dd5] hover:bg-[#2c4dd5]/10 dark:border-[#60a5fa] dark:text-[#60a5fa] dark:hover:bg-[#60a5fa]/20"
          >
            Resume
          </Button>
        </Link>
      </div>

      <div className="flex justify-center md:justify-start mt-6">
        <SocialIcons />
      </div>
    </div>
  );
}
