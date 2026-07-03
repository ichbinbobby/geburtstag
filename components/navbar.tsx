"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import NextLink from "next/link";

import { siteConfig, event } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  CakeIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
} from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-3">
          <NextLink className="flex items-center gap-2 text-inherit" href="/">
            <CakeIcon className="text-foreground" />
            <p className="font-bold text-inherit leading-tight">
              Am {event.date} ab {event.time}
            </p>
          </NextLink>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <Link
            aria-label="Discord"
            href={siteConfig.links.discord}
            rel="noopener noreferrer"
            target="_blank"
          >
            <DiscordIcon className="text-muted" />
          </Link>
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-muted" />
          </Link>
          <ThemeSwitch />
          <Button
            className="text-sm font-normal"
            variant="tertiary"
            onPress={() => window.open(siteConfig.links.referals, "_blank")}
          >
            <HeartFilledIcon className="text-danger" />
            Support Bobby
          </Button>
        </div>

        <div className="flex sm:hidden items-center gap-2">
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-muted" />
          </Link>
          <ThemeSwitch />
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator sm:hidden">
          <div className="flex flex-col gap-3 p-4">
            <div className="flex items-center gap-3">
              <Link
                aria-label="Discord"
                href={siteConfig.links.discord}
                rel="noopener noreferrer"
                target="_blank"
              >
                <DiscordIcon className="text-muted" />
              </Link>
              <Link
                aria-label="Github"
                href={siteConfig.links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon className="text-muted" />
              </Link>
            </div>
            <Button
              className="text-sm font-normal"
              variant="tertiary"
              onPress={() => window.open(siteConfig.links.referals, "_blank")}
            >
              <HeartFilledIcon className="text-danger" />
              Support Bobby
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
