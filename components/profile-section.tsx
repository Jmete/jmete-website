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
          <p className="mt-2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em]">
            <span className="text-primary">AI/ML</span>
            <span aria-hidden="true" className="px-2 text-muted-foreground/55">
              |
            </span>
            <span className="text-primary">Data Products</span>
            <span aria-hidden="true" className="px-2 text-muted-foreground/55">
              |
            </span>
            <span className="text-primary">Team Leadership</span>
          </p>

          <div className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              I&apos;m a Canadian data scientist and Data/AI Director with 12+
              years of experience leading digital transformation initiatives,
              building data products, and delivering production AI/ML systems.
            </p>
            <p>
              I manage cross-functional teams to build scalable IT
              infrastructure, data pipelines, automated LLM systems, and
              interactive dashboards that turn data into strategic business
              intelligence.
            </p>
            <p>
              If you want to go from strategy to shipped product,
              <br />
              I&apos;d love to connect.
            </p>
          </div>
        </div>

        <div className="border-t border-border/65 pt-6">
          <div className="flex flex-col gap-2.5">
            <ContactModal
              triggerClassName="h-10 w-full rounded-md border border-primary/30 bg-primary px-4 text-sm font-semibold text-primary-foreground transition-[color,background-color,border-color,box-shadow] duration-150 hover:bg-primary/80 hover:border-primary/45 hover:shadow-sm"
              buttonText="Contact Me"
            />

            <a
              href="/documents/James%20Mete%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="outline"
                className="h-10 w-full rounded-md border-border/80 bg-transparent px-4 text-sm font-semibold text-foreground transition-[color,background-color,border-color,box-shadow] duration-150 hover:border-foreground/25 hover:bg-secondary/70 hover:shadow-sm"
              >
                Resume
              </Button>
            </a>
          </div>
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
