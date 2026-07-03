"use client";

import type { Key } from "@heroui/react";

import { useState } from "react";
import { DialogContext } from "react-aria-components/Dialog";
import {
  Autocomplete,
  Description,
  EmptyState,
  Header,
  Label,
  ListBox,
  ScrollShadow,
  SearchField,
  Tag,
  TagGroup,
  Tooltip,
  useFilter,
} from "@heroui/react";

import { siteConfig } from "@/config/site";

const categoryLabels: Record<string, string> = {
  kebab: "Kebab",
  pizza: "Pizza",
  fastfood: "Fast Food",
  sandwich: "Sandwich",
  bakery: "Bäckerei",
  noodles: "Nudeln",
  bowl: "Bowl",
  salad: "Salat",
  sushi: "Sushi",
  burger: "Burger",
  pastry: "Gebäck",
  icecream: "Eis",
  drink: "Getränke",
};

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

const tagItems = [
  { id: "tag:vegan", name: "Vegan" },
  { id: "tag:vegetarisch", name: "Vegetarisch" },
  { id: "tag:fleisch", name: "Fleisch" },
];

const categoryItems = Object.entries(categoryLabels).map(([id, name]) => ({
  id: `cat:${id}`,
  name: `${categoryEmoji[id]} ${name}`,
}));

const allFilterItems = [...tagItems, ...categoryItems];

interface FoodListProps {
  selected?: string | null;
  onSelect?: (label: string) => void;
}

export function FoodList({ selected, onSelect }: FoodListProps) {
  const { contains } = useFilter({ sensitivity: "base" });
  const [selectedFilterKeys, setSelectedFilterKeys] = useState<Key[]>([]);

  const onRemoveTags = (keys: Set<Key>) => {
    setSelectedFilterKeys((prev) => prev.filter((key) => !keys.has(key)));
  };

  const selectedTagFilters = selectedFilterKeys
    .filter((k) => String(k).startsWith("tag:"))
    .map((k) => String(k).replace("tag:", ""));

  const selectedCatFilters = selectedFilterKeys
    .filter((k) => String(k).startsWith("cat:"))
    .map((k) => String(k).replace("cat:", ""));

  const filtered = siteConfig.food.filter((item) => {
    if (selectedFilterKeys.length === 0) return true;
    const tagMatch =
      selectedTagFilters.length === 0 ||
      selectedTagFilters.some((t) => item.tags.includes(t));
    const catMatch =
      selectedCatFilters.length === 0 ||
      selectedCatFilters.includes(item.category);
    return tagMatch && catMatch;
  });

  return (
    <div className="flex flex-col h-full min-h-0 w-full max-w-lg gap-3">
      <Autocomplete
        fullWidth
        selectionMode="multiple"
        placeholder="Nach Kategorie oder Diät filtern…"
        aria-label="Filter nach Kategorie oder Diät"
        value={selectedFilterKeys}
        onChange={(keys) => setSelectedFilterKeys((keys as Key[]) ?? [])}
      >
        <Autocomplete.Trigger>
          <Autocomplete.Value>
            {({ defaultChildren, isPlaceholder, state }: any) => {
              if (isPlaceholder || state.selectedItems.length === 0) {
                return defaultChildren;
              }
              const selectedIds = state.selectedItems.map((i: any) => i.key);
              return (
                <TagGroup size="sm" onRemove={onRemoveTags} aria-label="Aktive Filter">
                  <TagGroup.List aria-label="Aktive Filter">
                    {selectedIds.map((id: Key) => {
                      const item = allFilterItems.find((f) => f.id === id);
                      if (!item) return null;
                      return <Tag key={id} id={id}>{item.name}</Tag>;
                    })}
                  </TagGroup.List>
                </TagGroup>
              );
            }}
          </Autocomplete.Value>
          <Autocomplete.Indicator />
        </Autocomplete.Trigger>
        <DialogContext.Provider value={{"aria-label": "Filter-Optionen"}}>
        <Autocomplete.Popover>
          <Autocomplete.Filter filter={contains}>
            <SearchField autoFocus aria-label="Filtern" name="search" variant="secondary">
              <SearchField.Group>
                <SearchField.SearchIcon />
                <SearchField.Input placeholder="Suchen…" />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>
            <ListBox aria-label="Filter-Optionen" renderEmptyState={() => <EmptyState>Keine Ergebnisse</EmptyState>}>
              <ListBox.Section>
                <Header>Diät</Header>
                {tagItems.map((item) => (
                  <ListBox.Item key={item.id} id={item.id} textValue={item.name}>
                    <Label>{item.name}</Label>
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox.Section>
              <ListBox.Section>
                <Header>Kategorie</Header>
                {categoryItems.map((item) => (
                  <ListBox.Item key={item.id} id={item.id} textValue={item.name}>
                    <Label>{item.name}</Label>
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox.Section>
            </ListBox>
          </Autocomplete.Filter>
        </Autocomplete.Popover>
        </DialogContext.Provider>
      </Autocomplete>

      <ScrollShadow hideScrollBar className="flex-1 min-h-0">
        <ListBox
          aria-label="Restaurantliste"
          selectionMode="single"
          selectedKeys={selected ? new Set([selected]) : new Set<string>()}
          onSelectionChange={(keys) => {
            if (keys === "all") return;
            const key = Array.from(keys as Set<string>)[0];
            onSelect?.(key ?? "");
          }}
          className="gap-0.5 pb-2"
        >
          {filtered.map((item) => (
            <ListBox.Item
              key={item.label}
              id={item.label}
              textValue={item.label}
              className="rounded-xl border-l-2 border-transparent
                data-[hovered=true]:border-default-300
                data-[selected=true]:border-primary data-[selected=true]:bg-primary/10"
            >
              <Tooltip delay={300}>
                <Tooltip.Trigger>
                  <span className="text-2xl leading-none w-8 text-center shrink-0">
                    {categoryEmoji[item.category] ?? "🍽️"}
                  </span>
                </Tooltip.Trigger>
                <Tooltip.Content showArrow aria-label={categoryLabels[item.category] ?? item.category}>
                  <Tooltip.Arrow />
                  {categoryLabels[item.category] ?? item.category}
                </Tooltip.Content>
              </Tooltip>
              <div className="flex flex-col flex-1 min-w-0">
                <Label className="cursor-pointer">{item.label}</Label>
                <Description>
                  <div className="flex gap-1 flex-wrap mt-1">
                    {(item.tags as string[]).map((tag) => {
                      const colors: Record<string, string> = {
                        vegan: "text-success",
                        vegetarisch: "text-warning",
                        fleisch: "text-danger",
                      };
                      const labels: Record<string, string> = {
                        vegan: "Vegan",
                        vegetarisch: "Vegetarisch",
                        fleisch: "Fleisch",
                      };
                      return (
                        <span
                          key={tag}
                          className={`text-xs font-medium ${colors[tag] ?? "text-muted"}`}
                        >
                          {labels[tag] ?? tag}
                        </span>
                      );
                    })}
                  </div>
                </Description>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 p-1.5 rounded-lg text-default-400 hover:text-foreground hover:bg-default-200 transition-colors"
                aria-label={`${item.label} in Maps öffnen`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
        {filtered.length === 0 && (
          <p className="text-center text-default-400 py-6 text-sm">
            Keine Optionen für diese Filter.
          </p>
        )}
      </ScrollShadow>

      <p className="text-xs text-default-400 text-center shrink-0">
        {filtered.length} von {siteConfig.food.length} Optionen
      </p>
    </div>
  );
}
