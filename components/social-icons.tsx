"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/X";

const links = [
  {
    href: "https://github.com/Jmete",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/jmete/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://www.facebook.com/JamesMete/",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/jpmete/",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://x.com/Jmete",
    label: "X",
    Icon: TwitterIcon,
  },
];

export function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          aria-label={label}
        >
          <Icon sx={{ fontSize: 20 }} />
        </a>
      ))}
    </div>
  );
}
