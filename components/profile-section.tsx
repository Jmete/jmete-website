import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SocialIcons } from "@/components/social-icons";
import { ContactModal } from "@/components/contact-modal";

export default function ProfileSection() {
  return (
    <div className="md:sticky md:top-8">
      <section className="space-y-7">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="relative mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20">
            <Image
              src="/images/profile/james-mete.jpg"
              alt="James Mete"
              fill
              sizes="160px"
              priority
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-semibold leading-tight text-foreground">
            James Mete
          </h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Data Driven Decisions
          </p>

          <div className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              I&apos;m a Canadian data scientist with 10+ years of experience
              leading digital transformation initiatives and implementing AI/ML
              solutions.
            </p>
            <p>
              I manage cross-functional teams to build scalable IT
              infrastructure, data pipelines, automated LLM systems, and
              interactive dashboards that turn data into strategic business
              intelligence.
            </p>
            <p>
              Explore my work below, and if you&apos;re building something complex,
              let&apos;s discuss it.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-3 border-t border-border/65 pt-6">
          <ContactModal
            triggerClassName="w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            buttonText="Contact Me"
          />

          <a
            href="/documents/James%20Mete%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="w-full rounded-lg border-border/70 bg-transparent text-foreground hover:bg-secondary/70"
            >
              Resume
            </Button>
          </a>
        </div>

        <div className="border-t border-border/65 pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Connect
          </p>
          <SocialIcons />
        </div>
      </section>
    </div>
  );
}
