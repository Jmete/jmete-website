"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/X"; // Using Twitter icon as X icon

export function SocialIcons() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const iconColor = theme === "dark" ? "#E0E0E0" : "#333333";
  const iconSize = 24;

  return (
    <div className="flex items-center">
      {/* GitHub */}
      <a
        href="https://github.com/Jmete"
        className="p-2 transition-transform hover:scale-110"
        aria-label="GitHub"
      >
        <GitHubIcon sx={{ color: iconColor, fontSize: iconSize }} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jmete/"
        className="p-2 transition-transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <LinkedInIcon sx={{ color: iconColor, fontSize: iconSize }} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/JamesMete/"
        className="p-2 transition-transform hover:scale-110"
        aria-label="Facebook"
      >
        <FacebookIcon sx={{ color: iconColor, fontSize: iconSize }} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/jpmete/"
        className="p-2 transition-transform hover:scale-110"
        aria-label="Instagram"
      >
        <InstagramIcon sx={{ color: iconColor, fontSize: iconSize }} />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/Jmete"
        className="p-2 transition-transform hover:scale-110"
        aria-label="X (Twitter)"
      >
        <TwitterIcon sx={{ color: iconColor, fontSize: iconSize }} />
      </a>
    </div>
  );
}
