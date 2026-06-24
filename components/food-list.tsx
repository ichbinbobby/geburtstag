"use client";

import { useState } from "react";
import { Chip, Link } from "@heroui/react";

import { siteConfig } from "@/config/site";

const categoryEmoji: Record<string, string> = {
  kebab: "🌯",
  pizza: "🍕",
  fastfood: "🍟",
  sandwich: "🥪",
  bakery: "🍞",
  noodles: "🍜",
  bowl: "🥗",
  salad: "🥬",
  sushi: "🍣",
  burger: "🍔",
  pastry: "🧁",
  icecream: "🍦",
  drink: "🧋",
};

type TagKey = "vegan" | "vegetarisch" | "fleisch";

const tagConfig: Record<TagKey, { label: string; color: "success" | "warning" | "danger" }> = {
  vegan: { label: "Vegan", color: "success" },
  vegetarisch: { label: "Vegetarisch", color: "warning" },
  fleisch: { label: "Fleisch", color: "danger" },
};

export function FoodList() {
  const [activeFilters, setActiveFilters] = useState<TagKey[]>([]);

  const toggleFilter = (tag: TagKey) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = siteConfig.food.filter(
    (item) =>
      activeFilters.length === 0 ||
      activeFilters.some((f) => item.tags.includes(f))
  );

  return (
    <div className="flex flex-col h-full min-h-0 w-full max-w-lg gap-3">
      <div className="flex flex-col gap-2 shrink-0">
        <p className="text-sm text-default-500 font-medium uppercase tracking-wider">
          Filter
        </p>
        <div className="flex gap-2 flex-wrap">
          {(Object.entries(tagConfig) as [TagKey, typeof tagConfig[TagKey]][]).map(([tag, cfg]) => {
            const active = activeFilters.includes(tag);
            return (
              <Chip
                key={tag}
                color={cfg.color}
                variant={active ? undefined : "soft"}
                className={[
                  "cursor-pointer select-none transition-opacity",
                  !active && activeFilters.length > 0 ? "opacity-40" : "",
                ].join(" ")}
                onClick={() => toggleFilter(tag)}
              >
                {active ? `✓ ${cfg.label}` : cfg.label}
              </Chip>
            );
          })}
        </div>
      </div>

      <ul className="flex flex-col gap-1 overflow-y-auto flex-1 min-h-0">
        {filtered.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-default-100 transition-colors w-full text-foreground"
            >
              <span className="text-2xl leading-none w-8 text-center shrink-0">
                {categoryEmoji[item.category] ?? "🍽️"}
              </span>
              <span className="flex-1 font-medium text-sm">{item.label}</span>
              <div className="flex gap-1 shrink-0">
                {(item.tags as TagKey[]).map((tag) => (
                  <Chip
                    key={tag}
                    size="sm"
                    variant="soft"
                    color={tagConfig[tag]?.color ?? "default"}
                  >
                    {tagConfig[tag]?.label ?? tag}
                  </Chip>
                ))}
              </div>
            </Link>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-center text-default-400 py-6 text-sm">
            Keine Optionen für diese Filter.
          </li>
        )}
      </ul>

      <p className="text-xs text-default-400 text-center">
        {filtered.length} von {siteConfig.food.length} Optionen
      </p>
    </div>
  );
}
