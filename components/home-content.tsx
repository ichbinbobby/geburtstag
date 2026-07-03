"use client";

import { useState } from "react";

import { title, subtitle } from "@/components/primitives";
import { FoodList } from "@/components/food-list";
import { siteConfig, event } from "@/config/site";

function buildEmbedUrl(label: string, coords?: [number, number]) {
  if (coords) {
    return `https://maps.google.com/maps?ll=${coords[0]},${coords[1]}&z=18&t=m&output=embed`;
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(label + " Hackescher Markt Berlin")}&output=embed`;
}

export function HomeContent() {
  const [mapSrc, setMapSrc] = useState(event.mapEmbed);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    if (selected === label) {
      setSelected(null);
      setMapSrc(event.mapEmbed);
    } else {
      const item = siteConfig.food.find((f) => f.label === label);
      setSelected(label);
      setMapSrc(buildEmbedUrl(label, item?.coords));
    }
  };

  return (
    <section className="flex flex-col lg:flex-row gap-8 items-start lg:h-full lg:min-h-0 py-6">
      <div className="flex flex-col items-center gap-4 w-full lg:flex-1 lg:h-full lg:min-h-0">
        <div className="text-center max-w-xl shrink-0">
          <span className={title()}>Feiere&nbsp;</span>
          <span className={title({ color: "violet" })}>Bobby&apos;s&nbsp;</span>
          <br />
          <span className={title()}>Geburtstag am </span>
          <br />
          <span className={title()}>{event.date}</span>
          <br />
          <span className={title()}>im {event.location}</span>
          <div className={subtitle({ class: "mt-4" })}>
            {event.subtitle}
          </div>
          <p className="text-inherit">
            {event.bodyText}
          </p>
        </div>

        <div className="w-full lg:flex-1 lg:min-h-0">
          <iframe
            src={mapSrc}
            className="w-full h-64 lg:h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full lg:w-[30rem] lg:h-full lg:min-h-0">
        <h2 className={subtitle({ class: "shrink-0" })}>Essen in der Nähe</h2>
        <div className="lg:flex-1 lg:min-h-0 flex flex-col">
          <FoodList selected={selected} onSelect={handleSelect} />
        </div>
      </div>
    </section>
  );
}
