// coords: [lat, lng] — add for chains with multiple Berlin locations so the map pins exactly.
// Without coords, the map searches by name near Hackescher Markt.

interface FoodItem {
  category: string;
  label: string;
  href: string;
  tags: string[];
  coords?: [number, number];
}

export type SiteConfig = typeof siteConfig;

// ─── Edit these fields each year ──────────────────────────────────────────────
export const event = {
  date: "Sonntag den 19. Juli",
  time: "14 Uhr",
  location: "James-Simon-Park",
  subtitle: "Bring dein Trinken und Essen mit",
  bodyText:
    "Wir treffen uns 14 Uhr auf der Wiese im James-Simon-Park. Ich bringe Decken zum Sitzen mit. Bitte bringt euer eigenes Essen und Trinken mit. Am Hackeschen Markt gibt es Döner, Pizza, Pommes, Banh Mi, Bubble Tea usw. Keine materiellen Geschenke bitte.",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.1937619936602!2d13.398854487968153!3d52.521902352403174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ddfe609d3b%3A0xf14557b8dbb549fe!2sJames-Simon-Park!5e1!3m2!1sde!2sde!4v1782128738658!5m2!1sde!2sde",
};
// ──────────────────────────────────────────────────────────────────────────────

export const siteConfig: { name: string; description: string; food: FoodItem[]; links: Record<string, string>; thumbnail: string; title: string; url: string } = {
  name: "Bobby's Geburtstag",
  description:
    `Feiere Bobby's Geburtstag am ${event.date} ab ${event.time} im ${event.location}. Keine Geschenke, nur Lebensmittel, Spiele und Decken.`,
  food: [
    {
      category: "kebab",
      label: "Esra Falafel",
      href: "https://maps.app.goo.gl/BtHASBLKXM2zzFY7A",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "kebab",
      label: "Mustafa's Can Gemüse Kebap",
      href: "https://maps.app.goo.gl/A1hXZmFu4Shbm5X76",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "kebab",
      label: "BEEF 63 HOUSE",
      href: "https://maps.app.goo.gl/PGu5yiBNxgMd2zXG9",
      tags: ["fleisch"],
    },
    {
      category: "pizza",
      label: "La Focaccia",
      href: "https://maps.app.goo.gl/JJEVPKYA3uSFjkgn7",
      tags: ["vegetarisch", "fleisch"],
    },
    {
      category: "pizza",
      label: "Strandbar Mitte",
      href: "https://maps.app.goo.gl/dv2n4SEVpKXE3hND8",
      tags: ["vegetarisch", "fleisch"],
    },
    {
      category: "fastfood",
      label: "CURRY61",
      href: "https://maps.app.goo.gl/Fma62H9ZugoeXmSx9",
      tags: ["vegan", "vegetarisch", "fleisch"]
    },
    {
      category: "sandwich",
      label: "Saveur de Bánh Mì",
      href: "https://maps.app.goo.gl/Qp4WiB72z5cBf3Sn8",
      tags: ["vegan", "fleisch"],
    },
    {
      category: "sandwich",
      label: "Breggs",
      href: "https://maps.app.goo.gl/69uSv4zLuHpzf8CA6",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "noodles",
      label: "Quy Nguyen Vegan Living",
      href: "https://maps.app.goo.gl/w9JHqK41YXKtMP166",
      tags: ["vegan"],
    },
    {
      category: "noodles",
      label: "The Noodle Town Mitte",
      href: "https://maps.app.goo.gl/wMBRAjtU1CtdT9tf6",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "noodles",
      label: "Nis Restaurant",
      href: "https://maps.app.goo.gl/MtrMmF9VkizuBetM9",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "bowl",
      label: "MA'LOA Poké Bowl",
      href: "https://maps.app.goo.gl/JYJZueXhCnyFCPjt7",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "sushi",
      label: "POPUP SUSHI",
      href: "https://maps.app.goo.gl/TSyR5oKpvoLdFhHF8",
      tags: ["vegetarisch", "fleisch"],
    },
    {
      category: "sushi",
      label: "Lee - Original Vietnamese Kitchen",
      href: "https://maps.app.goo.gl/RQyhNKksBunQK6wC7",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "sushi",
      label: "Friendly Fish",
      href: "https://maps.app.goo.gl/GXK75SRbWxF6gdnq6",
      tags: ["vegan", "vegetarisch", "fleisch"],
    }, 
    {
      category: "burger",
      label: "PETER PANE Burgergrill & Bar",
      href: "https://maps.app.goo.gl/M1ug3VE7SKk3rXyj7",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "burger",
      label: "The Sixties Diner",
      href: "https://maps.app.goo.gl/2oqpbbJjtE6x2fbo8",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "burger",
      label: "The Mood Burger Oranienburger",
      href: "https://maps.app.goo.gl/7SyyhMLKd9vRTKem6",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "salad",
      label: "dean&david",
      href: "https://maps.app.goo.gl/9hUx8C6tyqd2wdVj8",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "bakery",
      label: "Brotmeisterei Steinecke",
      href: "https://maps.app.goo.gl/kREp9pPNsKzPbKkL8",
      tags: ["vegan", "vegetarisch", "fleisch"],
      coords: [52.52334185877685, 13.403618115339517],
    },
    {
      category: "bakery",
      label: "Kamps Bäckerei mit Backstube",
      href: "https://maps.app.goo.gl/jzVREnDNGRNaKbPy7",
      tags: ["vegan", "vegetarisch", "fleisch"],
    },
    {
      category: "pastry",
      label: "CINNAMOOD",
      href: "https://maps.app.goo.gl/YoBuQVtgbjC21QBA7",
      tags: ["vegetarisch"],
    },
    {
      category: "pastry",
      label: "Crusty Slices",
      href: "https://maps.app.goo.gl/LuBTGa8qZJaBeVDMA",
      tags: ["vegetarisch", "fleisch"],
    },
    {
      category: "icecream",
      label: "Katchi Ice Cream",
      href: "https://maps.app.goo.gl/vKHZVyw2x9DQDFYHA",
      tags: ["vegan", "vegetarisch"],
    },
    {
      category: "drink",
      label: "COMEBUY Berlin Mitte Flagshipstore",
      href: "https://maps.app.goo.gl/PN6CyJeJYwFgwXtE7",
      tags: ["vegan", "vegetarisch"],
    },
  ],
  links: {
    discord: "https://discord.com/invite/9R4BRdM",
    github: "https://github.com/ichbinbobby/geburtstag",
    referals: "https://referals.ichbinbobby.de/",
  },
  thumbnail: "/thumbnail.jpg",
  title: "Bobby's Geburtstag",
  url: "https://geburtstag.ichbinbobby.de/",
};
